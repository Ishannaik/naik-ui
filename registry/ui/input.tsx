import * as React from "react";
import { cn } from "@/lib/utils";
export function Input({className,type="text",...props}:React.InputHTMLAttributes<HTMLInputElement>){return <input type={type} className={cn("h-10 w-full border border-[var(--line)] bg-[var(--bg-2)] px-3 text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-dim)] focus:border-[var(--accent)]",className)} {...props}/>}
export function Preview(){return <Input placeholder="Component name"/>}
