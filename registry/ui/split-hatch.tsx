import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
type SplitHatchProps = { children: ReactNode; className?: string }
export function SplitHatch({ children, className }: SplitHatchProps) { return <div className={cn('border border-line p-5', className)} style={{ borderRadius:'var(--radius)', backgroundImage:'repeating-linear-gradient(-45deg, transparent 0 7px, color-mix(in srgb, var(--line) 70%, transparent) 7px 8px)' }}>{children}</div> }
export function Preview() { return <SplitHatch><p className="font-display">Built for wet streets.</p><p className="mt-1 text-sm text-fg-dim">A diagonal hatch keeps the edge visible.</p></SplitHatch> }
