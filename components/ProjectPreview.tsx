import Image from "next/image";
import Link from "next/link";
import { ViewTransition, type CSSProperties } from "react";
import type { Project, Shot } from "@/content/profile";
import { ArrowRightIcon, GitHubIcon, LockIcon } from "./Icons";

/**
 * A screenshot in its browser or phone frame. By default it sits on a 16:10 stage so previews
 * line up; `natural` shows it at its own proportions. `vtName` names the frame so it morphs
 * between pages (the home preview and the case study header share one name).
 */
export function ShotFrame({
  shot,
  sizes,
  eager = false,
  natural = false,
  vtName,
}: {
  shot: Shot;
  sizes: string;
  eager?: boolean;
  natural?: boolean;
  vtName?: string;
}) {
  const img = (
    <Image
      src={shot.src}
      alt={shot.alt}
      sizes={sizes}
      placeholder="blur"
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
    />
  );
  const frame =
    shot.frame === "phone" ? (
      <div className="shot-phone">{img}</div>
    ) : (
      <div className={`shot-browser${natural ? " natural" : ""}`} style={{ "--r": shot.src.width / shot.src.height } as CSSProperties}>
        <div className="shot-bar" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        {img}
      </div>
    );
  const named = vtName ? (
    <ViewTransition name={vtName} share="morph" default="none">
      {frame}
    </ViewTransition>
  ) : (
    frame
  );
  if (natural) return named;
  return <div className={`stage${shot.frame === "phone" ? " stage-phone" : ""}`}>{named}</div>;
}

/** One project's preview: screenshot, summary, facts, stack and links. */
export default function ProjectPreview({
  project,
  eager = false,
  morph = false,
  showTitle = true,
}: {
  project: Project;
  eager?: boolean;
  /** Name the screenshot so it morphs into the case study header on navigation. */
  morph?: boolean;
  /** Off where a surrounding heading already names the project. */
  showTitle?: boolean;
}) {
  const shot = project.screenshot;

  return (
    <div className={`preview${shot ? "" : " no-shot"}`}>
      {shot && (
        <figure className="preview-shot">
          <ShotFrame
            shot={shot}
            eager={eager}
            sizes="(min-width: 1200px) 620px, (min-width: 900px) 60vw, 100vw"
            vtName={morph && project.href ? `shot-${project.id}` : undefined}
          />
          {shot.caption && <figcaption>{shot.caption}</figcaption>}
        </figure>
      )}
      <div className="preview-body">
        <p className="meta">
          {project.meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </p>
        {showTitle && (
          <>
            <h3 className="preview-title">{project.name}</h3>
            <p className="subtitle">{project.subtitle}</p>
          </>
        )}
        <p className="summary">{project.summary}</p>
        {project.highlights && (
          <ul className="facts">
            {project.highlights.map((h) => (
              <li key={h.label}>
                <b>{h.value}</b> {h.label}
              </li>
            ))}
          </ul>
        )}
        <ul className="tags" aria-label={project.chips.caption}>
          {project.chips.items.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="preview-links">
          {project.href && (
            <Link className="btn btn-primary btn-sm" href={project.href}>
              Read the case study
              <ArrowRightIcon />
            </Link>
          )}
          {project.links.map((l) => (
            <a key={l.href} className="btn btn-ghost btn-sm" href={l.href} target="_blank" rel="noopener">
              {l.kind === "code" && <GitHubIcon />}
              {l.label}
            </a>
          ))}
          {project.linkNote && (
            <p className="link-note">
              <LockIcon />
              {project.linkNote}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
