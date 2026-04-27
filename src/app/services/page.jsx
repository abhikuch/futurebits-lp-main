import Link from "next/link";

import JsonLd, {
  breadcrumbJsonLd,
  customServiceJsonLd,
} from "@/components/seo/JsonLd";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import { COMPANY, SITE_URL } from "@/config/site";
import { SERVICES_BY_CATEGORY } from "@/content/services";

const engagementModels = [
  {
    name: "Sprint",
    detail: "2-4 weeks for one scoped, shipped outcome.",
  },
  {
    name: "Pod",
    detail: "8-12 weeks for cross-functional delivery and rollout.",
  },
  {
    name: "Partner",
    detail: "Ongoing senior execution tied to business metrics.",
  },
];

export default function ServicesHubPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
  ]);
  const service = customServiceJsonLd({
    title: "Futurebits Services",
    description:
      "Software development, AI automation, product design, integrations, and startup technical partnership services.",
    path: "/services",
  });

  return (
    <main id="main-content" className="min-h-screen bg-[#060618] text-white">
      <JsonLd data={[breadcrumb, service]} />

      <Section className="pb-12 pt-32 sm:pt-36">
        <Container>
          <p className="fb-kicker">Services Hub</p>
          <Heading as="h1" className="mt-6 fb-hero-title max-w-4xl">
            Software, AI, and product delivery for teams that want outcomes, not overhead.
          </Heading>
          <p className="mt-6 max-w-3xl text-lg text-white/70">
            Futurebits runs senior pods across build, AI automation, design,
            integrations, and startup partner tracks. Choose your entry point,
            and we will scope the fastest path to measurable outcomes.
          </p>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <Heading as="h2" className="fb-h2">
            Core service tracks
          </Heading>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {SERVICES_BY_CATEGORY.map((category) => (
              <Link
                key={category.slug}
                href={`/services/${category.slug}`}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
              >
                <h3 className="fb-h3">{category.title}</h3>
                <p className="mt-3 text-sm text-white/70">{category.description}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/45">
                  {category.services.length} services
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <Heading as="h2" className="fb-h2">
            Engagement models
          </Heading>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {engagementModels.map((model) => (
              <div
                key={model.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="fb-h3">{model.name}</h3>
                <p className="mt-3 text-sm text-white/70">{model.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#2E2688]/35 to-[#01B0EA]/10 p-8 text-center">
            <Heading as="h2" className="fb-h2">
              Need help choosing the right service path?
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Share your current bottleneck. We will recommend the fastest
              first scope and delivery model.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Talk to {COMPANY.name}
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
