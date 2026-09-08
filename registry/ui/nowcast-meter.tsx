import { cn } from '@/lib/utils'
type NowcastMeterProps = { mm: number; label?: string; className?: string }
export function NowcastMeter({ mm, label = 'Rain nowcast', className }: NowcastMeterProps) { const value = Math.max(0, Math.min(40, mm)); return <div className={cn('space-y-2', className)}><div className="flex justify-between text-xs uppercase tracking-widest"><span>{label}</span><span className="font-mono text-accent">{value.toFixed(1)} mm</span></div><div className="h-2 bg-line"><div className="h-full bg-water transition-[width]" style={{ width:`${value / 40 * 100}%` }} /></div><div className="flex justify-between font-mono text-[10px] text-fg-dim"><span>0</span><span>40 mm</span></div></div> }
export function Preview() { return <NowcastMeter mm={24.5} label="Lower Parel" /> }
