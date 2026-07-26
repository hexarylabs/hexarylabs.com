export const hero = {
  eyebrow: "Integrations",
  headline: "Systems that already talk to each other",
  intro:
    "Most of the software we build has to sit inside a stack that already exists: a marketplace, an ERP, an accounting system, a CRM that the business genuinely runs on. Every platform below is one we've integrated in shipped client work, not a logo wall.",
  cta: "Start a Project",
};

export const intro = {
  heading: "Integration is where business systems actually break",
  body: [
    "An integration is rarely hard because the API is complicated. It's hard because two systems disagree about what a customer is, because the documented behaviour and the real behaviour differ, because a sync that works at a hundred records a day quietly falls apart at ten thousand, or because nobody notices it stopped running until the month-end numbers don't reconcile.",
    "That's the work: making two systems agree, keeping them in agreement under load, and knowing immediately when they stop.",
  ],
};

export type Platform = {
  name: string;
  body: string;
  caseStudy: { label: string; slug: string };
};

export type PlatformGroup = {
  heading: string;
  blurb: string;
  platforms: Platform[];
};

export const groups: PlatformGroup[] = [
  {
    heading: "Marketplaces",
    blurb:
      "Multi-channel selling where the same physical unit is listed in more than one place and can only be sold once.",
    platforms: [
      {
        name: "Amazon",
        body: "Listing and inventory sync across a high-volume resale catalog, with serial-level reconciliation so a unit sold on one channel is pulled from the others before it can be oversold.",
        caseStudy: { label: "TrueCell", slug: "truecell" },
      },
      {
        name: "eBay",
        body: "Two-way listing and order sync, driven by a rules engine that decides which units are routed to eBay and which are held back for other channels.",
        caseStudy: { label: "TrueCell", slug: "truecell" },
      },
      {
        name: "Back Market",
        body: "Condition-graded listings kept in step with the diagnostics and grading pipeline, so what's advertised matches the grade of what's actually in stock.",
        caseStudy: { label: "TrueCell", slug: "truecell" },
      },
    ],
  },
  {
    heading: "Inventory & ERP",
    blurb:
      "The system of record for stock and pricing, connected to the commerce layer instead of parallel to it.",
    platforms: [
      {
        name: "Fishbowl",
        body: "Bidirectional sync between a B2B storefront and Fishbowl: multi-warehouse inventory levels, customer-specific pricing and orders moving both ways, with no middleware layer and no re-keying.",
        caseStudy: { label: "Kinein", slug: "kinein" },
      },
      {
        name: "Acumatica",
        body: "Storefront orders, pricing and stock kept in step with Acumatica as the system of record, so the commerce side runs on the ERP rather than maintaining a second version of the truth.",
        caseStudy: { label: "Kinein", slug: "kinein" },
      },
    ],
  },
  {
    heading: "Accounting",
    blurb:
      "Order and invoice data landing in the books as it happens, rather than in a monthly re-entry exercise.",
    platforms: [
      {
        name: "QuickBooks",
        body: "Orders, invoices and customer records flowing between the storefront and QuickBooks in both directions, removing the manual re-entry step between commerce and the books.",
        caseStudy: { label: "Kinein", slug: "kinein" },
      },
      {
        name: "Xero",
        body: "The same bidirectional sync against Xero, so a distributor already running their accounts there doesn't have to change systems to get a B2B storefront.",
        caseStudy: { label: "Kinein", slug: "kinein" },
      },
    ],
  },
  {
    heading: "E-commerce",
    blurb: "Wholesale order flow connected to the storefronts brands already run.",
    platforms: [
      {
        name: "Shopify",
        body: "Catalog and order sync between a wholesale marketplace and the Shopify stores its brands already operate, so orders placed by retailers don't have to be re-entered on the brand side.",
        caseStudy: { label: "B2B Access", slug: "b2b-access" },
      },
    ],
  },
  {
    heading: "CRM",
    blurb: "Account and order history kept where the sales side already works.",
    platforms: [
      {
        name: "Zoho CRM",
        body: "Retailer and order records synced into Zoho CRM, keeping verification status, account activity and buyer history in one place instead of split between the marketplace and the sales team's tooling.",
        caseStudy: { label: "B2B Access", slug: "b2b-access" },
      },
    ],
  },
];

export const scopeNote =
  "This is what we've shipped, not the limit of what we integrate. If a system exposes a documented API — or a database, a file drop, or a webhook we can work against — it's in scope. We'd rather show you the ones we can point at real work for.";

export const approach = {
  heading: "How we approach integration work",
  intro:
    "The same rigor we apply to AI work applies here, and for the same reason: a system that's right most of the time is a system nobody can trust with money.",
  items: [
    {
      title: "Map the real data model first",
      body: "Before any code, we work out where the two systems genuinely disagree: what one calls a customer and the other calls an account, which fields are optional in the docs but mandatory in practice, what the exception cases look like. Almost every integration that fails late fails because this step was skipped.",
    },
    {
      title: "Assume the other system will fail",
      body: "Third-party APIs go down, rate-limit without warning, and occasionally return success for something they didn't do. We build for that: retries with backoff, idempotent writes so a replay can't double-charge or double-ship, and queues that hold work rather than dropping it.",
    },
    {
      title: "Test against the real thing",
      body: "Mocks confirm our own assumptions back to us. We test against sandbox and real accounts, including the ugly cases — partial data, duplicates, records edited on both sides between syncs — because those are what actually arrive in production.",
    },
    {
      title: "Reconcile and alert continuously",
      body: "A sync that silently stops is worse than one that never ran, because by the time it surfaces the data has drifted for weeks. We build reconciliation that compares both sides on a schedule and alerts on divergence, so the failure mode is a notification rather than a discovery at month end.",
    },
  ],
};

export const closing = {
  heading: "Tell us what needs to talk to what",
  cta: "Start a Project",
};
