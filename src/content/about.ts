/** About page copy. */

export const whyWeExist = {
  heading: "Two ways software projects go wrong",
  body: [
    "Most software engagements fail in one of two directions. Some over-invest in strategy: months of workshops and decks that never turn into a working product. Others under-invest in it entirely, and ship the wrong thing quickly and confidently, then spend twice as long unwinding it.",
    "We started Hexary Labs to close that gap. Our team thinks in product terms and builds in engineering terms, in the same room, on the same timeline. That means the person scoping your roadmap is often the same person who ends up shipping it, which cuts out the translation loss that happens when strategy, design, and engineering live in separate teams that only talk through documents.",
    "We work as an embedded partner, not a vendor answering tickets. That distinction shows up in small ways: we ask why a feature matters before we ask how to build it, we flag scope that doesn't serve the goal even when it's already been approved, and we measure our own success by whether you still need us a year later, not by billable hours.",
  ],
};

export type AboutProcessStep = { number: string; title: string; body: string };

export const howWeWork = {
  heading: "A process built to catch problems early, when they're still cheap",
  intro: "Four steps, repeated on every engagement regardless of size.",
  steps: [
    {
      number: "01",
      title: "Frame the problem",
      body: "Before anything gets designed or built, we agree in writing on what success looks like, what the real constraints are (budget, timeline, existing systems we have to work around), and just as importantly, what we're deliberately not building. Most scope creep starts here, in an assumption nobody wrote down.",
    },
    {
      number: "02",
      title: "Prove the risky part first",
      body: "Every project has one thing most likely to sink it: an unproven integration, an assumption about user behavior, a performance question that only shows up at scale. We identify that piece and build it first, as a prototype or a spike, so the real risk gets resolved while it's still cheap to change course.",
    },
    {
      number: "03",
      title: "Build in the open",
      body: "We work in short cycles and share working software every week, not a status update about working software. You see progress as it happens, which means feedback happens in days, not at the end of a six-week silence.",
    },
    {
      number: "04",
      title: "Hand over cleanly",
      body: "Every engagement ends with tests, documentation, and a walkthrough with your team, not just a deploy and an invoice. Our goal is that you don't need us for the next six months unless you want to.",
    },
  ] as AboutProcessStep[],
};

export const whosBehind = {
  heading: "A small, senior team, on purpose",
  body: [
    "We stay small so every client works directly with the engineers and designers building their software, not an account manager relaying requests to a bench of juniors we've never introduced you to. That's a deliberate constraint, not a limitation we're working around.",
    "The team behind Hexary Labs has shipped backend-heavy, integration-heavy systems: the inventory and marketplace-sync platform behind TrueCell, the bidirectional accounting integration behind Kinein, and the retailer-verification marketplace behind B2B Access. Across engagements, the through-line is the same: connecting systems that were never designed to talk to each other, and making the result boring and reliable instead of clever and fragile.",
    "Our core stack spans TypeScript, React, and Next.js on the frontend; Node.js, NestJS, PostgreSQL, and Redis on the backend; and AWS, Vercel, Docker, and Kubernetes for infrastructure, chosen because they hold up years after we've handed a project off, not because they're the newest option available.",
  ],
};

export type WhyChooseUsItem = { title: string; body: string };

export const whyChooseUs = {
  heading: "What that actually means for you",
  items: [
    {
      title: "Direct access to the people doing the work.",
      body: "No account layer between you and the engineers writing your code.",
    },
    {
      title: "Engineering rigor from day one.",
      body: "Tests, observability, and CI aren't a cleanup pass before handover, they're built in from the first sprint.",
    },
    {
      title: "Clean handovers, by design.",
      body: "Documentation and a team walkthrough are part of every engagement, not an optional add-on.",
    },
    {
      title: "Honest scoping.",
      body: "If a piece of requested scope doesn't serve the actual goal, we'll tell you before it's built, not after.",
    },
    {
      title: "We say no when we're not the right fit.",
      body: "We'd rather turn down a project outside our depth than take it on and learn on your budget.",
    },
  ] as WhyChooseUsItem[],
};
