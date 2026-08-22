import Link from "next/link";

import ContactForm from "./ContactForm";
import PageAccentGlow from "@/components/shared/PageAccentGlow";
import SiteFooter from "@/components/shared/SiteFooter";
import { MotionCardList } from "@/components/shared/MotionContentBlocks";
import logo from "@/assets/logo.svg";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";
import { COMPANY, SOCIAL } from "@/config/site";
import { getCalLinkForPath } from "@/lib/page-theme";

const promises = [
  {
    title: "Reply within one business day",
    body: "Weekdays, India time. We won't ghost you, even if we're not the right fit.",
  },
  {
    title: "A real human will read this",
    body: "No SDR funnel, no auto-routed lead-scoring. The reply comes from someone who'd actually do the work.",
  },
  {
    title: "We'll tell you if we can't help",
    body: "If your problem is better solved by another team, we'll say so and point you in a useful direction.",
  },
];

export default function ContactPage() {
  const calLink = getCalLinkForPath("/contact");

  return (
    <main
      id="main-content"
      className={`relative min-h-screen overflow-hidden ${SERVICE_HUB_THEME.pageBgClass} text-white`}
    >
      <PageAccentGlow themeKey="neutral" />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-28 sm:pt-32 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <p className="fb-kicker fb-page-hero-enter">Contact {COMPANY.name}</p>
          <h1 className="mt-6 fb-hero-title max-w-xl fb-page-hero-enter">
            Tell us what you're trying to ship.
          </h1>
          <p className="fb-hero-copy mt-6 max-w-xl fb-page-hero-copy-enter">
            One short message is enough. You'll hear back from someone on the
            team, with a sharp read of your problem and what we'd actually do
            about it.
          </p>

          <MotionCardList items={promises} />

          <div className="fb-panel mt-10 p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">
              Prefer a call?
            </div>
            <Link
              href={calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="fb-cta-secondary mt-3 inline-flex h-11 items-center justify-center px-6 text-sm font-medium"
            >
              Book a call
            </Link>
            <p className="mt-4 text-xs text-white/50">
              Or reach us on{" "}
              <Link
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                LinkedIn
              </Link>{" "}
              ·{" "}
              <Link
                href={SOCIAL.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                X
              </Link>{" "}
              ·{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="underline underline-offset-2 hover:text-white"
              >
                {COMPANY.email}
              </a>
            </p>
          </div>
        </div>

        <div className="fb-panel p-6 sm:p-8">
          <ContactForm />
        </div>
      </section>
      <SiteFooter
        logo={logo}
        backgroundClassName={SERVICE_HUB_THEME.footerBgClass}
      />
    </main>
  );
}
