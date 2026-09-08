import * as React from "react";
import { Kbd } from "./kbd";
export interface KbdShortcutItem { keys:string[]; label:string }
export function KbdShortcuts({items}:{items:KbdShortcutItem[]}){return <div className="flex flex-wrap gap-4">{items.map((item,i)=><div key={i} className="flex items-center gap-2 text-xs text-[var(--fg-dim)]"><span>{item.label}</span><span className="flex gap-1">{item.keys.map(k=><Kbd key={k}>{k}</Kbd>)}</span></div>)}</div>}
export function Preview(){return <KbdShortcuts items={[{label:"Search",keys:["⌘","K"]}]}/>}
