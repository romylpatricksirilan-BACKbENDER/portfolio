import { profile, timeline, trainings } from "@/content/profile";
import { DownloadIcon } from "./Icons";

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="exp-title">
      <div className="wrap split">
        <header className="section-head">
          <p className="eyebrow">Experience</p>
          <h2 id="exp-title">Education and work</h2>
          <p className="section-lede">
            Studying Information Systems at West Visayas State University, with work in client verification and
            customer support along the way.
          </p>
          <a className="btn btn-ghost" href={profile.resume.href} target="_blank" rel="noopener">
            <DownloadIcon />
            Download résumé (PDF)
          </a>
        </header>
        <div>
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={`${item.title}-${item.when}`} className={`tl-item${item.current ? " current" : ""}`}>
                <span className="tl-node" aria-hidden="true" />
                <div className="tl-when">
                  <span>{item.when}</span>
                  <span className="kind">{item.kind}</span>
                </div>
                <h3>
                  {item.title}
                  <span className="org">{item.org}</span>
                </h3>
                {item.body && <p>{item.body}</p>}
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
      </div>
    </section>
  );
}
