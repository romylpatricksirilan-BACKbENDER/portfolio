"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { flushSync } from "react-dom";
import type { Project } from "@/content/profile";
import { prefersReducedMotion } from "@/lib/theme";
import { ChevronIcon } from "./Icons";
import ProjectPreview from "./ProjectPreview";

const EASE_OUT = "cubic-bezier(0.23, 1, 0.32, 1)";

/**
 * The project browser. Wide screens get a vertical tab list beside a preview panel; phones get
 * an accordion. A mouse pick crossfades through a 2px blur; a keyboard pick swaps instantly,
 * because keyboard actions should never wait on an animation.
 */
export default function Workspace({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0); // the selected tab, updated at once
  const [shown, setShown] = useState(0); // the project in the panel, updated after the fade
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const panel = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function select(i: number, viaKeyboard: boolean) {
    setActive(i);
    const el = panel.current;
    el?.getAnimations?.().forEach((a) => a.cancel());
    if (i === shown) return;
    if (viaKeyboard || !el || typeof el.animate !== "function" || prefersReducedMotion()) {
      setShown(i);
      return;
    }
    const out = el.animate(
      [
        { opacity: 1, filter: "blur(0px)" },
        { opacity: 0, filter: "blur(2px)" },
      ],
      { duration: 120, easing: EASE_OUT, fill: "forwards" },
    );
    out.onfinish = () => {
      flushSync(() => setShown(i));
      out.cancel();
      el.animate(
        [
          { opacity: 0, filter: "blur(2px)" },
          { opacity: 1, filter: "blur(0px)" },
        ],
        { duration: 200, easing: EASE_OUT },
      );
    };
  }

  function onKey(e: KeyboardEvent) {
    const n = projects.length;
    const to =
      e.key === "ArrowDown" ? (active + 1) % n
      : e.key === "ArrowUp" ? (active - 1 + n) % n
      : e.key === "Home" ? 0
      : e.key === "End" ? n - 1
      : null;
    if (to === null) return;
    e.preventDefault();
    tabs.current[to]?.focus();
    select(to, true);
  }

  const current = projects[shown];

  return (
    <div className="ws">
      <div className="ws-desktop">
        <div className="ws-tabs" role="tablist" aria-orientation="vertical" aria-label="Projects" onKeyDown={onKey}>
          {projects.map((p, i) => (
            <button
              key={p.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`ws-tab-${p.id}`}
              className="ws-tab"
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls="ws-panel"
              tabIndex={i === active ? 0 : -1}
              onClick={() => select(i, false)}
            >
              <span className="ws-name">{p.name}</span>
              <span className="ws-sub">{p.subtitle}</span>
              <span className="ws-meta">{Array.from(new Set([p.meta[0], p.meta[p.meta.length - 1]])).join(" · ")}</span>
            </button>
          ))}
        </div>
        <div className="ws-panel" id="ws-panel" role="tabpanel" aria-labelledby={`ws-tab-${current.id}`} ref={panel}>
          <ProjectPreview project={current} eager={shown === 0} morph />
        </div>
      </div>

      <div className="ws-mobile">
        {projects.map((p, i) => {
          const open = openMobile === i;
          return (
            <div className={`acc${open ? " open" : ""}`} key={p.id}>
              <h3 className="acc-h">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`acc-${p.id}`}
                  id={`acc-btn-${p.id}`}
                  onClick={() => setOpenMobile(open ? null : i)}
                >
                  <span className="ws-name">{p.name}</span>
                  <span className="ws-sub">{p.subtitle}</span>
                  <ChevronIcon className="acc-chev" />
                </button>
              </h3>
              {open && (
                <div className="acc-panel" id={`acc-${p.id}`} role="region" aria-labelledby={`acc-btn-${p.id}`}>
                  <ProjectPreview project={p} showTitle={false} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
