"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <span className="inline-block h-8 w-8" />;
  const dark = resolvedTheme !== "light";
  return (
    <button
      type="button"
      className={className}
      style={{
        width: 32,
        height: 32,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid var(--line)",
        borderRadius: 4,
        background: "var(--bg-2)",
        color: "var(--fg)",
      }}
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light" : "Switch to dark"}
    >
      {dark ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}

export function Preview() {
  return <ThemeSwitch />;
}
