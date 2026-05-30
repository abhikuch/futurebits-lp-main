import Link from "next/link";

import JsonLd, { breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import TopNavbar from "@/components/shared/TopNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import logo from "@/assets/logo.svg";
import { buildRouteMetadata, COMPANY, ROUTES, SITE_URL } from "@/config/site";
import { SERVICE_CATEGORIES } from "@/content/services";

export const metadata = buildRouteMetadata("home");

const VERTICALS = [
  {
    key: "ai",
    route: ROUTES.ai,
    accent: "from-[#01B0EA] to-[#2E2688]",
  },
  {
    key: "design",
    route: ROUTES.design,
    accent: "from-[#01B0EA] to-[#2E2688]",
  },
  {
    key: "markets",
    route: ROUTES.markets,
    accent: "from-white/80 to-white/40",
  },
];

export default function HomePage() {
  const breadcrumbItems = [{ name: "Home", url: SITE_URL }];

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: ROUTES.home.path,
            name: ROUTES.home.title,
            description: ROUTES.home.description,
            image: ROUTES.home.ogImage,
            breadcrumbItems,
          }),
          breadcrumbJsonLd(breadcrumbItems, ROUTES.home.path),
        ]}
      />
      <TopNavbar />
      <main id="main-content" className="min-h-screen bg-[#060618] text-white">
        <Section className="pt-32 pb-16 sm:pt-36">
          <Container>
            <p className="fb-kicker">{COMPANY.name}</p>
            <Heading as="h1" className="mt-6 max-w-4xl fb-hero-title">
              {COMPANY.tagline}
            </Heading>
            <p className="mt-6 max-w-2xl text-lg text-white/70">
              Senior pods across AI automation, product design, software
              development, and trading infrastructure. Pick your track — or
              browse every service we ship.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={ROUTES.services.path}
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/30 bg-white/[0.06] px-6 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Browse all services
              </Link>
              <Link
                href={ROUTES.contact.path}
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </Container>
        </Section>

        <Section className="py-12">
          <Container>
            <Heading as="h2" className="fb-h2">
              Choose your track
            </Heading>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {VERTICALS.map(({ route, accent }) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
                >
                  <p
                    className={`inline-block bg-gradient-to-r ${accent} bg-clip-text text-sm font-semibold uppercase tracking-[0.15em] text-transparent`}
                  >
                    {route.ogImageAlt.replace("Futurebits ", "")}
                  </p>
                  <h3 className="mt-4 fb-h3 text-xl">{route.title.split(" — ")[0]}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {route.description}
                  </p>
                  <span className="mt-5 inline-block text-sm text-white/55 transition group-hover:text-white">
                    Explore →
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="py-12">
          <Container>
            <Heading as="h2" className="fb-h2">
              Service categories
            </Heading>
            <p className="mt-4 max-w-3xl text-white/70">
              {ROUTES.services.description}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICE_CATEGORIES.map((category) => (
                <Link
                  key={category.slug}
                  href={`/services/${category.slug}`}
                  className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                >
                  {category.title}
                </Link>
              ))}
            </div>
            <Link
              href="/blog"
              className="mt-8 inline-block text-sm text-white/60 underline underline-offset-4 transition hover:text-white"
            >
              Read insights on UX, AI, and product growth →
            </Link>
          </Container>
        </Section>
      </main>
      <SiteFooter logo={logo} homePath={ROUTES.home.path} />
    </>
  );
}
