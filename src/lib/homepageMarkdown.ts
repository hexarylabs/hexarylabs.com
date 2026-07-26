import { site } from "@/content/site";
import { stats } from "@/content/stats";
import { work } from "@/content/work";
import { services } from "@/content/services";
import { tech, techIntro } from "@/content/tech";
import { process } from "@/content/process";

const disciplines = [
  "Product Strategy",
  "UX Research",
  "Design Systems",
  "Web Platforms",
  "Mobile Apps",
  "AI Engineering",
  "Cloud Infrastructure",
  "Developer Tooling",
];

/**
 * A markdown mirror of the homepage, for `Accept: text/markdown` requests
 * (see src/proxy.ts). Built from the same content modules the page itself
 * renders from, so it stays in sync with what's actually on the page rather
 * than an HTML-to-text scrape.
 */
export function buildHomepageMarkdown(): string {
  const lines: string[] = [];

  lines.push(`# ${site.name} — ${site.tagline}`, "", site.description, "");

  lines.push(
    "## Engineering-Led Product Studio.",
    "",
    "We design and build software products — from strategy and UX through to shipped, scalable engineering. Fewer surprises, cleaner handovers, systems your team can own.",
    "",
    "[Tell Us What You're Building](/contact)",
    "",
    `Disciplines: ${disciplines.join(", ")}`,
    "",
  );

  lines.push(
    "## By the Numbers",
    "",
    ...stats.map((s) => `- ${s.prefix ?? ""}${s.value}${s.suffix ?? ""} — ${s.label}`),
    "",
  );

  lines.push(
    "## Our Work",
    "",
    ...work.slice(0, 2).map((w) => {
      const client = w.client ? `${w.client}: ` : "";
      return `- **[${w.title}](/work/${w.slug})** — ${client}${w.summary}`;
    }),
    "",
    "[See all work](/work)",
    "",
  );

  lines.push(
    "## Our Services",
    "",
    ...services.map((s) => `- **[${s.title}](/services/${s.slug})** — ${s.summary}`),
    "",
    "[See all services](/services)",
    "",
  );

  lines.push(
    "## Our Stack",
    "",
    techIntro,
    "",
    ...tech.map((group) => `- **${group.heading}**: ${group.items.join(", ")}`),
    "",
  );

  lines.push(
    "## How We Work",
    "",
    ...process.map((step) => `${Number(step.number)}. **${step.title}** — ${step.body}`),
    "",
  );

  lines.push("## Let's Talk", "", "[Start a Project](/contact)", "", "---", "");

  lines.push(
    "Pages: [Services](/services) · [Work](/work) · [About](/about) · [Contact](/contact) · [Privacy](/privacy) · [Terms](/terms)",
  );

  return lines.join("\n");
}
