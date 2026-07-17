# Hexary Labs — Design & Implementation Specification

Derived from a live inspection of `gojilabs.com` (Playwright: computed styles, CSSOM token dump,
media-query extraction, hover/scroll state capture at 1440 / 768 / 390 px).

Goji Labs runs WordPress with a `theme.json`, so its **entire token system was readable from the
CSSOM** — the values below are measured, not estimated.

**Goal:** match the reference's polish, structure, spacing, motion and premium feel. **Not** its
pixels, copy, images, logos, case studies or branding.

---

## 1. Summary of the Goji Labs design language

Eight observations that actually define the look:

1. **It is completely square.** A census of every rendered element returned **543 × `border-radius: 0px`
   and 11 × `50%`** (circular avatars only). Zero rounded rectangles. This is the single strongest
   signature — more than the colour.
2. **Two typefaces, rigid ratios.** Clash Display (display, weight 500) + Switzer (body, 400/500).
   Every display size is **line-height exactly 1.2**; body is **1.4**. Display letter-spacing ≈ 0.02em.
3. **Hairline borders, not shadows.** Everything is delineated by **0.8px** (= 0.05rem) borders in
   `grey-100` on light / `grey-700` on dark. Shadow tokens exist in `theme.json` but are essentially
   unused. The design is flat and drawn with lines.
4. **Dark sections punctuate light ones.** The page alternates white → black → white → off-white →
   black → off-white → black. Black sections are the rhythm's downbeat, and every one of them is a
   "moment" (stats, tech, CTA).
5. **One accent, used sparingly.** `gojiberry #DA3750` appears in only three roles: **hover state on
   every interactive element**, **punctuation inside headings** (the red `.` in the hero, the red `&`
   in "Awards & Recognitions"), and the single primary CTA button.
6. **Gradient text for big numerals.** Stat numbers and the giant "Let's Talk" use
   `linear-gradient(76deg,#8B8B89,#DBDBD9)` + `background-clip:text`, so they read as sculpted metal
   rather than flat grey. Column dividers use a gradient that **fades out at both ends**.
7. **Restrained motion.** There is **no scroll-reveal system at all**. Motion = `0.3s ease-in-out`
   hovers (dominant, 26+ elements), two marquees, count-up stats, carousels. The premium feel comes
   from *consistency*, not from animating everything.
8. **Content-forward layout.** 1200px container, 16px gutters, 80px section padding, and a repeating
   section header of *title left / link-button right*.

### What the reference does badly (we will beat it)

| Issue | Measured | Hexary target |
|---|---|---|
| Page weight | **41.5 MB** (38 MB autoplay video) | < 1 MB initial |
| Scripts | **52** `<script src>` | ~0 blocking |
| Images | **131**, **0 lazy-loaded** | `next/image`, lazy below fold |
| Services section | **Rive WASM canvas**; real text is `display:none` behind it | semantic DOM + CSS |
| Fonts | 2 × variable **.ttf** preloaded | `next/font` woff2, subset |
| Focus | 3 × `outline:none`, only 5 `:focus-visible` rules | visible focus everywhere |
| Breakpoints | single **781/782px** break (a 780px tablet gets 32px h1) | proper 3-tier |

---

## 2. Proposed sitemap

```
/                     Home
/services             Services index
/services/[slug]      4 service detail pages
/work                 Work index (case-study grid)
/work/[slug]          Case-study detail
/about                About / team / process
/contact              Contact + enquiry form
/privacy  /terms      Legal
```

Phase 1 builds `/`, `/services`, `/work`, `/about`, `/contact` + legal. Detail routes
(`/services/[slug]`, `/work/[slug]`) are scaffolded from the same content config so they stay in sync.

Header nav: **Services ▾ · Work · About · Contact**, CTA "Start a Project ↗".
(The reference's "Clients" and "Company" groups are dropped — Hexary has no client roster to justify
them yet. Fewer, fuller sections beat empty ones.)

---

## 3. Section-by-section homepage structure

Mirrors the reference's *storytelling* order — claim → proof → work → capability → trust → ask —
without copying its content.

