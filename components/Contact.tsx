import { lookingFor, profile } from "@/content/profile";
import CopyEmailButton from "./CopyEmailButton";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let&apos;s work together.</h2>
          <p>I&apos;m looking for a web or mobile development internship. Email is the fastest way to reach me.</p>
          <div className="email-box">
            <MailIcon />
            <a id="email-address" className="email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <CopyEmailButton email={profile.email} targetId="email-address" />
          </div>
          <ul className="contact-links">
            <li>
              <a href={profile.github.url} target="_blank" rel="noopener">
                <GitHubIcon />
                GitHub
                <span className="handle">{profile.github.label}</span>
              </a>
            </li>
            <li>
              <a href={profile.linkedin.url} target="_blank" rel="noopener">
                <LinkedInIcon />
                LinkedIn
                <span className="handle">{profile.linkedin.label}</span>
              </a>
            </li>
            <li>
              <a href={profile.resume.href} target="_blank" rel="noopener">
                <DownloadIcon />
                Résumé
                <span className="handle">{profile.resume.label}</span>
              </a>
            </li>
          </ul>
        </div>

        <aside className="glance" aria-labelledby="glance-title">
          <h3 id="glance-title">At a glance</h3>
          <dl>
            {lookingFor.map((row) => (
              <div key={row.term}>
                <dt>{row.term}</dt>
                <dd>{row.detail}</dd>
              </div>
            ))}
          </dl>
          <a className="btn btn-band" href={`mailto:${profile.email}?subject=Internship%20opportunity`}>
            <MailIcon />
            Email me
          </a>
        </aside>
      </div>
    </section>
  );
}
