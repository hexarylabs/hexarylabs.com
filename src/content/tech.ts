/**
 * Tech stack grid. Names only — rendered as text marks, not vendor logos, so
 * we ship no third-party trademarks we don't have permission to use.
 * (The reference uses full-colour vendor logos; we deliberately don't.)
 *
 * ⚠️ PLACEHOLDER: confirm this reflects Hexary's actual stack.
 */
export const techIntro =
  "From interface to infrastructure, we work in a stack chosen to reduce risk and stay maintainable long after handover.";

export type TechGroup = { heading: string; items: string[] };

export const tech: TechGroup[] = [
  {
    heading: "Product",
    items: ["TypeScript", "React", "Next.js", "React Native", "Swift", "Kotlin"],
  },
  {
    heading: "Platform",
    items: ["Node.js", "NestJS", "PostgreSQL", "Redis", "GraphQL", "tRPC"],
  },
  {
    heading: "Infrastructure",
    items: ["AWS", "Vercel", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
];
