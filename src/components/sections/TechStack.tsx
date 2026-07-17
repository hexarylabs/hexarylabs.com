import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { tech, techIntro } from "@/content/tech";

/**
 * Black band, centred header, hairline-divided grid — the reference's tech
 * section. It uses full-colour vendor logos; we render names as text marks so
 * we ship no third-party trademarks, and no image weight.
 */
export function TechStack() {
  return (
    <Section tone="dark">
      <Container>
        <SectionHeader align="center" title="Our Stack" intro={techIntro} />

        <div className="border-t-[0.8px] border-grey-700">
          {tech.map((group) => (
            <div
              key={group.heading}
              className="grid gap-6 border-b-[0.8px] border-grey-700 py-8 md:grid-cols-[200px_1fr] md:items-center"
            >
              <h3 className="font-display text-body-lg font-medium text-grey-500">
                {group.heading}
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-display text-body text-white transition-colors duration-300 hover:text-accent-hi"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
