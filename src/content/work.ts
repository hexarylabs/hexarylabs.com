export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  client?: string;
  scope: string[];
  results?: { value: string; label: string }[];
  /** 1280×1000 (1.28:1) to match the card. */
  image: string;
  imageAlt: string;
};

export const work: CaseStudy[] = [
  {
    slug: "truecell",
    client: "TrueCell",
    title: "An inventory OS for high-volume electronics resellers",
    summary:
      "A command center for device resale: demand forecasting, marketplace sync across Amazon, eBay and Back Market, serial-level reconciliation, and a rules engine that decides where every unit goes without overselling it.",
    scope: [
      "Inventory platform",
      "Marketplace sync",
      "Demand forecasting",
      "Rules & routing engine",
      "Diagnostics & grading",
      "Accounting & BI integrations",
    ],
    image: "/work/truecell.webp",
    imageAlt: "The TrueCell inventory dashboard",
  },
  {
    slug: "kinein",
    client: "Kinein",
    title: "B2B commerce that runs on the accounting system, not beside it",
    summary:
      "A wholesale storefront for distributors and manufacturers where inventory, customer-specific pricing and orders move both ways between the site and Fishbowl, Acumatica, QuickBooks or Xero — no middleware, no re-keying.",
    scope: [
      "Accounting system integration",
      "B2B storefront",
      "Bidirectional sync",
      "Multi-warehouse inventory",
      "Customer-specific pricing",
      "Sales rep portal",
    ],
    image: "/work/kinein.webp",
    imageAlt: "The Kinein B2B e-commerce storefront",
  },
  {
    slug: "b2b-access",
    client: "B2B Access",
    title: "A wholesale marketplace connecting verified retailers with brands",
    summary:
      "Replaces vendor relationships run over text chains and email threads: a vetted brand catalog, ordering with tracking, par-level restock alerts and full invoice history — with tiered pricing, MOQs and buyer analytics on the brand side.",
    scope: [
      "Marketplace platform",
      "Retailer verification",
      "Order management",
      "Restock alerting",
      "Brand analytics",
      "Shopify & Zoho CRM sync",
    ],
    image: "/work/b2b-access.webp",
    imageAlt: "The B2B Access wholesale marketplace",
  },
];
