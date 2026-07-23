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
