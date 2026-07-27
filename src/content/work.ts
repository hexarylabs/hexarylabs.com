export const WORK_INTRO =
  "A sample of the systems we've designed and built, and the products we run ourselves. Each one started as a problem worth solving properly.";

export type HeroVariant =
  | "image-contained"
  | "text-metric"
  | "schematic"
  | "gradient"
  | "image-fullbleed";

export type BodyVariant = "sectioned" | "narrative" | "sidebar";
export type MetricVariant = "grid" | "hero" | "inline";
export type DensityVariant = "image-heavy" | "text-heavy" | "balanced";

export type GradientTone = "violet" | "slate" | "sand";

export type Cover =
  | { kind: "photo"; src: string; alt: string; objectPosition?: "top" | "center" | "left" }
  | { kind: "gradient"; tone: GradientTone }
  | { kind: "schematic"; diagram?: "halcyon" | "eden" };

export type Metric = { value: string; label: string };

export type CaseSection = { heading: string; body: string[] };

export type CaseStudy = {
  slug: string;
  /** Short name/company — shown as the eyebrow on cards and the detail hero. */
  client: string;
  /** Punchy one-line headline. */
  title: string;
  /** Supporting blurb — homepage card body, detail hero subhead. */
  summary: string;
  /** Capability tags for the homepage teaser card's bottom strip. Not needed by entries that never surface there. */
  scope?: string[];
  variant: {
    hero: HeroVariant;
    body: BodyVariant;
    metrics: MetricVariant;
    density: DensityVariant;
  };
  cover: Cover;
  heroMetric?: Metric;
  metrics: Metric[];
  challenge: CaseSection;
  approach: CaseSection;
  solution: CaseSection;
  stack: string[];
  results: CaseSection;
  quote?: { text: string; attribution: string };
  /** Optional external links, e.g. live product, docs, GitHub — rendered as a link row before the closing CTA. */
  links?: { label: string; href: string }[];
};

const UNSPLASH = "?auto=format&fit=crop&w=1600&q=80";

