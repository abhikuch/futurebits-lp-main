import Link from "next/link";

import { CAL, COMPANY, SOCIAL } from "@/config/site";

const beliefs = [
  {
    title: "Senior team, no handoffs.",
    body:
      "Every project is run by a small senior pod — design, engineering, and AI in one team. No outsourcing, no junior hot-swaps, no slide decks pretending to be progress.",
  },
  {
    title: "Ship the smallest thing that proves the bet.",
    body:
      "We compress timelines by removing the things that don't move the metric. The first useful version lands inside 30 days, not after a six-month discovery phase.",
  },
  {
    title: "Design is a forcing function.",
    body:
      "We use design to clarify product strategy, not to decorate it. The brief that comes out of week one is sharper than the brief that came in.",
  },
  {
    title: "AI when it actually helps.",
    body:
      "We build production AI only when it pays back. We say no when it doesn't — and we'll tell you which side of that line you're on before you spend a dollar.",
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
          One senior pod. Three surfaces. Compounding output.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
          Futurebits is a small senior team. We work across AI, markets, and
          design — three surfaces that share the same engineering bar. We take a
          small number of engagements at a time so each one gets a real pod, not
          a slide deck.
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
          A short, opinionated set of beliefs we actually act on. If any of
          these feel wrong for your team, we're probably not the right fit —
          and that's a useful thing to learn fast.
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
            Want to see how we'd work with you?
          </h2>
          <p className="mt-3 text-white/70">
            Book a 30-minute call. We'll come prepared with a sharp read of
            your problem and a one-page plan you can keep, hire us or not.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={CAL.ai}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-[#060618] transition hover:bg-white/90"
            >
              Book a 30-min call
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
    </main>
  );
}
