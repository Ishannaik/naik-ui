"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Inspired by MIT cinematic-scroll-skill; credit Simone Leonelli. Reduced motion and touch hide the cursor.
export function MagneticCursor({ className, size = 18 }: { className?: string; size?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const fine = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    el.style.opacity = fine.matches ? "1" : "0";
    if (!fine.matches) return;
    let tx = -100, ty = -100, x = tx, y = ty, frame = 0;
    const pointer = (event: PointerEvent) => {
      const target = (event.target as Element).closest<HTMLElement>("[data-magnetic]");
      if (target) {
        const box = target.getBoundingClientRect();
        tx = box.left + box.width / 2;
        ty = box.top + box.height / 2;
      } else {
        tx = event.clientX;
        ty = event.clientY;
      }
    };
    const tick = () => { x += (tx - x) * 0.16; y += (ty - y) * 0.16; el.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`; frame = requestAnimationFrame(tick); };
    const over = (event: PointerEvent) => { const target = (event.target as Element).closest("[data-magnetic]"); el.dataset.active = target ? "true" : "false"; };
    window.addEventListener("pointermove", pointer); window.addEventListener("pointerover", over); frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("pointermove", pointer); window.removeEventListener("pointerover", over); };
  }, []);
  return <span ref={ref} aria-hidden="true" className={cn("pointer-events-none fixed left-0 top-0 z-50 hidden border border-accent bg-accent/10 transition-[width,height,opacity] duration-200 [@media(pointer:fine)]:block data-[active=true]:h-10 data-[active=true]:w-10 data-[active=true]:opacity-100", className)} style={{ width: size, height: size }} />;
}

export function Preview() { return <div className="relative border bg-bg-2 p-8"><MagneticCursor /><button data-magnetic className="border px-4 py-2 font-mono text-xs uppercase text-accent">Enter the yard</button><p className="mt-6 text-fg-dim">Move across the action.</p></div>; }
