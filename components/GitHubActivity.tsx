import { profile } from "@/content/profile";
import { getContributions } from "@/lib/github";
import ContributionGraph from "./ContributionGraph";
import { ArrowIcon } from "./Icons";

const days = (n: number) => `${n} ${n === 1 ? "day" : "days"}`;

/** The last year of GitHub activity. Left out entirely when GitHub can't be reached. */
export default async function GitHubActivity() {
  const data = await getContributions(profile.github.user);
  if (!data || data.days.length === 0) return null;

  return (
    <section className="section" id="activity" aria-labelledby="activity-title">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <h2 id="activity-title">On GitHub</h2>
            <p className="sec-lede">
              {data.total.toLocaleString("en")} contributions and {data.activeDays} active days in the last year.
              TANAW&apos;s code is private, so much of that work may not show here.
            </p>
          </div>
          <a className="text-link" href={profile.github.url} target="_blank" rel="noopener">
            View profile
            <ArrowIcon />
          </a>
        </div>
        <div className="activity">
          <dl className="streaks">
            <div>
              <dt>Longest streak</dt>
              <dd>{days(data.longestStreak)}</dd>
            </div>
            {data.currentStreak > 1 && (
              <div>
                <dt>Current streak</dt>
                <dd>{days(data.currentStreak)}</dd>
              </div>
            )}
          </dl>
          <ContributionGraph
            days={data.days}
            label={`Contribution graph: ${data.total.toLocaleString("en")} contributions in the last year, longest streak ${days(data.longestStreak)}.`}
          />
        </div>
      </div>
    </section>
  );
}
