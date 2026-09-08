import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://components.ishannaik.com";

export function installCommand(slug: string) {
  return `npx shadcn@latest add ${SITE_URL}/r/${slug}.json`;
}
