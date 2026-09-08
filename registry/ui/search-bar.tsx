"use client";
import * as React from "react";
import { Search, X } from "lucide-react";
import { Kbd } from "./kbd";
import { cn } from "@/lib/utils";
export interface SearchBarProps {value:string;onChange:(value:string)=>void;placeholder?:string;shortcut?:string;onClear?:()=>void;className?:string}
export function SearchBar({value,onChange,placeholder="Search registry",shortcut,onClear,className}:SearchBarProps){return <div className={cn("flex h-10 items-center gap-2 border border-[var(--line)] bg-[var(--bg-2)] px-3",className)}><Search className="h-4 w-4 text-[var(--fg-dim)]" aria-hidden="true"/><input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} className="min-w-0 flex-1 bg-transparent text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-dim)]" aria-label={placeholder}/>{value&&onClear?<button type="button" onClick={onClear} aria-label="Clear search"><X className="h-4 w-4"/></button>:shortcut?<Kbd>{shortcut}</Kbd>:null}</div>}
export function Preview(){return <SearchBar value="" onChange={()=>{}}/>}
