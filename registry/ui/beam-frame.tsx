import { cn } from "@/lib/utils";

// Reduced motion is honored by motion-safe: the single beam remains still.
export function BeamFrame({ children, className }: { children: React.ReactNode; className?: string }) {
  return <><style>{`@keyframes beam { from { background-position: -40% 0; } to { background-position: 140% 0; } }`}</style><div className={cn("relative overflow-hidden border border-line p-px", className)}><span aria-hidden className="pointer-events-none absolute inset-0 [background:linear-gradient(90deg,transparent,var(--accent),transparent)] [background-size:35%_2px] [background-position:-40%_0] [background-repeat:no-repeat] motion-safe:animate-[beam_4s_linear_infinite]" /><div className="relative bg-bg p-6">{children}</div></div></>;
}

export function Preview() { return <BeamFrame><p className="font-mono text-xs uppercase tracking-[.2em] text-accent">Open slot</p><p className="mt-3 font-display text-3xl">Bring a sharp question.</p></BeamFrame>; }
