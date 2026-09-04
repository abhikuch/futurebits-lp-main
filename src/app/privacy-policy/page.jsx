import Link from "next/link";

import PageAccentGlow from "@/components/shared/PageAccentGlow";
import {
  PrivacyPolicyCard,
  PrivacyPolicyCards,
  PrivacyPolicyHero,
} from "@/components/shared/PrivacyPolicyMotion";
import SiteFooter from "@/components/shared/SiteFooter";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import logo from "@/assets/logo.svg";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";
import { COMPANY, SITE_URL } from "@/config/site";
import { getCalLinkForPath } from "@/lib/page-theme";

export default function PrivacyPolicyPage() {
  const calLink = getCalLinkForPath("/privacy-policy");

  return (
    <main
      id="main-content"
      className={`relative min-h-screen overflow-hidden ${SERVICE_HUB_THEME.pageBgClass} text-white`}
    >
      <PageAccentGlow themeKey="neutral" />

      <Section className="pb-8 pt-28 sm:pt-32">
        <Container className="max-w-5xl text-center">
          <PrivacyPolicyHero>
          <p className="fb-kicker fb-page-hero-title-enter">Legal</p>
          <h1 className="fb-hero-title fb-page-hero-title-enter mt-6">Privacy Policy</h1>
          <p className="fb-hero-copy fb-page-hero-copy-enter mt-4">
            Your trust matters. Here's how we protect your data.
          </p>
          <p className="mt-2 text-sm text-white/45">Last updated: September 2026</p>
          </PrivacyPolicyHero>
        </Container>
      </Section>

      <Section className="pb-24">
        <Container className="max-w-5xl">
          <PrivacyPolicyCards>
          <PrivacyPolicyCard title="1. Introduction">
            <p>
              {COMPANY.legalName} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
              &ldquo;us&rdquo;) respects your privacy and is committed to
              protecting the personal information you share with us. This
              Privacy Policy explains how we collect, use, and safeguard your
              data when you visit{" "}
              <span className="text-white">
                {SITE_URL.replace("https://", "")}
              </span>
              .
            </p>
          </PrivacyPolicyCard>

          <PrivacyPolicyCard title="2. Information We Collect">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                company name, and messages submitted via forms or bookings.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, device
                information, and pages visited — via hosting logs, and via
                Google Analytics only after you accept analytics cookies.
              </li>
              <li>
                <strong>Consent preference:</strong> your accept/reject choice
                for analytics, stored in your browser (localStorage).
              </li>
            </ul>
          </PrivacyPolicyCard>

          <PrivacyPolicyCard title="3. How We Use Your Information">
            <ul className="list-disc space-y-2 pl-5">
              <li>Respond to inquiries and schedule consultations</li>
              <li>Improve website performance and content</li>
              <li>Maintain security and prevent misuse</li>
            </ul>
            <p className="mt-4">
              We do <strong>not</strong> sell or rent your personal information.
            </p>
          </PrivacyPolicyCard>

          <PrivacyPolicyCard title="4. Cookies & Tracking">
            <p>
              Analytics cookies are off until you accept them. If you accept,
              we load Google Analytics 4 (measurement ID configured in our site
              settings) with IP anonymization. We do not use advertising cookies.
            </p>
            <p className="mt-3">
              Global Privacy Control and Do Not Track signals are treated as a
              refusal. You can change your choice at any time via Cookie
              settings in the footer.
            </p>
          </PrivacyPolicyCard>

          <PrivacyPolicyCard title="5. Data Security">
            <p>
              We apply reasonable technical and organizational safeguards to
              protect your data. However, no digital system can guarantee
              absolute security.
            </p>
          </PrivacyPolicyCard>

          <PrivacyPolicyCard title="6. Third-Party Services">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Google Analytics 4</strong> — only after you accept
                analytics cookies. Used to understand which pages and booking
                links are used.
              </li>
              <li>
                <strong>Cal.com</strong> — scheduling. If you book a call, Cal.com
                processes your name, email, and meeting details under their
                privacy policy.
              </li>
              <li>
                <strong>Resend</strong> — transactional email so we can receive
                and reply to contact-form inquiries.
              </li>
              <li>
                <strong>Slack</strong> — optional internal alert when a contact
                form is submitted, so the team sees it quickly.
              </li>
              <li>
                <strong>Vercel</strong> — hosts this website. Standard request
                logs may include IP address and user agent.
              </li>
            </ul>
            <p className="mt-4">
              These providers process limited data under their own privacy
              policies. We do not sell or rent your personal information.
            </p>
          </PrivacyPolicyCard>

          <PrivacyPolicyCard title="7. Your Rights">
            <p>
              Depending on your jurisdiction, you may request access,
              correction, or deletion of your personal data. To exercise these
              rights, contact us directly.
            </p>
          </PrivacyPolicyCard>

          <PrivacyPolicyCard title="8. Policy Updates">
            <p>
              We may update this Privacy Policy periodically. Any changes will
              be reflected on this page with a revised date.
            </p>
          </PrivacyPolicyCard>

          <PrivacyPolicyCard title="9. Contact Us">
            <p>
              If you have questions about this Privacy Policy, reach out to us
              at:
            </p>
            <div className="mt-4 space-y-1 text-white/70">
              <p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="underline underline-offset-2 hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </p>
              <p>{SITE_URL}</p>
            </div>
          </PrivacyPolicyCard>
          </PrivacyPolicyCards>

          <div className="fb-panel fb-interactive-surface mt-16 p-8 text-center">
            <h2 className="font-montserrat text-2xl font-semibold">
              Let&rsquo;s Build With Trust
            </h2>
            <p className="mt-3 text-white/65">
              Your data stays safe while we build intelligent solutions.
            </p>
            <Link
              href={calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="fb-cta-primary mt-6 inline-flex items-center justify-center px-6 py-3 text-sm font-medium"
            >
              Book a call
            </Link>
          </div>
        </Container>
      </Section>
      <SiteFooter
        logo={logo}
        backgroundClassName={SERVICE_HUB_THEME.footerBgClass}
      />
    </main>
  );
}
