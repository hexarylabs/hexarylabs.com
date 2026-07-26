export const site = {
  name: "Hexary Labs",
  tagline: "From ambitious idea to production system.",
  description:
    "Hexary Labs is a technology partner for founders, product leaders, and enterprises building serious software: SaaS platforms, AI-powered products, business systems, and the integrations that hold them together.",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hexarylabs.com",

  email: "hello@hexarylabs.com",
  phone: "+1 (407) 735-6142",
} as const;
