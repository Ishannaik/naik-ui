import { notFound } from "next/navigation";
import { catalog, getItem } from "@/lib/catalog";
import { installCommand } from "@/lib/utils";
import { ComponentPreview } from "@/components/site/component-preview";
import { InstallBar } from "@/components/site/install-bar";

export function generateStaticParams() {
  return catalog.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) return { title: "Missing" };
  return { title: item.title, description: item.description };
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) notFound();

  return (
    <article className="mx-auto max-w-4xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        {item.category} · {item.harvest}
      </p>
      <h1 className="mt-2 font-display text-4xl font-black tracking-tight sm:text-5xl">
        {item.title}
      </h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-fg-dim">{item.description}</p>
      <InstallBar command={installCommand(item.slug)} />
      <div className="mt-8 border border-line bg-bg-2 p-5 sm:p-8" style={{ borderRadius: 4 }}>
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim">Live</p>
        <ComponentPreview slug={item.slug} />
      </div>
    </article>
  );
}
