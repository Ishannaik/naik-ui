'use client'
import type { ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
export function SimpleTooltip({ content, children }: { content: string; children: ReactNode }) { return <TooltipPrimitive.Provider><TooltipPrimitive.Root><TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger><TooltipPrimitive.Portal><TooltipPrimitive.Content sideOffset={5} className="z-50 border border-[var(--line)] bg-[var(--bg-2)] px-2 py-1 text-xs text-[var(--fg)]">{content}</TooltipPrimitive.Content></TooltipPrimitive.Portal></TooltipPrimitive.Root></TooltipPrimitive.Provider> }
export function Preview() { return <SimpleTooltip content="More information"><button type="button" className="border border-[var(--line)] px-3 py-2 text-sm">Hover me</button></SimpleTooltip> }
