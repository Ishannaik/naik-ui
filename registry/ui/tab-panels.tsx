"use client";
import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
export interface TabPanelItem {id:string;label:string;content:React.ReactNode}
export function TabPanels({tabs,className}:{tabs:TabPanelItem[];className?:string}){return <Tabs.Root defaultValue={tabs[0]?.id} className={cn("w-full",className)}><Tabs.List className="flex gap-5 border-b border-[var(--line)]">{tabs.map(tab=><Tabs.Trigger key={tab.id} value={tab.id} className="border-b-2 border-transparent py-2 text-sm text-[var(--fg-dim)] data-[state=active]:border-[var(--accent)] data-[state=active]:text-[var(--fg)]">{tab.label}</Tabs.Trigger>)}</Tabs.List>{tabs.map(tab=><Tabs.Content key={tab.id} value={tab.id} className="pt-4 focus-visible:outline-2 focus-visible:outline-[var(--accent)]">{tab.content}</Tabs.Content>)}</Tabs.Root>}
export function Preview(){return <TabPanels tabs={[{id:"one",label:"Overview",content:<p className="text-sm text-[var(--fg-dim)]">Registry overview</p>},{id:"two",label:"Usage",content:<p className="text-sm text-[var(--fg-dim)]">Usage details</p>}]}/>}
