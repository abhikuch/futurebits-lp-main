import Link from "next/link";

import JsonLd, { faqJsonLd } from "@/components/seo/JsonLd";
import { COMPANY, ROUTES } from "@/config/site";
import { FAQ } from "@/content/inline-modules";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";

/**
 * Inline FAQ band rendered with native `<details>` for zero-JS, accessible
 * disclosure. Emits FAQPage JSON-LD inline so this section also earns the
 * AEO/answer-engine surface.
 */
export default function FAQSection({ vertical, contactHref = "/contact" }) {
  const items = FAQ[vertical];
  if (!items || items.length === 0) return null;

  const faqPathByVertical = {
    ai: ROUTES.ai.path,
    design: ROUTES.design.path,
    markets: ROUTES.markets.path,
  };
  const faqPath = faqPathByVertical[vertical];

  return (
    <Section
      aria-labelledby={`faq-${vertical}-title`}
      className="bg-[#060618]"
    >
      <JsonLd data={faqJsonLd(items, faqPath)} />
      <Container className="max-w-3xl">
        <p className="font-poppins text-xs uppercase tracking-[0.25em] text-white/50">
          FAQ
        </p>
        <Heading id={`faq-${vertical}-title`} className="mt-4">
          The questions everyone asks (and our actual answers).
        </Heading>

        <div className="mt-10 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.02]">
          {items.map((item, idx) => (
            <details
              key={idx}
              className="group p-6 transition-colors open:bg-white/[0.05]"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-montserrat text-base font-semibold text-white sm:text-lg">
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-5 w-5 shrink-0 rounded-full border border-white/20 text-center text-sm leading-[18px] text-white/60 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/60">
          Still have a question?{" "}
          <Link
            href={contactHref}
            className="text-white underline underline-offset-4 hover:text-white/80"
          >
            Ask {COMPANY.name} directly
          </Link>
          .
        </p>
      </Container>
    </Section>
  );
}
