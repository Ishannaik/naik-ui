"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Inspired by MIT cinematic-scroll-skill; credit Simone Leonelli. Reduced motion and mobile disable image drift.
export function DepthFigure({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => { const node = ref.current; if (!node) return; const media = window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)"); if (media.matches) return; let frame = 0; const move = () => { if (!frame) frame = requestAnimationFrame(() => { frame = 0; const box = node.getBoundingClientRect(); const offset = (window.innerHeight / 2 - (box.top + box.height / 2)) * 0.08; node.style.setProperty("--depth-y", `${offset}px`); }); }; window.addEventListener("scroll", move, { passive: true }); move(); return () => { window.removeEventListener("scroll", move); cancelAnimationFrame(frame); }; }, []);
  return <figure ref={ref} className={cn("overflow-hidden border bg-bg-2", className)}><img src={src} alt={alt} className="block h-full w-full object-cover [transform:translateY(var(--depth-y,0))_scale(1.08)]" /></figure>;
}

export function Preview() { return <DepthFigure src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80" alt="Sunlit concrete architecture in Mumbai" className="h-80" />; }
