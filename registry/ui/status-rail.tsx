import { cn } from '@/lib/utils'
type StatusRailProps = { status: 'operational'|'degraded'|'down'; title: string; since?: string; className?: string }
const tone = { operational: 'var(--ok)', degraded: 'var(--accent)', down: 'var(--danger)' }
export function StatusRail({ status, title, since, className }: StatusRailProps) { return <div className={cn('flex items-center gap-3 border border-line bg-bg-2 px-4 py-3', className)} style={{ borderRadius:'var(--radius)' }}><i className="h-2.5 w-2.5 shrink-0" style={{ backgroundColor: tone[status] }} aria-hidden="true" /><div className="min-w-0"><div className="font-display text-sm">{title}</div><div className="font-mono text-[10px] uppercase tracking-widest text-fg-dim">{status}{since ? ` · since ${since}` : ''}</div></div></div> }
export function Preview() { return <StatusRail title="Mumbai rain relay" status="operational" since="06:40 IST" /> }
