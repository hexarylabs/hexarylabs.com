---
name: nextjs-performance
description: Use when adding images, fonts, large/interactive client components, or new dependencies, and before considering any new page or section done. Covers Next.js performance conventions (next/image, next/font, code-splitting) and bundle-size discipline.
---

# Performance

- Use `next/image` for every content image — never a raw `<img>`. Set `width`/`height` (or `fill` with a sized parent) and a correct `sizes` attribute so responsive images don't over-fetch.
- Use `next/font` (`next/font/google` or `next/font/local`) for custom fonts — never a manual `<link>` to a font CDN or `@font-face` pointed at a remote URL. This avoids layout shift and extra render-blocking requests.
- Keep `"use client"` boundaries as low/small as possible (see `nextjs-rendering-data`) — every client component is JS the browser must download and run.
- Dynamically import (`next/dynamic`) heavy, below-the-fold, or rarely-used client components (modals, charts, rich text/code editors, carousels) so they aren't in the initial bundle.
- Before adding a new dependency, weigh its bundle cost — check if `next/image`, `next/font`, native CSS, or an already-installed package covers the need first (see `nextjs-standards` §9). If a heavy library (charting, date, animation) is genuinely needed, prefer one with good tree-shaking and import only the pieces used.
- Avoid client-side state/effects for values that could be computed at render time or on the server — unnecessary re-renders and hydration cost add up.
