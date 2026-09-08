import { cn } from '@/lib/utils'
type EncryptionSealProps = { title?: string; className?: string }
export function EncryptionSeal({ title = 'Encrypted before it leaves the browser', className }: EncryptionSealProps) { return <div className={cn('flex items-center gap-3 border border-line bg-bg-2 p-3', className)} style={{ borderRadius:'var(--radius)' }}><svg width="24" height="28" viewBox="0 0 24 28" fill="none" stroke="var(--accent)" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="11" width="18" height="14" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /><path d="M12 16v4" /></svg><div><p className="text-sm">{title}</p><p className="font-mono text-[10px] uppercase tracking-widest text-fg-dim">AES-256 · local key</p></div></div> }
export function Preview() { return <EncryptionSeal /> }
