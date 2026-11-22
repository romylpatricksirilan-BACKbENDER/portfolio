import Image from "next/image";
import { photo, profile } from "@/content/profile";
import CopyEmailButton from "./CopyEmailButton";
import { ArrowDownIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from "./Icons";

/**
 * The first screen, on its own: who, what, where, and how to reach me, beside the portrait.
 * It fills the viewport under the nav, so the work starts one scroll down.
 */
export default function Intro() {
  return (
    <section className={`intro${photo ? " has-photo" : ""}`} id="top" aria-labelledby="intro-title">
      <div className="wrap intro-grid">
        <div className="intro-copy">
          <h1 id="intro-title">{profile.name}</h1>
          <p className="role">
            I build full-stack web and mobile apps, and I do my best work in <em>backend logic and databases</em>.
          </p>
          <p className="status">
            <span className="dot" aria-hidden="true" />
            <span>
              <b>{profile.availability.headline}</b>
              <span>{profile.availability.detail}</span>
            </span>
          </p>
          <div className="acts">
            <CopyEmailButton email={profile.email} />
            <a className="btn btn-ghost" href={profile.resume.href} target="_blank" rel="noopener">
              <DownloadIcon />
              Résumé PDF
            </a>
            <a className="icon-btn" href={profile.github.url} target="_blank" rel="noopener" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a className="icon-btn" href={profile.linkedin.url} target="_blank" rel="noopener" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>
        {photo && (
          <div className="portrait">
            <span className="portrait-stage" aria-hidden="true" />
            <Image
              className="portrait-img"
              src={photo.src}
              alt={photo.alt}
              sizes="(min-width: 960px) 40vw, 80vw"
              placeholder="blur"
              preload
            />
          </div>
        )}
      </div>
      <div className="wrap intro-cue">
        <a href="#work">
          See my work
          <ArrowDownIcon />
        </a>
      </div>
    </section>
  );
}
