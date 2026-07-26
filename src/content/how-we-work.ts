export const hero = {
  eyebrow: "How we work",
  headline: "The same four steps, on every engagement",
  intro:
    "Most of what goes wrong on a software project goes wrong early, in an assumption nobody wrote down or a risk nobody tested. Our process is built to surface both while they're still cheap to fix. Here's what that actually looks like from the inside.",
  cta: "Start a Project",
};

export const intro = {
  heading: "Process, not ceremony",
  body: [
    "We don't run a heavyweight methodology, and we don't ask you to learn our internal vocabulary. What we do have is a fixed sequence we don't skip, regardless of whether an engagement runs six weeks or six quarters: agree on the problem, prove the riskiest part, build where you can see it, and hand over something your team can own.",
    "The steps below are the same four we run on every project. What changes between a small integration and a multi-quarter platform build is depth, not order.",
  ],
};

export type ProcessPhase = {
  number: string;
  title: string;
  lead: string;
  detail: string[];
  deliverableLabel: string;
  deliverable: string;
};

export const phases: ProcessPhase[] = [
  {
    number: "01",
    title: "Frame the problem",
    lead: "Before anything gets designed or built, we agree in writing on what success looks like, what the real constraints are, and what we're deliberately not building.",
    detail: [
      "Discovery is a working session, not a questionnaire. We want the people who understand the business problem in the room — not just whoever owns the project on paper — because the constraint that reshapes a build is usually mentioned in passing by someone who assumed we already knew.",
      "We push for success criteria you could actually check: a process that takes four days should take four hours, a report that's assembled by hand should assemble itself, a system that falls over at a thousand orders should hold at fifty thousand. Vague goals produce vague software.",
      "We map which constraints are genuinely fixed — a compliance deadline, a system you can't replace this year, a budget ceiling — and which ones are just current habits. Those get treated very differently.",
      "Then we write down what we're not building. Most scope creep starts as an unstated assumption that something was obviously included, so we make the boundary explicit while it's still an easy conversation.",
    ],
    deliverableLabel: "What you end up with",
    deliverable:
      "A short written scope: the goal in measurable terms, the constraints we're building around, the explicit non-goals, and the one risk we're going to prove first.",
  },
  {
    number: "02",
    title: "Prove the risky part first",
    lead: "Every project has one thing most likely to sink it. We build that first, so the unknown resolves while it's still cheap to change course.",
    detail: [
      "The risky part is rarely the part that looks hardest on a roadmap. It's the undocumented API you have to integrate with, the assumption that users will adopt a new workflow, the data quality nobody's audited, the performance question that only appears at real volume.",
      "We name that piece during framing and build it immediately — as a spike or a rough prototype, deliberately unpolished, aimed at answering one question. Not a demo built to reassure you, a test built to find out.",
      "Sometimes the answer is no. An integration turns out not to expose what we need, or the data can't support the feature it was supposed to power. That's the point: a no in week two costs a conversation, and the same no in month four costs a rebuild.",
      "When the answer is yes, we've also learned the shape of the real solution, which makes every estimate after it worth something.",
    ],
    deliverableLabel: "What you end up with",
    deliverable:
      "A working spike and a straight answer: this approach holds, or it doesn't and here's what we'd do instead — before the majority of the budget is committed.",
  },
  {
    number: "03",
    title: "Build in the open",
    lead: "Short cycles, working software you can use every week, and a running conversation. No six-week silence ending in a reveal.",
    detail: [
      "You get access to the repository from the first commit. Not a curated snapshot at milestones — the actual history, readable as it's written. If you have engineers, they can review it. If you don't, it's still yours the whole way through.",
      "Every week there's something running that you can open and use, deployed to an environment that's yours. Progress you can click on is harder to misread than a percentage on a status report, and it means feedback arrives in days rather than at the end.",
      "Decisions get written down where you can see them: why we chose one approach over another, what we traded away, what we'd revisit if a constraint changed. Six months later, that record is usually worth more than the meeting it came from.",
      "When something slips, you hear it that week. A missed estimate is a normal part of building software; finding out about it late is what turns it into a problem.",
    ],
    deliverableLabel: "What you end up with",
    deliverable:
      "Working software in an environment you control, updated weekly, with a written record of the decisions behind it.",
  },
  {
    number: "04",
    title: "Hand over cleanly",
    lead: "Tests, documentation, and a team that knows the system. The goal is that you don't need us afterwards unless you want us.",
    detail: [
      "Everything runs in your accounts, under your credentials, on infrastructure defined in code you own. There's no dependency on us holding a key, and no migration project the day you decide to bring the work in-house.",
      "Tests cover the paths where being wrong is expensive — the money, the integrations, the data that can't be reconstructed. We'd rather have a focused suite your team will maintain than a coverage number nobody trusts.",
      "Documentation is written for the person who joins your team six months from now with no context: how the system is put together, why it's built this way, how to run it locally, what breaks first under load and where to look when it does.",
      "Then we walk your team through it live and answer questions until they're finished, rather than sending a document and an invoice. Plenty of clients keep working with us afterwards. That should be a decision, not a dependency.",
    ],
    deliverableLabel: "What you end up with",
    deliverable:
      "The repository, the infrastructure, the tests, the documentation, and a team that has already operated the system with us in the room.",
  },
];

export const whatWeAsk = {
  heading: "What we need from you",
  intro:
    "The process only works in both directions. Engagements that go well tend to share three things on the client side.",
  items: [
    {
      title: "One person who can decide",
      body: "Not necessarily the most senior person, but someone empowered to settle a question in a day rather than routing it through a committee. Decision latency is the single biggest cause of slow projects we've seen.",
    },
    {
      title: "Access to the people who know",
      body: "Occasional time with whoever actually runs the process we're rebuilding — the person doing it manually today usually knows the exception cases no specification captured.",
    },
    {
      title: "Honest constraints, early",
      body: "The budget ceiling, the immovable deadline, the internal politics around a system we're touching. We can design around a constraint we know about. We can't design around one we discover in month three.",
    },
  ],
};

export const closing = {
  heading: "Tell us what you're building",
  cta: "Start a Project",
};
