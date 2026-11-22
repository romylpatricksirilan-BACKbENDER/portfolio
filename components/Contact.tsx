import { lookingFor, profile } from "@/content/profile";
import CopyEmailButton from "./CopyEmailButton";
import { DownloadIcon, FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="contact navy" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <Reveal as="h2" id="contact-title">
            Let&apos;s work <span className="hl">together</span>.
          </Reveal>
          <p>
            Need a web or mobile app, a dashboard, or a database-backed system? Or hiring a developer? Email is the
            fastest way to reach me.
          </p>
          <div className="email-box">
            <MailIcon />
            <a id="email-address" className="email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <CopyEmailButton email={profile.email} targetId="email-address" className="btn btn-band btn-sm" label="Copy" />
          </div>
          <ul className="contact-links">
            {[
              { name: "GitHub", icon: <GitHubIcon />, ...profile.github },
              { name: "LinkedIn", icon: <LinkedInIcon />, ...profile.linkedin },
              { name: "Facebook", icon: <FacebookIcon />, ...profile.facebook },
              { name: "Instagram", icon: <InstagramIcon />, ...profile.instagram },
              { name: "Résumé", icon: <DownloadIcon />, url: profile.resume.href, label: profile.resume.label },
            ].map((l) => (
              <li key={l.name}>
                <a href={l.url} target="_blank" rel="noopener">
                  {l.icon}
                  {l.name}
                  <span className="handle">{l.label}</span>
                </a>
              </li>
            ))}
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
          <a className="btn btn-primary" href={`mailto:${profile.email}?subject=Project%20inquiry`}>
            <MailIcon />
            Email me
          </a>
        </aside>
      </div>
    </section>
  );
}
