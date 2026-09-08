import * as React from "react";
import { cn } from "@/lib/utils";
export interface PageHeaderProps {eyebrow?:string;title:string;description?:string;actions?:React.ReactNode;className?:string}
export function PageHeader({eyebrow,title,description,actions,className}:PageHeaderProps){return <header className={cn("flex flex-wrap items-end justify-between gap-4 border-b border-[var(--line)] pb-5",className)}><div>{eyebrow&&<p className="mb-2 font-mono text-[10px] uppercase tracking-[.2em] text-[var(--accent)]">{eyebrow}</p>}<h1 className="font-display text-3xl text-[var(--fg)]">{title}</h1>{description&&<p className="mt-2 max-w-xl text-sm text-[var(--fg-dim)]">{description}</p>}</div>{actions&&<div className="flex items-center gap-2">{actions}</div>}</header>}
export function Preview(){return <PageHeader eyebrow="Registry" title="Foundry" description="Production-ready interface parts."/>}
