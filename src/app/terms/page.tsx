import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms",
  robots: { index: false, follow: true },
};

const heading = "text-[1.3125rem] leading-[1.2] md:text-[1.625rem] lg:text-h3";

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <Section tone="light">
        <Container>
          <div className="flex max-w-[70ch] flex-col gap-8">

            <p className="text-body-lg text-grey-600">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
              hexarylabs.com (the &ldquo;Site&rdquo;), operated by Hexary Labs
              (&ldquo;Hexary Labs,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a
              software development studio. By using the Site, you agree to these Terms.
            </p>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Using the Site</h2>
              <p className="text-body-lg text-grey-600">
                The Site is provided so you can learn about our work and services and get in
                touch with us. You agree to use it only for lawful purposes, and not to
                attempt to disrupt, scrape at scale, reverse-engineer, or otherwise misuse it.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>The Site Is Informational, Not a Contract</h2>
              <p className="text-body-lg text-grey-600">
                Everything on the Site, including service descriptions, process explanations,
                timelines, and case studies, is provided for general information. It does not
                constitute a binding offer or a contract for services. Any actual engagement
                between Hexary Labs and a client is governed by a separate signed proposal,
                statement of work, or master services agreement, which takes precedence over
                anything described on the Site.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Intellectual Property</h2>
              <p className="text-body-lg text-grey-600">
                All content on the Site, including our text, design, branding, and case study
                material, belongs to Hexary Labs or is used with permission, and is protected
                by applicable intellectual property laws. You&rsquo;re welcome to link to the
                Site or share it, but you may not reproduce, republish, or create derivative
                works from its content without our written permission.
              </p>
              <p className="text-body-lg text-grey-600">
                Case studies and client examples on the Site are shared with client permission
                or presented in anonymized or illustrative form to protect client
                confidentiality. Ownership of any work product created for a specific client is
                governed by that client&rsquo;s individual agreement with Hexary Labs, not by
                these Terms.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Feedback</h2>
              <p className="text-body-lg text-grey-600">
                If you send us feedback or suggestions about the Site, you agree that we can
                use them freely, without any obligation to you, to improve our services or the
                Site.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Third-Party Links</h2>
              <p className="text-body-lg text-grey-600">
                The Site may link to third-party tools or websites, including services we use
                or partners we work with. We don&rsquo;t control those sites and aren&rsquo;t
                responsible for their content or practices.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Disclaimer of Warranties</h2>
              <p className="text-body-lg text-grey-600">
                The Site and its content are provided as is, without warranties of any kind,
                express or implied, including any warranty that the Site will be
                uninterrupted, error-free, or secure.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Limitation of Liability</h2>
              <p className="text-body-lg text-grey-600">
                To the fullest extent permitted by law, Hexary Labs will not be liable for
                indirect, incidental, or consequential damages arising from your use of the
                Site. This limitation applies to the Site itself; it does not limit or override
                the liability terms in any separate signed agreement governing an actual
                client engagement.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Governing Law</h2>
              <p className="text-body-lg text-grey-600">
                These Terms are governed by the laws of the State of Delaware, United States,
                without regard to its conflict-of-law principles. Any disputes arising from
                these Terms will be resolved in the state or federal courts located in
                Delaware.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Changes to These Terms</h2>
              <p className="text-body-lg text-grey-600">
                We may update these Terms from time to time as our business evolves. Continued
                use of the Site after an update takes effect means you accept the revised
                Terms.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Contact Us</h2>
              <p className="text-body-lg text-grey-600">
                Questions about these Terms can be sent to Hexary Labs at
                hello@hexarylabs.com.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
