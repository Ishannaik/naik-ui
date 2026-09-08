"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
// Reduced motion skips typing and renders the complete line immediately.

export function Typewriter({ text, speed = 55, className }: { text: string; speed?: number; className?: string }) {
  const [value, setValue] = useState("");
  useEffect(() => { if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setValue(text); return; } let i = 0; setValue(""); const timer = window.setInterval(() => { i += 1; setValue(text.slice(0, i)); if (i >= text.length) window.clearInterval(timer); }, speed); return () => window.clearInterval(timer); }, [text, speed]);
  return <span className={cn("font-mono", className)} aria-label={text}>{value}<span aria-hidden className="ml-1 inline-block h-[1em] w-px animate-pulse bg-accent align-[-.12em] motion-reduce:animate-none" /></span>;
}

export function Preview() { return <Typewriter text="The furnace opens at 06:42." />; }
