import { cacheLife } from "next/cache";

export type ContributionDay = { date: string; count: number; level: number };

export type Contributions = {
  total: number;
  days: ContributionDay[];
  longestStreak: number;
  currentStreak: number;
  activeDays: number;
};

const LEVELS: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

/** With GITHUB_TOKEN set, read the calendar from GitHub's GraphQL API. */
async function fromGraphQL(user: string, token: string): Promise<ContributionDay[] | null> {
  const query = `query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          weeks { contributionDays { date contributionCount contributionLevel } }
        }
      }
    }
  }`;
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "portfolio-site",
    },
    body: JSON.stringify({ query, variables: { login: user } }),
  });
  if (!res.ok) return null;
  const json = await res.json();
  const weeks = json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
  if (!Array.isArray(weeks)) return null;
  return weeks.flatMap((w: { contributionDays: { date: string; contributionCount: number; contributionLevel: string }[] }) =>
    w.contributionDays.map((d) => ({
      date: d.date,
      count: d.contributionCount,
      level: LEVELS[d.contributionLevel] ?? 0,
    })),
  );
}

/** Without a token, read the same calendar GitHub draws on the public profile. */
async function fromProfilePage(user: string): Promise<ContributionDay[] | null> {
  const res = await fetch(`https://github.com/users/${encodeURIComponent(user)}/contributions`, {
    headers: { "User-Agent": "portfolio-site" },
  });
  if (!res.ok) return null;
  const html = await res.text();

  const counts = new Map<string, number>();
  for (const m of html.matchAll(/<tool-tip\b[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
    const n = /^(\d[\d,]*) contributions?/.exec(m[2].trim());
    counts.set(m[1], n ? Number(n[1].replace(/,/g, "")) : 0);
  }

  const days: ContributionDay[] = [];
  for (const m of html.matchAll(/<td\b[^>]*\bContributionCalendar-day\b[^>]*>/g)) {
    const tag = m[0];
    const date = /\bdata-date="(\d{4}-\d{2}-\d{2})"/.exec(tag)?.[1];
    if (!date) continue;
    const id = /\bid="([^"]+)"/.exec(tag)?.[1];
    days.push({
      date,
      level: Number(/\bdata-level="(\d)"/.exec(tag)?.[1] ?? 0),
      count: id ? (counts.get(id) ?? 0) : 0,
    });
  }
  return days.length ? days : null;
}

function streaks(days: ContributionDay[]) {
  let longest = 0;
  let run = 0;
  for (const d of days) {
    run = d.count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
  }
  // Today may have no contributions yet; the streak still counts up to yesterday.
  let i = days.length - 1;
  if (i >= 0 && days[i].count === 0) i -= 1;
  let current = 0;
  while (i >= 0 && days[i].count > 0) {
    current += 1;
    i -= 1;
  }
  return { longest, current };
}

/** The last year of GitHub contributions, refreshed hourly. Null when GitHub can't be reached. */
export async function getContributions(user: string): Promise<Contributions | null> {
  "use cache";
  cacheLife("hours");
  try {
    const token = process.env.GITHUB_TOKEN;
    const days = (token ? await fromGraphQL(user, token) : null) ?? (await fromProfilePage(user));
    if (!days) return null;
    days.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
    const { longest, current } = streaks(days);
    return {
      total: days.reduce((sum, d) => sum + d.count, 0),
      days,
      longestStreak: longest,
      currentStreak: current,
      activeDays: days.filter((d) => d.count > 0).length,
    };
  } catch {
    return null;
  }
}
