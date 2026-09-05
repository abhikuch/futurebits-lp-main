import Link from "next/link";

import JsonLd, { uaeServiceGeoJsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SiteFooter from "@/components/shared/SiteFooter";
import {
  GeoVerticalDecor,
  geoThemeClasses,
  resolveGeoThemeKey,
} from "@/components/uae/UaeGeoPage";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import logo from "@/assets/logo.svg";
import {
  CATEGORY_VISUAL_THEME,
  SERVICE_HUB_THEME,
} from "@/app/services/themeTokens";
import { COMPANY } from "@/config/site";
import { GULF_PATHS } from "@/content/gulf";
import { UAE } from "@/content/uae";
import { buildCalUrl } from "@/lib/cal";
import { getCalLinkForPath } from "@/lib/page-theme";

export default function UaeServiceGeoPage({ landing }) {
  const visual = geoThemeClasses(landing.themeKey);
  const resolved = resolveGeoThemeKey(landing.themeKey);
  const calHref = buildCalUrl(getCalLinkForPath(landing.path), {
    medium: "uae-service",
    campaign: `uae-${landing.slug}`,
    content: landing.slug,
  });
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "UAE", href: "/uae" },
    { label: landing.categoryTitle, href: `/services/${landing.categorySlug}` },
    { label: landing.title, href: landing.path },
  ];
  const ctaPanel =
    resolved === "neutral"
      ? SERVICE_HUB_THEME.ctaPanelClass
      : CATEGORY_VISUAL_THEME[resolved].ctaPanelClass;

  return (
    <main
      id="main-content"
      className={`relative min-h-screen overflow-hidden ${visual.pageBg} text-white`}
    >
      <GeoVerticalDecor themeKey={landing.themeKey} />
      <JsonLd data={uaeServiceGeoJsonLd(landing)} />

      <Section className="pb-10 pt-32 sm:pt-36">
        <Container className="max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className={`${visual.kicker} fb-page-hero-enter`}>
            {landing.categoryTitle} · UAE &amp; Gulf
          </p>
          <Heading as="h1" className={`${visual.title} fb-page-hero-enter`}>
            {landing.h1}
          </Heading>
          <p className={`${visual.body} fb-page-hero-copy-enter`}>{landing.lede}</p>
          <p className="mt-4 max-w-2xl text-sm text-white/55">
            {UAE.phoneDisplay} · {UAE.timezoneLabel} · {UAE.cities.join(", ")} ·
            GCC
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
              href={landing.catalogPath}
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              Global catalog page
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="py-8 sm:py-12">
        <Container className="max-w-3xl space-y-5">
          {landing.body.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-white/75">
              {paragraph}
            </p>
          ))}
        </Container>
      </Section>

      <Section className="py-8 sm:py-12">
        <Container className="max-w-5xl">
          <Heading as="h2" className="fb-h3">
            How we deliver {landing.title} in the UAE and Gulf
          </Heading>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {landing.points.map((point) => (
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

      {landing.related.length > 0 ? (
        <Section className="py-8 sm:py-12">
          <Container className="max-w-5xl">
            <Heading as="h2" className="fb-h3">
              Related UAE &amp; Gulf services
            </Heading>
            <ul className="mt-6 divide-y divide-white/10 border border-white/10 bg-white/[0.03]">
              {landing.related.map((item) => (
                <li key={item.path} className="px-5 py-4 sm:px-6">
                  <Link
                    href={item.path}
                    className="font-montserrat text-sm font-semibold text-white hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-white/55">
              Country context:{" "}
              <Link href={GULF_PATHS.hub} className="underline underline-offset-4">
                Gulf hubs
              </Link>
              {" · "}
              <Link href="/uae" className="underline underline-offset-4">
                UAE hub
              </Link>
            </p>
          </Container>
        </Section>
      ) : null}

      <Section className="py-10 sm:py-12">
        <Container className="max-w-5xl">
          <Heading as="h2" className="fb-h3">
            Frequently asked questions
          </Heading>
          <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04]">
            {landing.faqs.map((item) => (
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
          <div className={ctaPanel}>
            <Heading as="h2" className="fb-h3">
              Book a GST-hour scoping call
            </Heading>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">
              Thirty minutes. We will tell you if {landing.title.toLowerCase()} is
              the wrong slice.
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
