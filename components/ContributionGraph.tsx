"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { ContributionDay } from "@/lib/github";

const dayFormat = new Intl.DateTimeFormat("en", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});
const monthFormat = new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" });
const toDate = (iso: string) => new Date(`${iso}T00:00:00Z`);
const IDLE = "Hover or tap a square to see that day.";

export default function ContributionGraph({ days, label }: { days: ContributionDay[]; label: string }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  // Open on the most recent weeks when the graph is wider than the screen.
  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, []);

  const offset = toDate(days[0].date).getUTCDay(); // weeks start on Sunday
  const weeks = Math.ceil((offset + days.length) / 7);

  const months: { col: number; text: string }[] = [];
  days.forEach((d, i) => {
    const date = toDate(d.date);
    if (date.getUTCDate() !== 1) return;
    const col = Math.floor((offset + i) / 7);
    if (months.length === 0 || col - months[months.length - 1].col >= 3) {
      months.push({ col, text: monthFormat.format(date) });
    }
  });
  if (!months.length || months[0].col >= 3) {
    months.unshift({ col: 0, text: monthFormat.format(toDate(days[0].date)) });
  }

  const columns: CSSProperties = { gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` };
  const day = active === null ? null : days[active];
  const readout = day
    ? `${dayFormat.format(toDate(day.date))}: ${day.count === 0 ? "no" : day.count} contribution${day.count === 1 ? "" : "s"}`
    : IDLE;

  return (
    <>
      <div className="graph-scroll" ref={scroller}>
        <div className="graph-inner" role="img" aria-label={label} style={{ minWidth: `${weeks * 12}px` }}>
          <div className="graph-months" style={columns} aria-hidden="true">
            {months.map((m) => (
              <span key={m.col} style={{ gridColumn: `${m.col + 1} / span 3`, gridRow: 1 }}>
                {m.text}
              </span>
            ))}
          </div>
          <div
            className="graph-cells"
            style={columns}
            onPointerOver={(e) => {
              const i = (e.target as HTMLElement).dataset.i;
              if (i !== undefined) setActive(Number(i));
            }}
            onPointerLeave={() => setActive(null)}
          >
            {Array.from({ length: offset }, (_, i) => (
              <span key={`pad-${i}`} className="cell pad" />
            ))}
            {days.map((d, i) => (
              <span
                key={d.date}
                className="cell"
                data-i={i}
                data-l={d.level}
                style={{ "--col": Math.floor((offset + i) / 7) } as CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="activity-foot">
        <p className="readout">{readout}</p>
        <div className="legend" aria-hidden="true">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <i key={l} data-l={l} />
          ))}
          <span>More</span>
        </div>
      </div>
    </>
  );
}
