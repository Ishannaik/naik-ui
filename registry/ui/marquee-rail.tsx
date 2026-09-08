"use client";

import { cn } from "@/lib/utils";

// Reduced motion disables the rail animation; hover pauses it for deliberate reading.
export function MarqueeRail({ children, className, speed = 24 }: { children: React.ReactNode; className?: string; speed?: number }) {
  return <><style>{`@keyframes marquee { to { transform: translateX(-33.333%); } }`}</style><div className={cn("group overflow-hidden border-y py-3", className)}><div className="flex w-max animate-[marquee_var(--marquee-speed)_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none" style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties} aria-label="Scrolling content">{[0, 1, 2].map((copy) => <div key={copy} aria-hidden={copy > 0} className="flex shrink-0 items-center gap-10 pr-10">{children}</div>)}</div></div></>;
}

export function Preview() { return <MarqueeRail><span className="font-display text-2xl">MADE IN MUMBAI</span><span aria-hidden className="text-accent">/</span><span className="font-mono text-xs uppercase tracking-widest text-fg-dim">Small batches / long nights</span></MarqueeRail>; }
