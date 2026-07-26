export const site = {
  name: "Hexary Labs",
  tagline: "From ambitious idea to production system.",
  description:
    "Hexary Labs is a technology partner for founders, product leaders, and enterprises building serious software: SaaS platforms, AI-powered products, business systems, and the integrations that hold them together.",

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
