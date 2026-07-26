import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/** Shared hero for inner pages — same type ramp as the homepage h1. */
export function PageHero({
  eyebrow,
  title,
  intro,
  cta,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="border-b-[0.8px] border-grey-100 bg-base pb-14 pt-12 lg:pb-20 lg:pt-18">
      <Container>
        {eyebrow && (
          <p className="mb-6 text-small uppercase tracking-widest text-grey-600">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-[20ch] text-[2.125rem] leading-[1.2] tracking-[0.02em] md:text-[3rem] lg:text-h1">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-[60ch] text-body-lg text-grey-600">{intro}</p>
        )}
        {cta && (
          <Button href={cta.href} size="lg" className="mt-8">
            {cta.label}
          </Button>
        )}
      </Container>
    </section>
  );
}
