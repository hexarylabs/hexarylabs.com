export const DEMO_NOTICE = "Preview example, not a real client project";

export const DEMO_INTRO =
  "This is a design preview, not real work. Every project below is invented to compare case-study layouts, hero treatments and metric styles side by side. None of it describes an actual client, and none of the numbers are real. Pick the layout that reads best and the real /work page will be rebuilt around it.";

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

export type DemoCover =
  | { kind: "photo"; src: string; alt: string }
  | { kind: "gradient"; tone: GradientTone }
  | { kind: "schematic" };

export type DemoMetric = { value: string; label: string };

export type DemoSection = { heading: string; body: string[] };

export type DemoCase = {
  slug: string;
  name: string;
  tagline: string;
  variant: {
    hero: HeroVariant;
    body: BodyVariant;
    metrics: MetricVariant;
    density: DensityVariant;
  };
  variantLabel: string;
  cover: DemoCover;
  heroMetric?: DemoMetric;
  metrics: DemoMetric[];
  challenge: DemoSection;
  approach: DemoSection;
  solution: DemoSection;
  stack: string[];
  results: DemoSection;
  quote?: { text: string; attribution: string };
};

const UNSPLASH = "?auto=format&fit=crop&w=1600&q=80";

export const demoCases: DemoCase[] = [
  {
    slug: "northwind-logistics",
    name: "Northwind Logistics",
    tagline:
      "Four regional dispatch systems consolidated into one operational view",
    variant: {
      hero: "image-contained",
      body: "sectioned",
      metrics: "grid",
      density: "image-heavy",
    },
    variantLabel: "Image hero · Sectioned body · Metric grid · Image-heavy",
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
    name: "Meridian Retail Group",
    tagline: "Rebuilding order processing around what staff actually did",
    variant: {
      hero: "text-metric",
      body: "narrative",
      metrics: "hero",
      density: "text-heavy",
    },
    variantLabel: "Text hero + metric · Narrative body · Single metric · Text-heavy",
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
      attribution: "Illustrative example — not a real client quote",
    },
  },
  {
    slug: "halcyon-instruments",
    name: "Halcyon Instruments",
    tagline: "An integration layer between a warehouse system and a CRM",
    variant: {
      hero: "schematic",
      body: "sidebar",
      metrics: "inline",
      density: "balanced",
    },
    variantLabel: "Schematic hero · Sidebar body · Inline metrics · Balanced",
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
    name: "Brightwater Supply Co.",
    tagline: "A self-service portal for accounts that had only ever ordered by phone",
    variant: {
      hero: "gradient",
      body: "sectioned",
      metrics: "grid",
      density: "balanced",
    },
    variantLabel: "Gradient hero · Sectioned body · Metric grid · Balanced",
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
      attribution: "Illustrative example — not a real client quote",
    },
  },
  {
    slug: "ironvale-works",
    name: "Ironvale Works",
    tagline: "Replacing a decade of spreadsheets without stopping production",
    variant: {
      hero: "image-fullbleed",
      body: "narrative",
      metrics: "inline",
      density: "image-heavy",
    },
    variantLabel: "Full-bleed image hero · Narrative body · Inline metrics · Image-heavy",
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
