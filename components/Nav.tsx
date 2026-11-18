"use client";

import { useEffect, useState } from "react";
import { CloseIcon, DownloadIcon, MenuIcon, MoonIcon, SunIcon } from "./Icons";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function toggleTheme() {
  const root = document.documentElement;
  const set = root.getAttribute("data-theme");
  const dark = set ? set === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  const next = dark ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    // Private windows can refuse storage; the choice then lasts for this visit only.
  }
}

export default function Nav({ name, initials, resumeHref }: { name: string; initials: string; resumeHref: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    const spy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCurrent(entry.target.id === "top" ? null : entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ["top", ...SECTIONS.map((s) => s.id)]) {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      spy.disconnect();
    };
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <span className="mark" aria-hidden="true">
            {initials}
          </span>
          <span className="brand-name">{name}</span>
        </a>
        <nav className="nav-menu" aria-label="Sections">
          <ul className="nav-links" id="nav-links">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={current === s.id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn theme-btn" type="button" aria-label="Toggle dark mode" onClick={toggleTheme}>
            <MoonIcon className="ic-moon" />
            <SunIcon className="ic-sun" />
          </button>
          <a className="btn btn-primary btn-sm resume-nav" href={resumeHref} target="_blank" rel="noopener">
            <DownloadIcon />
            Résumé
          </a>
          <button
            className="icon-btn menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
