import Link from "next/link";

import { CAL, COMPANY, SITE_URL } from "@/config/site";

function PolicyCard({ title, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="mb-3 font-montserrat text-lg font-semibold">{title}</h2>
      <div className="text-sm leading-relaxed text-zinc-400">{children}</div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main
      id="main-content"
      className="relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-28 text-center">
        <h1 className="font-montserrat text-4xl font-semibold tracking-tight md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-zinc-400">
          Your trust matters. Here's how we protect your data.
        </p>
        <p className="mt-2 text-sm text-zinc-500">Last updated: January 2026</p>
      </section>

      <section className="mx-auto max-w-5xl space-y-8 px-6 pb-24">
        <PolicyCard title="1. Introduction">
          <p>
            {COMPANY.legalName} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
            &ldquo;us&rdquo;) respects your privacy and is committed to
            protecting the personal information you share with us. This
            Privacy Policy explains how we collect, use, and safeguard your
            data when you visit{" "}
            <span className="text-white">{SITE_URL.replace("https://", "")}</span>.
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
          <div className="mt-4 space-y-1 text-zinc-300">
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

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="font-montserrat text-2xl font-semibold">
            Let&rsquo;s Build With Trust
          </h2>
          <p className="mt-3 text-zinc-400">
            Your data stays safe while we build intelligent solutions.
          </p>
          <Link
            href={CAL.ai}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium transition hover:bg-blue-500"
          >
            Book a 30-min call
          </Link>
        </div>
      </section>
    </main>
  );
}
