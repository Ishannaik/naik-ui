import * as React from "react";
import { cn } from "@/lib/utils";
export function Kbd({className,...props}:React.HTMLAttributes<HTMLElement>){return <kbd className={cn("border border-[var(--line)] bg-[var(--bg-2)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--fg-dim)]",className)} {...props}/>}
export function Preview(){return <Kbd>⌘K</Kbd>}
