import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms",
  robots: { index: false, follow: true },
};

/**
 * ⚠️ PLACEHOLDER — NOT LEGAL COPY.
 * Structural stub only. Replace with terms reviewed by counsel before launch.
 */
export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <Section tone="light">
        <Container>
          <div className="flex max-w-[70ch] flex-col gap-6 text-body-lg text-grey-600">
            <p className="border-l-2 border-accent bg-base-2 p-4 text-body text-contrast">
              <strong>Placeholder.</strong> This page is a structural stub, not
              terms of service. It must be replaced with copy reviewed by counsel
              before this site goes live.
            </p>
            <p>
              Published terms should cover: scope of services, engagement and
              payment terms, intellectual property ownership, warranties and
              limitations of liability, and governing law.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
