import Link from "next/link";

import PageAccentGlow from "@/components/shared/PageAccentGlow";
import SiteFooter from "@/components/shared/SiteFooter";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import logo from "@/assets/logo.svg";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";
import { COMPANY, SITE_URL } from "@/config/site";
import { getCalLinkForPath } from "@/lib/page-theme";

function PolicyCard({ title, children }) {
  return (
    <div className="fb-panel p-6">
      <h2 className="mb-3 font-montserrat text-lg font-semibold">{title}</h2>
      <div className="text-sm leading-relaxed text-white/65">{children}</div>
    </div>
  );
}

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
          <p className="fb-kicker">Legal</p>
          <h1 className="mt-6 fb-hero-title">Privacy Policy</h1>
          <p className="fb-hero-copy mt-4">
            Your trust matters. Here's how we protect your data.
          </p>
          <p className="mt-2 text-sm text-white/45">Last updated: January 2026</p>
        </Container>
      </Section>

      <Section className="pb-24">
        <Container className="max-w-5xl space-y-8">
          <PolicyCard title="1. Introduction">
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
          </PolicyCard>

          <PolicyCard title="2. Information We Collect">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                company name, and messages submitted via forms or bookings.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, device
                information, and pages visited.
              </li>
            </ul>
          </PolicyCard>

          <PolicyCard title="3. How We Use Your Information">
            <ul className="list-disc space-y-2 pl-5">
              <li>Respond to inquiries and schedule consultations</li>
              <li>Improve website performance and content</li>
              <li>Maintain security and prevent misuse</li>
            </ul>
            <p className="mt-4">
              We do <strong>not</strong> sell or rent your personal information.
            </p>
          </PolicyCard>

          <PolicyCard title="4. Cookies & Tracking">
            <p>
              We may use cookies or similar technologies to analyze traffic and
              improve user experience. You can disable cookies through your
              browser settings at any time.
            </p>
          </PolicyCard>

          <PolicyCard title="5. Data Security">
            <p>
              We apply reasonable technical and organizational safeguards to
              protect your data. However, no digital system can guarantee
              absolute security.
            </p>
          </PolicyCard>

          <PolicyCard title="6. Third-Party Services">
            <p>
              We may use trusted third-party tools (such as analytics or
              scheduling services). These providers process limited data under
              their own privacy policies.
            </p>
          </PolicyCard>

          <PolicyCard title="7. Your Rights">
            <p>
              Depending on your jurisdiction, you may request access,
              correction, or deletion of your personal data. To exercise these
              rights, contact us directly.
            </p>
          </PolicyCard>

          <PolicyCard title="8. Policy Updates">
            <p>
              We may update this Privacy Policy periodically. Any changes will
              be reflected on this page with a revised date.
            </p>
          </PolicyCard>

          <PolicyCard title="9. Contact Us">
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
          </PolicyCard>

          <div className="fb-panel mt-16 p-8 text-center">
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
