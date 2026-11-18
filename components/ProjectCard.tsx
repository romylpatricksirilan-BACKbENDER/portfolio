"use client";

import { useState } from "react";
import type { Project } from "@/content/profile";
import { ArrowIcon, GitHubIcon, LockIcon } from "./Icons";
import ProjectThumb from "./ProjectThumb";

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const [open, setOpen] = useState(false);
  const caseId = `case-${project.id}`;
  const titleId = `project-${project.id}`;

  return (
    <article className={`project${featured ? " featured" : ""}`} aria-labelledby={titleId}>
      <ProjectThumb project={project} />
      <div className="project-body">
        <p className="meta">
          {project.meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </p>
        <div>
          <h3 id={titleId}>{project.name}</h3>
          <p className="subtitle">{project.subtitle}</p>
        </div>
        <p className="summary">{project.summary}</p>
        {project.highlights && (
          <ul className="results">
            {project.highlights.map((h) => (
              <li key={h.label}>
                <strong>{h.value}</strong>
                {h.label}
              </li>
            ))}
          </ul>
        )}
        <div>
          <p className="chip-caption">{project.chips.caption}</p>
          <ul className="tags" aria-label={project.chips.caption}>
            {project.chips.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="project-links">
          {project.caseStudy && (
            <button
              className="btn btn-soft btn-sm"
              type="button"
              aria-expanded={open}
              aria-controls={caseId}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? "Hide case study" : "Read case study"}
            </button>
          )}
          {project.links.map((l) => (
            <a key={l.href} className="btn btn-ghost btn-sm" href={l.href} target="_blank" rel="noopener">
              {l.kind === "code" && <GitHubIcon />}
              {l.label}
              {l.kind === "demo" && <ArrowIcon />}
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
      {project.caseStudy && (
        <div className="case" id={caseId} hidden={!open}>
          {project.caseStudy.map((c) => (
            <div key={c.title}>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
