"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

// Inspired by MIT cinematic-scroll-skill; credit Simone Leonelli. Reduced motion leaves the card flat.
export function TiltCard({ children, className, maxDeg = 8, sheen = true }: { children: React.ReactNode; className?: string; maxDeg?: number; sheen?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  function move(event: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    const box = el.getBoundingClientRect();
    const x = ((event.clientX - box.left) / box.width - 0.5) * 2;
    const y = ((event.clientY - box.top) / box.height - 0.5) * 2;
    el.style.setProperty("--tilt-x", `${-y * maxDeg}deg`);
    el.style.setProperty("--tilt-y", `${x * maxDeg}deg`);
    el.style.setProperty("--sheen-x", `${(x + 1) * 50}%`);
  }
  function reset() { if (ref.current) { ref.current.style.setProperty("--tilt-x", "0deg"); ref.current.style.setProperty("--tilt-y", "0deg"); } }
  return <div ref={ref} onPointerMove={move} onPointerLeave={reset} className={cn("relative transform-gpu transition-transform duration-200 [transform:perspective(900px)_rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))]", className)}>{sheen && <span aria-hidden className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-200 hover:opacity-100" style={{ background: "radial-gradient(circle at var(--sheen-x,50%) 20%, color-mix(in srgb, var(--fg) 18%, transparent), transparent 38%)" }} />}{children}</div>;
}

export function Preview() { return <TiltCard className="border bg-bg-2 p-8" sheen><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Bandra / 06:42</p><h3 className="mt-3 font-display text-3xl">Heat, steel, rain.</h3><p className="mt-2 text-fg-dim">A foundry note from Mumbai’s first shift.</p></TiltCard>; }
