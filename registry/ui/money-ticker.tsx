'use client'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
type MoneyTickerProps = { amountPerSecond: number; currency?: string; startAmount?: number; className?: string }
export function MoneyTicker({ amountPerSecond, currency = 'INR', startAmount = 0, className }: MoneyTickerProps) { const [amount, setAmount] = useState(startAmount); useEffect(() => { const started = performance.now(); let frame = 0; const tick = (now:number) => { setAmount(startAmount + ((now-started)/1000)*amountPerSecond); frame = requestAnimationFrame(tick) }; frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame) }, [amountPerSecond, startAmount]); const formatted = new Intl.NumberFormat('en-IN', { style:'currency', currency, maximumFractionDigits:2 }).format(amount); return <output className={cn('font-mono text-2xl tabular text-accent', className)} aria-live="polite">{formatted}</output> }
export function Preview() { return <MoneyTicker amountPerSecond={1.25} startAmount={18420} /> }
