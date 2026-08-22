import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

import JsonLd, { serviceDetailJsonLd } from "@/components/seo/JsonLd";
import {
  ServiceDetailOutline,
} from "@/components/seo/ServicePageOutline";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SiteFooter from "@/components/shared/SiteFooter";
import { ServiceDetailRelated } from "@/components/shared/ServicePagesMotion";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import logo from "@/assets/logo.svg";
import { ASSETS, COMPANY, SITE_URL, SOCIAL } from "@/config/site";
import {
  getCategoryBySlug,
  getRelatedServices,
  getServiceBySlugs,
  getServiceFaq,
  SERVICES,
} from "@/content/services";
import { lintText } from "@/content/content-voice";
import {
  buildServiceSections,
  getServicePlaybook,
} from "@/content/service-playbooks";
import { buildCalUrl } from "@/lib/cal";
import aiCircle from "@/assets/landing-page-AI/circle.webp";
import designDiamond from "@/assets/design/navbar.svg";
import designLight from "@/assets/design/light.webp";
import {
  AI_BOTTOM_RAIL_GRADIENT,
  AI_MARKETS_BEAM_GRADIENT,
  DEFAULT_DETAIL_HERO_PRESET,
  DEFAULT_DETAIL_RHYTHM_PRESET,
  DEFAULT_DETAIL_THEME,
  DETAIL_HERO_PRESET,
  DETAIL_RHYTHM_PRESET,
  DETAIL_VISUAL_THEME,
  resolveDetailThemeKey,
  VERTICAL_DECOR_CLASSES,
} from "@/app/services/themeTokens";

const CATEGORY_OG_IMAGES = {
  "ai-automation": ASSETS.ogAi,
  design: ASSETS.ogDesign,
  "markets-trading": ASSETS.ogMarkets,
};

function VerticalDecorations({ categorySlug }) {
  if (categorySlug === "ai-automation") {
    return (
      <>
        <div className={VERTICAL_DECOR_CLASSES.ai.glowLeft} />
        <div className={VERTICAL_DECOR_CLASSES.ai.glowRight} />
        <div className="pointer-events-none absolute left-[-120px] top-[460px] hidden h-[360px] w-[360px] opacity-30 md:block">
          <Image src={aiCircle} alt="" fill className="object-contain" />
        </div>
        <div className="pointer-events-none absolute right-[-120px] top-[680px] hidden h-[320px] w-[320px] opacity-20 md:block">
          <Image src={aiCircle} alt="" fill className="object-contain" />
        </div>
      </>
    );
  }

  if (categorySlug === "markets-trading") {
    return (
      <>
        <div className={VERTICAL_DECOR_CLASSES.markets.glowLeft} />
        <div className="pointer-events-none absolute -right-24 top-44 h-[360px] w-[360px] rounded-full bg-white/10 blur-[130px]" />
        <div
          className="pointer-events-none absolute left-[-25%] top-14 hidden h-[45px] w-[360px] xl:block"
          style={{
            background: AI_MARKETS_BEAM_GRADIENT,
            filter: "blur(32px)",
            transform: "rotate(40deg) translateX(60%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-[-25%] top-14 hidden h-[45px] w-[380px] xl:block"
          style={{
            background: AI_MARKETS_BEAM_GRADIENT,
            filter: "blur(32px)",
            transform: "rotate(-30deg) translateX(-60%)",
          }}
        />
      </>
    );
  }

  if (categorySlug === "design") {
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
        <div className="pointer-events-none absolute left-[50%] top-[640px] hidden h-8 w-8 -translate-x-1/2 opacity-45 md:block">
          <Image src={designDiamond} alt="" fill className="object-contain" />
        </div>
      </>
    );
  }

  if (categorySlug === "build" || categorySlug === "integrations-platform" || categorySlug === "startup-tech-partner") {
    return (
      <>
        <div className={VERTICAL_DECOR_CLASSES.platform.glowLeft} />
        <div className={VERTICAL_DECOR_CLASSES.platform.glowRight} />
      </>
    );
  }

  return null;
}

function getHeroStylePreset(themeKey) {
  const preset = DETAIL_HERO_PRESET[themeKey] ?? DEFAULT_DETAIL_HERO_PRESET;
  const bottomRail =
    preset.bottomRailType === "ai" ? (
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ background: AI_BOTTOM_RAIL_GRADIENT }}
      />
    ) : preset.bottomRailType === "design" ? (
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto hidden h-px w-[min(88%,980px)] bg-gradient-to-r from-transparent via-white/35 to-transparent sm:block" />
    ) : null;

  return { ...preset, bottomRail };
}

