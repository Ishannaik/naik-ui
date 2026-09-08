"use client";
import * as React from "react";
import { Checkbox } from "./checkbox";
import { cn } from "@/lib/utils";
export interface LabeledCheckboxProps extends React.ComponentPropsWithoutRef<typeof Checkbox>{title:string;description?:string}
export function LabeledCheckbox({title,description,id,className,...props}:LabeledCheckboxProps){const controlId=id??React.useId(); return <label htmlFor={controlId} className={cn("flex items-start gap-3 border-b border-[var(--line)] py-3",className)}><Checkbox id={controlId} {...props}/><span><span className="block text-sm text-[var(--fg)]">{title}</span>{description&&<span className="block text-xs text-[var(--fg-dim)]">{description}</span>}</span></label>}
export function Preview(){return <LabeledCheckbox title="Ship source maps"/>}
