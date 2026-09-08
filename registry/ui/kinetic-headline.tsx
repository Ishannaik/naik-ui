"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Inspired by MIT cinematic-scroll-skill; credit Simone Leonelli. Reduced motion shows lines without the rise animation.
export function KineticHeadline({ lines, className }: { lines: string[]; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null); const [seen, setSeen] = useState(false);
  useEffect(() => { const el = ref.current; if (!el) return; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setSeen(true); observer.disconnect(); } }, { threshold: 0.25 }); observer.observe(el); return () => observer.disconnect(); }, []);
  return <><style>{`@keyframes rise-in { from { opacity: 0; transform: translateY(0.65em); } to { opacity: 1; transform: translateY(0); } }`}</style><h2 ref={ref} className={cn("font-display text-5xl leading-[0.92] sm:text-7xl", className)}>{lines.map((line, i) => <span key={`${line}-${i}`} className={cn("block opacity-0 [animation:rise-in_700ms_cubic-bezier(.2,.8,.2,1)_forwards_paused] motion-reduce:opacity-100 motion-reduce:[animation:none]", seen && "[animation-play-state:running]")} style={{ animationDelay: `${i * 90}ms` }}>{line}</span>)}</h2></>;
}

export function Preview() { return <KineticHeadline lines={["Built in the", "Mumbai heat."]} />; }
