"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
export interface SegmentOption {value:string;label:string}
export interface SegmentedControlProps {options:SegmentOption[];value:string;onChange:(value:string)=>void;className?:string}
export function SegmentedControl({options,value,onChange,className}:SegmentedControlProps){return <div role="radiogroup" className={cn("inline-flex border border-[var(--line)] p-1",className)}>{options.map(option=><button key={option.value} type="button" role="radio" aria-checked={value===option.value} onClick={()=>onChange(option.value)} className={cn("px-3 py-1.5 text-xs text-[var(--fg-dim)]",value===option.value&&"bg-[var(--accent)] text-[var(--accent-ink)]")}>{option.label}</button>)}</div>}
export function Preview(){return <SegmentedControl options={[{value:"all",label:"All"},{value:"new",label:"New"}]} value="all" onChange={()=>{}}/>}
