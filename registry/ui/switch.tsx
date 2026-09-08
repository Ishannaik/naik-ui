"use client";
import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
export const Switch=React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>,React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>>(({className,...props},ref)=><SwitchPrimitive.Root ref={ref} className={cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer border border-[var(--line)] bg-[var(--bg-2)] p-0.5 transition-colors data-[state=checked]:border-[var(--accent)] data-[state=checked]:bg-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50",className)} {...props}><SwitchPrimitive.Thumb className="pointer-events-none block h-3.5 w-3.5 bg-[var(--fg-dim)] transition-transform data-[state=checked]:translate-x-4 data-[state=checked]:bg-[var(--accent-ink)]"/></SwitchPrimitive.Root>);
Switch.displayName=SwitchPrimitive.Root.displayName;
export function Preview(){return <Switch aria-label="Enable forge"/>}
