"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
// The in-view count is intentionally lightweight; global reduced-motion styles halt visual animation.

export function NumberTicker({ value, duration = 1400, className }: { value: number; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null); const [current, setCurrent] = useState(0);
  useEffect(() => { const node = ref.current; if (!node) return; const io = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) return; const start = performance.now(); const tick = (now: number) => { const progress = Math.min((now - start) / duration, 1); setCurrent(Math.round(value * (1 - Math.pow(1 - progress, 3)))); if (progress < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); io.disconnect(); }, { threshold: 0.5 }); io.observe(node); return () => io.disconnect(); }, [value, duration]);
  return <span ref={ref} className={cn("tabular font-mono text-5xl", className)}>{current.toLocaleString("en-IN")}</span>;
}

export function Preview() { return <div><NumberTicker value={12840} /><p className="mt-2 text-sm text-fg-dim">kilograms of steel moved this season</p></div>; }
