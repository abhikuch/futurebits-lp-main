import Link from "next/link";

import { ENGAGEMENT_MODELS } from "@/content/inline-modules";
import { ROUTES } from "@/config/site";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";

export default function EngagementModels({
  ctaHref,
  ctaLabel = "Talk to us",
}) {
  const fallbackHref = ROUTES.contact.path;
  return (
    <Section
      aria-labelledby="engagement-models-title"
      className="bg-[#08081E]"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="font-poppins text-xs uppercase tracking-[0.25em] text-white/50">
            Ways to work with us
          </p>
          <Heading id="engagement-models-title" className="mt-4">
            Three ways in. All senior, all scoped.
          </Heading>
          <p className="mt-4 text-pretty text-base text-white/70">
            Pick the smallest one that proves the bet. We'll tell you on the
            first call which model actually fits.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {ENGAGEMENT_MODELS.map((model) => (
            <article
              key={model.name}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 ease-fb-ease-out hover:border-white/30 hover:bg-white/[0.06]"
            >
              <header>
                <h3 className="font-montserrat text-2xl font-semibold text-white">
                  {model.name}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-wider text-white/50">
                  {model.duration}
                </p>
              </header>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {model.bestFor}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {model.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            Not sure which fits? Most teams start with a Sprint and
            graduate.
          </p>
          <Link
            href={ctaHref || fallbackHref}
            target={ctaHref ? "_blank" : undefined}
            rel={ctaHref ? "noopener noreferrer" : undefined}
            className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#060618] transition hover:bg-white/90"
          >
            {ctaLabel}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
