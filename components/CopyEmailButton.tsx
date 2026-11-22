"use client";

import { toast } from "sonner";
import { copyText } from "@/lib/theme";
import { CopyIcon } from "./Icons";

/**
 * Copies the address and confirms with a toast. Where the clipboard is blocked, selects the
 * address on the page (when targetId points at it) so the visitor can copy it themselves.
 */
export default function CopyEmailButton({
  email,
  targetId,
  className = "btn btn-primary",
  label = "Copy email",
}: {
  email: string;
  targetId?: string;
  className?: string;
  label?: string;
}) {
  async function copy() {
    if (await copyText(email)) {
      toast.success("Email address copied", { description: email });
      return;
    }
    const el = targetId ? document.getElementById(targetId) : null;
    if (el) {
      const range = document.createRange();
      range.selectNodeContents(el);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
      toast("Address selected", { description: "Press Ctrl+C to copy it." });
    } else {
      toast("Copy didn't work here", { description: email });
    }
  }

  return (
    <button className={className} type="button" onClick={copy}>
      <CopyIcon />
      {label}
    </button>
  );
}
