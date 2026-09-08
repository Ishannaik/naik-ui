import type { ReactNode } from 'react'
export function ConditionalWrap({ when, wrapper, children }: { when: boolean; wrapper: (node: ReactNode) => ReactNode; children: ReactNode }) { return when ? wrapper(children) : children }
export function Preview() { return <ConditionalWrap when wrapper={(node) => <div className="border border-[var(--line)] p-3">{node}</div>}><span>Wrapped content</span></ConditionalWrap> }
