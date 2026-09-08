'use client'
import { useEffect,useState } from 'react'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
type DoomCracksProps={children:ReactNode;className?:string}
export function DoomCracks({children,className}:DoomCracksProps){const [opacity,setOpacity]=useState(0);useEffect(()=>{const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduce)return;let idle:ReturnType<typeof setTimeout>;const onScroll=()=>{setOpacity(Math.min(.5,window.scrollY/900));clearTimeout(idle);idle=setTimeout(()=>setOpacity(0),800)};addEventListener('scroll',onScroll,{passive:true});return()=>{removeEventListener('scroll',onScroll);clearTimeout(idle)}},[]);return <div className={cn('relative overflow-hidden',className)}>{children}<svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{opacity}} aria-hidden="true"><path d="M22 0 36 34 27 53 43 100M36 34 62 20 74 0M27 53 9 71M43 100 58 67 86 54 100 31" fill="none" stroke="var(--danger)" strokeWidth=".7" /></svg></div>}
export function Preview(){return <DoomCracks><div className="border border-line p-6"><p className="font-display text-lg">Pressure-tested in Mumbai.</p></div></DoomCracks>}
