'use client'
import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
type VoltButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }
export function VoltButton({ children, className, ...props }: VoltButtonProps) { return <button {...props} className={cn('border border-accent bg-accent px-4 py-2 font-mono text-sm font-semibold text-accent-ink transition-[box-shadow,transform] hover:brightness-110 active:translate-y-px active:shadow-[inset_0_2px_5px_color-mix(in_srgb,var(--accent-ink)_45%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent', className)} style={{ borderRadius: 'var(--radius)' }}>{children}</button> }
export function Preview() { return <VoltButton onClick={() => undefined}>Open foundry map</VoltButton> }
