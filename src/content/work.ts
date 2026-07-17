/**
 * Case studies.
 *
 * ⚠️ PLACEHOLDER: these describe project *archetypes*, not real engagements.
 * No client names and no results metrics are included — both must come from
 * Hexary. Replace `title`/`summary` and add `client` + `results` once real
 * engagements are cleared for publication.
 *
 * Note on `results`: intentionally absent. The card renders the `scope` strip
 * instead, which is descriptive rather than a performance claim. When real,
 * verified metrics exist, add `results` and the card switches automatically.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  /** Real client name — omit until cleared for publication. */
  client?: string;
  /** Descriptive scope. Rendered when `results` is absent. */
  scope: string[];
  /** Verified outcome metrics. Rendered instead of `scope` when present. */
  results?: { value: string; label: string }[];
  /** Decorative hex-motif seed — see components/visuals/CaseVisual. */
  visualSeed: number;
};

export const workArePlaceholder = true;

export const work: CaseStudy[] = [
  {
    slug: "logistics-operations-platform",
    title: "A real-time operations platform for a distributed fleet",
    summary:
      "Dispatch, tracking and exception handling in one console — replacing a spreadsheet workflow that broke down past a few hundred daily jobs.",
    scope: ["Product strategy", "Web app", "Design system", "Cloud infra"],
    visualSeed: 1,
  },
  {
    slug: "clinical-data-workspace",
    title: "A clinical data workspace built for regulated review",
    summary:
      "A structured review tool that keeps a full audit trail, so specialists can move quickly without losing traceability.",
    scope: ["UX research", "Web app", "APIs & platform"],
    visualSeed: 2,
  },
  {
    slug: "ai-knowledge-assistant",
    title: "An AI assistant grounded in a decade of internal documentation",
    summary:
      "Retrieval over a large private corpus, with an evaluation harness that gates every model change before it reaches users.",
    scope: ["AI engineering", "RAG & retrieval", "Evaluation"],
    visualSeed: 3,
  },
  {
    slug: "field-service-mobile-app",
    title: "An offline-first mobile app for field engineers",
    summary:
      "Job management that keeps working with no signal, then reconciles cleanly when the device comes back online.",
    scope: ["Mobile (iOS & Android)", "Product design", "Sync architecture"],
    visualSeed: 4,
  },
];
