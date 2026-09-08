# NAIK

Ishan Naik’s component foundry. Source you keep.

Live: [components.ishannaik.com](https://components.ishannaik.com)

Install a part:

```bash
npx shadcn@latest add https://components.ishannaik.com/r/adaptive-dialog.json
```

Or register the namespace in `components.json`:

```json
{
  "registries": {
    "@naik": "https://components.ishannaik.com/r/{name}.json"
  }
}
```

Then `npx shadcn@latest add @naik/tilt-card`.

These are original rewrites of pieces from Ishan’s apps (CloakBin, mumbai-rain, Apex, warp, Rush Labs, cinematic-scroll) plus Kitze-style small APIs. Aceternity/Magic UI copies are not republished. Cinematic scroll ports are MIT (Simone Leonelli), rewritten without GSAP.
