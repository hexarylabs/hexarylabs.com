/**
 * How we work — occupies the slot the reference uses for testimonials.
 * We have no real testimonials and will not invent any, so this section says
 * something true about the studio instead.
 *
 * ⚠️ PLACEHOLDER COPY: rewrite in Hexary's voice.
 */
export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Frame the problem",
    body: "Before anything is designed we agree on what success looks like, what the real constraints are, and what we are deliberately not building.",
  },
  {
    number: "02",
    title: "Prove the risky part",
    body: "Every project has one thing most likely to sink it. We build that first — as a prototype or spike — so the unknown resolves while it is still cheap.",
  },
  {
    number: "03",
    title: "Build in the open",
    body: "Short cycles, working software you can use each week, and a running conversation. No six-week silence ending in a reveal.",
  },
  {
    number: "04",
    title: "Hand over cleanly",
    body: "Tests, documentation and a team that knows the system. The goal is that you do not need us afterwards.",
  },
];
