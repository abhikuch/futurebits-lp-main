import Link from "next/link";
import { notFound } from "next/navigation";

import JsonLd, {
  breadcrumbJsonLd,
  customServiceJsonLd,
} from "@/components/seo/JsonLd";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import { ASSETS, COMPANY, SITE_URL, SOCIAL } from "@/config/site";
import {
  getCategoryBySlug,
  SERVICES_BY_CATEGORY,
} from "@/content/services";

export function generateStaticParams() {
  return SERVICES_BY_CATEGORY.map((item) => ({ category: item.slug }));
}

export function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.category);
  if (!category) return {};
  const path = `/services/${category.slug}`;
  const title = `${category.title} Services | ${COMPANY.name}`;
  const description = `${category.description} Explore service coverage, delivery model, and implementation paths.`;
  return {
    title,
    description,
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
          url: ASSETS.ogAi,
          width: 1200,
          height: 630,
          alt: `${category.title} services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: SOCIAL.twitterHandle,
      title,
      description,
      images: [ASSETS.ogAi],
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

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
    {
      name: categoryBundle.title,
      url: `${SITE_URL}/services/${categoryBundle.slug}`,
    },
  ]);

  const service = customServiceJsonLd({
    title: `${categoryBundle.title} Services`,
    description: categoryBundle.description,
    path: `/services/${categoryBundle.slug}`,
  });

  return (
    <main id="main-content" className="min-h-screen bg-[#060618] text-white">
      <JsonLd data={[breadcrumb, service]} />

      <Section className="pb-10 pt-32 sm:pt-36">
        <Container>
          <p className="fb-kicker">{categoryBundle.shortTitle}</p>
          <Heading as="h1" className="mt-6 fb-hero-title max-w-4xl">
            {categoryBundle.title} services designed for measurable outcomes.
          </Heading>
          <p className="mt-6 max-w-3xl text-lg text-white/70">
            {categoryBundle.description}
          </p>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <Heading as="h2" className="fb-h2">
            Services in this track
          </Heading>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryBundle.services.map((serviceItem) => (
              <Link
                key={serviceItem.slug}
                href={serviceItem.path}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
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
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
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
              className="mt-7 inline-flex h-11 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {categoryBundle.ctaLabel}
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
