/**
 * Global site metadata.
 *
 * ⚠️ PLACEHOLDER: `url`, `email`, `phone` and the social handles are temporary.
 * Replace with Hexary Labs' real details before launch.
 */
export const site = {
  name: "Hexary Labs",
  tagline: "Engineering-Led Product Studio",
  description:
    "Hexary Labs designs and builds software products — from strategy and UX to shipped, scalable engineering.",

  /* PLACEHOLDER — real domain required for metadata/OG/sitemap to resolve.
     Set NEXT_PUBLIC_SITE_URL in production; falls back to this for local dev. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hexarylabs.com",

  /* PLACEHOLDER — real contact details required */
  email: "hello@hexarylabs.com",
  phone: "+1 (000) 000-0000",

  /* PLACEHOLDER — real profiles required */
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "X", href: "https://x.com" },
  ],
} as const;

/**
 * What Hexary does — supplied copy. NOT placeholder, and not ours to reword:
 * use verbatim, don't embellish. Split into paragraphs for layout only; the
 * sentences are untouched.
 */
export const whatWeDo = {
  lede: "Hexary Labs is a software engineering studio. We work as an embedded partner for companies that need custom platforms, system integrations, and AI features built to a high standard.",
  body: [
    "Our focus is backend-heavy work: connecting business systems, building reliable data pipelines, and shipping AI features into real products.",
    "We are a small, senior team, so clients work directly with the people building their software.",
  ],
} as const;
