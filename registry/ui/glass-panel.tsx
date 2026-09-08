import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
type GlassPanelProps = { children: ReactNode; className?: string }
export function GlassPanel({ children, className }: GlassPanelProps) { return <section className={cn('border border-line bg-bg-2/70 p-5 backdrop-blur-md', className)} style={{ borderRadius: 'var(--radius)' }}>{children}</section> }
export function Preview() { return <GlassPanel><p className="font-display text-lg">Bandra rain desk</p><p className="mt-1 text-sm text-fg-dim">A clear pane over the foundry floor.</p></GlassPanel> }
