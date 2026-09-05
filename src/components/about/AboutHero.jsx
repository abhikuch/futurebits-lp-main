import Link from "next/link";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { COMPANY } from "@/config/site";
import { getCalLinkForPath } from "@/lib/page-theme";

const JUMP_LINKS = [
  { href: "#beliefs", label: "Beliefs" },
  { href: "#rooms", label: "Three rooms" },
  { href: "#engagement", label: "How we work" },
  { href: "#fit", label: "Fit" },
];

export default function AboutHero() {
  return (
    <Section className="pb-16 pt-32 sm:pb-20 sm:pt-36">
      <Container className="max-w-5xl">
        <p className="fb-kicker fb-page-hero-enter">About {COMPANY.name}</p>
        <h1 className="mt-7 max-w-4xl fb-hero-title fb-page-hero-enter">
          You will not hire a bench. You will hire a studio.
        </h1>
        <p className="fb-hero-copy mx-0 mt-7 max-w-2xl fb-page-hero-copy-enter">
          Futurebits is a roughly dozen-person studio founded in{" "}
          {COMPANY.founded}. We ship production AI, trading infrastructure, and
          product design from one team. If you need a 40-person Bay bench, a
          transformation deck, or someone to nod at a vague AI program, we are
          the wrong call.
        </p>

        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Link
            href={getCalLinkForPath("/about")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#060618] transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060618]"
          >
            Book a call
          </Link>
          <Link href="/contact" className="fb-cta-secondary h-11 px-6 text-sm">
            Send a message
          </Link>
        </div>

        <nav
          aria-label="On this page"
          className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.18em] text-white/40"
        >
          {JUMP_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white/80"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </Section>
  );
}
