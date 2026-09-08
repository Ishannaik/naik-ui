import * as React from "react";
import { cn } from "@/lib/utils";
export function Textarea({className,...props}:React.TextareaHTMLAttributes<HTMLTextAreaElement>){return <textarea className={cn("min-h-24 w-full border border-[var(--line)] bg-[var(--bg-2)] px-3 py-2 text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-dim)] focus:border-[var(--accent)]",className)} {...props}/>}
export function Preview(){return <Textarea placeholder="Describe the specimen"/>}
