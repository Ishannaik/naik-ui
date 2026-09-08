'use client'
import type { ReactNode } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
export type MenuItem = { label: string; onSelect: () => void; danger?: boolean }
export function AdaptiveMenu({ trigger, items }: { trigger: ReactNode; items: MenuItem[] }) { return <DropdownMenu.Root><DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger><DropdownMenu.Portal><DropdownMenu.Content align="start" sideOffset={5} className="z-50 min-w-40 border border-[var(--line)] bg-[var(--bg-2)] p-1 text-sm text-[var(--fg)]">{items.map((item) => <DropdownMenu.Item key={item.label} onSelect={item.onSelect} className={`cursor-pointer px-3 py-2 outline-none hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] ${item.danger ? 'text-[var(--danger)]' : ''}`}>{item.label}</DropdownMenu.Item>)}</DropdownMenu.Content></DropdownMenu.Portal></DropdownMenu.Root> }
export function Preview() { return <AdaptiveMenu trigger={<button type="button" className="border border-[var(--line)] px-3 py-2 text-sm">Menu</button>} items={[{ label: 'Edit', onSelect: () => {} }, { label: 'Delete', onSelect: () => {}, danger: true }]} /> }
