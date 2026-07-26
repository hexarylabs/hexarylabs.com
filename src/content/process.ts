export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Frame the problem",
    body: "We agree in writing on what success looks like, what constraints are real, and what we're deliberately not building.",
  },
  {
    number: "02",
    title: "Prove the risky part first",
    body: "We find the assumption most likely to sink the project and test it before anyone commits engineering budget to it.",
  },
  {
    number: "03",
    title: "Build in the open",
    body: "Working software every week, deployed to a shared environment, so feedback happens in days.",
  },
  {
    number: "04",
    title: "Hand over cleanly",
    body: "Tests, documentation, and a walkthrough with your team, so the system lives with you after we're done.",
  },
];
