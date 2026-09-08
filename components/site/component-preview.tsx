"use client";

import { Suspense, lazy, type ComponentType } from "react";

const loaders: Record<string, () => Promise<{ Preview: ComponentType }>> = {
  button: () => import("@/registry/ui/button"),
  badge: () => import("@/registry/ui/badge"),
  kbd: () => import("@/registry/ui/kbd"),
  "kbd-shortcuts": () => import("@/registry/ui/kbd-shortcuts"),
  input: () => import("@/registry/ui/input"),
  textarea: () => import("@/registry/ui/textarea"),
  switch: () => import("@/registry/ui/switch"),
  checkbox: () => import("@/registry/ui/checkbox"),
  "radio-group": () => import("@/registry/ui/radio-group"),
  "labeled-switch": () => import("@/registry/ui/labeled-switch"),
  "labeled-checkbox": () => import("@/registry/ui/labeled-checkbox"),
  "form-field": () => import("@/registry/ui/form-field"),
  "search-bar": () => import("@/registry/ui/search-bar"),
  "segmented-control": () => import("@/registry/ui/segmented-control"),
  spinner: () => import("@/registry/ui/spinner"),
  alert: () => import("@/registry/ui/alert"),
  separator: () => import("@/registry/ui/separator"),
  "page-header": () => import("@/registry/ui/page-header"),
  "tab-panels": () => import("@/registry/ui/tab-panels"),
  "help-tip": () => import("@/registry/ui/help-tip"),
  "social-login": () => import("@/registry/ui/social-login"),
  "mac-window": () => import("@/registry/ui/mac-window"),
  "scrolling-header": () => import("@/registry/ui/scrolling-header"),
  "conditional-wrap": () => import("@/registry/ui/conditional-wrap"),
  "simple-tooltip": () => import("@/registry/ui/simple-tooltip"),
  "simple-popover": () => import("@/registry/ui/simple-popover"),
  "simple-accordion": () => import("@/registry/ui/simple-accordion"),
  "simple-select": () => import("@/registry/ui/simple-select"),
  "advanced-select": () => import("@/registry/ui/advanced-select"),
  "icon-picker": () => import("@/registry/ui/icon-picker"),
  "bottom-drawer": () => import("@/registry/ui/bottom-drawer"),
  "adaptive-dialog": () => import("@/registry/ui/adaptive-dialog"),
  "adaptive-menu": () => import("@/registry/ui/adaptive-menu"),
  "dialog-manager": () => import("@/registry/ui/dialog-manager"),
  "theme-switch": () => import("@/registry/ui/theme-switch"),
  "theme-slider": () => import("@/registry/ui/theme-slider"),
  "tilt-card": () => import("@/registry/ui/tilt-card"),
  "magnetic-cursor": () => import("@/registry/ui/magnetic-cursor"),
  "kinetic-headline": () => import("@/registry/ui/kinetic-headline"),
  "pinned-reveal": () => import("@/registry/ui/pinned-reveal"),
  "hero-parallax": () => import("@/registry/ui/hero-parallax"),
  "depth-figure": () => import("@/registry/ui/depth-figure"),
  "matrix-rain": () => import("@/registry/ui/matrix-rain"),
  "sodium-dust": () => import("@/registry/ui/sodium-dust"),
  "gold-leaf": () => import("@/registry/ui/gold-leaf"),
  "aura-ring": () => import("@/registry/ui/aura-ring"),
  "glass-panel": () => import("@/registry/ui/glass-panel"),
  "volt-button": () => import("@/registry/ui/volt-button"),
  "uptime-bar": () => import("@/registry/ui/uptime-bar"),
  "status-rail": () => import("@/registry/ui/status-rail"),
  "money-ticker": () => import("@/registry/ui/money-ticker"),
  "locality-chip": () => import("@/registry/ui/locality-chip"),
  "nowcast-meter": () => import("@/registry/ui/nowcast-meter"),
  "flood-badge": () => import("@/registry/ui/flood-badge"),
  "warp-drop": () => import("@/registry/ui/warp-drop"),
  "doom-cracks": () => import("@/registry/ui/doom-cracks"),
  typewriter: () => import("@/registry/ui/typewriter"),
  "marquee-rail": () => import("@/registry/ui/marquee-rail"),
  "number-ticker": () => import("@/registry/ui/number-ticker"),
  "password-meter": () => import("@/registry/ui/password-meter"),
  "encryption-seal": () => import("@/registry/ui/encryption-seal"),
  "share-card": () => import("@/registry/ui/share-card"),
  "beam-frame": () => import("@/registry/ui/beam-frame"),
  "particle-ash": () => import("@/registry/ui/particle-ash"),
  "spotlight-wash": () => import("@/registry/ui/spotlight-wash"),
  "split-hatch": () => import("@/registry/ui/split-hatch"),
};

export function ComponentPreview({ slug }: { slug: string }) {
  const load = loaders[slug];
  if (!load) return <p className="text-sm text-fg-dim">No preview yet.</p>;
  const Lazy = lazy(async () => {
    const mod = await load();
    return { default: mod.Preview };
  });
  return (
    <Suspense fallback={<p className="font-mono text-xs text-fg-dim">Mounting…</p>}>
      <Lazy />
    </Suspense>
  );
}
