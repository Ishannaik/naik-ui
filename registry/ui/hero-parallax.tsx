"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Inspired by MIT cinematic-scroll-skill; credit Simone Leonelli. Reduced motion and mobile keep layers static.
export function HeroParallax({ children, className }: { children?: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const node = ref.current; if (!node) return; const reduce = window.matchMedia("(prefers-reduced-motion: reduce)"); const mobile = window.matchMedia("(max-width: 767px)"); if (reduce.matches || mobile.matches) return; let frame = 0; const update = () => { frame = 0; const y = Math.min(window.scrollY, node.offsetHeight); node.querySelectorAll<HTMLElement>("[data-parallax]").forEach((layer) => layer.style.transform = `translate3d(0,${y * Number(layer.dataset.parallax)}px,0)`); }; const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); }; window.addEventListener("scroll", onScroll, { passive: true }); update(); return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(frame); }; }, []);
  return <div ref={ref} className={cn("relative min-h-[70vh] overflow-hidden", className)}><div data-parallax=".06" className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,var(--water),transparent_38%)] opacity-30" /><div data-parallax=".12" className="absolute inset-x-[10%] top-[18%] h-2/3 border border-accent/40" /><div data-parallax=".2" className="absolute inset-x-[20%] top-[28%] h-1/2 border border-fg/20" /><div data-parallax=".3" className="relative z-10 grid min-h-[70vh] place-items-center p-8">{children}</div></div>;
}

export function Preview() { return <HeroParallax><div className="text-center"><p className="font-mono text-xs uppercase tracking-[.2em] text-accent">Naik Foundry / Mumbai</p><h2 className="mt-4 font-display text-6xl">Make it tangible.</h2></div></HeroParallax>; }
