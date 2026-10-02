import Link from "next/link";
import { catalog } from "@/lib/catalog";
import { CatalogNav } from "@/components/site/catalog-nav";
import { MobileNav } from "@/components/site/mobile-nav";
import { ThemeToggle } from "@/components/site/theme-toggle";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-full">
      <div className="foundry-grain pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative grid min-h-full lg:grid-cols-[17rem_1fr]">
        <aside className="scrollbar-thin hidden border-r border-line lg:sticky lg:top-0 lg:block lg:h-svh lg:overflow-y-auto">
          <div className="flex items-baseline justify-between gap-3 px-4 py-5">
            <Link href="/" className="block">
              <span className="font-display text-2xl font-black tracking-tight text-accent">न</span>
              <span className="ml-2 font-display text-lg font-bold tracking-[0.18em]">NAIK</span>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
                source you keep
              </p>
            </Link>
          </div>
          <div className="px-2 pb-8">
            <CatalogNav />
          </div>
        </aside>
        <div className="min-w-0">
          <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-line bg-bg/85 px-4 py-3 backdrop-blur-md">
            <Link href="/" className="font-display text-base font-bold tracking-[0.14em] lg:hidden">
              <span className="text-accent">न</span> NAIK
            </Link>
            <MobileNav>
              <CatalogNav />
            </MobileNav>
            <p className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-fg-dim sm:block">
              {catalog.length} parts · shadcn registry
            </p>
            <div className="ml-auto flex items-center gap-3">
              <Link
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-dim hover:text-accent"
                href="/ai"
              >
                For AI
              </Link>
              <a
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-dim hover:text-accent"
                href="https://ishannaik.com"
              >
                ishannaik.com
              </a>
              <ThemeToggle />
            </div>
          </header>
          <div className="px-4 py-6 sm:px-8 sm:py-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
