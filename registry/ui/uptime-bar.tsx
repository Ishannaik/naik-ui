import { cn } from '@/lib/utils'
type UptimeBarProps = { days: ('up'|'down'|'degraded')[]; title?: string; className?: string }
const colors = { up: 'var(--ok)', down: 'var(--danger)', degraded: 'var(--accent)' }
export function UptimeBar({ days, title = 'Uptime · last 90 days', className }: UptimeBarProps) { return <div className={cn('space-y-2', className)}><div className="flex justify-between text-xs uppercase tracking-widest text-fg-dim"><span>{title}</span><span className="font-mono">{days.length}d</span></div><div className="flex h-7 gap-px" role="img" aria-label={`${title}: ${days.filter(d=>d==='up').length} operational days`}>{days.map((day, i) => <span key={i} title={`${day} · day ${i+1}`} className="min-w-0 flex-1" style={{ backgroundColor: colors[day], opacity: day === 'up' ? .82 : 1 }} />)}</div></div> }
export function Preview() { return <UptimeBar days={Array.from({length: 90}, (_, i) => i === 36 ? 'degraded' : 'up')} /> }
