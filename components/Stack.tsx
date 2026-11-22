"use client";

import { useState } from "react";

export type StackGroup = { title: string; items: { name: string; usedIn: string[] }[] };

/**
 * Skills, each pointing to the projects on this page that use it. Hover or focus shows the
 * list; a tap toggles it on touch screens, where hover doesn't exist.
 */
export default function Stack({ groups, competencies }: { groups: StackGroup[]; competencies: string[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="section alt" id="stack" aria-labelledby="stack-title">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <h2 id="stack-title">Stack</h2>
            <p className="sec-lede">
              The languages, frameworks, and tools I build with. A number shows how many projects on this page use
              it; hover or tap to see which.
            </p>
          </div>
        </div>
        <div className="stack-grid">
          {groups.map((g) => (
            <div className="stack-group" key={g.title}>
              <h3>{g.title}</h3>
              <ul className="skills">
                {g.items.map((s) => {
                  const id = `used-${s.name.replace(/\W+/g, "-").toLowerCase()}`;
                  if (s.usedIn.length === 0) {
                    return (
                      <li key={s.name}>
                        <span className="skill">{s.name}</span>
                      </li>
                    );
                  }
                  return (
                    <li key={s.name}>
                      <button
                        type="button"
                        className="skill used"
                        data-open={open === s.name ? "" : undefined}
                        aria-describedby={id}
                        aria-expanded={open === s.name}
                        onClick={() => setOpen((o) => (o === s.name ? null : s.name))}
                        onBlur={() => setOpen((o) => (o === s.name ? null : o))}
                      >
                        {s.name}
                        <span className="used-n" aria-hidden="true">
                          {s.usedIn.length}
                        </span>
                        <span className="tip" role="tooltip" id={id}>
                          Used in {s.usedIn.join(" · ")}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="strongest">
          <h3>Strongest in</h3>
          <ul>
            {competencies.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
