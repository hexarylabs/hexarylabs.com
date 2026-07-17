/**
 * Service offerings.
 *
 * ⚠️ PLACEHOLDER COPY: descriptions describe a generic engineering-led studio.
 * Rewrite in Hexary's voice with real capability detail before launch.
 * Structure (4 services) is final — it drives the nav dropdown, the homepage
 * Services section, and the /services/[slug] routes.
 */
export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "product-strategy",
    title: "Product Strategy",
    summary:
      "The strongest products start with the sharpest plan. We help teams clarify the vision, validate demand early, and decide what to build before the expensive part starts.",
    detail:
      "Discovery, technical feasibility and a scoped roadmap you can actually fund. We pressure-test the idea against real constraints — users, timeline, budget and the stack you already run.",
    capabilities: [
      "Discovery workshops",
      "Technical feasibility",
      "Roadmap & scoping",
      "Architecture review",
    ],
  },
  {
    slug: "product-design",
    title: "Product Design",
    summary:
      "We turn capability into something people can actually use. Research, interface design and design systems that stay coherent as the product grows.",
    detail:
      "From user research and flows to a component library your engineers can build against. Design that survives contact with the roadmap rather than being redrawn every quarter.",
    capabilities: [
      "UX research",
      "Interface design",
      "Design systems",
      "Prototyping",
    ],
  },
  {
    slug: "software-engineering",
    title: "Software Engineering",
    summary:
      "Web, mobile and platform engineering built to scale — with the tests, observability and CI that keep it shippable after we hand it over.",
    detail:
      "We build production systems, not demos. Typed end to end, tested where it matters, instrumented so you can see what's happening, and documented so your team can own it.",
    capabilities: [
      "Web applications",
      "Mobile (iOS & Android)",
      "APIs & platform",
      "Cloud infrastructure",
    ],
  },
  {
    slug: "ai-engineering",
    title: "AI Engineering",
    summary:
      "AI features that hold up in production — evaluated, grounded in your data, and shipped behind the same quality bar as the rest of your product.",
    detail:
      "Retrieval, agents and LLM-backed workflows with evaluation harnesses, guardrails and cost controls. We start from the business outcome, not the model.",
    capabilities: [
      "LLM integration",
      "RAG & retrieval",
      "Evaluation harnesses",
      "Agent workflows",
    ],
  },
];
