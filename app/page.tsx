import Link from "next/link";
import { byCategory, catalog } from "@/lib/catalog";
import { installCommand } from "@/lib/utils";

export default function HomePage() {
  let n = 0;
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            components.ishannaik.com
          </p>
          <h1 className="mt-3 max-w-xl font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
            Parts from the work.
            <span className="block text-fg-dim">Not a kit from a template.</span>
          </h1>
        </div>
        <p className="max-w-md text-[15px] leading-7 text-fg-dim">
          NAIK is the registry behind Ishan Naik’s sites — CloakBin, mumbai-rain, Apex,
          warp, cinematic scroll, Rush Labs. Plus the small APIs Kitze made obvious:
          dialog on desktop, drawer on a phone, one prop list. Install the source with
          the shadcn CLI. Change every pixel.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3 border-y border-line py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-dim">
        <span>{catalog.length} components</span>
        <span className="text-line">/</span>
        <span>copy, don’t npm-lock</span>
        <span className="text-line">/</span>
        <code className="normal-case tracking-normal text-fg">
          npx shadcn@latest add @naik/tilt-card
        </code>
      </div>

      {byCategory().map((group) => (
        <section key={group.id} className="mt-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {group.label}
            <span className="ml-2 text-fg-dim"> {group.items.length}</span>
          </h2>
          <ol className="mt-4 columns-1 gap-x-8 sm:columns-2 xl:columns-3">
            {group.items.map((item) => {
              n += 1;
              return (
                <li key={item.slug} className="mb-4 break-inside-avoid border-t border-line pt-3">
                  <Link href={`/component/${item.slug}`} className="group block">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-mono text-[10px] text-fg-dim">
                        {String(n).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="mt-1 font-display text-xl font-bold tracking-tight group-hover:text-accent">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-5 text-fg-dim">{item.description}</p>
                    <p className="mt-2 font-mono text-[10px] text-fg-dim/80">{item.harvest}</p>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      ))}

      <pre className="mt-12 overflow-x-auto border border-line bg-bg-2 p-4 font-mono text-[12px] leading-6 text-fg">
        {installCommand("adaptive-dialog")}
      </pre>
    </div>
  );
}
