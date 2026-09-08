import * as React from "react";
import { cn } from "@/lib/utils";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> { tone?: "sodium" | "water" | "danger" | "mute" | "ok"; }
export function Badge({ className, tone="sodium", ...props }: BadgeProps) { const colors={sodium:"border-[var(--accent)] text-[var(--accent)]",water:"border-[var(--water)] text-[var(--water)]",danger:"border-[var(--danger)] text-[var(--danger)]",mute:"border-[var(--line)] text-[var(--fg-dim)]",ok:"border-[var(--ok)] text-[var(--ok)]"}; return <span className={cn("inline-flex items-center border px-2 py-1 font-mono text-[10px] uppercase tracking-wider",colors[tone],className)} {...props}/>; }
export function Preview(){return <Badge>Registry</Badge>}
