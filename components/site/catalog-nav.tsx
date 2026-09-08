import Link from "next/link";
import { byCategory } from "@/lib/catalog";

export function CatalogNav() {
  return (
    <nav>
      <Link
        href="/guide"
        className="mb-4 block px-2 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-dim hover:text-fg"
      >
        Install
      </Link>
      {byCategory().map((group) => (
        <div key={group.id} className="mb-5">
          <p className="px-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim">
            {group.label}
            <span className="ml-2 text-accent">{group.items.length}</span>
          </p>
          <ul className="mt-1">
            {group.items.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/component/${item.slug}`}
                  className="block rounded-[4px] px-2 py-1 text-[13px] text-fg/90 hover:bg-bg-2 hover:text-fg"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
