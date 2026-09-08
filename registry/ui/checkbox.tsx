"use client";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
export const Checkbox=React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>,React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>>(({className,...props},ref)=><CheckboxPrimitive.Root ref={ref} className={cn("h-5 w-5 border border-[var(--line)] bg-[var(--bg-2)] text-[var(--accent-ink)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] data-[state=checked]:border-[var(--accent)] data-[state=checked]:bg-[var(--accent)]",className)} {...props}><CheckboxPrimitive.Indicator><Check className="h-3.5 w-3.5"/></CheckboxPrimitive.Indicator></CheckboxPrimitive.Root>);
Checkbox.displayName=CheckboxPrimitive.Root.displayName;
export function Preview(){return <Checkbox aria-label="Include metadata"/>}
