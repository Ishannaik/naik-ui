'use client'
import { useEffect, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
export function ScrollingHeader({ children, className }: { children: ReactNode; className?: string }) {
 const [condensed, setCondensed] = useState(false)
 useEffect(() => { const onScroll = () => setCondensed(window.scrollY > 24); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
 return <header className={cn('sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)] transition-[padding] duration-200 motion-reduce:transition-none', condensed ? 'px-4 py-2' : 'px-6 py-5', className)}>{children}</header>
}
export function Preview() { return <ScrollingHeader><span className="font-medium text-[var(--fg)]">Scrolling header</span></ScrollingHeader> }
