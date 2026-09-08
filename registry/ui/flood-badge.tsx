import { cn } from '@/lib/utils'
type FloodBadgeProps = { level: 'low'|'watch'|'waterlogged'; className?: string }
const labels = { low:'Low flood risk', watch:'Flood watch', waterlogged:'Waterlogged' }
const colors = { low:'var(--ok)', watch:'var(--accent)', waterlogged:'var(--danger)' }
export function FloodBadge({ level, className }: FloodBadgeProps) { return <span className={cn('inline-flex items-center gap-2 border px-3 py-1.5 text-xs uppercase tracking-wider', className)} style={{ borderRadius:'var(--radius)', borderColor:colors[level], color:colors[level] }}><span className="h-1.5 w-1.5" style={{ backgroundColor:colors[level] }} aria-hidden="true" />{labels[level]}</span> }
export function Preview() { return <FloodBadge level="watch" /> }
