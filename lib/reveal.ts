import { useEffect, useState, type RefObject } from "react";
import { prefersReducedMotion } from "./theme";

export type RevealState = "idle" | "armed" | "seen";

/**
 * A once-only scroll moment. An element that starts below the screen is armed (CSS hides what will
 * animate) and plays when `ratio` of it is visible. An element already on screen, a visitor who
 * prefers reduced motion, or a browser without IntersectionObserver gets no animation and nothing hidden.
 */
export function useRevealOnce(ref: RefObject<Element | null>, ratio = 0.3): RevealState {
  const [state, setState] = useState<RevealState>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || typeof IntersectionObserver === "undefined") return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    let io: IntersectionObserver | null = null;
    const frame = requestAnimationFrame(() => {
      setState("armed");
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.intersectionRatio >= ratio) {
            setState("seen");
            io?.disconnect();
          }
        },
        { threshold: [0, ratio] },
      );
      io.observe(el);
    });
    return () => {
      cancelAnimationFrame(frame);
      io?.disconnect();
    };
  }, [ref, ratio]);

  return state;
}
