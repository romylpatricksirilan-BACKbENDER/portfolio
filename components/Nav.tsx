"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { toggleTheme } from "@/lib/theme";
import { CloseIcon, DownloadIcon, MenuIcon, MoonIcon, SearchIcon, SunIcon } from "./Icons";
import SyrexMark from "./SyrexMark";

export const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

const noop = () => () => {};
const isMac = () => /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

export default function Nav({
  name,
  resumeHref,
  active = null,
  spy = false,
}: {
  name: string;
  resumeHref: string;
  /** The section to mark as current on pages without scroll spy. */
  active?: SectionId | null;
  /** Follow the visible section while scrolling (home page). */
  spy?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [seen, setSeen] = useState<SectionId | null>(null);
  const current = spy ? seen : active;
  const mac = useSyncExternalStore(noop, isMac, () => false);
  const listRef = useRef<HTMLUListElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (!spy) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          setSeen(SECTIONS.some((s) => s.id === id) ? (id as SectionId) : null);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const id of ["top", ...SECTIONS.map((s) => s.id)]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [spy]);

  // The underline slides to the current link: transform only, so it never triggers layout.
  useEffect(() => {
    const place = () => {
      const bar = barRef.current;
      const list = listRef.current;
      if (!bar || !list) return;
      const link = current ? list.querySelector<HTMLElement>(`a[data-id="${current}"]`) : null;
      if (!link) {
        bar.style.opacity = "0";
        return;
      }
      bar.style.opacity = "1";
      bar.style.transform = `translateX(${link.offsetLeft + 12}px) scaleX(${(link.offsetWidth - 24) / 100})`;
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [current]);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
      <div className="wrap nav-inner">
        <Link className="brand" href="/#top">
          <span className="mark" aria-hidden="true">
            <SyrexMark />
          </span>
          <span className="brand-name">{name}</span>
        </Link>
        <nav className="nav-menu" aria-label="Sections">
          <ul className="nav-links" id="nav-links" ref={listRef}>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/#${s.id}`}
                  data-id={s.id}
                  aria-current={current === s.id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="nav-bar" ref={barRef} aria-hidden="true" />
        </nav>
        <div className="nav-actions">
          <button
            className="kbd-btn"
            type="button"
            onClick={() => window.dispatchEvent(new Event("palette:open"))}
            aria-label="Search pages and actions"
            aria-keyshortcuts={mac ? "Meta+K" : "Control+K"}
          >
            <SearchIcon />
            <kbd>{mac ? "⌘K" : "Ctrl K"}</kbd>
          </button>
          <button className="icon-btn theme-btn" type="button" aria-label="Switch between light and dark" onClick={toggleTheme}>
            <MoonIcon className="ic-moon" />
            <SunIcon className="ic-sun" />
          </button>
          <a className="btn btn-primary btn-sm resume-nav" href={resumeHref} target="_blank" rel="noopener" aria-label="Résumé (PDF)">
            <DownloadIcon />
            <span className="resume-label">Résumé</span>
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
