"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { toast } from "sonner";
import { copyText, toggleTheme } from "@/lib/theme";
import { SearchIcon } from "./Icons";

type Command = {
  id: string;
  group: "Go to" | "Actions" | "Links";
  label: string;
  hint?: string;
  keywords?: string;
  run: () => void;
};

type Props = {
  email: string;
  resumeHref: string;
  github: { url: string; label: string };
  linkedin: { url: string; label: string };
  facebook: { url: string; label: string };
  instagram: { url: string; label: string };
};

/**
 * Ctrl K / ⌘K opens a search over pages and actions. It opens and closes instantly: a
 * keyboard-triggered panel should never make you wait on an animation.
 */
export default function CommandPalette({ email, resumeHref, github, linkedin, facebook, instagram }: Props) {
  const router = useRouter();
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);

  const commands = useMemo<Command[]>(
    () => [
      { id: "work", group: "Go to", label: "Work", keywords: "projects", run: () => router.push("/#work") },
      { id: "tanaw", group: "Go to", label: "TANAW case study", keywords: "thesis", run: () => router.push("/work/tanaw") },
      { id: "experience", group: "Go to", label: "Experience", keywords: "education jobs", run: () => router.push("/#experience") },
      { id: "stack", group: "Go to", label: "Stack", keywords: "skills tools", run: () => router.push("/#stack") },
      { id: "contact", group: "Go to", label: "Contact", run: () => router.push("/#contact") },
      {
        id: "copy",
        group: "Actions",
        label: "Copy email address",
        hint: email,
        keywords: "mail",
        run: async () => {
          if (await copyText(email)) toast.success("Email address copied", { description: email });
          else toast("Copy didn't work here", { description: email });
        },
      },
      { id: "resume", group: "Actions", label: "Open résumé (PDF)", keywords: "cv resume", run: () => window.open(resumeHref, "_blank", "noopener") },
      { id: "theme", group: "Actions", label: "Switch between light and dark", keywords: "theme mode", run: toggleTheme },
      { id: "github", group: "Links", label: "GitHub", hint: github.label, run: () => window.open(github.url, "_blank", "noopener") },
      { id: "linkedin", group: "Links", label: "LinkedIn", hint: linkedin.label, run: () => window.open(linkedin.url, "_blank", "noopener") },
      { id: "facebook", group: "Links", label: "Facebook", hint: facebook.label, keywords: "messenger fb", run: () => window.open(facebook.url, "_blank", "noopener") },
      { id: "instagram", group: "Links", label: "Instagram", hint: instagram.label, keywords: "ig", run: () => window.open(instagram.url, "_blank", "noopener") },
    ],
    [router, email, resumeHref, github, linkedin, facebook, instagram],
  );

  const q = query.trim().toLowerCase();
  const results = q
    ? commands.filter((c) => `${c.label} ${c.keywords ?? ""} ${c.group}`.toLowerCase().includes(q))
    : commands;
  const groups = (["Go to", "Actions", "Links"] as const)
    .map((g) => ({ g, items: results.filter((c) => c.group === g) }))
    .filter((x) => x.items.length > 0);
  const safeIndex = Math.min(index, Math.max(results.length - 1, 0));

  const open = useCallback(() => {
    const d = dialog.current;
    // Very old browsers have no showModal(); the palette is a shortcut, so it just stays closed there.
    if (!d || d.open || typeof d.showModal !== "function") return;
    setQuery("");
    setIndex(0);
    d.showModal();
    input.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dialog.current?.open) dialog.current.close();
        else open();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("palette:open", open);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("palette:open", open);
    };
  }, [open]);

  function run(c: Command | undefined) {
    if (!c) return;
    dialog.current?.close();
    c.run();
  }

  function onInputKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const n = results.length;
      if (!n) return;
      setIndex((safeIndex + (e.key === "ArrowDown" ? 1 : n - 1)) % n);
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(results[safeIndex]);
    }
  }

  return (
    <dialog
      ref={dialog}
      className="palette"
      aria-label="Search pages and actions"
      onClick={(e) => {
        if (e.target === dialog.current) dialog.current?.close();
      }}
    >
      <div className="palette-box">
        <div className="palette-search">
          <SearchIcon />
          <input
            ref={input}
            type="text"
            id="palette-input"
            placeholder="Search pages and actions"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIndex(0);
            }}
            onKeyDown={onInputKey}
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[safeIndex] ? `pal-${results[safeIndex].id}` : undefined}
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck={false}
          />
          <kbd>Esc</kbd>
        </div>
        <div className="palette-list" id="palette-list" role="listbox" aria-label="Results">
          {groups.length === 0 && <p className="palette-empty">Nothing matches “{query}”.</p>}
          {groups.map(({ g, items }) => (
            <div key={g} role="group" aria-label={g}>
              <p className="palette-group">{g}</p>
              {items.map((c) => {
                const i = results.indexOf(c);
                return (
                  <div
                    key={c.id}
                    id={`pal-${c.id}`}
                    role="option"
                    aria-selected={i === safeIndex}
                    className="palette-item"
                    onPointerMove={() => setIndex(i)}
                    onClick={() => run(c)}
                  >
                    <span>{c.label}</span>
                    {c.hint && <span className="palette-hint">{c.hint}</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );
}
