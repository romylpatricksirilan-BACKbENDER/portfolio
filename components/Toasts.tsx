"use client";

import { Toaster } from "sonner";

/** Sonner, styled from the site's own tokens so toasts follow the light/dark switch too. */
export default function Toasts() {
  return (
    <Toaster
      position="bottom-center"
      mobileOffset={{ bottom: 88 }}
      toastOptions={{
        className: "toast",
        style: {
          background: "var(--surface)",
          color: "var(--fg)",
          border: "1px solid var(--line)",
          borderRadius: "var(--r-md)",
          fontFamily: "var(--font-body)",
          boxShadow: "var(--shadow)",
        },
      }}
    />
  );
}
