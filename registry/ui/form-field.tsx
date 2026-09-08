import * as React from "react";
import { cn } from "@/lib/utils";
export interface FormFieldProps {label:string;hint?:string;error?:string;htmlFor:string;children:React.ReactNode;className?:string}
export function FormField({label,hint,error,htmlFor,children,className}:FormFieldProps){return <div className={cn("grid gap-1.5",className)}><label htmlFor={htmlFor} className="text-xs font-medium text-[var(--fg)]">{label}</label>{children}{error?<p className="text-xs text-[var(--danger)]" role="alert">{error}</p>:hint?<p className="text-xs text-[var(--fg-dim)]">{hint}</p>:null}</div>}
export function Preview(){return <FormField label="Name" htmlFor="preview-name" hint="A short identifier"><input id="preview-name" className="h-10 border border-[var(--line)] bg-[var(--bg-2)] px-3" /></FormField>}