| # | Section | BG | Purpose |
|---|---|---|---|
| 1 | **Hero** | white | h1 + accent punctuation, sub-copy, primary CTA, framed visual right |
| 2 | **Logo marquee** | white | client/tech logos, infinite scroll *(placeholder — see §12)* |
| 3 | **Stats** | **black** | 3 count-up figures, gradient numerals, fade dividers |
| 4 | **Work** | white | section header + 2 case-study cards (split image/panel + results strip) |
| 5 | **Services** | `#F7F7F7` | 4 hover-expanding rows (black wipe + illustration) |
| 6 | **Tech stack** | **black** | centred header + logo grid, hairline row dividers |
| 7 | **Process** | `#F7F7F7` | 4 numbered steps — *Hexary addition, replaces testimonials* |
| 8 | **Testimonials** | `#F7F7F7` | 2-up carousel *(omitted until real quotes exist — §12)* |
| 9 | **CTA** | **black** | giant gradient wordmark + accent button |
| 10 | **Footer** | black | 4-column link grid, full-width CTA row, bottom bar |

Rationale for §7: the reference fills this slot with testimonials + awards. We have neither and will
not invent them, so a **Process** section keeps the page's rhythm and length while saying something
true.

---

## 4. Reusable component list

**Primitives** (`src/components/ui/`)
- `Button` — variants `primary | secondary | outline | ghost | block`; sizes `sm | md | lg`; optional `↗` icon
- `ArrowIcon` — the ↗ glyph, `currentColor`
- `Container` — 1200px max, 16px gutters
- `Section` — `tone="light" | "muted" | "dark"`, handles vertical rhythm + `data-tone` for descendant styling
- `SectionHeader` — title left / action right, `align="split" | "center"`
- `Heading` — `as`/`size` split so heading level ≠ visual size
- `AccentText` — the coloured-punctuation trick
- `GradientText` — `background-clip:text` numerals/wordmarks
- `Divider` — `fade` variant (gradient, transparent at both ends)
- `Marquee` — CSS-animated, duplicated track, pauses on hover + reduced-motion
- `CountUp` — IntersectionObserver, respects reduced-motion (renders final value)

**Composites** (`src/components/sections/`)
- `Header` / `MegaMenu` / `MobileMenu`
- `Hero`, `LogoMarquee`, `StatsBand`, `WorkSection`, `ServicesSection`, `TechStack`, `ProcessSection`, `CtaBand`, `Footer`

**Cards** (`src/components/cards/`)
- `CaseStudyCard` (split + results strip), `ServiceRow` (hover wipe), `TestimonialCard`, `StatItem`, `TechItem`, `ProcessStep`

---

## 5. Design tokens

Tailwind v4 `@theme` in `globals.css`. **Hexary's own identity, the reference's structure.**

### Colour

