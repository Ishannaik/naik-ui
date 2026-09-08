import { catalog } from "@/lib/catalog";
import { SITE_URL } from "@/lib/utils";

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-2xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Usage</p>
      <h1 className="mt-2 font-display text-4xl font-black tracking-tight">Install the source</h1>
      <p className="mt-4 text-[15px] leading-7 text-fg-dim">
        NAIK is a shadcn registry, not an npm package. The CLI copies files into your repo.
        You own them after that.
      </p>
      <h2 className="mt-10 font-display text-2xl font-bold">1. Point components.json at NAIK</h2>
      <pre className="mt-3 overflow-x-auto border border-line bg-bg-2 p-4 font-mono text-[12px] leading-6">{`{
  "registries": {
    "@naik": "${SITE_URL}/r/{name}.json"
  }
}`}</pre>
      <h2 className="mt-10 font-display text-2xl font-bold">2. Add a part</h2>
      <pre className="mt-3 overflow-x-auto border border-line bg-bg-2 p-4 font-mono text-[12px] leading-6">{`npx shadcn@latest add @naik/adaptive-dialog
npx shadcn@latest add ${SITE_URL}/r/tilt-card.json`}</pre>
      <h2 className="mt-10 font-display text-2xl font-bold">3. Tokens</h2>
      <p className="mt-3 text-[15px] leading-7 text-fg-dim">
        Components read these CSS variables. Dark is the default (asphalt). Light is paper
        under a sodium lamp — not cream-and-sage.
      </p>
      <pre className="mt-3 overflow-x-auto border border-line bg-bg-2 p-4 font-mono text-[12px] leading-6">{`--bg: #13110e;
--bg-2: #1b1814;
--fg: #efe6d6;
--fg-dim: #a89a86;
--line: #2e2a23;
--accent: #e08a2c;
--water: #2f8a8a;`}</pre>
      <h2 className="mt-10 font-display text-2xl font-bold">Index</h2>
      <p className="mt-3 font-mono text-[12px] text-fg-dim">
        {SITE_URL}/registry.json · {catalog.length} items
      </p>
    </article>
  );
}
