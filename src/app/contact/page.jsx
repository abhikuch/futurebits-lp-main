import Link from "next/link";

import ContactForm from "./ContactForm";
import { CAL, COMPANY, SOCIAL } from "@/config/site";

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
  return (
    <main
      id="main-content"
      className="relative min-h-screen overflow-hidden bg-[#060618] text-white"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#01B0EA]/20 blur-[140px]" />
        <div className="absolute right-[-10%] top-[40%] h-[500px] w-[500px] rounded-full bg-[#2E2688]/30 blur-[140px]" />
      </div>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-28 sm:pt-32 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <p className="font-poppins text-sm uppercase tracking-[0.2em] text-white/50">
            Contact {COMPANY.name}
          </p>
          <h1 className="mt-4 font-montserrat text-display-md font-semibold text-balance">
            Tell us what you're trying to ship.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base text-white/70 sm:text-lg">
            One short message is enough. You'll hear back from a senior team
            member, with a sharp read of your problem and what we'd actually
            do about it.
          </p>

          <ul className="mt-10 space-y-5">
            {promises.map((p) => (
              <li
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="font-montserrat text-base font-semibold">
                  {p.title}
                </div>
                <div className="mt-1 text-sm text-white/65">{p.body}</div>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm uppercase tracking-wider text-white/50">
              Prefer a call?
            </div>
            <Link
              href={CAL.ai}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex h-11 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Book a 30-min slot
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

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-8">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
