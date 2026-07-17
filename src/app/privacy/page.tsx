import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy",
  robots: { index: false, follow: true },
};

/**
 * ⚠️ PLACEHOLDER — NOT LEGAL COPY.
 * This is a structural stub. Replace with a policy reviewed by counsel before
 * launch; do not publish as-is.
 */
export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section tone="light">
        <Container>
          <div className="flex max-w-[70ch] flex-col gap-6 text-body-lg text-grey-600">
            <p className="border-l-2 border-accent bg-base-2 p-4 text-body text-contrast">
              <strong>Placeholder.</strong> This page is a structural stub, not a
              privacy policy. It must be replaced with copy reviewed by counsel
              before this site goes live.
            </p>
            <p>
              A published policy should cover: what data is collected, why, the
              lawful basis, retention periods, third-party processors, cookie
              usage, and how to exercise data rights.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
