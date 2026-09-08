'use client'
import { ChevronDown } from 'lucide-react'
import type { ReactNode } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
export type AccordionItem = { title: string; content: ReactNode }
export function SimpleAccordion({ items }: { items: AccordionItem[] }) { return <Accordion.Root type="single" collapsible className="w-full">{items.map((item, index) => <Accordion.Item key={`${item.title}-${index}`} value={`item-${index}`} className="border-b border-[var(--line)]"><Accordion.Header><Accordion.Trigger className="group flex w-full justify-between py-3 text-left text-sm font-medium text-[var(--fg)]">{item.title}<ChevronDown size={16} className="transition-transform group-data-[state=open]:rotate-180 motion-reduce:transition-none" aria-hidden="true" /></Accordion.Trigger></Accordion.Header><Accordion.Content className="pb-3 text-sm text-[var(--fg-dim)]">{item.content}</Accordion.Content></Accordion.Item>)}</Accordion.Root> }
export function Preview() { return <SimpleAccordion items={[{ title: 'What is this?', content: 'A compact accordion.' }]} /> }
