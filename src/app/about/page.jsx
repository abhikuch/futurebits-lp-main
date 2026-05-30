import Link from "next/link";

import PageAccentGlow from "@/components/shared/PageAccentGlow";
import SiteFooter from "@/components/shared/SiteFooter";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import logo from "@/assets/logo.svg";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";
import { COMPANY, SOCIAL } from "@/config/site";
import { getCalLinkForPath } from "@/lib/page-theme";

const beliefs = [
  {
    title: "One team, start to finish.",
    body:
      "Design, engineering, and AI in one small group. No outsourcing, no junior hot-swaps, no slide decks pretending to be progress. You talk to the people doing the work.",
  },
  {
    title: "Ship the smallest thing that proves the bet.",
    body:
      "We cut scope until one hypothesis is testable. The first useful version should land in weeks — not after a six-month discovery phase that produces a PDF nobody reads.",
  },
  {
    title: "Design clarifies — it does not decorate.",
    body:
      "We use design to force decisions: what ships, what waits, what gets cut. The brief at the end of week one should be sharper than the one that came in.",
  },
  {
    title: "AI when the math works.",
    body:
      "We build production AI when deflection, speed, or quality gains are measurable. We say no when it is not — and we will tell you which side you are on before you spend.",
  },
];

const stats = [
  { label: "Engagements run end-to-end", value: "12+" },
  { label: "AI systems in production", value: "20+" },
  { label: "Trading systems live", value: "30+" },
  { label: "Years operating", value: "5+" },
];

export default function AboutPage() {
  return (
    <main
      id="main-content"
      className={`relative min-h-screen overflow-hidden ${SERVICE_HUB_THEME.pageBgClass} text-white`}
    >
      <PageAccentGlow themeKey="neutral" />

      <Section className="pb-12 pt-32 sm:pt-36">
        <Container className="max-w-4xl">
          <p className="fb-kicker">About {COMPANY.name}</p>
          <h1 className="mt-6 fb-hero-title max-w-3xl">
            A small studio for build, AI, design, and trading systems.
          </h1>
          <p className="fb-hero-copy mt-6">
            Futurebits is a senior team of roughly a dozen people. We work across
            product engineering, applied AI, UX, and markets infrastructure — same
            bar everywhere. We take a limited number of engagements so each one
            gets a real team, weekly demos, and code in your repo.
          </p>
          <p className="mt-4 max-w-2xl text-pretty text-base text-white/60">
            We are not a staff-augmentation bench and we are not a strategy firm
            that hands off to someone else. If you need slides about digital
            transformation, we are the wrong call.
          </p>

          <div className="fb-panel mt-10 grid grid-cols-2 gap-6 p-6 sm:grid-cols-4 sm:p-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-montserrat text-3xl font-semibold sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-white/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <div className="fb-section">
        <Section className="py-16 sm:py-20">
          <Container className="max-w-4xl">
            <h2 className="fb-h2">What we believe</h2>
            <p className="mt-3 max-w-2xl text-white/60">
              Opinionated defaults we actually act on. If any of this feels wrong for
              your team, we are probably not the right fit — and that is worth
              learning in the first call, not month three.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {beliefs.map((b) => (
                <div key={b.title} className="fb-panel p-6">
                  <h3 className="font-montserrat text-lg font-semibold">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </div>

      <Section className="pb-24 pt-4">
        <Container className="max-w-3xl">
          <div className={SERVICE_HUB_THEME.ctaPanelClass}>
            <h2 className="fb-h2">See if we are a fit</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Book 30 minutes. We will come with a read of your problem and a
              one-page scope sketch — keep it whether you hire us or not.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={getCalLinkForPath("/about")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-[#060618] transition hover:bg-white/90"
              >
                Book a call
              </Link>
              <Link
                href="/contact"
                className="fb-cta-secondary h-11 px-6 text-sm"
              >
                Send a message
              </Link>
            </div>
            <p className="mt-6 text-xs text-white/50">
              Find us on{" "}
              <Link
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                LinkedIn
              </Link>{" "}
              or{" "}
              <Link
                href={SOCIAL.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                X
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>
      <SiteFooter logo={logo} backgroundClassName={SERVICE_HUB_THEME.footerBgClass} />
    </main>
  );
}
