import type { ReactNode } from 'react'
export function MacWindow({ title, children }: { title: string; children: ReactNode }) {
 return <section className="overflow-hidden border border-[var(--line)] bg-[var(--bg-2)]" style={{ borderRadius: 'var(--radius)' }}><header className="flex items-center gap-2 border-b border-[var(--line)] px-3 py-2"><span className="h-2.5 w-2.5 bg-[var(--danger)]" style={{ borderRadius: '50%' }} /><span className="h-2.5 w-2.5 bg-[var(--accent)]" style={{ borderRadius: '50%' }} /><span className="h-2.5 w-2.5 bg-[var(--ok)]" style={{ borderRadius: '50%' }} /><span className="ml-2 text-xs text-[var(--fg-dim)]">{title}</span></header><div>{children}</div></section>
}
export function Preview() { return <MacWindow title="Preview"><div className="p-6 text-sm text-[var(--fg)]">Window content</div></MacWindow> }
