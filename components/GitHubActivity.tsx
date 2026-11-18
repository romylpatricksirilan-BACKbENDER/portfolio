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
    <section className="activity" aria-labelledby="activity-title">
      <div className="activity-head">
        <div>
          <p className="label">On GitHub</p>
          <h2 className="act-title" id="activity-title">
            <span>{data.total.toLocaleString("en")}</span> contributions in the last year
          </h2>
        </div>
        <dl className="streaks">
          <div>
            <dt>Active days</dt>
            <dd>{data.activeDays}</dd>
          </div>
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
      </div>
      <ContributionGraph
        days={data.days}
        label={`Contribution graph: ${data.total.toLocaleString("en")} contributions in the last year, longest streak ${days(data.longestStreak)}.`}
      />
      <div className="act-bottom">
        <a className="text-link" href={profile.github.url} target="_blank" rel="noopener">
          View profile on GitHub
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
