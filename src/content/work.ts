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
  imagePosition?: "top" | "left";

  /**
   * Deeper case-study fields — optional. Only Eden uses these today; the
   * other three case studies could be expanded with the same fields later
   * (until then their detail pages fall back to the shorter template).
   */
  categories?: string[];
  liveUrl?: string;
  challenge?: string;
  role?: string;
  features?: { heading: string; body: string }[];
  approach?: string[];
  resultsList?: string[];
  stack?: string[];
  links?: { label: string; href: string }[];
};

export const work: CaseStudy[] = [
  {
    slug: "eden",
    client: "Eden Labs",
    title:
      "A studio for autonomous creative AI, where agents make art, video, and stories with people and with each other.",
    summary:
      "The generative AI space is dominated by single-shot prompt-and-response tools: type a prompt, get an image, close the tab. Eden set out to build something more ambitious.",
    categories: ["AI Engineering", "SaaS Platform", "Custom Model Training", "Full-Stack Development"],
    liveUrl: "https://app.eden.art",
    challenge:
      "The generative AI space is dominated by single-shot prompt-and-response tools: type a prompt, get an image, close the tab. Eden set out to build something more ambitious: a platform where creators could build persistent, autonomous AI agents with their own personalities, their own custom-trained visual models, and the ability to collaborate with humans and with each other on multi-step creative work. That meant solving problems the space doesn't have textbook answers for yet. Training custom visual models on user-provided samples at reasonable cost. Running a workflow ecosystem where community-contributed tools (ComfyUI pipelines) could be called autonomously by agents and earn their creators revenue when used. Giving agents context, tools, and identity that persist across sessions. And building all of it on an open-source foundation so the platform stays extensible.",
    role: "Full-stack technology partner across the platform: web application, backend API, AI orchestration layer, and the model training pipeline.",
    scope: [
      "Web application (Next.js)",
      "Backend API (Fastify)",
      "AI orchestration layer (FastAPI)",
      "Custom model training pipeline",
      "Community workflow ecosystem",
      "Autonomous agent runtime",
    ],
    features: [
      {
        heading: "A creative studio in the browser.",
        body: "The core experience at app.eden.art is a Next.js application where creators build agents, train custom visual models, and generate multi-modal work (image, video, audio). We built the frontend and the Fastify (Node.js) backend that powers it.",
      },
      {
        heading: "An AI orchestration API.",
        body: "A FastAPI (Python) service handles the actual generation and agent execution: model calls, tool use, workflow orchestration. This is what turns \"run this agent\" into \"the agent uses these ComfyUI workflows in this order and returns this output.\"",
      },
      {
        heading: "A custom model training pipeline on GCP.",
        body: "Users can train their own visual models on their own sample images using our Flux LoRA training pipeline deployed on Google Cloud. This is what makes Eden feel personal: the agents are creating in a style trained on the creator's own work, not a generic model's default.",
      },
      {
        heading: "A workflow ecosystem for contributors.",
        body: "ComfyUI workflows contributed by the community become tools that any agent on the platform can use, and contributors earn revenue when their workflows get called. This is the piece that turns Eden from a product into a platform.",
      },
      {
        heading: "Autonomous agents.",
        body: "Named agents like Eve (Eden's flagship creative agent) can hold conversations, use the full workflow toolchain, and produce multi-step creative outputs, art, video, stories, without the user prompting at every step.",
      },
    ],
    approach: [
      "Eden is a research-shaped product: a lot of what we built wasn't yet standard practice in the industry when we built it. We approached it the way we approach any AI system that has to hold up in production: treat the model as software, not as magic. Build a testable, observable pipeline. Ship in small, working increments so the team can see what's working and what needs to be reshaped, not wait for a big-bang reveal at the end.",
      "The model training pipeline was the highest-risk piece. We built it first, isolated on GCP, and proved it end-to-end (sample images in, custom model out, usable in the agent runtime) before wiring it into the platform proper.",
    ],
    resultsList: [
      "Eden is live at app.eden.art with public agents, custom model training, and multi-modal generation available to creators today.",
      "The platform runs on an open-source foundation, with an SDK developers can use to build on top of, and a documented API at docs.eden.art.",
      "The ComfyUI workflow ecosystem lets community contributors earn revenue when their tools get used by agents on the platform.",
      "Active community across Discord, X, and Instagram.",
    ],
    stack: [
      "Next.js",
      "Fastify (Node.js)",
      "FastAPI (Python)",
      "Google Cloud Platform",
      "ComfyUI",
      "Flux LoRA",
      "Stable Diffusion pipelines",
    ],
    links: [
      { label: "Live platform", href: "https://app.eden.art" },
      { label: "Marketing site", href: "https://eden.art" },
      { label: "Documentation", href: "https://docs.eden.art" },
      { label: "GitHub organization", href: "https://github.com/edenartlab" },
      { label: "Agent runtime (open source)", href: "https://github.com/edenartlab/eve" },
      { label: "LoRA trainer (open source)", href: "https://github.com/edenartlab/flux-trainer" },
    ],
    image: "/work/eden.jpg",
    imageAlt: "Eden's key art, featuring the Eden mark over a generated fantasy landscape",
    imagePosition: "left",
  },
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
