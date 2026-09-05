import Link from "next/link";
import Image from "next/image";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import PageAccentGlow from "@/components/shared/PageAccentGlow";
import SiteFooter from "@/components/shared/SiteFooter";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import logo from "@/assets/logo.svg";
import {
  CATEGORY_VISUAL_THEME,
  SERVICE_HUB_THEME,
  VERTICAL_DECOR_CLASSES,
} from "@/app/services/themeTokens";
import { COMPANY } from "@/config/site";
import { UAE } from "@/content/uae";
import { buildCalUrl } from "@/lib/cal";
import { getCalLinkForPath } from "@/lib/page-theme";
import aiCircle from "@/assets/landing-page-AI/circle.webp";
import designDiamond from "@/assets/design/navbar.svg";
import designLight from "@/assets/design/light.webp";

function VerticalDecor({ themeKey }) {
  if (themeKey === "ai-automation") {
    return (
      <>
        <div className={VERTICAL_DECOR_CLASSES.ai.glowLeft} />
        <div className={VERTICAL_DECOR_CLASSES.ai.glowRight} />
        <div className="pointer-events-none absolute left-[-120px] top-[460px] hidden h-[360px] w-[360px] opacity-30 md:block">
          <Image src={aiCircle} alt="" fill className="object-contain" />
        </div>
      </>
    );
  }

  if (themeKey === "markets-trading") {
    return <div className={VERTICAL_DECOR_CLASSES.markets.glowLeft} />;
  }

  if (themeKey === "design") {
    return (
      <>
        <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[520px] w-[920px] -translate-x-1/2 opacity-25">
          <Image src={designLight} alt="" fill className="object-contain" />
        </div>
        <div className="pointer-events-none absolute left-[7%] top-[220px] hidden h-8 w-8 opacity-55 md:block">
          <Image src={designDiamond} alt="" fill className="object-contain" />
        </div>
        <div className="pointer-events-none absolute right-[8%] top-[240px] hidden h-8 w-8 opacity-55 md:block">
          <Image src={designDiamond} alt="" fill className="object-contain" />
        </div>
      </>
    );
  }

  return <PageAccentGlow themeKey="neutral" />;
}

function themeClasses(themeKey) {
  if (themeKey === "neutral") {
    return {
      pageBg: SERVICE_HUB_THEME.pageBgClass,
      kicker: "fb-kicker",
      title: "mt-6 fb-hero-title max-w-4xl",
      body: "mt-6 max-w-3xl text-lg text-white/70",
      card: SERVICE_HUB_THEME.hubCardClass,
      cta: "fb-cta-secondary inline-flex h-11 items-center justify-center px-6 text-sm font-medium",
      footerBg: SERVICE_HUB_THEME.footerBgClass,
    };
  }

  const theme = CATEGORY_VISUAL_THEME[themeKey];
  return {
    pageBg: theme.pageBg,
    kicker: theme.kickerClass,
    title: theme.titleClass,
    body: theme.bodyClass,
    card: theme.serviceCardClass,
    cta: theme.ctaButtonClass,
    footerBg: theme.pageBg,
  };
}

export default function UaeGeoPage({ page }) {
  const visual = themeClasses(page.themeKey);
  const calHref = buildCalUrl(getCalLinkForPath(page.path), {
    medium: "uae-page",
    campaign: `uae-${page.key}`,
    content: page.key,
  });
  const breadcrumbs = [
    { label: "Home", href: "/" },
    page.key === "hub"
      ? { label: "UAE", href: page.path }
      : { label: page.parent.label, href: page.parent.href },
    page.key === "hub" ? null : { label: "UAE", href: page.path },
  ].filter(Boolean);

  return (
    <main
      id="main-content"
      className={`relative min-h-screen overflow-hidden ${visual.pageBg} text-white`}
    >
      <VerticalDecor themeKey={page.themeKey} />

      <Section className="pb-10 pt-32 sm:pt-36">
        <Container className="max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className={`${visual.kicker} fb-page-hero-enter`}>{page.kicker}</p>
          <Heading as="h1" className={`${visual.title} fb-page-hero-enter`}>
            {page.title}
          </Heading>
          <p className={`${visual.body} fb-page-hero-copy-enter`}>{page.lede}</p>
          <p className="mt-4 max-w-2xl text-sm text-white/55">
            {UAE.phoneDisplay} · {UAE.timezoneLabel} · {UAE.cities.join(", ")}
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
            {page.key === "hub" ? (
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                See the catalog
              </Link>
            ) : (
              <Link
                href="/uae"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                All UAE tracks
              </Link>
            )}
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
            How we work with UAE companies
          </Heading>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {page.points.map((point) => (
              <article
                key={point.title}
                className={visual.card}
              >
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

      {page.tracks?.length ? (
        <Section className="py-8 sm:py-12">
          <Container className="max-w-5xl">
            <Heading as="h2" className="fb-h3">
              Start from the track, not a 90-row menu
            </Heading>
            <p className="mt-3 max-w-2xl text-sm text-white/60">
              AI, Markets, and Design keep their own visual systems. Pick the
              one that matches the work. The rest of the catalog is listed below.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {page.tracks.map((track) => (
                <Link key={track.href} href={track.href} className={visual.card}>
                  <h3 className="font-montserrat text-base font-semibold">
                    {track.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {track.body}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {page.categories.map((category) => (
        <Section key={category.slug} className="py-8 sm:py-10">
          <Container className="max-w-5xl">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <Heading as="h2" className="fb-h3">
                  {category.title}
                </Heading>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
                  {category.intro}
                </p>
              </div>
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
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {service.angle}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ))}

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
          <div
            className={
              page.themeKey === "neutral"
                ? SERVICE_HUB_THEME.ctaPanelClass
                : CATEGORY_VISUAL_THEME[page.themeKey].ctaPanelClass
            }
          >
            <Heading as="h2" className="fb-h3">
              Book a GST-hour scoping call
            </Heading>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">
              Thirty minutes. We will tell you if we are the wrong team.
              {page.serviceCount
                ? ` ${page.serviceCount} services in this view, same delivery model.`
                : ""}
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
