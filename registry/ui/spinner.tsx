import { cn } from "@/lib/utils";
export function Spinner({size="md",className}:{size?:"sm"|"md";className?:string}){return <span className={cn("inline-block animate-spin border-2 border-[var(--line)] border-t-[var(--accent)]",size==="sm"?"h-4 w-4":"h-6 w-6",className)} role="status" aria-label="Loading"/>}
export function Preview(){return <Spinner/>}
