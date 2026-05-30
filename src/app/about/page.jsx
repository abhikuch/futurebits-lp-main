import Link from "next/link";

import SiteFooter from "@/components/shared/SiteFooter";
import logo from "@/assets/logo.svg";
import { CAL, COMPANY, SOCIAL } from "@/config/site";

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
      className="relative min-h-screen overflow-hidden bg-[#060618] text-white"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#2E2688]/40 blur-[140px]" />
      </div>

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-28 sm:pt-32">
        <p className="font-poppins text-sm uppercase tracking-[0.2em] text-white/50">
          About {COMPANY.name}
        </p>
        <h1 className="mt-4 font-montserrat text-display-md font-semibold text-balance">
          A small studio for build, AI, design, and trading systems.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
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

        <div className="mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-4 sm:p-8">
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
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="font-montserrat text-2xl font-semibold sm:text-3xl">
          What we believe
        </h2>
        <p className="mt-3 max-w-2xl text-white/60">
          Opinionated defaults we actually act on. If any of this feels wrong for
          your team, we are probably not the right fit — and that is worth
          learning in the first call, not month three.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {beliefs.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="font-montserrat text-lg font-semibold">
                {b.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#2E2688]/40 to-[#01B0EA]/10 p-8 text-center sm:p-12">
          <h2 className="font-montserrat text-2xl font-semibold sm:text-3xl">
            See if we are a fit
          </h2>
          <p className="mt-3 text-white/70">
            Book 30 minutes. We will come with a read of your problem and a
            one-page scope sketch — keep it whether you hire us or not.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={CAL.ai}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-[#060618] transition hover:bg-white/90"
            >
              Book a call
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-medium text-white transition hover:bg-white/10"
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
      </section>
      <SiteFooter logo={logo} backgroundClassName="bg-[#060618]" />
    </main>
  );
}
