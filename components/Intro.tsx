import Image from "next/image";
import Link from "next/link";
import { photo, profile } from "@/content/profile";
import CopyEmailButton from "./CopyEmailButton";
import HeroGrid from "./HeroGrid";
import { DownloadIcon, GitHubIcon, LinkedInIcon } from "./Icons";
import TitleBlock from "./TitleBlock";

/**
 * The first screen, on its own: a navy blueprint sheet with who, what, where and how to reach me,
 * the portrait standing on the sheet with one leader line to what I built, and the drawing's
 * title block along the bottom. It runs up under the clear nav and fills the viewport.
 */
export default function Intro() {
  const note = profile.heroNote;

  return (
    <section className={`intro navy${photo ? " has-photo" : ""}`} id="top" aria-labelledby="intro-title">
      <HeroGrid />
      <div className="wrap intro-grid">
        <div className="intro-copy">
          <h1 id="intro-title">{profile.name}</h1>
          <p className="role">
            I build full-stack web and mobile apps, and I do my best work in <mark>backend logic and databases</mark>.
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
            <div className="figure">
              <Image
                className="portrait-img"
                src={photo.src}
                alt={photo.alt}
                sizes="(min-width: 960px) 40vw, 60vw"
                placeholder="blur"
                preload
              />
              {/* The leader line is drawn in the portrait's own coordinates (538 × 780), so it stays on the photo at every size. */}
              <svg className="leader" viewBox="0 0 538 780" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
                <path d="M184 32H210L238 60" pathLength={1} />
              </svg>
              <Link className="callout" href={note.href}>
                <b>{note.title}</b>
                <span>{note.detail}</span>
              </Link>
              <span className="leader-dot" aria-hidden="true" />
            </div>
          </div>
        )}
      </div>
      <TitleBlock updated={profile.updated} />
    </section>
  );
}
