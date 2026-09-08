import { cn } from '@/lib/utils'

type AuraRingProps = { value?: number; size?: number; label?: string; className?: string }
export function AuraRing({ value = 72, size = 120, label = 'Rain chance', className }: AuraRingProps) {
  const clamped = Math.max(0, Math.min(100, value)); const radius = 44; const circumference = 2 * Math.PI * radius
  return <div className={cn('relative inline-grid place-items-center', className)} style={{ width: size, height: size }} aria-label={`${label}: ${clamped}%`}>
    <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90" aria-hidden="true"><circle cx="50" cy="50" r={radius} fill="none" stroke="var(--line)" strokeWidth="5" /><circle cx="50" cy="50" r={radius} fill="none" stroke="var(--accent)" strokeWidth="5" strokeLinecap="square" strokeDasharray={circumference} strokeDashoffset={circumference * (1 - clamped / 100)} /></svg>
    <span className="font-mono text-xl tabular">{clamped}%</span><span className="absolute bottom-3 text-[10px] uppercase tracking-widest text-fg-dim">{label}</span>
  </div>
}
export function Preview() { return <AuraRing value={78} label="Monsoon" /> }
