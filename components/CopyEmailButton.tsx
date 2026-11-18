"use client";

import { useEffect, useRef, useState } from "react";
import { CopyIcon } from "./Icons";

/** Copies the address; where the clipboard is blocked, selects it so the visitor can copy it. */
export default function CopyEmailButton({ email, targetId }: { email: string; targetId: string }) {
  const [state, setState] = useState<"idle" | "copied" | "selected">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function reset() {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2000);
  }

  function selectAddress() {
    const el = document.getElementById(targetId);
    if (!el) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
    setState("selected");
    reset();
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
      reset();
    } catch {
      selectAddress();
    }
  }

  return (
    <>
      <button className="btn btn-band btn-sm" type="button" onClick={copy}>
        <CopyIcon />
        {state === "copied" ? "Copied" : "Copy"}
      </button>
      <span className="sr-only" role="status">
        {state === "copied" ? "Email address copied" : state === "selected" ? "Email address selected, press Control C to copy" : ""}
      </span>
    </>
  );
}
