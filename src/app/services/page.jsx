import Link from "next/link";

import JsonLd, { servicesHubJsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import {
  ServicesHubEngagement,
  ServicesHubTracks,
} from "@/components/shared/ServicesHubMotion";
import SiteFooter from "@/components/shared/SiteFooter";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import logo from "@/assets/logo.svg";
import { COMPANY } from "@/config/site";
import { SERVICES_BY_CATEGORY } from "@/content/services";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";

const engagementModels = [
  {
    name: "Sprint",
    detail: "2–4 weeks. One scoped outcome, signed off with acceptance tests.",
  },
  {
    name: "Pod",
    detail: "8–12 weeks. Design, engineering, or AI in your repo. Weekly demos.",
  },
  {
    name: "Partner",
    detail: "Quarterly retainer when you want the same team on the next bottleneck.",
  },
];

export default function ServicesHubPage() {
  return (
    <main
      id="main-content"
      className={`min-h-screen ${SERVICE_HUB_THEME.pageBgClass} text-white`}
    >
      <JsonLd data={servicesHubJsonLd(SERVICES_BY_CATEGORY)} />

      <Section className="pb-12 pt-32 sm:pt-36">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
            ]}
          />
          <p className="fb-kicker fb-page-hero-title-enter">Services Hub</p>
          <Heading as="h1" className="mt-6 fb-hero-title max-w-4xl fb-page-hero-title-enter">
            Build, design, and AI. Scoped in writing, shipped in your repo.
          </Heading>
          <p className="fb-page-hero-copy-enter mt-6 max-w-3xl text-lg text-white/70">
            Start from AI, Design, or Markets when you can. Category hubs
            below exist if you already know the offering name. We quote fixed
            windows: sprints, pods, or partner retainers, with weekly demos and
            no account-manager layer.
          </p>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <ServicesHubTracks categories={SERVICES_BY_CATEGORY} />
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <ServicesHubEngagement models={engagementModels} />
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <div className={SERVICE_HUB_THEME.ctaPanelClass}>
            <Heading as="h2" className="fb-h2">
              Not sure where to start?
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Describe the bottleneck. Broken billing, a chatbot that failed,
              a landing page that does not convert. We will point you at the
              right service and a realistic first scope.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Talk to {COMPANY.name}
            </Link>
            <Link
              href="/blog"
              className="ml-3 inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Read insights
            </Link>
          </div>
        </Container>
      </Section>
      <SiteFooter logo={logo} backgroundClassName={SERVICE_HUB_THEME.footerBgClass} />
    </main>
  );
}
