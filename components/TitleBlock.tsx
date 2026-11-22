"use client";

import { useSyncExternalStore } from "react";
import { ArrowDownIcon } from "./Icons";

const everyFewSeconds = (onChange: () => void) => {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
};

const iloiloClock = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Manila", hour: "numeric", minute: "2-digit" });

/** A greeting for the visitor's own time of day. */
function greeting() {
  const h = new Date().getHours();
  if (h < 5) return "Up late? Welcome";
  if (h < 12) return "Good morning, welcome";
  if (h < 18) return "Good afternoon, welcome";
  return "Good evening, welcome";
}

/**
 * The drawing's title block, along the bottom of the hero: a greeting, the time where I am,
 * when the site was last updated, and the way down to the work. The server renders a plain
 * "Welcome"; the browser swaps in the visitor's greeting and the live Iloilo time.
 */
export default function TitleBlock({ updated }: { updated: string }) {
  const hello = useSyncExternalStore(everyFewSeconds, greeting, () => "Welcome");
  const time = useSyncExternalStore(everyFewSeconds, () => iloiloClock.format(new Date()), () => "");

  return (
    <div className="wrap tb-wrap">
      <div className="titleblock">
        <span className="tb-hello">{hello}</span>
        <span>{time ? `${time} in Iloilo` : "Iloilo City, PH"}</span>
        <span>Updated {updated}</span>
        <a href="#work">
          See my work
          <ArrowDownIcon />
        </a>
      </div>
    </div>
  );
}
