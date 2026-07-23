import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy",
  robots: { index: false, follow: true },
};

const heading = "text-[1.3125rem] leading-[1.2] md:text-[1.625rem] lg:text-h3";

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section tone="light">
        <Container>
          <div className="flex max-w-[70ch] flex-col gap-8">

            <p className="text-body-lg text-grey-600">
              Hexary Labs (&ldquo;Hexary Labs,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) is a software development studio. This Privacy Policy explains
              what information we collect through hexarylabs.com (the &ldquo;Site&rdquo;), how
              we use it, and the choices available to you.
            </p>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Information We Collect</h2>
              <p className="text-body-lg text-grey-600">
                <strong className="text-contrast">Information you provide directly.</strong>{" "}
                When you reach out through our contact form, book a call, or email us, we
                collect what you submit: your name, email address, company name, phone number
                if provided, and the contents of your message.
              </p>
              <p className="text-body-lg text-grey-600">
                <strong className="text-contrast">Information collected automatically.</strong>{" "}
                When you visit the Site, we automatically collect technical information such
                as your IP address, browser and device type, pages viewed, time spent on the
                Site, and the site that referred you here. We collect this through standard
                analytics tools and cookies.
              </p>
              <p className="text-body-lg text-grey-600">
                <strong className="text-contrast">Information from third parties.</strong> If
                you reach us through a scheduling tool, a partner referral, or a professional
                network like LinkedIn, we may receive limited information from that platform,
                governed by that platform&rsquo;s own privacy practices.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>How We Use Your Information</h2>
              <p className="text-body-lg text-grey-600">
                We use the information we collect to respond to your inquiries and proposals,
                schedule and prepare for calls, understand how visitors use the Site so we can
                improve it, send occasional updates to people who&rsquo;ve asked to receive
                them, and meet our legal and accounting obligations.
              </p>
              <p className="text-body-lg text-grey-600">
                We do not sell your personal information, and we do not share it with third
                parties for their own marketing purposes.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Cookies</h2>
              <p className="text-body-lg text-grey-600">
                The Site uses cookies and similar technologies to support core functionality
                and to understand how visitors use the Site, through standard web analytics.
                You can disable cookies in your browser settings at any time; doing so may
                affect how some parts of the Site display or function.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Third-Party Service Providers</h2>
              <p className="text-body-lg text-grey-600">
                We rely on a small set of third-party providers to run the Site and our
                business, including cloud hosting and infrastructure providers such as Vercel
                and AWS, web analytics tools such as Google Analytics, and scheduling software
                such as Calendly. Each of these providers processes data on our behalf under
                its own security and privacy commitments, and only to the extent needed to
                provide their service to us.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Data Retention</h2>
              <p className="text-body-lg text-grey-600">
                We retain contact form submissions and inquiry records for up to 24 months
                from your last contact with us, unless you ask us to delete them sooner or
                we&rsquo;re required to keep them longer for legal or accounting reasons.
                Technical analytics data is retained according to our analytics provider&rsquo;s
                standard retention periods, typically 14 to 26 months.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Your Privacy Rights</h2>
              <p className="text-body-lg text-grey-600">
                Depending on where you&rsquo;re located, you may have the right to request
                access to the personal information we hold about you, request that we correct
                or delete it, object to or restrict certain uses of it, or request a portable
                copy of it. To exercise any of these rights, email us at hello@hexarylabs.com
                and we&rsquo;ll respond within 30 days.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>International Data Transfers</h2>
              <p className="text-body-lg text-grey-600">
                Because we work with clients and hosting providers across regions, your
                information may be processed in countries other than your own. Where required,
                we rely on our providers&rsquo; standard contractual protections to safeguard
                information transferred internationally.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Data Security</h2>
              <p className="text-body-lg text-grey-600">
                We use reasonable technical and organizational measures, including encrypted
                connections and access controls, to protect the information we collect. No
                online system is completely secure, and we can&rsquo;t guarantee absolute
                security, but we take this seriously and review our practices regularly.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Children&rsquo;s Privacy</h2>
              <p className="text-body-lg text-grey-600">
                The Site is intended for business use and is not directed at individuals under
                16. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Changes to This Policy</h2>
              <p className="text-body-lg text-grey-600">
                We may update this Privacy Policy as our practices evolve. Any changes will be
                reflected by a new effective date at the top of this page, and material
                changes will be noted clearly.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Contact Us</h2>
              <p className="text-body-lg text-grey-600">
                Questions about this policy can be sent to Hexary Labs at
                hello@hexarylabs.com.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