function getRhythmPreset(themeKey) {
  return DETAIL_RHYTHM_PRESET[themeKey] ?? DEFAULT_DETAIL_RHYTHM_PRESET;
}

export function generateStaticParams() {
  return SERVICES.map((item) => ({
    category: item.categorySlug,
    service: item.slug,
  }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlugs(params.category, params.service);
  const category = getCategoryBySlug(params.category);
  if (!service) return {};
  const ogImage = CATEGORY_OG_IMAGES[params.category] ?? ASSETS.ogAi;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    metadataBase: new URL(SITE_URL),
    keywords: [
      service.title,
      category?.title ?? "Services",
      "Futurebits",
      "implementation service",
      "product and engineering delivery",
    ],
    alternates: {
      canonical: `${SITE_URL}${service.path}`,
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}${service.path}`,
      siteName: COMPANY.name,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: SOCIAL.twitterHandle,
      creator: SOCIAL.twitterHandle,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlugs(params.category, params.service);
  const category = getCategoryBySlug(params.category);

  if (!service || !category) {
    notFound();
  }

  const sectionData = buildServiceSections(service, category);
  const playbook = getServicePlaybook(service.slug, service, category);
  const faqs = playbook?.faqs ?? getServiceFaq(service);
  const related = getRelatedServices(service.categorySlug, service.slug, 6);
  const detailKey = resolveDetailThemeKey(category.slug);
  const theme = (detailKey && DETAIL_VISUAL_THEME[detailKey]) ?? DEFAULT_DETAIL_THEME;
  const heroPreset = getHeroStylePreset(detailKey ?? category.slug);
  const rhythm = getRhythmPreset(detailKey ?? category.slug);
  const pageBgClassName = theme.pageBg;
  const calHref = buildCalUrl(category.ctaHref, {
    medium: "service-page",
    campaign: service.slug,
  });
  const breadcrumbNav = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: category.title, href: `/services/${category.slug}` },
    { label: service.title, href: service.path },
  ];

  return (
    <main
      id="main-content"
      className={`min-h-screen ${pageBgClassName} text-white`}
    >
      <VerticalDecorations categorySlug={category.slug} />
      <JsonLd data={serviceDetailJsonLd({ service, category, faqs })} />

      <Section className={rhythm.heroSectionClass}>
        <Container>
          <Breadcrumbs items={breadcrumbNav} />
          <div className={heroPreset.shellClass}>
            <div className="pointer-events-none absolute -top-28 right-[-60px] h-56 w-56 rounded-full bg-white/10 blur-[100px]" />
            {heroPreset.bottomRail}
            <div className="relative z-10">
              <p className={`fb-kicker ${theme.accentText} fb-page-hero-enter`}>
                {category.title}
              </p>
              <Heading as="h1" className={`${heroPreset.titleClass} fb-page-hero-enter`}>
                {lintText(service.hero)}
              </Heading>
              <p className={`${heroPreset.subheadClass} fb-page-hero-copy-enter`}>
                {lintText(service.subhead)}
              </p>
              {sectionData.chips?.length ? (
                <div
                  className={`mt-6 flex flex-wrap items-center gap-2 ${
                    category.slug === "ai-automation" || category.slug === "design"
                      ? "justify-center"
                      : ""
                  }`}
                >
                  {sectionData.chips.map((chip) => (
                    <span
                      key={chip}
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium text-white/90 ${
                        sectionData.chips.indexOf(chip) === 0
                          ? theme.chipBg
                          : "bg-white/10"
                      }`}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              ) : null}
              <div className={heroPreset.ctaRowClass}>
                <Link
                  href={calHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex h-11 items-center justify-center rounded-full border px-6 text-sm font-medium text-white transition hover:scale-[1.02] ${theme.accentBorder} ${theme.chipBg}`}
                >
                  {category.ctaLabel}
                </Link>
                <Link
                  href={`/services/${category.slug}`}
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white/90 transition hover:bg-white/10"
                >
                  Back to {category.shortTitle}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {sectionData.intro ? (
        <Section className="py-8">
          <Container className="max-w-3xl">
            <p className="text-base leading-relaxed text-white/75">
              {sectionData.intro}
            </p>
          </Container>
        </Section>
      ) : null}

      {sectionData.contrarian || sectionData.wontDo ? (
        <Section className="py-6">
          <Container className="max-w-3xl space-y-4">
            {sectionData.contrarian ? (
              <p className="border-l-2 border-[#01B0EA]/60 pl-4 text-sm leading-relaxed text-white/80">
                {sectionData.contrarian}
              </p>
            ) : null}
            {sectionData.wontDo ? (
              <p className="text-sm leading-relaxed text-white/55">
                {sectionData.wontDo}
              </p>
            ) : null}
          </Container>
        </Section>
      ) : null}

      <Section className={rhythm.infoSectionClass}>
        <Container className={rhythm.splitGapClass}>
          <div
            className={`${rhythm.compactCardClass} md:col-span-1 ${theme.accentBorder}`}
          >
            <Heading as="h2" className="fb-h3">
              {category.slug === "markets-trading"
                ? "Primary buyer fit"
                : "Who this is for"}
            </Heading>
            {category.slug === "markets-trading" && sectionData.dominantAudience ? (
              <>
                <p
                  className={`mt-2 text-xs uppercase tracking-[0.16em] ${theme.accentText}`}
                >
                  Dominant persona: {sectionData.dominantPersona}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/85">
                  {sectionData.dominantAudience}
                </p>
                <p className="mt-5 text-xs uppercase tracking-[0.16em] text-white/55">
                  Also relevant for
                </p>
                <ul className="mt-2 space-y-2 text-sm text-white/70">
                  {sectionData.secondaryAudiences?.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className={theme.accentText}>-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {sectionData.whoFor.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className={theme.accentText}>-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={`${rhythm.wideCardClass} md:col-span-2`}>
            <Heading as="h2" className="fb-h3">
              Problems we solve
            </Heading>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {sectionData.problems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className={theme.accentText}>-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className={rhythm.deliverSectionClass}>
        <Container>
          <div className={rhythm.wideCardClass}>
            <Heading as="h2" className="fb-h3">
              What we deliver
            </Heading>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {sectionData.deliverables.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className={theme.accentText}>-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {sectionData.process?.length ? (
        <Section className="py-10">
          <Container className={rhythm.splitGapClass}>
            <div className={`${rhythm.compactCardClass} md:col-span-1 ${theme.accentBorder}`}>
              <Heading as="h2" className="fb-h3">
                How we work
              </Heading>
              <ol className="mt-4 space-y-3 text-sm text-white/70">
                {sectionData.process.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className={`font-semibold ${theme.accentText}`}>
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            {sectionData.differentiators?.length ? (
              <div className={`${rhythm.wideCardClass} md:col-span-2`}>
                <Heading as="h2" className="fb-h3">
                  Why Futurebits
                </Heading>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {sectionData.differentiators.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className={theme.accentText}>-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Container>
        </Section>
      ) : null}

      <Section className={rhythm.faqSectionClass}>
        <Container>
          <Heading as="h2" className="fb-h3">
            Frequently asked questions
          </Heading>
          <div
            className={`mt-6 divide-y divide-white/10 border border-white/10 bg-white/[0.04] backdrop-blur-sm ${
              category.slug === "design" ? "rounded-3xl" : "rounded-2xl"
            }`}
          >
            {faqs.map((item) => (
              <details
                key={item.q}
                className={`open:bg-white/[0.07] ${
                  category.slug === "markets-trading"
                    ? "p-5 sm:p-6"
                    : "p-5"
                }`}
              >
                <summary className="cursor-pointer list-none font-montserrat text-base font-semibold">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section className={rhythm.relatedSectionClass}>
          <Container>
            <ServiceDetailRelated related={related} />
          </Container>
        </Section>
      ) : null}
      <ServiceDetailOutline
        service={service}
        category={category}
        sections={[
          sectionData.intro ? "Introduction" : null,
          sectionData.contrarian ? "Point of view" : null,
          "What you get",
          sectionData.process?.length ? "Delivery process" : null,
          sectionData.differentiators?.length ? "Why Futurebits" : null,
          faqs.length ? "Frequently asked questions" : null,
        ]}
      />
      <SiteFooter logo={logo} backgroundClassName={pageBgClassName} />
    </main>
  );
}
