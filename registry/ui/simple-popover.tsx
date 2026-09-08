'use client'
import type { ReactNode } from 'react'
import * as Popover from '@radix-ui/react-popover'
export function SimplePopover({ trigger, children }: { trigger: ReactNode; children: ReactNode }) { return <Popover.Root><Popover.Trigger asChild>{trigger}</Popover.Trigger><Popover.Portal><Popover.Content sideOffset={6} className="z-50 border border-[var(--line)] bg-[var(--bg-2)] p-4 text-sm text-[var(--fg)] shadow-lg">{children}<Popover.Arrow className="fill-[var(--bg-2)]" /></Popover.Content></Popover.Portal></Popover.Root> }
export function Preview() { return <SimplePopover trigger={<button type="button" className="border border-[var(--line)] px-3 py-2 text-sm">Open</button>}>Popover content</SimplePopover> }
