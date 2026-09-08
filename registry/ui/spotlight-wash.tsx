"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
// Reduced motion is naturally static; the wash only follows fine pointers.

export function SpotlightWash({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  function move(event: React.PointerEvent<HTMLDivElement>) { if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return; const box = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty("--spot-x", `${event.clientX - box.left}px`); event.currentTarget.style.setProperty("--spot-y", `${event.clientY - box.top}px`); }
  return <div ref={ref} onPointerMove={move} className={cn("relative overflow-hidden border bg-bg-2 [background-image:radial-gradient(240px_circle_at_var(--spot-x,50%)_var(--spot-y,50%),color-mix(in_srgb,var(--accent)_18%,transparent),transparent_70%)]", className)}>{children}</div>;
}

export function Preview() { return <SpotlightWash className="p-8"><p className="font-mono text-xs uppercase tracking-[.2em] text-accent">Workshop light</p><h3 className="mt-3 font-display text-3xl">A warmer way through.</h3><p className="mt-2 text-fg-dim">Hover the panel to find the glow.</p></SpotlightWash>; }
