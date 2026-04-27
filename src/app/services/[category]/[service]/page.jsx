import Link from "next/link";
import { notFound } from "next/navigation";

import JsonLd, {
  breadcrumbJsonLd,
  customServiceJsonLd,
  faqJsonLd,
} from "@/components/seo/JsonLd";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import { ASSETS, COMPANY, SITE_URL, SOCIAL } from "@/config/site";
import {
  getCategoryBySlug,
  getRelatedServices,
  getServiceBySlugs,
  getServiceFaq,
  SERVICES,
} from "@/content/services";

function buildServiceSections(service) {
  return {
    whoFor: [
      `Teams that need ${service.title.toLowerCase()} delivered with speed and clear ownership.`,
      "Product leaders balancing timeline pressure with quality requirements.",
      "Organizations that want senior execution without long onboarding drag.",
    ],
    problems: [
      "Scope and execution drift due to unclear delivery boundaries.",
      "Slow cycles caused by fragmented ownership across teams.",
      "Low confidence in production readiness and business impact.",
    ],
    deliverables: [
      `${service.title} implementation scoped to measurable outcomes.`,
      "Technical and product acceptance criteria before build starts.",
      "Weekly demos, clear handoff notes, and production-ready rollout support.",
    ],
  };
}

export function generateStaticParams() {
  return SERVICES.map((item) => ({
    category: item.categorySlug,
    service: item.slug,
  }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlugs(params.category, params.service);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
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
          url: ASSETS.ogAi,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: SOCIAL.twitterHandle,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [ASSETS.ogAi],
    },
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlugs(params.category, params.service);
  const category = getCategoryBySlug(params.category);

  if (!service || !category) {
    notFound();
  }

  const sectionData = buildServiceSections(service);
  const faqs = getServiceFaq(service);
  const related = getRelatedServices(service.categorySlug, service.slug, 6);

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
    {
      name: category.title,
      url: `${SITE_URL}/services/${category.slug}`,
    },
    {
      name: service.title,
      url: `${SITE_URL}${service.path}`,
    },
  ]);
  const serviceSchema = customServiceJsonLd({
    title: service.title,
    description: service.shortDescription,
    path: service.path,
  });
  const faqSchema = faqJsonLd(faqs);

  return (
    <main id="main-content" className="min-h-screen bg-[#060618] text-white">
      <JsonLd data={[breadcrumb, serviceSchema, faqSchema]} />

      <Section className="pb-8 pt-32 sm:pt-36">
        <Container>
          <p className="fb-kicker">{category.title}</p>
          <Heading as="h1" className="mt-6 fb-hero-title max-w-4xl">
            {service.hero}
          </Heading>
          <p className="mt-6 max-w-3xl text-lg text-white/70">
            {service.subhead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={category.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {category.ctaLabel}
            </Link>
            <Link
              href={`/services/${category.slug}`}
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white/85 transition hover:bg-white/5"
            >
              Back to {category.shortTitle}
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="py-10">
        <Container className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:col-span-1">
            <Heading as="h2" className="fb-h3">
              Who this is for
            </Heading>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {sectionData.whoFor.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:col-span-2">
            <Heading as="h2" className="fb-h3">
              Problems we solve
            </Heading>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {sectionData.problems.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="py-10">
        <Container>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <Heading as="h2" className="fb-h3">
              What we deliver
            </Heading>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {sectionData.deliverables.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="py-10">
        <Container>
          <Heading as="h2" className="fb-h3">
            Frequently asked questions
          </Heading>
          <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
            {faqs.map((item) => (
              <details key={item.q} className="p-5 open:bg-white/[0.04]">
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
        <Section className="py-10">
          <Container>
            <Heading as="h2" className="fb-h3">
              Related services
            </Heading>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={item.path}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
                >
                  <h3 className="fb-h3 text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.shortDescription}</p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}
    </main>
  );
}
