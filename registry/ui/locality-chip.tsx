import { cn } from '@/lib/utils'
type LocalityChipProps = { name: string; mm?: number; active?: boolean; className?: string }
export function LocalityChip({ name, mm, active = false, className }: LocalityChipProps) { return <span className={cn('inline-flex items-center gap-2 border px-3 py-1.5 text-xs', active ? 'border-accent text-accent' : 'border-line text-fg-dim', className)} style={{ borderRadius:'var(--radius)' }}><span className={cn('h-1.5 w-1.5', active ? 'bg-accent' : 'bg-line')} aria-hidden="true" />{name}{mm !== undefined && <span className="font-mono tabular">{mm} mm</span>}</span> }
export function Preview() { return <LocalityChip name="Dadar" mm={18} active /> }