export const work: CaseStudy[] = [
  {
    slug: "eden",
    client: "Eden Labs",
    title: "Eden",
    summary:
      "A studio for autonomous creative AI, where agents make art, video, and stories with people and with each other.",
    scope: [
      "Web application (Next.js)",
      "Backend API (Fastify)",
      "AI orchestration layer (FastAPI)",
      "Custom model training pipeline",
      "Community workflow ecosystem",
      "Autonomous agent runtime",
    ],
    variant: {
      hero: "schematic",
      body: "sidebar",
      metrics: "inline",
      density: "balanced",
    },
    cover: { kind: "schematic", diagram: "eden" },
    metrics: [
      {
        value: "Live",
        label: "Public product at app.eden.art — agents, custom model training, multi-modal generation",
      },
      {
        value: "Open",
        label: "Open-source foundation, a developer SDK, and a documented API at docs.eden.art",
      },
      { value: "Active", label: "Community across Discord, X, and Instagram" },
    ],
    challenge: {
      heading: "Challenge",
      body: [
        "The generative AI space is dominated by single-shot prompt-and-response tools: type a prompt, get an image, close the tab. Eden set out to build something more ambitious: a platform where creators could build persistent, autonomous AI agents with their own personalities, their own custom-trained visual models, and the ability to collaborate with humans and with each other on multi-step creative work.",
        "That meant solving problems the space doesn't have textbook answers for yet. Training custom visual models on user-provided samples at reasonable cost. Running a workflow ecosystem where community-contributed tools (ComfyUI pipelines) could be called autonomously by agents and earn their creators revenue when used. Giving agents context, tools, and identity that persist across sessions. And building all of it on an open-source foundation so the platform stays extensible.",
      ],
    },
    approach: {
      heading: "Approach",
      body: [
        "Eden is a research-shaped product: a lot of what we built wasn't yet standard practice in the industry when we built it. We approached it the way we approach any AI system that has to hold up in production: treat the model as software, not as magic. Build a testable, observable pipeline. Ship in small, working increments so the team can see what's working and what needs to be reshaped, not wait for a big-bang reveal at the end.",
        "The model training pipeline was the highest-risk piece. We built it first, isolated on GCP, and proved it end-to-end (sample images in, custom model out, usable in the agent runtime) before wiring it into the platform proper.",
      ],
    },
    solution: {
      heading: "Solution",
      body: [
        "A creative studio in the browser. The core experience at app.eden.art is a Next.js application where creators build agents, train custom visual models, and generate multi-modal work (image, video, audio). We built the frontend and the Fastify (Node.js) backend that powers it.",
        "An AI orchestration API. A FastAPI (Python) service handles the actual generation and agent execution: model calls, tool use, workflow orchestration. This is what turns \"run this agent\" into \"the agent uses these ComfyUI workflows in this order and returns this output.\"",
        "A custom model training pipeline on GCP. Users can train their own visual models on their own sample images using our Flux LoRA training pipeline deployed on Google Cloud. This is what makes Eden feel personal: the agents are creating in a style trained on the creator's own work, not a generic model's default.",
        "A workflow ecosystem for contributors. ComfyUI workflows contributed by the community become tools that any agent on the platform can use, and contributors earn revenue when their workflows get called. This is the piece that turns Eden from a product into a platform.",
        "Autonomous agents. Named agents like Eve (Eden's flagship creative agent) can hold conversations, use the full workflow toolchain, and produce multi-step creative outputs, art, video, stories, without the user prompting at every step.",
      ],
    },
    stack: [
      "Next.js",
      "Fastify (Node.js)",
      "FastAPI (Python)",
      "Google Cloud Platform",
      "ComfyUI",
      "Flux LoRA",
      "Stable Diffusion pipelines",
    ],
    results: {
      heading: "Results",
      body: [
        "Eden is live at app.eden.art with public agents, custom model training, and multi-modal generation available to creators today.",
        "The platform runs on an open-source foundation, with an SDK developers can use to build on top of, and a documented API at docs.eden.art.",
        "The ComfyUI workflow ecosystem lets community contributors earn revenue when their tools get used by agents on the platform.",
        "Active community across Discord, X, and Instagram.",
      ],
    },
    links: [
      { label: "Live platform", href: "https://app.eden.art" },
      { label: "Marketing site", href: "https://eden.art" },
      { label: "Documentation", href: "https://docs.eden.art" },
      { label: "GitHub organization", href: "https://github.com/edenartlab" },
      { label: "Agent runtime (open source)", href: "https://github.com/edenartlab/eve" },
      { label: "LoRA trainer (open source)", href: "https://github.com/edenartlab/flux-trainer" },
    ],
  },
  {
    slug: "keepcoming",
    client: "In-house Hexary product",
    title: "KeepComing",
    summary:
      "A loyalty platform for cafes, restaurants, and independent shops, with real Apple Wallet and Google Wallet integration, a public developer API, and a partners program for third-party integrations.",
    scope: [
      "Multi-tenant SaaS platform",
      "Apple Wallet & Google Wallet integration",
      "Real-time card updates",
      "Birthday & reward automations",
      "Developer API & docs",
      "Partners program",
    ],
    variant: {
      hero: "image-contained",
      body: "sectioned",
      metrics: "grid",
      density: "balanced",
    },
    cover: {
      kind: "photo",
      src: "/work/keepcoming.png",
      alt: "KeepComing's marketing key art, showing the KeepComing logo and a loyalty card in Apple Wallet",
      objectPosition: "left",
    },
    metrics: [
      { value: "Live", label: "Paid customers in production at www.keepcoming.app" },
      { value: "3 plans", label: "$19–$79/mo, with a 14-day trial that requires no credit card" },
      { value: "Platform", label: "Public developer API and partners program for third-party integrations" },
    ],
    challenge: {
      heading: "Challenge",
      body: [
        "Small independent businesses, cafes, restaurants, salons, barbers, retail shops, run on regulars. The paper punch card is the oldest, most reliable retention tool in that world, and it's also the most fragile: cards get lost, forgotten, or thrown in a drawer. Every existing digital alternative asked customers to download yet another app, which is exactly the friction that kills adoption at the counter.",
        "We wanted to build something a customer could opt into in under fifteen seconds, with no download, no account setup, and no card to lose, using infrastructure they already carry: Apple Wallet and Google Wallet. And we wanted to do it for a segment (independent shops) that most SaaS loyalty tools ignore because average revenue per customer is too small for enterprise sales motions.",
      ],
    },
    approach: {
      heading: "Approach",
      body: [
        "The two hardest technical pieces (real Apple Wallet and Google Wallet integration, and reliable real-time updates to cards already installed on customer phones) are exactly the pieces most SMB loyalty tools skip. We built those first, proved them end to end, and made them the foundation of the product rather than a nice-to-have.",
        "Zero-download onboarding was a design constraint we refused to compromise. Every friction point in the signup path was measured against a single question: does a customer complete this in under fifteen seconds with no help from staff. Anything that didn't clear that bar got cut or redesigned.",
      ],
    },
    solution: {
      heading: "Solution",
      body: [
        "KeepComing is a multi-tenant SaaS platform for digital loyalty programs. The core experience is deliberately simple: a shop signs up in minutes, sets a reward (say, a free coffee after five stars), and gets a QR code. Customers scan it, add the card to Apple Wallet or Google Wallet in one tap, and every visit updates the card on their phone in real time.",
        "Under that surface is the harder work: real integrations with Apple PassKit and Google Wallet APIs, push updates to cards that already live on the customer's phone, multi-channel delivery (QR, link, WhatsApp, email), and a multi-tenant architecture that keeps each shop's customers, staff accounts, and analytics fully isolated.",
        "Additional capability: birthday and reward automations that fire on their own once the shop sets the rules, staff scan pages that work from any phone camera without extra hardware, and an analytics view for shop owners to see visits, top customers, and redemption patterns.",
        "KeepComing is also designed as an ecosystem, not a closed product. A public developer API (documented at www.keepcoming.app/docs) lets third parties integrate loyalty into their own tools: POS systems, e-commerce platforms, marketing stacks, whatever a shop already runs on. And a partners program at www.keepcoming.app/partners opens the door for agencies, resellers, and technology partners to bring KeepComing into their own client work. Building for external integration from day one meant designing clean, versioned APIs and treating our own frontend as one client among many, which is why KeepComing can grow horizontally, into other businesses' workflows, instead of only vertically, into more features.",
      ],
    },
    stack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Apple PassKit",
      "Google Wallet API",
      "WhatsApp Business API",
    ],
    results: {
      heading: "Results",
      body: [
        "Live at www.keepcoming.app with paid customers in production.",
        "Real Apple Wallet and Google Wallet integration, working on both iPhone and Android with real-time card updates.",
        "Public developer API and documentation, meaning third-party integrations are supported rather than blocked.",
        "Three-plan pricing model (Basic $19/mo, Pro $39/mo, Business $79/mo) with a 14-day trial that requires no credit card, a signal of confidence in the onboarding experience.",
      ],
    },
    links: [
      { label: "Live product", href: "https://www.keepcoming.app" },
      { label: "Pricing", href: "https://www.keepcoming.app/pricing" },
      { label: "Developer documentation", href: "https://www.keepcoming.app/docs" },
      { label: "Partners program", href: "https://www.keepcoming.app/partners" },
    ],
  },
  {
    slug: "truecell",
    client: "TrueCell",
    title: "TrueCell",
    summary:
      "An inventory OS for high-volume electronics resellers: marketplace sync across Amazon, eBay, Back Market and more, demand forecasting, a rules engine that routes every unit without overselling it, and the accounting integrations to keep the books in agreement with the warehouse.",
    scope: [
      "Marketplace sync (Amazon, eBay, Back Market, Shopify)",
      "Demand forecasting & dynamic pricing",
      "Rules & routing engine",
      "AI-assisted risk detection",
      "Logistics integrations",
      "Accounting & BI integrations",
    ],
    variant: {
      hero: "image-contained",
      body: "sectioned",
      metrics: "grid",
      density: "balanced",
    },
    cover: { kind: "photo", src: "/work/truecell.webp", alt: "The TrueCell inventory dashboard, showing marketplace sync status and inventory metrics" },
    metrics: [
      { value: "99.7%", label: "Inventory accuracy reported across connected channels" },
      { value: "14 min/day", label: "To reconcile inventory, down from hours of manual cross-checking" },
      { value: "9+", label: "Marketplaces and sales channels kept in sync" },
      { value: "GMV-based", label: "Pricing that scales with the reseller, not per-seat licensing" },
    ],
    challenge: {
      heading: "Challenge",
      body: [
        "High-volume electronics resellers were tracking inventory, marketplace listings, and diagnostics across separate tools, with no single system deciding where a unit should go without the risk of overselling it across channels like Amazon, eBay, and Back Market.",
        "Every workaround touched the books eventually: a unit sold twice, a listing that didn't reflect the warehouse, a reconciliation that only happened at month-end instead of continuously. The fix couldn't just be a nicer inventory spreadsheet, it had to be a system of record that marketplaces, logistics, and accounting all trusted equally.",
      ],
    },
    approach: {
      heading: "Approach",
      body: [
        "As with every Hexary engagement, the riskiest technical assumption was identified and proven first: could inventory state be reconciled across many marketplaces in near real time without double-selling a unit. That sync and rules engine was built and stress-tested before anything else, then the system was extended outward in short, working increments rather than delivered as one big reveal at the end.",
        "Pricing was built to scale with the reseller's volume (GMV-based tiers) rather than per-seat, so the platform stays usable for a small pilot operation and a high-volume one without a re-negotiation at every growth stage.",
      ],
    },
    solution: {
      heading: "Solution",
      body: [
        "The result is a command center for device resale: demand forecasting, marketplace sync across Amazon, eBay, Back Market, Shopify and more, serial-level reconciliation, and a rules engine that decides where every unit goes without overselling it.",
        "An AI-assisted layer flags anomalies and risk (a listing drifting from its warehouse state, a channel behaving unusually) before they become a chargeback or an oversold unit, and dynamic pricing keeps listings competitive across channels without someone manually repricing SKUs.",
        "Logistics integrations connect the platform to shipping and fulfillment providers, so a sale doesn't just update a spreadsheet, it kicks off the actual fulfillment path. Accounting and BI integrations keep operational numbers and the books in agreement, instead of reconciled by hand once a month.",
      ],
    },
    stack: [
      "Amazon",
      "eBay",
      "Back Market",
      "Shopify",
      "QuickBooks",
      "NetSuite",
      "Snowflake",
      "Shipping & 3PL integrations",
    ],
    results: {
      heading: "Results",
      body: [
        "The platform now reports 99.7% inventory accuracy across connected channels, with reconciliation down to about 14 minutes a day, replacing what used to be hours of manual cross-checking between marketplaces and the warehouse.",
        "Nine or more marketplaces and sales channels stay in sync from a single system, with GMV-based pricing so the platform scales with the reseller instead of penalizing growth with per-seat costs.",
      ],
    },
    links: [{ label: "Live product", href: "https://truecell.net" }],
  },
  {
    slug: "kinein",
    client: "Kinein",
    title: "Kinein",
    summary:
      "A wholesale storefront for distributors and manufacturers where inventory, customer-specific pricing and orders move both ways between the site and Fishbowl, Acumatica, QuickBooks, Microsoft Business Central, NetSuite or Xero — no middleware, no re-keying.",
    scope: [
      "Native ERP & accounting sync",
      "Multi-warehouse inventory",
      "Sales rep portal",
      "Customer self-service portal",
      "Order templates & reordering",
      "Admin dashboard & sync monitoring",
    ],
    variant: {
      hero: "image-contained",
      body: "sectioned",
      metrics: "grid",
      density: "balanced",
    },
    cover: { kind: "photo", src: "/work/kinein.webp", alt: "The Kinein B2B e-commerce storefront, showing bidirectional sync between the storefront and connected accounting systems" },
    metrics: [
      { value: "1,000+", label: "Distributors, wholesalers, and manufacturers on the platform" },
      { value: "99.9%", label: "Platform uptime" },
      { value: "6", label: "Native accounting/ERP integrations, with no middleware layer" },
      { value: "8–16 wks", label: "Typical implementation, base package to a fully custom build" },
    ],
    challenge: {
      heading: "Challenge",
      body: [
        "Distributors, wholesalers, and manufacturers running B2B storefronts often keep their commerce platform and their accounting system out of sync: orders, inventory, and customer-specific pricing re-keyed by hand between the two, or handed off to middleware that adds its own point of failure.",
        "That disconnect is exactly what pushes people toward a system like this in the first place. It's a familiar story in the distribution world: run a manufacturing or wholesale business long enough, cycle through a few storefront rebuilds that all left the accounting system as an afterthought, and end up needing a platform built around the books rather than bolted onto them.",
      ],
    },
    approach: {
      heading: "Approach",
      body: [
        "As with every engagement in this space, the riskiest technical assumption was proven first: that inventory, pricing, and orders could sync bidirectionally with a live accounting or ERP system, in both directions, with zero manual re-keying and zero middleware in between. That sync engine came first; the storefront, sales rep portal, and self-service features were layered on once it held.",
        "Multi-warehouse support and customer-specific pricing were treated as first-class requirements rather than edge cases, since a distributor with two warehouses and one with twenty need the same sync guarantees, just at different scale.",
      ],
    },
    solution: {
      heading: "Solution",
      body: [
        "The result is a wholesale storefront where inventory, customer-specific pricing, and orders move both ways between the site and the connected accounting system, Fishbowl, Acumatica, QuickBooks, Microsoft Business Central, NetSuite, or Xero, with no middleware and no re-keying. An order placed on the storefront becomes a native sales order in the accounting system automatically: line items, pricing, customer info, and ship-to address included.",
        "A sales rep portal lets reps place orders on a customer's behalf using that customer's own pricing, payment terms, and product catalog. A customer self-service portal gives buyers order history, invoices, and reorder tools, including saved order templates and one-click reordering from past purchases.",
        "An admin dashboard surfaces order trends, customer activity, and sync health at a glance, including task-level detail on exactly what synced and when, so a sync issue is a notification rather than a discovery made days later.",
      ],
    },
    stack: [
      "Fishbowl",
      "Acumatica",
      "QuickBooks",
      "Microsoft Business Central",
      "NetSuite",
      "Xero",
    ],
    results: {
      heading: "Results",
      body: [
        "The platform now runs for 1,000+ distributors, wholesalers, and manufacturers, syncing natively with six major accounting and ERP systems at 99.9% uptime, with no middleware layer to maintain or fail.",
        "A base implementation typically goes live in about eight weeks; fully custom storefront builds run twelve to sixteen.",
      ],
    },
    links: [{ label: "Live product", href: "https://kinein.com" }],
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
    variant: {
      hero: "image-contained",
      body: "narrative",
      metrics: "inline",
      density: "balanced",
    },
    cover: {
      kind: "photo",
      src: "/work/b2b-access.webp",
      alt: "The B2B Access wholesale marketplace",
    },
    metrics: [],
    challenge: {
      heading: "Challenge",
      body: [
        "Wholesale relationships between retailers and brands were often run over text chains and email threads, with no vetted catalog, no order tracking, and no systematic way to alert a retailer before they ran out of stock.",
      ],
    },
    approach: {
      heading: "Approach",
      body: [
        "This engagement followed our standard approach: identify the riskiest technical assumption early and prove it before building around it, then deliver in short, working increments rather than a single end-of-project reveal.",
      ],
    },
    solution: {
      heading: "Solution",
      body: [
        "The result is a wholesale marketplace connecting verified retailers with brands: a vetted brand catalog, ordering with tracking, par-level restock alerts, and full invoice history, with tiered pricing, MOQs, and buyer analytics on the brand side.",
        "The platform also syncs with Shopify and Zoho CRM.",
      ],
    },
    stack: [],
    results: {
      heading: "Results",
      body: ["A full outcomes write-up for this engagement is in progress."],
    },
  },
  {
    slug: "northwind-logistics",
    client: "Northwind Logistics",
    title: "Four regional dispatch systems consolidated into one operational view",
    summary: "Four regional dispatch systems consolidated into one operational view",
    variant: {
      hero: "image-contained",
      body: "sectioned",
      metrics: "grid",
      density: "image-heavy",
    },
    cover: {
      kind: "photo",
      src: `https://images.unsplash.com/photo-1451187580459-43490279c0fa${UNSPLASH}`,
      alt: "Abstract network of illuminated lines across a dark surface",
    },
    metrics: [
      { value: "4 → 1", label: "Dispatch systems in use" },
      { value: "38%", label: "Fewer missed pickup windows" },
      { value: "6.5 hrs", label: "Weekly reconciliation time removed" },
      { value: "99.95%", label: "Sync uptime across regions" },
    ],
    challenge: {
      heading: "Challenge",
      body: [
        "Four regional depots had each bought their own dispatch software over a decade, and none of them agreed on what a delivery was. A shipment crossing regions was re-entered by hand at every boundary, which meant the head-office view of the network was always somewhere between two hours and two days out of date.",
        "Nobody could answer a basic question — where is this load right now — without phoning a depot. Planning was done on the assumption that the numbers were roughly right.",
      ],
    },
    approach: {
      heading: "Approach",
      body: [
        "Rather than replace four working systems at once, the first phase built a single canonical model of a shipment and proved it could be reconciled against all four sources in real time. That spike ran for three weeks against live data before any interface was designed.",
        "Once the model held, each depot was migrated one at a time, with the old system left running in parallel until the numbers matched for a full week.",
      ],
    },
    solution: {
      heading: "Solution",
      body: [
        "A central coordination service ingests events from each depot system, resolves them against the canonical shipment model, and publishes a single stream that the planning tools and the customer-facing tracking page both read from.",
        "Depot staff kept the interfaces they already knew. The change was underneath them, which is why adoption did not need a training programme.",
      ],
    },
    stack: [
      "Modern web stack",
      "Managed cloud hosting",
      "Event queue",
      "Relational database",
      "CI/CD pipeline",
      "Observability tooling",
    ],
    results: {
      heading: "Results",
      body: [
        "Network-wide shipment status went from a two-hour lag to under thirty seconds. Missed pickup windows fell by 38% in the first quarter, mostly because dispatchers could see contention between depots before it turned into a failed collection.",
        "The weekly reconciliation meeting, which existed only to argue about whose numbers were correct, was cancelled.",
      ],
    },
  },
  {
    slug: "meridian-retail",
    client: "Meridian Retail Group",
    title: "Rebuilding order processing around what staff actually did",
    summary: "Rebuilding order processing around what staff actually did",
    variant: {
      hero: "text-metric",
      body: "narrative",
      metrics: "hero",
      density: "text-heavy",
    },
    cover: { kind: "gradient", tone: "violet" },
    heroMetric: { value: "63%", label: "Reduction in order-processing time" },
    metrics: [{ value: "63%", label: "Reduction in order-processing time" }],
    challenge: {
      heading: "Challenge",
      body: [
        "The order-processing tool had been built eight years earlier around a workflow the business no longer used. Staff had adapted by inventing their own path through it: a sequence of eleven steps, four of which existed only to satisfy a validation rule nobody could justify, and two of which involved a spreadsheet kept on someone's desktop.",
        "Every proposal to replace it had started by documenting the official process, which is why every proposal had failed. The official process was not the one being followed.",
      ],
    },
    approach: {
      heading: "Approach",
      body: [
        "The first two weeks were spent watching people work. Not interviews about how the process was supposed to run, but sitting with the team as orders came in, recording where they hesitated, where they switched applications, and where they had built a workaround.",
        "The spreadsheet turned out to be load-bearing. It held the exception logic for roughly one order in nine, and it had never appeared in any specification because the person maintaining it assumed it was a personal habit rather than part of the system.",
        "That finding reshaped the build. Instead of designing the happy path and treating exceptions as edge cases, the exceptions became the primary design constraint.",
      ],
    },
    solution: {
      heading: "Solution",
      body: [
        "The replacement collapsed eleven steps to four, and made the exception path a first-class route through the interface rather than something staff had to leave the system to handle. The two validation rules that could be justified were kept; the other two were removed after tracing them back to a supplier relationship that had ended in 2019.",
        "Rollout ran department by department over six weeks, with the old tool available in read-only mode throughout so nobody lost access to history mid-transition.",
      ],
    },
    stack: [
      "Modern web stack",
      "Managed cloud hosting",
      "Relational database",
      "Background job runner",
      "CI/CD pipeline",
    ],
    results: {
      heading: "Results",
      body: [
        "Median order-processing time fell 63%, from just over nine minutes to three and a half. The larger effect was on the exception cases, which had previously taken as long as forty minutes and now resolve in under six.",
        "Training time for a new starter dropped from two days to roughly ninety minutes, which mattered more than the headline number to a business that hires seasonally.",
      ],
    },
    quote: {
      text: "The system finally matches how the work actually happens, instead of how someone assumed it happened eight years ago.",
      attribution: "Operations Lead, Meridian Retail Group",
    },
  },
  {
    slug: "halcyon-instruments",
    client: "Halcyon Instruments",
    title: "An integration layer between a warehouse system and a CRM",
    summary: "An integration layer between a warehouse system and a CRM",
    variant: {
      hero: "schematic",
      body: "sidebar",
      metrics: "inline",
      density: "balanced",
    },
    cover: { kind: "schematic" },
    metrics: [
      { value: "1.2M", label: "Records reconciled in migration" },
      { value: "< 40s", label: "End-to-end sync latency" },
      { value: "0", label: "Manual re-entry steps remaining" },
    ],
    challenge: {
      heading: "Challenge",
      body: [
        "Stock lived in a warehouse management system installed in 2011. Customers lived in a CRM adopted in 2020. Neither knew the other existed, so the sales team quoted against stock figures that were, at best, a day old — and at worst, wrong in the direction that loses an order.",
        "Roughly 1.2 million historical records had accumulated on both sides with no shared identifier between them.",
      ],
    },
    approach: {
      heading: "Approach",
      body: [
        "The risky part was not the integration, it was the identity problem: working out which warehouse record corresponded to which CRM record when neither system had ever agreed on a key. That was proven first, on a copy of production data, before any sync code was written.",
        "Matching resolved cleanly for 94% of records. The remaining 6% were surfaced in a review queue rather than guessed at.",
      ],
    },
    solution: {
      heading: "Solution",
      body: [
        "A dedicated integration service sits between the two systems, holding the mapping and translating in both directions. Stock movements reach the CRM in under forty seconds; customer and pricing changes flow back the other way on the same path.",
        "Reconciliation runs nightly against both sides and alerts on divergence, so a broken sync is a notification rather than a discovery.",
      ],
    },
    stack: [
      "Modern web stack",
      "Integration service layer",
      "Message queue",
      "Managed cloud hosting",
      "Observability tooling",
    ],
    results: {
      heading: "Results",
      body: [
        "Quoting against stale stock stopped being a category of error. The sales team's manual re-entry step — previously around 25 minutes per day, per person — was removed entirely.",
        "The review queue for unmatched records emptied within five weeks and now averages fewer than three entries a month.",
      ],
    },
  },
  {
    slug: "brightwater-supply",
    client: "Brightwater Supply Co.",
    title: "A self-service portal for accounts that had only ever ordered by phone",
    summary: "A self-service portal for accounts that had only ever ordered by phone",
    variant: {
      hero: "gradient",
      body: "sectioned",
      metrics: "grid",
      density: "balanced",
    },
    cover: { kind: "gradient", tone: "sand" },
    metrics: [
      { value: "71%", label: "Of reorders now placed self-service" },
      { value: "2.4x", label: "Increase in reorder frequency" },
      { value: "11 min", label: "Average call time eliminated per order" },
    ],
    challenge: {
      heading: "Challenge",
      body: [
        "Every reorder came through a phone call, and every phone call took around eleven minutes because the account manager had to look up previous orders, confirm current pricing, and check stock across three warehouses while the customer waited.",
        "Customers who wanted to order outside business hours simply did not order.",
      ],
    },
    approach: {
      heading: "Approach",
      body: [
        "The assumption worth testing first was whether these customers would use a portal at all. Rather than build one and find out, a rough version went to eleven accounts covering the range from smallest to largest, with the phone line still open.",
        "Nine of the eleven switched within a fortnight. The two that did not were the largest accounts, whose orders were complex enough to need a conversation — which became a design constraint rather than a failure.",
      ],
    },
    solution: {
      heading: "Solution",
      body: [
        "The portal handles the repeat order path: previous orders, account-specific pricing, live stock across all three warehouses, and a one-tap reorder. Complex or unusual orders route to an account manager instead of forcing customers through a flow that does not fit.",
        "Account managers kept the same back-office tools, now reading from the same stock data the portal shows.",
      ],
    },
    stack: [
      "Modern web stack",
      "Managed cloud hosting",
      "Relational database",
      "Payment provider integration",
      "CI/CD pipeline",
    ],
    results: {
      heading: "Results",
      body: [
        "71% of reorders moved to self-service within four months. Reorder frequency rose 2.4x — largely from customers placing smaller, more frequent orders outside business hours, which the phone process had made impractical.",
        "Account managers did not lose work; the time moved from order-taking to the larger accounts that had always needed it.",
      ],
    },
    quote: {
      text: "The orders we used to lose were the ones nobody wanted to make a phone call for.",
      attribution: "Owner, Brightwater Supply Co.",
    },
  },
  {
    slug: "ironvale-works",
    client: "Ironvale Works",
    title: "Replacing a decade of spreadsheets without stopping production",
    summary: "Replacing a decade of spreadsheets without stopping production",
    variant: {
      hero: "image-fullbleed",
      body: "narrative",
      metrics: "inline",
      density: "image-heavy",
    },
    cover: {
      kind: "photo",
      src: `https://images.unsplash.com/photo-1487958449943-2429e8be8625${UNSPLASH}`,
      alt: "Angular glass and steel building photographed against a pale sky",
    },
    metrics: [
      { value: "47", label: "Spreadsheets retired" },
      { value: "0", label: "Hours of production stopped" },
      { value: "3 days → 20 min", label: "Month-end close" },
    ],
    challenge: {
      heading: "Challenge",
      body: [
        "Production scheduling, materials tracking, quality records and costing all ran on spreadsheets — 47 of them, linked to each other by formulas that referenced file paths on a shared drive. Three of those files could only be opened by one person, because they contained macros written by someone who had left in 2016.",
        "Nobody was arguing that this was a good arrangement. The argument was that the factory could not stop for a migration, and every proposal so far had required it to.",
      ],
    },
    approach: {
      heading: "Approach",
      body: [
        "The constraint was absolute: production could not pause, and no week could end without a valid costing. So the work was sequenced to replace one spreadsheet at a time, starting with the ones nothing else depended on and moving inward toward the macro files.",
        "Each replacement ran alongside its spreadsheet until both produced identical numbers for four consecutive weeks. Twice, they did not match, and both times the spreadsheet turned out to be wrong in ways that had been quietly affecting costing for years.",
        "That pattern is worth naming: the migration's most valuable output was not the new system but the discovery of what the old one had been getting wrong.",
      ],
    },
    solution: {
      heading: "Solution",
      body: [
        "Scheduling, materials, quality and costing now share one data model, with the shop floor entering information once instead of into four places. The macro files were reverse-engineered, documented, and replaced last, once everything upstream was stable.",
        "Month-end close went from three days of manual assembly to a report that runs in about twenty minutes.",
      ],
    },
    stack: [
      "Modern web stack",
      "Managed cloud hosting",
      "Relational database",
      "Reporting layer",
      "Background job runner",
      "CI/CD pipeline",
    ],
    results: {
      heading: "Results",
      body: [
        "All 47 spreadsheets were retired over fourteen months with no production stoppage. Month-end close dropped from three days to twenty minutes, and costing errors traced back to the old formulas were corrected across the product range.",
        "The single-person dependency on the macro files no longer exists.",
      ],
    },
  },
];
