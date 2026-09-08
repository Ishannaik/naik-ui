"use client";
import * as React from "react";
import { Switch } from "./switch";
import { cn } from "@/lib/utils";
export interface LabeledSwitchProps extends React.ComponentPropsWithoutRef<typeof Switch>{title:string;description?:string}
export function LabeledSwitch({title,description,id,className,...props}:LabeledSwitchProps){const controlId=id??React.useId(); return <label htmlFor={controlId} className={cn("flex items-center justify-between gap-4 border-b border-[var(--line)] py-3",className)}><span><span className="block text-sm text-[var(--fg)]">{title}</span>{description&&<span className="block text-xs text-[var(--fg-dim)]">{description}</span>}</span><Switch id={controlId} {...props}/></label>}
export function Preview(){return <LabeledSwitch title="Live updates" description="Refresh registry metadata"/>}
