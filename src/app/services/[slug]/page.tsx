import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { services } from "@/content/services";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Next 16: `params` is a Promise — synchronous access was removed.
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return { title: service.title, description: service.summary };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} intro={service.summary} />

      <Section tone="light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr]">
            <h2 className="text-[1.3125rem] leading-[1.2] md:text-[1.625rem] lg:text-h3">
              How we approach it
            </h2>
            <div className="flex flex-col gap-8">
              <p className="text-body-lg text-grey-600">{service.detail}</p>

              <ul className="grid gap-px border-[0.8px] border-grey-200 bg-grey-200 sm:grid-cols-2">
                {service.capabilities.map((c) => (
                  <li
                    key={c}
                    className="bg-base p-6 font-display text-body-lg text-contrast-2"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
