"use client";

import { useRef, type ReactNode } from "react";
import { useRevealOnce } from "@/lib/reveal";

/** Marks its element with data-reveal ("armed", then "seen") so CSS can play a once-only moment. */
export default function Reveal({
  as: Tag = "div",
  id,
  className,
  children,
}: {
  as?: "div" | "h2" | "h3" | "p";
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLHeadingElement & HTMLDivElement & HTMLParagraphElement>(null);
  const state = useRevealOnce(ref);
  return (
    <Tag ref={ref} id={id} className={className} data-reveal={state === "idle" ? undefined : state}>
      {children}
    </Tag>
  );
}
