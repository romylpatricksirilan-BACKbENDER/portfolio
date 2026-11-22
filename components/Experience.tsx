import { profile, timeline, trainings } from "@/content/profile";
import { DownloadIcon } from "./Icons";

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="exp-title">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <h2 id="exp-title">Experience</h2>
            <p className="sec-lede">
              Studying Information Systems at West Visayas State University, with paid work in verification and
              customer quality assurance along the way.
            </p>
          </div>
          <a className="btn btn-ghost" href={profile.resume.href} target="_blank" rel="noopener">
            <DownloadIcon />
            Résumé PDF
          </a>
        </div>
        <ol className="xp">
          {timeline.map((item) => (
            <li key={`${item.title}-${item.when}`} className="xp-row">
              <div className="xp-when">
                <span>{item.when}</span>
                <span className="kind">{item.kind}</span>
                {item.current && <span className="now">Now</span>}
              </div>
              <div className="xp-body">
                <h3>{item.title}</h3>
                <p className="org">{item.org}</p>
                {item.body && <p className="xp-text">{item.body}</p>}
                {item.shows && (
                  <p className="shows">
                    <b>Shows:</b> {item.shows}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
        <div className="trainings">
          <h3>Training and webinars</h3>
          <ul>
            {trainings.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
