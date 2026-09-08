import Link from "next/link";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { PROOF } from "@/content/inline-modules";

export default function ProofBand({
  vertical,
  ctaHref,
  ctaLabel = "Book a call",
}) {
  const data = PROOF[vertical];
  if (!data) return null;

  return (
    <Section className="border-y border-white/10 bg-[#050512] py-12 sm:py-14">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <p className="font-poppins text-xs uppercase tracking-[0.22em] text-white/60">
            {data.eyebrow}
          </p>
          {ctaHref ? (
            <Link
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#060618] transition hover:bg-white/90 sm:inline-flex"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>

        <dl className="mt-6 grid border-t border-white/10 sm:grid-cols-3">
          {data.items.map((item) => (
            <div
              key={item.label}
              className="border-b border-white/10 py-5 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
            >
              <dt className="text-xs uppercase tracking-wide text-white/50">
                {item.label}
              </dt>
              <dd className="mt-2 font-montserrat text-lg font-semibold text-white">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        {ctaHref ? (
          <Link
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#060618] transition hover:bg-white/90 sm:hidden"
          >
            {ctaLabel}
          </Link>
        ) : null}
      </Container>
    </Section>
  );
}
