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
                Hexary Labs collects very little personal information through this Site. We do
                not use analytics, tracking cookies, or advertising technologies. What we
                collect is limited to what you choose to send us.
              </p>
              <p className="text-body-lg text-grey-600">
                <strong className="text-contrast">Information you submit directly.</strong>{" "}
                When you use the contact form on this Site, or email us directly, we collect
                your name, email address, the contents of your message, and your company name
                if you provide it through the form.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Server and Hosting Logs</h2>
              <p className="text-body-lg text-grey-600">
                Our hosting provider, Vercel, automatically logs technical information such as
                visitor IP addresses at the infrastructure level, as is standard for web
                hosting services, for purposes like security, rate-limiting, and abuse
                prevention. This happens automatically as part of serving the Site; we do not
                access these logs for tracking or analytics, and we do not combine them with
                the information you submit to us.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>How We Use Your Information</h2>
              <p className="text-body-lg text-grey-600">
                We use the information you submit to respond to your inquiry, including
                arranging a follow-up call or email if appropriate, and to keep ordinary
                records of business correspondence. We do not use it for advertising,
                profiling, or any other purpose.
              </p>
              <p className="text-body-lg text-grey-600">
                We do not sell your personal information, and we do not share it with third
                parties for their own marketing purposes.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Cookies</h2>
              <p className="text-body-lg text-grey-600">
                This Site does not set cookies, and it does not use analytics, advertising, or
                other tracking technologies.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Third-Party Service Providers</h2>
              <p className="text-body-lg text-grey-600">
                We use two third-party services to run this Site and respond to inquiries:
                Vercel, which hosts the Site, and Resend, which delivers contact-form emails to
                us. Both are based in the United States, so information you submit may be
                processed there regardless of where you&rsquo;re located. Neither is used for
                analytics, advertising, or tracking.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={heading}>Data Retention</h2>
              <p className="text-body-lg text-grey-600">
                We keep contact-form submissions and related correspondence for as long as
                reasonably necessary to respond to your inquiry and to keep ordinary business
                records, and we&rsquo;ll delete them sooner if you ask us to.
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
