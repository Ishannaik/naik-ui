import { catalog } from "@/lib/catalog";
import { SITE_URL } from "@/lib/utils";

export async function GET() {
  const lines = [
    "# NAIK component registry",
    "",
    "Install with: npx shadcn@latest add " + SITE_URL + "/r/<slug>.json",
    "",
    ...catalog.map((item) => `- ${item.slug}: ${item.title} — ${item.description}`),
    "",
    "AI instructions: " + SITE_URL + "/ai",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
