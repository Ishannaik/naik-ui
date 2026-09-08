'use client'
import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
type MatrixRainProps = { className?: string }
const glyphs = 'पाऊसवारा मुंबई नाईक カタカナ 0xA7 0x4F'
export function MatrixRain({ className }: MatrixRainProps) {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current; const ctx = canvas?.getContext('2d'); if (!canvas || !ctx) return
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches; let raf = 0; let visible = true; let cols = 0; let drops: number[] = []
    const resize = () => { const dpr = devicePixelRatio || 1; canvas.width = canvas.clientWidth*dpr; canvas.height = canvas.clientHeight*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); cols = Math.ceil(canvas.clientWidth/16); drops = Array.from({length:cols}, () => Math.random()*-30) }
    const draw = () => { const w=canvas.clientWidth, h=canvas.clientHeight; ctx.fillStyle='color-mix(in srgb, var(--bg) 22%, transparent)'; ctx.fillRect(0,0,w,h); ctx.fillStyle='var(--accent)'; ctx.font='13px var(--font-mono)'; drops.forEach((y,i)=>{ctx.globalAlpha=.42;ctx.fillText(glyphs[Math.floor(Math.random()*glyphs.length)],i*16,y*16);drops[i]=y>h/16+Math.random()*20?0:y+.45});ctx.globalAlpha=1;if(!reduce&&visible&&document.visibilityState==='visible')raf=requestAnimationFrame(draw) }
    const wake = () => { cancelAnimationFrame(raf); if (visible && !reduce && document.visibilityState==='visible') raf=requestAnimationFrame(draw) }
    resize(); const ro = new ResizeObserver(resize); ro.observe(canvas); const io = new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;wake()}); io.observe(canvas); document.addEventListener('visibilitychange',wake); draw()
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); document.removeEventListener('visibilitychange',wake) }
  }, [])
  return <canvas ref={ref} className={cn('h-48 w-full', className)} aria-label="Decorative rain glyphs" />
}
export function Preview() { return <MatrixRain /> }
