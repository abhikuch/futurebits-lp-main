import Link from "next/link";

import JsonLd, { breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import TopNavbar from "@/components/shared/TopNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import FeaturedServiceLinks from "@/components/shared/FeaturedServiceLinks";
import logo from "@/assets/logo.svg";
import { buildRouteMetadata, CAL, COMPANY, ROUTES, SITE_URL } from "@/config/site";
import { SERVICE_CATEGORIES } from "@/content/services";
import {
  getCategoryTheme,
  getTopicAccentTextClass,
} from "@/lib/page-theme";

export const metadata = buildRouteMetadata("home");

const VERTICALS = [
  { route: ROUTES.ai, categorySlug: "ai-automation" },
  { route: ROUTES.design, categorySlug: "design" },
  { route: ROUTES.markets, categorySlug: "markets-trading" },
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
        <section className="pt-32 pb-16 sm:pt-36">
          <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-16">
            <p className="fb-kicker fb-page-hero-enter">{COMPANY.name}</p>
            <h1 className="mt-6 max-w-4xl fb-hero-title fb-page-hero-enter">{COMPANY.tagline}</h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70 fb-page-hero-copy-enter">
              One small team across AI automation, product design, and trading
              infrastructure. Pick your track first. Category pages exist if you
              already know the offering name.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={CAL.ai}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/30 bg-white/[0.06] px-6 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Book a call
              </Link>
              <Link
                href="#tracks"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                See the tracks
              </Link>
            </div>
          </div>
        </section>

        <section id="tracks" className="py-12">
          <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-16">
            <h2 className="fb-h2">Choose your track</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {VERTICALS.map(({ route, categorySlug }) => {
                const categoryTheme = getCategoryTheme(categorySlug);
                const accentClass = getTopicAccentTextClass(categorySlug);
                const label =
                  route.shortLabel ??
                  route.ogImageAlt.replace("Futurebits ", "");

                return (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`${categoryTheme.serviceCardClass} group block p-6`}
                  >
                    <p
                      className={`text-sm font-semibold uppercase tracking-[0.15em] ${accentClass}`}
                    >
                      {label}
                    </p>
                    <h3 className="mt-4 fb-h3 text-xl">
                      {route.title.split(" — ")[0]}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {route.description}
                    </p>
                    <span className="mt-5 inline-block text-sm text-white/55 transition group-hover:text-white">
                      Explore →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <FeaturedServiceLinks
          title="Work we take on most often"
          services={[
            { categorySlug: "ai-automation", serviceSlug: "chatbot-development" },
            { categorySlug: "design", serviceSlug: "website-ux-audit" },
            { categorySlug: "ai-automation", serviceSlug: "custom-gpt-knowledge-base" },
            { categorySlug: "design", serviceSlug: "landing-page-design" },
            { categorySlug: "build", serviceSlug: "mvp-development" },
            {
              categorySlug: "startup-tech-partner",
              serviceSlug: "end-to-end-product-design-development",
            },
            { categorySlug: "ai-automation", serviceSlug: "ai-agents-development" },
            { categorySlug: "build", serviceSlug: "saas-development" },
          ]}
        />

        <section className="py-12">
          <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-16">
            <h2 className="fb-h2">Already know the offering?</h2>
            <p className="mt-4 max-w-3xl text-white/70">
              Start from a track when you can. These category hubs exist for a
              specific service name, not as the front door.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICE_CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/services/${category.slug}`}
                    className="block rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/blog"
              className="mt-8 inline-block text-sm text-white/60 underline underline-offset-4 transition hover:text-white"
            >
              Read insights on UX, AI, and product growth →
            </Link>
          </div>
        </section>

        <article className="border-t border-white/10 py-12">
          <div className="mx-auto max-w-3xl px-6 text-white/75 sm:px-10 lg:px-16">
            <h2 className="fb-h2 text-white">How Futurebits works</h2>
            <p className="mt-4 leading-relaxed">
              Futurebits is one small team: designers, engineers, and AI
              builders who ship in your repository with written scope, weekly
              demos, and direct access to the people doing the work. We are not
              a staff-augmentation bench and we do not disappear behind account
              managers.
            </p>
            <p className="mt-4 leading-relaxed">
              Teams typically come to us when they need production AI in ops or
              support, trading infrastructure that survives real markets, or
              design paired with frontend code that moves activation and
              conversion. Every engagement starts with a short scoping
              conversation and ends with merged code, not a handoff deck.
            </p>
            <p className="mt-4 leading-relaxed">
              Start on the AI, design, or markets track for proof and service
              detail. Book a call with your timeline and success metric when you
              are ready to scope.
            </p>
          </div>
        </article>
      </main>
      <SiteFooter logo={logo} homePath={ROUTES.home.path} />
    </>
  );
}
