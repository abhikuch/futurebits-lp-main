import Link from "next/link";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SiteFooter from "@/components/shared/SiteFooter";
import {
  GeoVerticalDecor,
  geoThemeClasses,
} from "@/components/uae/UaeGeoPage";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import logo from "@/assets/logo.svg";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";
import { COMPANY } from "@/config/site";
import { GULF } from "@/content/gulf";
import { UAE } from "@/content/uae";
import { buildCalUrl } from "@/lib/cal";
import { getCalLinkForPath } from "@/lib/page-theme";

export default function GulfGeoPage({ page }) {
  const visual = geoThemeClasses("neutral");
  const campaign =
    page.key === "hub" ? "gulf-hub" : `gulf-${page.key}`;
  const calHref = buildCalUrl(getCalLinkForPath(page.path), {
    medium: "gulf-page",
    campaign,
    content: page.key,
  });
  const breadcrumbs = [
    { label: "Home", href: "/" },
    page.key === "hub"
      ? { label: "Gulf", href: page.path }
      : { label: "Gulf", href: page.parent.href },
    page.key === "hub" ? null : { label: page.kicker, href: page.path },
  ].filter(Boolean);

  return (
    <main
      id="main-content"
      className={`relative min-h-screen overflow-hidden ${visual.pageBg} text-white`}
    >
      <GeoVerticalDecor themeKey="neutral" />

      <Section className="pb-10 pt-32 sm:pt-36">
        <Container className="max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className={`${visual.kicker} fb-page-hero-enter`}>{page.kicker}</p>
          <Heading as="h1" className={`${visual.title} fb-page-hero-enter`}>
            {page.title}
          </Heading>
          <p className={`${visual.body} fb-page-hero-copy-enter`}>{page.lede}</p>
          <p className="mt-4 max-w-2xl text-sm text-white/55">
            {GULF.phoneDisplay} · {GULF.timezoneLabel} · remote studio
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={calHref}
              target="_blank"
              rel="noopener noreferrer"
              className={visual.cta}
            >
              Book a call
            </Link>
            <Link
              href={page.uaeHref}
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              UAE hub
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="py-8 sm:py-12">
        <Container className="max-w-3xl space-y-5">
          {page.body.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-white/75">
              {paragraph}
            </p>
          ))}
        </Container>
      </Section>

      <Section className="py-8 sm:py-12">
        <Container className="max-w-5xl">
          <Heading as="h2" className="fb-h3">
            How delivery works
          </Heading>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {page.points.map((point) => (
              <article key={point.title} className={visual.card}>
                <h3 className="font-montserrat text-base font-semibold">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {point.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {page.key === "hub" ? (
        <Section className="py-8 sm:py-12">
          <Container className="max-w-5xl">
            <Heading as="h2" className="fb-h3">
              Country hubs
            </Heading>
            <p className="mt-3 max-w-2xl text-sm text-white/60">
              Unique buyer context. Service rankables stay on one URL each.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.countries.map((country) => (
                <Link key={country.key} href={country.href} className={visual.card}>
                  <h3 className="font-montserrat text-base font-semibold">
                    {country.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {country.cities.join(", ")} · {country.week} · {country.currency}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {page.featured?.length ? (
        <Section className="py-8 sm:py-12">
          <Container className="max-w-5xl">
            <Heading as="h2" className="fb-h3">
              Services {page.kicker} teams actually book
            </Heading>
            <p className="mt-3 max-w-2xl text-sm text-white/60">
              These open the canonical UAE &amp; Gulf landing — not a {page.kicker}
              -only clone.
            </p>
            <ul className="mt-6 divide-y divide-white/10 border border-white/10 bg-white/[0.03]">
              {page.featured.map((service) => (
                <li key={service.slug} className="px-5 py-4 sm:px-6">
                  <Link
                    href={service.path}
                    className="font-montserrat text-sm font-semibold text-white hover:underline"
                  >
                    {service.title}
                  </Link>
                  <p className="mt-1 text-sm text-white/55">{service.categoryTitle}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {page.categories?.length
        ? page.categories.map((category) => (
            <Section key={category.slug} className="py-8 sm:py-10">
              <Container className="max-w-5xl">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <Heading as="h2" className="fb-h3">
                    {category.title}
                  </Heading>
                  <Link
                    href={category.href}
                    className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
                  >
                    Category hub
                  </Link>
                </div>
                <ul className="mt-6 divide-y divide-white/10 border border-white/10 bg-white/[0.03]">
                  {category.services.map((service) => (
                    <li key={service.slug} className="px-5 py-4 sm:px-6">
                      <Link
                        href={service.path}
                        className="font-montserrat text-sm font-semibold text-white hover:underline"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Container>
            </Section>
          ))
        : null}

      <Section className="py-10 sm:py-12">
        <Container className="max-w-5xl">
          <Heading as="h2" className="fb-h3">
            Frequently asked questions
          </Heading>
          <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04]">
            {page.faqs.map((item) => (
              <details key={item.q} className="p-5 open:bg-white/[0.07]">
                <summary className="cursor-pointer list-none font-montserrat text-base font-semibold">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pb-20 pt-6">
        <Container className="max-w-5xl">
          <div className={SERVICE_HUB_THEME.ctaPanelClass}>
            <Heading as="h2" className="fb-h3">
              Book a GST-hour scoping call
            </Heading>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">
              Thirty minutes. {page.serviceCount} services on one geo URL each.
              We will tell you if we are the wrong team.
            </p>
            <Link href={calHref} target="_blank" rel="noopener noreferrer" className={visual.cta}>
              Book a call
            </Link>
            <p className="mt-4 text-xs text-white/50">
              <a href={`tel:${UAE.phone}`} className="underline underline-offset-2">
                {UAE.phoneDisplay}
              </a>
              {" · "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="underline underline-offset-2"
              >
                {COMPANY.email}
              </a>
            </p>
          </div>
        </Container>
      </Section>

      <SiteFooter logo={logo} backgroundClassName={visual.footerBg} />
    </main>
  );
}
