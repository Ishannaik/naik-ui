import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { catalog, getItem, type CatalogItem } from "./catalog";
import { SITE_URL } from "./utils";

export async function registryItemJson(slug: string) {
  const item = getItem(slug);
  if (!item) return null;
  const content = await readFile(
    join(process.cwd(), "registry", "ui", `${item.slug}.tsx`),
    "utf8",
  );
  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: item.slug,
    type: "registry:ui",
    title: item.title,
    description: item.description,
    dependencies: item.dependencies ?? [],
    registryDependencies: (item.registryDependencies ?? []).map(
      (name) => `${SITE_URL}/r/${name}.json`,
    ),
    files: [
      {
        path: `registry/ui/${item.slug}.tsx`,
        type: "registry:ui",
        content,
        target: `components/naik/${item.slug}.tsx`,
      },
    ],
  };
}

export function registryIndex() {
  return {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "naik",
    homepage: SITE_URL,
    items: catalog.map((item: CatalogItem) => ({
      name: item.slug,
      type: "registry:ui",
      title: item.title,
      description: item.description,
      registryDependencies: item.registryDependencies ?? [],
      dependencies: item.dependencies ?? [],
      files: [
        {
          path: item.file,
          type: "registry:ui",
          target: `components/naik/${item.slug}.tsx`,
        },
      ],
    })),
  };
}