| Token | Value | Note |
|---|---|---|
| `base` | `#FFFFFF` | page |
| `base-2` | `#F7F7F7` | alt section *(matches ref)* |
| `contrast` | `#111111` | body text |
| `contrast-2` | `#000000` | dark sections |
| `surface-dark` | `#141414` | cards on black *(ref uses #141414)* |
| **`accent`** | **`#5B45F5`** | electric violet — replaces gojiberry (§12) |
| `accent-hi` | `#8B7BFF` | lighter tint for accent-on-black |
| `grey-100..700` | `#EDECEC · #E3E1E1 · #C7C4C4 · #827F7F · #696767 · #514F4F` | *ramp taken from ref* |
| `success` | `#4BA661` | results ↑ arrows |

Gradients (structural — keep):
- `--gradient-metal: linear-gradient(76deg,#8B8B89,#DBDBD9)` — numerals/wordmark on dark
- `--gradient-rule-v: linear-gradient(180deg,transparent,#4B4B4B 49%,transparent)`
- `--gradient-rule-h: linear-gradient(270deg,transparent,#4B4B4B 49%,transparent)`

Contrast: `accent` on white = 6.1:1 ✓ · white on `accent` = 6.1:1 ✓ · `accent-hi` on black = 6.8:1 ✓
(the reference's red-on-black is only 4.3:1 — we improve on it).

### Typography

Display **Space Grotesk** (500/600) · Body **Inter** (400/500) — both via `next/font/google`, woff2,
`display:swap`. Rationale in §12.

| Role | Desktop ≥1024 | Tablet | Mobile | LH | LS |
|---|---|---|---|---|---|
| `h1` | 64px | 48px | 34px | 1.2 | 0.02em |
| `h2` | 48px | 36px | 26px | 1.2 | 0.02em |
| `h3` | 32px | 26px | 21px | 1.2 | 0.01em |
| `h4` | 24px | 22px | 19px | 1.25 | 0 |
| `body-lg` | 18px | 18px | 16px | 1.4 | 0 |
| `body` | 16px | 16px | 15px | 1.5 | 0 |
| `small` | 12px | 12px | 12px | 1.5 | 0 |
| `stat` | `clamp(2.75rem, 1.6rem + 3.4vw, 5rem)` | | | 1.2 | -0.01em |
| `mega` | `clamp(3.5rem, -0.9rem + 13.8vw, 15rem)` | | | 0.95 | -0.02em |

Ratios copied verbatim from the reference: **display LH 1.2, body LH 1.4**. Sizes are on a 3-tier
scale (the ref's 2-tier drop 64→32 is too violent mid-range).

### Spacing · radii · borders · shadows · containers

```
space:   2 4 8 12 16 24 32 40 56 72 80 120 144        (ref scale, verbatim)
section: 80px desktop / 56px tablet / 40px mobile      (ref: 80/40)
header→content gap: 56px                               (measured)
radius:  0  — everything. 9999px only for circles.     (543:11 census)
border:  hairline 0.8px  ·  grey-100 on light / grey-700 on dark
shadow:  none. The design is drawn with lines.
container: 1200px content / 1400px wide / 16px gutter  (measured)
header:  87px tall, sticky, hairline bottom
```

---

## 6. Responsive rules

Three tiers (an improvement on the reference's single 782px break):

| | Mobile `<768` | Tablet `768–1023` | Desktop `≥1024` |
|---|---|---|---|
| Container | fluid, 16px gutter | fluid, 24px | 1200px centred |
| Section pad | 40px | 56px | 80px |
| Header | logo + hamburger | logo + hamburger | full nav + CTA |
| Hero | `h1 → visual → copy → CTA` *(ref's reflow — keep)* | same | 2-col text/visual |
| Stats | stacked, horizontal rules | 3-col | 3-col, vertical fade rules |
| Case-study card | stacked: image → panel → results | stacked | split 640px + panel |
| Results strip | 1-col | 3-col | 3-col |
| Services row | static, no hover; image hidden | static | hover wipe + illustration |
| Tech grid | 3 cols | 4 cols | 6 cols |
| Footer | 1 col accordion-ish | 2 cols | 4 cols |
| Mega menu | n/a | n/a | full-width bar |

Rules: no horizontal overflow at any width (verified ≥320px); tap targets ≥44px; marquees keep
running on mobile but at reduced speed; hover-only affordances always have a non-hover fallback.

---

## 7. Animation & interaction behaviour

**Master timing — `0.3s ease-in-out`** (the reference's dominant transition, 26+ elements). Do not
invent other durations without reason.

| Interaction | Spec |
|---|---|
| **Any button hover** | `bg → accent`, `color → white`, arrow → white. `0.3s ease-in-out`. *Accent-bg buttons invert: → white bg, accent text.* |
| **Nav link hover** | `color → accent`, `0.3s` |
| **Mega menu** | opacity 0→1 + `translateY(-4px)→0`, `0.2s ease-out`; opens on hover **and** focus-within; closes on `Esc`/blur |
| **Mobile menu** | full-screen overlay, fade `0.1s ease-out`; submenu = inline accordion, parent → accent; focus trapped; `Esc` closes; body scroll locked |
| **Case-study card** | whole card is the hover target → inner button flips to accent. **No image zoom** (ref has none) |
| **Service row** | `::before` panel `translateY(100%→0)` (ref: `translateY(-100%)` wipe), bg → black, title → gradient, body → `grey-300`, illustration `opacity 0→1` + `translateX(16px→0)`. `0.4s ease-in-out`, 60fps (transform/opacity only) |
| **Stats count-up** | IntersectionObserver `threshold 0.4`, once, 1.6s `easeOutExpo`. Reduced-motion → final value immediately |
| **Marquee** | CSS `translateX(0 → -50%)` on a duplicated track, 40s linear infinite, `pause on hover`, `aria-hidden` on the clone |
| **Focus** | `outline: 2px solid accent; outline-offset: 2px` on `:focus-visible` — everywhere. Never `outline:none` |
| **Scroll reveal** | **Opt-in, minimal**: `opacity 0→1` + `translateY(12px→0)`, `0.5s ease-out`, once, staggered 60ms. Reference has none — this is a restrained addition (§12) |

**`prefers-reduced-motion: reduce` → all of the above collapse to instant.** Non-negotiable.

---

## 8. Image dimensions & aspect ratios

Measured from the reference (it serves 2× assets and downscales):

| Asset | Render | Source (2×) | Ratio |
|---|---|---|---|
| Case-study card image | 640 × 500 | **1280 × 1000** | 1.28 : 1 |
| Service illustration | 600 × 416 | 1200 × 832 | 1.44 : 1 |
| Hero visual | 800 × 600 | 1600 × 1200 | 4 : 3 |
| Client logo (marquee) | ≤ 146 × 104 | 292 × 208 | free, height-capped 40px |
| Award badge | 300 × 300 | 600 × 600 | 1 : 1 |
| Avatar | 48 × 48 | 96 × 96 | 1 : 1, circle |
| Tech logo | 40 × 40 | SVG | 1 : 1 |
| OG image | 1200 × 630 | — | 1.91 : 1 |

Rules: `next/image` everywhere; **`fill` + `object-fit:cover` + explicit `sizes`** for card images;
hero uses `loading="eager"` + `fetchPriority="high"` (**not** `priority` — deprecated in Next 16, see
§9); everything below the fold lazy. AVIF/WebP via the default loader.

---

## 9. Project & component folder structure

```
src/
  app/
    layout.tsx            fonts, metadata, header/footer
    page.tsx              home — composes sections only
    globals.css           @theme tokens + base layer
    services/page.tsx   services/[slug]/page.tsx
    work/page.tsx       work/[slug]/page.tsx
    about/page.tsx      contact/page.tsx
    (legal)/privacy/page.tsx   (legal)/terms/page.tsx
    sitemap.ts   robots.ts   not-found.tsx   error.tsx
  components/
    ui/         Button, Container, Section, SectionHeader, Heading,
                AccentText, GradientText, Divider, Marquee, CountUp, ArrowIcon
    cards/      CaseStudyCard, ServiceRow, TestimonialCard, StatItem, TechItem, ProcessStep
    sections/   Hero, LogoMarquee, StatsBand, WorkSection, ServicesSection,
                TechStack, ProcessSection, CtaBand
    layout/     Header, MegaMenu, MobileMenu, Footer
  content/      site.ts nav.ts services.ts work.ts stats.ts tech.ts process.ts
                — all copy lives here, never in components. PLACEHOLDER-flagged.
  lib/          cn.ts, useInView.ts
docs/design-spec.md
```

**Next.js 16 constraints** (verified against `node_modules/next/dist/docs/`, this repo's version):
- `params`/`searchParams` are **Promises** — sync access removed in 16.
- `priority` on `next/image` is **deprecated** → use `loading="eager"` + `fetchPriority="high"`.
- `images.qualities` defaults to `[75]`; any other `quality` is silently coerced → leave at 75.
- Turbopack is the default; a webpack config would **fail the build**.
- `error.tsx` uses `unstable_retry`, not `reset`.
- Server Components by default; `"use client"` only on `Header`, `MobileMenu`, `CountUp`, `Marquee`(no—CSS only), carousel.

---

## 10. Implementation order

1. **Tokens & base** — `globals.css` `@theme`, fonts in `layout.tsx`, reset, focus-visible.
2. **Primitives** — `Container`, `Section`, `Button`, `Heading`, `ArrowIcon`, `Divider`. *Checkpoint: button matrix vs ref.*
3. **Header + menus** — sticky, mega menu, mobile overlay + accordion. *Checkpoint: 1440/768/390.*
4. **Hero** — type scale, accent punctuation, framed visual, mobile reflow. *Checkpoint vs ref hero.*
5. **Content layer** — `src/content/*` with PLACEHOLDER flags.
6. **Stats band** — gradient numerals, fade dividers, count-up. *Checkpoint.*
7. **Work + CaseStudyCard** — split card, results strip. *Checkpoint.*
8. **Services + ServiceRow** — CSS wipe hover. *Checkpoint.*
9. **Tech stack + Process + marquee.**
10. **CTA band + Footer.**
11. **Remaining routes** — services/work/about/contact + legal.
12. **SEO** — metadata, OG, sitemap, robots, JSON-LD.
13. **QA pass** — 320/390/768/1024/1440/1920, keyboard, reduced-motion, contrast, Lighthouse.

Each checkpoint = screenshot at 3 widths, compare against the reference captures in
`scratchpad/goji-ref/`, correct spacing/size/alignment before continuing.

---

## 11. Follow the reference vs. redesign

### Follow closely (structure & craft — not ownable)
- Square geometry (radius 0) + 0.8px hairlines, no shadows
- 1200px container, 16px gutters, 80/56/40 section padding, 56px header→content
- Display LH 1.2 / body LH 1.4; the 64/48/32 desktop ladder
- Light→dark section alternation and its rhythm
- Section header pattern (title left / action right; centred variant)
- Button system + **universal accent hover**; 16px text→arrow gap
- Gradient numerals, fade-out dividers, count-up stats
- Case-study card anatomy (split + results strip); service row hover-wipe
- Sticky 87px header; mobile overlay + accordion
- Accent-as-punctuation in headings
- Spacing scale, grey ramp, `#F7F7F7` alt surface

### Redesign for Hexary (identity — must differ)
- **Typefaces** — Space Grotesk + Inter, not Clash Display + Switzer *(the #1 "this is Goji" tell)*
- **Accent** — electric violet `#5B45F5`, not gojiberry red
- **Logo, wordmark, all copy**
- **Hero visual** — geometric hex-motif composition, not a Figma-frame product shot
- **Nav IA** — Services/Work/About/Contact, not Services/Work/Clients/Company
- **Testimonials → Process** section (no invented quotes)

### Deliberately reject (the reference does this badly)
- **Rive WASM canvas** for services → semantic DOM + CSS. Accessible, ~0 KB, indexable.
- **38 MB autoplay video** → no hero video, or poster + click-to-play.
- **52 scripts / jQuery / Swiper** → native CSS scroll-snap carousel.
- **131 eager images** → `next/image`, lazy by default.
- **Single 782px breakpoint** → 3 tiers.
- **`outline:none`** → visible focus everywhere.

---

## 12. Decisions — CONFIRMED

| # | Decision | Outcome |
|---|---|---|
| **1** | **Typefaces** | ✅ **Space Grotesk + Inter**. Clash Display + Switzer are free (Fontshare) and were an option, but same fonts = same voice = clone. |
| **2** | **Accent colour** | ✅ **`#5B45F5` electric violet** + `#8B7BFF` tint for dark surfaces. |
| **3** | **Stats figures** | ✅ PLACEHOLDER values, flagged in `content/stats.ts`. **Must be replaced or removed before launch.** |
| **4** | **Testimonials / awards / client logos** | ✅ Omitted. **Process** section ships in that slot. |
| **5** | **Case-study imagery** | ✅ Generated hex compositions (`CaseVisual`), no fake product shots. |
| **6** | **Scroll reveals** | ✅ Minimal fade-up added (12px, 0.5s, once). |
| **7** | **Hero video** | ✅ Skipped. |
| **8** | **Contact form** | ✅ UI only — composes a `mailto:`. Needs a Server Action + endpoint to be real. |

---

## 13. Build results (measured)

| | Goji Labs | Hexary Labs |
|---|---|---|
| Page weight (home, compressed) | **41,540 KB** | **244 KB** — ~170× lighter |
| Requests | 226 | 13 |
| `<script src>` | 52 | 9 (framework only) |
| Images | 131, **0 lazy** | 0 raster — all SVG |
| Services section | Rive WASM canvas + `display:none` text | semantic DOM + CSS |
| Rendering | WordPress/PHP | 20 routes, **100% static** |
| Focus | 3 × `outline:none` | visible ring on every control |
| Breakpoints | one (781px) | three (768 / 1024) |

**Verified:** no horizontal overflow across 8 pages × 6 widths (320→1920) · all rendered text meets
WCAG AA · every tab stop shows a focus ring · mega menu opens on keyboard focus · mobile menu traps
focus, locks scroll, closes on Esc · reduced-motion stops the marquee, skips reveals and renders final
stat values · `tsc` and `eslint` clean · production build passes.

### Before launch (blocking)
1. Replace or remove **PLACEHOLDER stats** in `src/content/stats.ts`.
2. Replace `site.url` / `email` / `phone` / socials in `src/content/site.ts`.
3. Replace **privacy + terms** stubs with counsel-reviewed copy.
4. Wire the contact form to a real endpoint (Server Action + server-side validation).
5. Rewrite placeholder copy (services, work, about) in Hexary's voice.
6. Supply a real logo, an OG image (1200×630), and real case-study imagery.
