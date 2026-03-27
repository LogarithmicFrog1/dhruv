"use client";

import { useCallback, useLayoutEffect, useState } from "react";
import { THEME_STORAGE_KEY, type ThemePreference } from "@/lib/theme";

function applyDomTheme(preference: ThemePreference) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  if (preference === "dark") root.classList.add("dark");
  else if (preference === "light") root.classList.add("light");
}

function readStored(): ThemePreference {
  try {
    const t = localStorage.getItem(THEME_STORAGE_KEY);
    if (t === "light" || t === "dark" || t === "system") return t;
  } catch {
    /* ignore */
  }
  return "system";
}

function resolvedAppearance(
  preference: ThemePreference,
  mqDark: boolean,
): "light" | "dark" {
  if (preference === "dark") return "dark";
  if (preference === "light") return "light";
  return mqDark ? "dark" : "light";
}

export function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>(() =>
    readStored(),
  );
  const [mqDark, setMqDark] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false,
  );

  useLayoutEffect(() => {
    applyDomTheme(preference);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, preference);
    } catch {
      /* ignore */
    }
  }, [preference]);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setMqDark(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const cycle = useCallback(() => {
    setPreference((p) => {
      const order: ThemePreference[] = ["light", "dark", "system"];
      const i = order.indexOf(p);
      return order[(i + 1) % order.length];
    });
  }, []);

  const resolved = resolvedAppearance(preference, mqDark);
  const label =
    preference === "system"
      ? `Appearance: matching device (${resolved === "dark" ? "dark" : "light"}). Click to switch.`
      : `Appearance: ${preference}. Click to cycle.`;

  return (
    <button
      type="button"
      onClick={cycle}
      title={label}
      aria-label={label}
      className="group inline-flex h-9 w-9 shrink-0 items-center justify-center rounded text-accent transition-colors duration-200 hover:text-ink active:scale-[0.96]"
    >
      <span className="relative flex h-4 w-4 items-center justify-center">
        {resolved === "dark" ? <MoonIcon /> : <SunIcon />}
        {preference === "system" && (
          <span
            className="absolute -bottom-0.5 -right-0.5 h-1 w-1 rounded-full bg-accent ring-2 ring-[var(--surface)]"
            aria-hidden
          />
        )}
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      className="transition-transform duration-300 group-hover:rotate-6"
      aria-hidden
    >
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-300 group-hover:-rotate-3"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
