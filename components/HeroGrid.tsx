"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/theme";

/**
 * The blueprint grid behind the hero. On screens with a mouse, a brighter patch of the grid follows
 * the pointer, eased toward it each frame so it trails like a lamp rather than snapping.
 * The position is set on the glow layer only, which has no children, so nothing else restyles.
 */
export default function HeroGrid() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const host = glow?.closest<HTMLElement>(".intro");
    if (!glow || !host) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || prefersReducedMotion()) return;

    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    let frame = 0;
    let inside = false;

    const tick = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      glow.style.setProperty("--mx", `${x.toFixed(1)}px`);
      glow.style.setProperty("--my", `${y.toFixed(1)}px`);
      frame = Math.abs(tx - x) + Math.abs(ty - y) > 0.4 ? requestAnimationFrame(tick) : 0;
    };
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = host.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!inside) {
        inside = true;
        x = tx;
        y = ty;
        glow.dataset.on = "";
      }
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const leave = () => {
      inside = false;
      delete glow.dataset.on;
    };

    host.addEventListener("pointermove", move);
    host.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div className="bp" aria-hidden="true">
      <div className="bp-grid" />
      <div className="bp-glow" ref={glowRef} />
    </div>
  );
}
