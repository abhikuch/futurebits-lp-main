import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

import JsonLd, { serviceCategoryJsonLd } from "@/components/seo/JsonLd";
import SiteFooter from "@/components/shared/SiteFooter";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import logo from "@/assets/logo.svg";
import { ASSETS, COMPANY, SITE_URL, SOCIAL } from "@/config/site";
import {
  getCategoryBySlug,
  SERVICES_BY_CATEGORY,
} from "@/content/services";
import aiCircle from "@/assets/landing-page-AI/circle.webp";
import designDiamond from "@/assets/design/navbar.svg";
import designLight from "@/assets/design/light.webp";
import {
  AI_MARKETS_BEAM_GRADIENT,
  CATEGORY_VISUAL_THEME,
  DEFAULT_CATEGORY_THEME,
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
      </>
    );
  }

  return null;
}

export function generateStaticParams() {
  return SERVICES_BY_CATEGORY.map((item) => ({ category: item.slug }));
}

export function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.category);
  if (!category) return {};
  const path = `/services/${category.slug}`;
  const title = `${category.title} Services | ${COMPANY.name}`;
  const description = `${category.description} Explore service coverage, delivery model, and implementation paths.`;
  const ogImage = CATEGORY_OG_IMAGES[category.slug] ?? ASSETS.ogAi;
  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    keywords: [
      category.title,
      `${category.shortTitle} services`,
      "Futurebits services",
      "software delivery",
      `${category.shortTitle} delivery partner`,
    ],
    alternates: {
      canonical: `${SITE_URL}${path}`,
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}${path}`,
      siteName: COMPANY.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${category.title} services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: SOCIAL.twitterHandle,
      creator: SOCIAL.twitterHandle,
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ServiceCategoryPage({ params }) {
  const categoryBundle = SERVICES_BY_CATEGORY.find(
    (item) => item.slug === params.category
  );

  if (!categoryBundle) {
    notFound();
  }

  const theme = CATEGORY_VISUAL_THEME[categoryBundle.slug] ?? DEFAULT_CATEGORY_THEME;

  return (
    <main
      id="main-content"
      className={`relative min-h-screen overflow-hidden ${theme.pageBg} text-white`}
    >
      <VerticalDecorations categorySlug={categoryBundle.slug} />
      <JsonLd data={serviceCategoryJsonLd(categoryBundle)} />

      <Section className="pb-10 pt-32 sm:pt-36">
        <Container>
          <p className={theme.kickerClass}>{categoryBundle.shortTitle}</p>
          <div className={theme.dividerClass} />
          <Heading as="h1" className={theme.titleClass}>
            {categoryBundle.title} services designed for measurable outcomes.
          </Heading>
          <p className={theme.bodyClass}>
            {categoryBundle.description}
          </p>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <Heading as="h2" className="fb-h2">
            Services in this track
          </Heading>
          <div className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryBundle.services.map((serviceItem) => (
              <Link
                key={serviceItem.slug}
                href={serviceItem.path}
                className={`${theme.serviceCardClass} flex h-full flex-col`}
              >
                <h3 className="fb-h3">{serviceItem.title}</h3>
                <p className="mt-3 text-sm text-white/70">
                  {serviceItem.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <div className={theme.ctaPanelClass}>
            <Heading as="h2" className="fb-h2">
              Ready to scope {categoryBundle.shortTitle.toLowerCase()} work?
            </Heading>
            <p className="mt-4 max-w-3xl text-white/70">
              Bring your current bottleneck and constraints. We will propose a
              scoped sprint with clear outcomes and realistic delivery timelines.
            </p>
            <Link
              href={categoryBundle.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className={theme.ctaButtonClass}
            >
              {categoryBundle.ctaLabel}
            </Link>
          </div>
        </Container>
      </Section>
      <SiteFooter logo={logo} backgroundClassName={theme.pageBg} />
    </main>
  );
}
