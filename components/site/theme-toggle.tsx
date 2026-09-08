"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <span className="inline-block h-8 w-8" />;
  }
  const dark = resolvedTheme !== "light";
  return (
    <button
      type="button"
      className="inline-flex h-8 w-8 items-center justify-center border border-line text-fg hover:border-accent"
      style={{ borderRadius: 4 }}
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light" : "Switch to dark"}
    >
      {dark ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}
