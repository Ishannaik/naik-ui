export type Category =
  | "form"
  | "responsive"
  | "pragmatic"
  | "foundry"
  | "motion"
  | "theme";

export type CatalogItem = {
  slug: string;
  title: string;
  description: string;
  category: Category;
  harvest: string;
  file: string;
  dependencies?: string[];
  registryDependencies?: string[];
  wide?: boolean;
};

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: "foundry", label: "Foundry" },
  { id: "motion", label: "Motion" },
  { id: "pragmatic", label: "Pragmatic" },
  { id: "responsive", label: "Responsive" },
  { id: "form", label: "Form" },
  { id: "theme", label: "Theme" },
];

export const catalog: CatalogItem[] = [
  { slug: "button", title: "Button", description: "The button you actually ship: loading, icons, link mode, sodium/water/ghost tones.", category: "pragmatic", harvest: "Kitze Custom Button API, rewritten", file: "registry/ui/button.tsx", dependencies: ["class-variance-authority", "@radix-ui/react-slot"] },
  { slug: "badge", title: "Badge", description: "Tight status chip. Sodium, water, danger, mute.", category: "pragmatic", harvest: "Kitze Custom Badge API, rewritten", file: "registry/ui/badge.tsx" },
  { slug: "kbd", title: "Kbd", description: "Keyboard key glyph that looks like a keycap, not a rounded pill.", category: "pragmatic", harvest: "Kitze Kbd, rewritten", file: "registry/ui/kbd.tsx" },
  { slug: "kbd-shortcuts", title: "Kbd shortcuts", description: "List of chords with labels. For command palettes and help overlays.", category: "pragmatic", harvest: "Kitze Kbd Shortcuts, rewritten", file: "registry/ui/kbd-shortcuts.tsx", registryDependencies: ["kbd"] },
  { slug: "input", title: "Input", description: "Single-line field with a hard edge and a sodium focus ring.", category: "form", harvest: "Kitze Input, rewritten", file: "registry/ui/input.tsx" },
  { slug: "textarea", title: "Textarea", description: "Multiline field that grows with content when asked.", category: "form", harvest: "Kitze Form Field Textarea, rewritten", file: "registry/ui/textarea.tsx" },
  { slug: "switch", title: "Switch", description: "Latch, not a candy pill. Square travel, sodium on-state.", category: "form", harvest: "Kitze Switch, rewritten", file: "registry/ui/switch.tsx", dependencies: ["@radix-ui/react-switch"] },
  { slug: "checkbox", title: "Checkbox", description: "Square check with an ink tick. No bouncing scale.", category: "form", harvest: "Kitze Checkbox, rewritten", file: "registry/ui/checkbox.tsx", dependencies: ["@radix-ui/react-checkbox"] },
  { slug: "radio-group", title: "Radio group", description: "Exclusive choice with a sodium disc.", category: "form", harvest: "Kitze Radio Group, rewritten", file: "registry/ui/radio-group.tsx", dependencies: ["@radix-ui/react-radio-group"] },
  { slug: "labeled-switch", title: "Labeled switch", description: "Label, description, and switch on one row. Click the copy.", category: "form", harvest: "Kitze Labeled Switch, rewritten", file: "registry/ui/labeled-switch.tsx", registryDependencies: ["switch"] },
  { slug: "labeled-checkbox", title: "Labeled checkbox", description: "Label + hint wired to a checkbox. Whole row is the hit target.", category: "form", harvest: "Kitze Labeled Checkbox, rewritten", file: "registry/ui/labeled-checkbox.tsx", registryDependencies: ["checkbox"] },
  { slug: "form-field", title: "Form field", description: "Label, optional hint, error, and control. The wrapper you rewrite in every app.", category: "form", harvest: "Kitze Form Field Wrapper, rewritten", file: "registry/ui/form-field.tsx", dependencies: ["@radix-ui/react-label"] },
  { slug: "search-bar", title: "Search bar", description: "Icon, field, clear, optional kbd. One component instead of four.", category: "form", harvest: "Kitze Search Bar, rewritten", file: "registry/ui/search-bar.tsx", registryDependencies: ["input", "kbd"], dependencies: ["lucide-react"] },
  { slug: "segmented-control", title: "Segmented control", description: "Two to five exclusive options in a machined track.", category: "form", harvest: "Kitze Segmented Control, rewritten", file: "registry/ui/segmented-control.tsx" },
  { slug: "spinner", title: "Spinner", description: "Arc spinner. No emoji, no bouncing dots.", category: "pragmatic", harvest: "Kitze Spinner, rewritten", file: "registry/ui/spinner.tsx" },
  { slug: "alert", title: "Alert", description: "Inline notice with a left rule instead of a pastel card.", category: "pragmatic", harvest: "Kitze UI Alert, rewritten", file: "registry/ui/alert.tsx" },
  { slug: "separator", title: "Separator", description: "Hairline rule, horizontal or vertical.", category: "pragmatic", harvest: "shadcn separator, restyled", file: "registry/ui/separator.tsx", dependencies: ["@radix-ui/react-separator"] },
  { slug: "page-header", title: "Page header", description: "Eyebrow, title, description, actions. The top of every settings page.", category: "pragmatic", harvest: "Kitze Page Header, rewritten", file: "registry/ui/page-header.tsx", wide: true },
  { slug: "tab-panels", title: "Tab panels", description: "Underline tabs, not pill tabs. Keyboard-able.", category: "pragmatic", harvest: "Kitze Tab Panels, rewritten", file: "registry/ui/tab-panels.tsx", dependencies: ["@radix-ui/react-tabs"], wide: true },
  { slug: "help-tip", title: "Help tip", description: "Tiny info mark that opens a tooltip. For dense forms.", category: "pragmatic", harvest: "Kitze Help Info Circle, rewritten", file: "registry/ui/help-tip.tsx", registryDependencies: ["simple-tooltip"], dependencies: ["lucide-react"] },
  { slug: "social-login", title: "Social login", description: "Provider button with mark, label, and loading. GitHub / Google / Discord.", category: "pragmatic", harvest: "Kitze Social Login Button, rewritten", file: "registry/ui/social-login.tsx", registryDependencies: ["button"] },
  { slug: "mac-window", title: "Mac window", description: "Traffic-light chrome around a demo. For landing shots, not OS cosplay.", category: "pragmatic", harvest: "Kitze Mac Window, rewritten", file: "registry/ui/mac-window.tsx", wide: true },
  { slug: "scrolling-header", title: "Scrolling header", description: "Condenses on scroll. Keeps the mark, sheds the extra.", category: "pragmatic", harvest: "Kitze Scrolling Header, rewritten", file: "registry/ui/scrolling-header.tsx", wide: true },
  { slug: "conditional-wrap", title: "Conditional wrap", description: "Wrap children in an extra node only when a flag is on.", category: "pragmatic", harvest: "Kitze Conditional Wrap, rewritten", file: "registry/ui/conditional-wrap.tsx" },
  { slug: "simple-tooltip", title: "Simple tooltip", description: "content= string. No TooltipProvider ceremony at the call site.", category: "pragmatic", harvest: "Kitze Simple Tooltip, rewritten", file: "registry/ui/simple-tooltip.tsx", dependencies: ["@radix-ui/react-tooltip"] },
  { slug: "simple-popover", title: "Simple popover", description: "Trigger + content. One component, not four primitives.", category: "pragmatic", harvest: "Kitze Simple Popover, rewritten", file: "registry/ui/simple-popover.tsx", dependencies: ["@radix-ui/react-popover"] },
  { slug: "simple-accordion", title: "Simple accordion", description: "items=[{title, content}]. For FAQs without the compound-component tax.", category: "pragmatic", harvest: "Kitze Simple Accordion, rewritten", file: "registry/ui/simple-accordion.tsx", dependencies: ["@radix-ui/react-accordion"], wide: true },
  { slug: "simple-select", title: "Simple select", description: "options=[{value, label}]. Searchable when the list gets long.", category: "form", harvest: "Kitze Simple Select, rewritten", file: "registry/ui/simple-select.tsx", dependencies: ["@radix-ui/react-select"] },
  { slug: "advanced-select", title: "Advanced select", description: "Multi, badges, search. The select you keep rewriting for filters.", category: "form", harvest: "Kitze Advanced Select, rewritten", file: "registry/ui/advanced-select.tsx", registryDependencies: ["badge", "input"], dependencies: ["lucide-react"], wide: true },
  { slug: "icon-picker", title: "Icon picker", description: "Searchable Lucide grid. Returns the icon name, not a React node.", category: "form", harvest: "Kitze Icon Picker, rewritten", file: "registry/ui/icon-picker.tsx", registryDependencies: ["simple-popover", "input"], dependencies: ["lucide-react"] },
  { slug: "bottom-drawer", title: "Bottom drawer", description: "Vaul sheet from the bottom. Swipe to dismiss.", category: "responsive", harvest: "Kitze Bottom Drawer, rewritten", file: "registry/ui/bottom-drawer.tsx", dependencies: ["vaul"] },
  { slug: "adaptive-dialog", title: "Adaptive dialog", description: "Dialog on desktop, drawer on a phone. Same props. This is the Kitze trick.", category: "responsive", harvest: "Kitze Responsive Dialog, rewritten", file: "registry/ui/adaptive-dialog.tsx", dependencies: ["@radix-ui/react-dialog", "vaul"], registryDependencies: ["button"], wide: true },
  { slug: "adaptive-menu", title: "Adaptive menu", description: "Dropdown on desktop, drawer list on mobile.", category: "responsive", harvest: "Kitze Responsive Dropdown Menu, rewritten", file: "registry/ui/adaptive-menu.tsx", dependencies: ["@radix-ui/react-dropdown-menu", "vaul"], registryDependencies: ["button"] },
  { slug: "dialog-manager", title: "Dialog manager", description: "useConfirm() / useConfirmDelete(). Imperative dialogs from anywhere.", category: "responsive", harvest: "Kitze Dialog Manager, rewritten", file: "registry/ui/dialog-manager.tsx", registryDependencies: ["adaptive-dialog", "button"], wide: true },
  { slug: "theme-switch", title: "Theme switch", description: "Sun / moon latch wired to next-themes. Compact.", category: "theme", harvest: "Kitze Theme Switch Minimal, rewritten", file: "registry/ui/theme-switch.tsx", dependencies: ["next-themes", "lucide-react"] },
  { slug: "theme-slider", title: "Theme slider", description: "Three-stop slider: light, system, dark.", category: "theme", harvest: "Kitze Theme Switch Slider, rewritten", file: "registry/ui/theme-slider.tsx", dependencies: ["next-themes", "lucide-react"] },
  { slug: "tilt-card", title: "Tilt card", description: "Pointer tilt with a specular sheen. Dead on touch and reduced motion.", category: "motion", harvest: "cinematic-scroll-skill TiltCard (MIT, vanilla port)", file: "registry/ui/tilt-card.tsx" },
  { slug: "magnetic-cursor", title: "Magnetic cursor", description: "Dot that lerps to the pointer and snaps to data-magnetic targets. Fine pointer only.", category: "motion", harvest: "cinematic-scroll-skill MagneticCursor (MIT, vanilla port)", file: "registry/ui/magnetic-cursor.tsx" },
  { slug: "kinetic-headline", title: "Kinetic headline", description: "Split-line rise on enter. One well-timed reveal, not a bounce.", category: "motion", harvest: "cinematic-scroll-skill KineticHeadline (MIT, vanilla port)", file: "registry/ui/kinetic-headline.tsx", wide: true },
  { slug: "pinned-reveal", title: "Pinned reveal", description: "Eyebrow, title, summary stagger as the chapter hits the frame.", category: "motion", harvest: "cinematic-scroll-skill PinnedReveal (MIT, vanilla port)", file: "registry/ui/pinned-reveal.tsx", wide: true },
  { slug: "hero-parallax", title: "Hero parallax", description: "Four depth planes. CSS scroll-driven where supported, rAF fallback.", category: "motion", harvest: "cinematic-scroll-skill HeroParallax (MIT, vanilla port)", file: "registry/ui/hero-parallax.tsx", wide: true },
  { slug: "depth-figure", title: "Depth figure", description: "Image that drifts inside its frame as you scroll past.", category: "motion", harvest: "cinematic-scroll-skill DepthFigure (MIT, vanilla port)", file: "registry/ui/depth-figure.tsx" },
  { slug: "matrix-rain", title: "Matrix rain", description: "Glyph rain in Devanagari + IBM Plex Mono. Sodium, not Hollywood green.", category: "foundry", harvest: "CloakBin MatrixRain, original rewrite", file: "registry/ui/matrix-rain.tsx", wide: true },
  { slug: "sodium-dust", title: "Sodium dust", description: "Lamp-mote canvas. The air under a Mumbai street light.", category: "foundry", harvest: "krishanmangal GoldDust, original rewrite", file: "registry/ui/sodium-dust.tsx", wide: true },
  { slug: "gold-leaf", title: "Gold leaf", description: "Etched gold flakes for manuscript pages. Quiet, not glitter.", category: "foundry", harvest: "krishanmangal islands, original rewrite", file: "registry/ui/gold-leaf.tsx" },
  { slug: "aura-ring", title: "Aura ring", description: "Score ring that fills on a stroke, not a gradient doughnut.", category: "foundry", harvest: "apex AuraRing, original rewrite", file: "registry/ui/aura-ring.tsx" },
  { slug: "glass-panel", title: "Glass panel", description: "Frosted asphalt panel. Tight radius, real blur, no neon edge.", category: "foundry", harvest: "apex GlassCard, original rewrite", file: "registry/ui/glass-panel.tsx" },
  { slug: "volt-button", title: "Volt button", description: "Pressable with a physical inset. The CTA from Apex.", category: "foundry", harvest: "apex VoltButton, original rewrite", file: "registry/ui/volt-button.tsx" },
  { slug: "uptime-bar", title: "Uptime bar", description: "Ninety day ticks. Status page DNA from Rush Labs.", category: "foundry", harvest: "rushlabs-status-page UptimeBar, original rewrite", file: "registry/ui/uptime-bar.tsx", wide: true },
  { slug: "status-rail", title: "Status rail", description: "Operational banner: operational / degraded / down.", category: "foundry", harvest: "rushlabs-status-page StatusBanner, original rewrite", file: "registry/ui/status-rail.tsx", wide: true },
  { slug: "money-ticker", title: "Money ticker", description: "Rupees (or any currency) accruing per second.", category: "foundry", harvest: "money-meter, original rewrite", file: "registry/ui/money-ticker.tsx" },
  { slug: "locality-chip", title: "Locality chip", description: "Bandra / Dadar / Andheri style place chip with a nowcast pip.", category: "foundry", harvest: "mumbai-rain, original rewrite", file: "registry/ui/locality-chip.tsx" },
  { slug: "nowcast-meter", title: "Nowcast meter", description: "0–2h rain intensity as a mercury column. millimetres, not vibes.", category: "foundry", harvest: "mumbai-rain, original rewrite", file: "registry/ui/nowcast-meter.tsx" },
  { slug: "flood-badge", title: "Flood badge", description: "Ward-level flood risk pip. Low / watch / waterlogged.", category: "foundry", harvest: "mumbai-rain flood zones, original rewrite", file: "registry/ui/flood-badge.tsx" },
  { slug: "warp-drop", title: "Warp drop", description: "Peer-to-peer dropzone. Dashed hatch, file list, no cloud metaphor.", category: "foundry", harvest: "warp, original rewrite", file: "registry/ui/warp-drop.tsx", wide: true },
  { slug: "doom-cracks", title: "Doom cracks", description: "The page fractures as you scroll. Heals when you stop.", category: "foundry", harvest: "doombreaker, original rewrite", file: "registry/ui/doom-cracks.tsx", wide: true },
  { slug: "typewriter", title: "Typewriter", description: "Careted type-in. Respects reduced motion (shows the full line).", category: "motion", harvest: "my-portfolio Typewriter, original rewrite", file: "registry/ui/typewriter.tsx", wide: true },
  { slug: "marquee-rail", title: "Marquee rail", description: "Seamless ticker. Pauses on hover and on reduced motion.", category: "motion", harvest: "naikan MarqueeTicker, original rewrite", file: "registry/ui/marquee-rail.tsx", wide: true },
  { slug: "number-ticker", title: "Number ticker", description: "Count up when in view. Tabular figures, no bounce.", category: "motion", harvest: "PixaLabs number-ticker idea, original rewrite", file: "registry/ui/number-ticker.tsx" },
  { slug: "password-meter", title: "Password meter", description: "Four-bar strength. Entropy-ish, not a lecture.", category: "foundry", harvest: "CloakBin PasswordStrength, original rewrite", file: "registry/ui/password-meter.tsx" },
  { slug: "encryption-seal", title: "Encryption seal", description: "Zero-knowledge lockup banner. The CloakBin promise, as a component.", category: "foundry", harvest: "CloakBin EncryptionBanner, original rewrite", file: "registry/ui/encryption-seal.tsx", wide: true },
  { slug: "share-card", title: "Share card", description: "Exportable result card. Score, handle, sodium rule.", category: "foundry", harvest: "apex ShareCard, original rewrite", file: "registry/ui/share-card.tsx" },
  { slug: "beam-frame", title: "Beam frame", description: "A travelling highlight on the border. CSS only, one beam.", category: "motion", harvest: "original, not Magic UI", file: "registry/ui/beam-frame.tsx" },
  { slug: "particle-ash", title: "Particle ash", description: "Slow ash field. Canvas, capped, pauses offscreen.", category: "foundry", harvest: "original, not Aceternity sparkles", file: "registry/ui/particle-ash.tsx", wide: true },
  { slug: "spotlight-wash", title: "Spotlight wash", description: "Pointer-follow wash on a panel. Fine pointer only.", category: "motion", harvest: "original, not Aceternity Spotlight", file: "registry/ui/spotlight-wash.tsx", wide: true },
  { slug: "split-hatch", title: "Split hatch", description: "Diagonal hatch background from SplitUPI. Printable, not decorative noise.", category: "foundry", harvest: "splitUPI background-pattern, original rewrite", file: "registry/ui/split-hatch.tsx", wide: true },
];

export function getItem(slug: string) {
  return catalog.find((item) => item.slug === slug);
}

export function byCategory() {
  return CATEGORIES.map((category) => ({
    ...category,
    items: catalog.filter((item) => item.category === category.id),
  })).filter((group) => group.items.length > 0);
}
