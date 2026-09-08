import Link from "next/link";

import JsonLd, { faqJsonLd } from "@/components/seo/JsonLd";
import { COMPANY, ROUTES } from "@/config/site";
import { FAQ } from "@/content/inline-modules";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import { assertNever } from "@/lib/assert-never";

/**
 * @typedef {import("@/lib/content-types").VerticalKey} VerticalKey
 */

/**
 * @param {VerticalKey} vertical
 */
function faqPathForVertical(vertical) {
  switch (vertical) {
    case "ai":
      return ROUTES.ai.path;
    case "design":
      return ROUTES.design.path;
    case "markets":
      return ROUTES.markets.path;
    default:
      return assertNever(vertical);
  }
}

export default function FAQSection({ vertical, contactHref = "/contact" }) {
  const items = FAQ[vertical];
  if (!items || items.length === 0) return null;

  const faqPath = faqPathForVertical(vertical);

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
          Questions before starting
        </Heading>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {items.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-montserrat text-base font-semibold text-white sm:text-lg">
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="mt-1 text-lg leading-none text-white/60 transition-transform group-open:rotate-45"
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

        <p className="mt-8 text-sm text-white/60">
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
