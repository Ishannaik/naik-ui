"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const STOPS = [
  { id: "light", icon: Sun, label: "Light" },
  { id: "system", icon: Monitor, label: "System" },
  { id: "dark", icon: Moon, label: "Dark" },
] as const;

export function ThemeSlider() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = mounted ? (theme ?? "system") : "system";
  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="inline-flex border border-[var(--line)] bg-[var(--bg-2)] p-0.5"
      style={{ borderRadius: 4 }}
    >
      {STOPS.map(({ id, icon: Icon, label }) => {
        const on = current === id;
        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={on}
            aria-label={label}
            onClick={() => setTheme(id)}
            className="inline-flex h-8 w-8 items-center justify-center"
            style={{
              borderRadius: 3,
              background: on ? "var(--accent)" : "transparent",
              color: on ? "var(--accent-ink)" : "var(--fg-dim)",
            }}
          >
            <Icon size={14} />
          </button>
        );
      })}
    </div>
  );
}

export function Preview() {
  return <ThemeSlider />;
}
