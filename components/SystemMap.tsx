"use client";

import { useState, type KeyboardEvent } from "react";
import type { MapNodeId, SystemMapData } from "@/content/profile";
import { ChevronIcon } from "./Icons";

type Box = { x: number; y: number; w: number; h: number };

/** Where each part sits on the wide diagram (viewBox 760 × 376). */
const POS: Record<MapNodeId, Box> = {
  mao: { x: 0, y: 8, w: 200, h: 60 },
  field: { x: 0, y: 108, w: 200, h: 60 },
  fod: { x: 0, y: 208, w: 200, h: 60 },
  pmed: { x: 0, y: 308, w: 200, h: 60 },
  app: { x: 290, y: 96, w: 180, h: 204 },
  db: { x: 560, y: 36, w: 200, h: 60 },
  opt: { x: 560, y: 166, w: 200, h: 60 },
  rep: { x: 560, y: 296, w: 200, h: 60 },
};

/** Where each connector meets the app's edge, so the lines fan in instead of overlapping. */
const APP_PORT: Partial<Record<MapNodeId, number>> = { mao: 110, field: 170, fod: 230, pmed: 290, db: 110, opt: 196, rep: 282 };

/** A connector with the SX mark's 45° bend: across, diagonal, across. */
function chamfer(x1: number, y1: number, x2: number, y2: number) {
  const dy = Math.abs(y2 - y1);
  if (dy < 1) return `M${x1} ${y1}H${x2}`;
  const mid = (x1 + x2) / 2;
  return `M${x1} ${y1}H${mid - dy / 2}L${mid + dy / 2} ${y2}H${x2}`;
}

function edgePath(a: MapNodeId, b: MapNodeId) {
  const A = POS[a];
  const B = POS[b];
  if (b === "app") return chamfer(A.x + A.w, A.y + A.h / 2, B.x, APP_PORT[a] ?? B.y + B.h / 2);
  if (a === "app") return chamfer(A.x + A.w, APP_PORT[b] ?? A.y + A.h / 2, B.x, B.y + B.h / 2);
  // Service to service, stacked in one column: a straight vertical line.
  return `M${A.x + A.w / 2} ${A.y}V${B.y + B.h}`;
}

const GROUPS: { label: string; ids: MapNodeId[] }[] = [
  { label: "People", ids: ["mao", "field", "fod", "pmed"] },
  { label: "App", ids: ["app"] },
  { label: "Data and services", ids: ["db", "opt", "rep"] },
];

export default function SystemMap({ map, title }: { map: SystemMapData; title: string }) {
  const [hover, setHover] = useState<MapNodeId | null>(null);
  const [pinned, setPinned] = useState<MapNodeId | null>(null);
  const [mobileOpen, setMobileOpen] = useState<MapNodeId | null>(null);
  const active = hover ?? pinned;

  const neighbours = (id: MapNodeId) =>
    map.edges.flatMap(([a, b]) => (a === id ? [b] : b === id ? [a] : []));
  const near = new Set(active ? neighbours(active) : []);
  const connects = (id: MapNodeId) => neighbours(id).map((n) => map.nodes[n].title).join(", ");

  const togglePin = (id: MapNodeId) => setPinned((p) => (p === id ? null : id));
  const onNodeKey = (e: KeyboardEvent, id: MapNodeId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      togglePin(id);
    }
  };

  const info = active ? map.nodes[active] : null;

  return (
    <div className="sysmap">
      <div className="map-wide">
        <div className="map-box">
          <svg
            className={`map${active ? " has-on" : ""}`}
            viewBox="0 0 760 376"
            role="group"
            aria-label={`${title}. Each part is a button that explains what it does.`}
            onPointerLeave={(e) => {
              if (e.pointerType === "mouse") setHover(null);
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setPinned(null);
                setHover(null);
              }
            }}
          >
            {map.edges.map(([a, b]) => (
              <path
                key={`${a}-${b}`}
                className={`edge${active && (a === active || b === active) ? " on" : ""}`}
                d={edgePath(a, b)}
              />
            ))}
            {(Object.keys(POS) as MapNodeId[]).map((id) => {
              const n = map.nodes[id];
              const p = POS[id];
              const isApp = id === "app";
              return (
                <g
                  key={id}
                  className={`node${active === id ? " on" : ""}${near.has(id) ? " near" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label={n.title}
                  aria-pressed={pinned === id}
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") setHover(id);
                  }}
                  onFocus={() => setHover(id)}
                  onBlur={() => setHover(null)}
                  onClick={() => togglePin(id)}
                  onKeyDown={(e) => onNodeKey(e, id)}
                >
                  <rect x={p.x + 0.75} y={p.y + 0.75} width={p.w - 1.5} height={p.h - 1.5} rx={isApp ? 8 : 6} />
                  <text className="k" x={p.x + 14} y={p.y + (isApp ? 26 : 20)}>
                    {n.kind.toUpperCase()}
                  </text>
                  <text className="t" x={p.x + 14} y={p.y + (isApp ? 46 : 38)}>
                    {n.title}
                  </text>
                  {isApp && n.lines ? (
                    n.lines.map((line, i) => (
                      <text key={line} className="d" x={p.x + 14} y={p.y + 76 + i * 22}>
                        {line}
                      </text>
                    ))
                  ) : (
                    <text className="d" x={p.x + 14} y={p.y + 52}>
                      {n.sub}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
        <div className="map-panel" aria-live="polite">
          {info && active ? (
            <>
              <span className="k">{info.kind}</span>
              <h3>{info.title}</h3>
              <p>{info.detail}</p>
              <p className="connects">
                Connects to <b>{connects(active)}</b>
              </p>
            </>
          ) : (
            <>
              <span className="k">TANAW · Masagana Hybrid Rice Program</span>
              <h3>Trace the system</h3>
              <p>Hover, tap, or tab to a part of TANAW to see what it does and what it connects to.</p>
            </>
          )}
        </div>
      </div>

      <div className="map-narrow">
        {GROUPS.map((g) => (
          <div className="map-group" key={g.label}>
            <p className="map-group-label">{g.label}</p>
            <ul>
              {g.ids.map((id) => {
                const n = map.nodes[id];
                const open = mobileOpen === id;
                return (
                  <li key={id} className={open ? "open" : undefined}>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`map-${id}`}
                      onClick={() => setMobileOpen(open ? null : id)}
                    >
                      <span>
                        <b>{n.title}</b>
                        <span>{n.sub}</span>
                      </span>
                      <ChevronIcon className="acc-chev" />
                    </button>
                    {open && (
                      <div id={`map-${id}`} className="map-detail">
                        <p>{n.detail}</p>
                        <p className="connects">
                          Connects to <b>{connects(id)}</b>
                        </p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
