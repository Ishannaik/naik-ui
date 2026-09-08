"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Inspired by MIT cinematic-scroll-skill; credit Simone Leonelli. Reduced motion keeps all copy visible without stagger.
export function PinnedReveal({ eyebrow, title, summary, className }: { eyebrow: string; title: string; summary: string; className?: string }) {
  const ref = useRef<HTMLElement>(null); const [seen, setSeen] = useState(false);
  useEffect(() => { const node = ref.current; if (!node) return; const io = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.35 }); io.observe(node); return () => io.disconnect(); }, []);
  return <><style>{`@keyframes rise-in { from { opacity: 0; transform: translateY(0.65em); } to { opacity: 1; transform: translateY(0); } }`}</style><section ref={ref} className={cn("grid min-h-[55vh] content-center border-y py-16", className)}><div className="mx-auto w-full max-w-4xl"><p className={cn("font-mono text-xs uppercase tracking-[.2em] text-accent opacity-0 motion-reduce:opacity-100 motion-reduce:[animation:none]", seen && "[animation:rise-in_600ms_ease-out_forwards]")}>{eyebrow}</p><h2 className={cn("mt-4 max-w-3xl font-display text-5xl leading-none opacity-0 motion-reduce:opacity-100 motion-reduce:[animation:none] sm:text-7xl", seen && "[animation:rise-in_700ms_ease-out_100ms_forwards]")}>{title}</h2><p className={cn("mt-6 max-w-xl text-lg text-fg-dim opacity-0 motion-reduce:opacity-100 motion-reduce:[animation:none]", seen && "[animation:rise-in_700ms_ease-out_200ms_forwards]")}>{summary}</p></div></section></>;
}

export function Preview() { return <PinnedReveal eyebrow="Process / 03" title="Every pour earns its mark." summary="We shape small-batch interfaces with the patience of a workshop and the pace of a monsoon." />; }
