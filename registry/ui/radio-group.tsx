"use client";
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
export interface RadioItem {value:string;label:string}
export interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>{items:RadioItem[]}
export function RadioGroup({items,className,...props}:RadioGroupProps){return <RadioGroupPrimitive.Root className={cn("grid gap-2",className)} {...props}>{items.map(item=><label key={item.value} className="flex cursor-pointer items-center gap-2 text-sm text-[var(--fg)]"><RadioGroupPrimitive.Item value={item.value} className="h-4 w-4 border border-[var(--line)] text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"><RadioGroupPrimitive.Indicator><Circle className="h-2 w-2 fill-current"/></RadioGroupPrimitive.Indicator></RadioGroupPrimitive.Item>{item.label}</label>)}</RadioGroupPrimitive.Root>}
export function Preview(){return <RadioGroup defaultValue="steel" items={[{value:"steel",label:"Steel"},{value:"copper",label:"Copper"}]}/>}
