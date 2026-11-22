type DocumentWithTransitions = Document & { startViewTransition?: (update: () => void) => unknown };

/**
 * Flips between light (the default) and dark, and remembers the choice. Runs in the browser only.
 * Where view transitions exist the two themes crossfade (200ms, set in globals.css) instead of snapping.
 */
export function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  const apply = () => root.setAttribute("data-theme", next);
  const doc = document as DocumentWithTransitions;
  if (doc.startViewTransition && !prefersReducedMotion()) doc.startViewTransition(apply);
  else apply();
  try {
    localStorage.setItem("theme", next);
  } catch {
    // Private windows can refuse storage; the choice then lasts for this visit only.
  }
}

/** Copies text; resolves false where the clipboard is blocked. */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
