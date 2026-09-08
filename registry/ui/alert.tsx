import * as React from "react";
import { cn } from "@/lib/utils";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>{tone?:"mute"|"danger"|"ok"|"water";title:string}
export function Alert({tone="mute",title,children,className,...props}:AlertProps){const colors={mute:"border-[var(--line)]",danger:"border-[var(--danger)]",ok:"border-[var(--ok)]",water:"border-[var(--water)]"}; return <div role="status" className={cn("border-l-2 bg-[var(--bg-2)] px-4 py-3",colors[tone],className)} {...props}><p className="text-sm font-medium text-[var(--fg)]">{title}</p>{children&&<div className="mt-1 text-sm text-[var(--fg-dim)]">{children}</div>}</div>}
export function Preview(){return <Alert title="Ready" tone="ok">The component is registered.</Alert>}
