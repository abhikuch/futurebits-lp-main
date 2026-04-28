import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

import JsonLd, {
  breadcrumbJsonLd,
  customServiceJsonLd,
  faqJsonLd,
} from "@/components/seo/JsonLd";
import SiteFooter from "@/components/shared/SiteFooter";
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
  VERTICAL_DECOR_CLASSES,
} from "@/app/services/themeTokens";

const MARKET_AUDIENCE_PLAYBOOK = {
  "strategy-backtesting": {
    dominantPersona: "Quant funds",
    dominantAudience:
      "Quant funds validating signal stability before allocation decisions and capital allocation reviews.",
    secondaryAudiences: [
      "Prop desks testing strategy variants across regimes and liquidity conditions.",
      "Discretionary teams codifying repeatable playbooks into testable systems.",
    ],
    problems: [
      "Backtests that ignore realistic execution friction and overstate edge.",
      "Research outputs that cannot be reproduced or promoted safely to live.",
      "No shared acceptance criteria for strategy go/no-go decisions.",
    ],
    deliverables: [
      "Event-driven backtest framework with realistic slippage, fees, and fill logic.",
      "Reusable experiment templates and versioned parameter tracking.",
      "Promotion checklist from research to forward-test readiness.",
    ],
  },
  "forward-testing-shadow-mode": {
    dominantPersona: "Prop desks",
    dominantAudience:
      "Prop desks pressure-testing intraday systems before risking desk capital.",
    secondaryAudiences: [
      "Funds with strict deployment governance between research and production.",
      "Discretionary desks validating model overlays alongside manual execution.",
    ],
    problems: [
      "No controlled step between promising backtests and real-money deployment.",
      "Weak observability on strategy behavior during live-feed validation.",
      "Ad-hoc promotion decisions without statistical confidence thresholds.",
    ],
    deliverables: [
      "Paper + shadow mode execution environment mirroring production pathways.",
      "Validation dashboards for drift, fill-quality, and risk violations.",
      "Clear promotion criteria and rollback guardrails.",
    ],
  },
  "live-trading-execution-systems": {
    dominantPersona: "Funds",
    dominantAudience:
      "Funds requiring reliable order lifecycle handling at production scale with governance.",
    secondaryAudiences: [
      "Prop desks that need fast execution with hard risk stops.",
      "Discretionary teams automating repeatable execution legs without losing control.",
    ],
    problems: [
      "Execution stacks break under venue/API edge cases and volatile sessions.",
      "Inconsistent retries/idempotency causing duplicate or missing orders.",
      "Risk controls and runbooks are too fragile for high-pressure operations.",
    ],
    deliverables: [
      "Production execution engine with idempotent order flow and fail-safe retries.",
      "Pre-trade and intra-trade risk gates with kill-switch support.",
      "Operational runbooks, incident workflows, and audit-ready traces.",
    ],
  },
  "real-time-pnl-exposure-monitoring": {
    dominantPersona: "Prop desks",
    dominantAudience:
      "Prop desks monitoring desk-level exposure and strategy health in real time.",
    secondaryAudiences: [
      "Funds needing portfolio-wide risk visibility throughout the trading day.",
      "Discretionary teams tracking automated and manual positions in one surface.",
    ],
    problems: [
      "Delayed risk and PnL visibility prevents timely intervention.",
      "Fragmented dashboards hide cross-strategy exposure concentration.",
      "Alerting is noisy, late, or disconnected from actionable runbooks.",
    ],
    deliverables: [
      "Unified real-time monitoring for PnL, exposure, and strategy status.",
      "Alerting thresholds mapped to practical intervention workflows.",
      "Role-aware monitoring views for traders, risk, and operations.",
    ],
  },
  "trade-analytics-reporting": {
    dominantPersona: "Funds",
    dominantAudience:
      "Funds that need attribution clarity for PM updates and risk committee reviews.",
    secondaryAudiences: [
      "Prop desks optimizing execution quality and strategy-level expectancy.",
      "Discretionary teams turning journal-style insights into measurable analytics.",
    ],
    problems: [
      "Performance reporting lacks attribution depth for decision-making.",
      "Slippage and edge decay signals are discovered too late.",
      "Post-trade analysis is manual and inconsistent across teams.",
    ],
    deliverables: [
      "Per-trade and aggregate analytics with attribution and slippage decomposition.",
      "Daily/weekly reporting pipelines with strategy-level diagnostics.",
      "Decision-ready KPI layers for PM, trader, and risk cadences.",
    ],
  },
  "quant-research-infrastructure": {
    dominantPersona: "Funds",
    dominantAudience:
      "Funds scaling strategy research across multiple researchers and model owners.",
    secondaryAudiences: [
      "Prop desks formalizing idea-to-production workflows.",
      "Discretionary teams introducing systematic overlays with clear controls.",
    ],
    problems: [
      "Research pipelines are fragmented and difficult to reproduce.",
      "No shared standards for data quality, experiment hygiene, and reviews.",
      "Hand-off from research notebooks to production is unreliable.",
    ],
    deliverables: [
      "Structured research workspace with reproducible experiment pipelines.",
      "Dataset/version controls and model/strategy auditability.",
      "Research-to-production handoff protocol and validation gates.",
    ],
  },
  "trading-system-audits-consulting": {
    dominantPersona: "Funds",
    dominantAudience:
      "Funds requiring independent architecture and risk assessment before scaling capital.",
    secondaryAudiences: [
      "Prop desks troubleshooting recurring execution or stability failures.",
      "Discretionary teams modernizing legacy tooling without full rebuild risk.",
    ],
    problems: [
      "Hidden failure modes in execution, risk, or infrastructure layers.",
      "No objective severity framework for technical and operational debt.",
      "Fixes are reactive and uncoupled from measurable reliability targets.",
    ],
    deliverables: [
      "System audit across architecture, execution, risk, and observability.",
      "Severity-ranked findings with practical remediation sequence.",
      "Advisory support for implementation and verification cycles.",
    ],
  },
  "trading-stack-observability-alerting": {
    dominantPersona: "Prop desks",
    dominantAudience:
      "Prop teams needing low-latency incident detection and escalation during sessions.",
    secondaryAudiences: [
      "Funds operating multiple strategy services in production.",
      "Discretionary teams combining automated alerts with human oversight.",
    ],
    problems: [
      "Incidents are detected late due to weak telemetry coverage.",
      "Alert fatigue from noisy thresholds and poor signal quality.",
      "No clear mapping from alerts to response owners and actions.",
    ],
    deliverables: [
      "Observability stack for latency, fills, order states, and infra health.",
      "Signal-first alerting tuned by severity and operational context.",
      "Escalation flows and incident response playbooks.",
    ],
  },
  "tradingview-indicators-automation": {
    dominantPersona: "Discretionary teams",
    dominantAudience:
      "Discretionary traders systematizing repeatable setup detection and execution workflows.",
    secondaryAudiences: [
      "Funds prototyping rapid indicator-driven workflows.",
      "Prop desks turning TradingView signals into executable infrastructure hooks.",
    ],
    problems: [
      "Indicator logic is inconsistent across users and sessions.",
      "Signal-to-execution handoff is manual and error-prone.",
      "TradingView automation lacks governance and production controls.",
    ],
    deliverables: [
      "Custom indicator and alert architecture aligned to strategy logic.",
      "Signal pipelines that connect TradingView outputs to downstream systems.",
      "Operational controls around alert quality and execution triggers.",
    ],
  },
  "trading-tech-maintenance-on-call": {
    dominantPersona: "Discretionary teams",
    dominantAudience:
      "Discretionary teams relying on lean engineering bandwidth for stack reliability.",
    secondaryAudiences: [
      "Funds needing dependable support for always-on trading stacks.",
      "Prop desks requiring rapid response during market sessions.",
    ],
    problems: [
      "Critical maintenance and incidents compete with roadmap delivery.",
      "No clear on-call structure for high-stakes market windows.",
      "Recurring reliability issues remain unresolved between sessions.",
    ],
    deliverables: [
      "Maintenance cadence for infrastructure, execution services, and integrations.",
      "On-call response model with clear ownership and escalation paths.",
      "Reliability improvement backlog tied to incident learnings.",
    ],
  },
};

function buildServiceSections(service, category) {
  if (category?.slug === "markets-trading") {
    const playbook = MARKET_AUDIENCE_PLAYBOOK[service.slug];
    if (playbook) {
      return {
        dominantPersona: playbook.dominantPersona,
        dominantAudience: playbook.dominantAudience,
        secondaryAudiences: playbook.secondaryAudiences,
        whoFor: [playbook.dominantAudience, ...playbook.secondaryAudiences],
        problems: playbook.problems,
        deliverables: playbook.deliverables,
      };
    }
  }
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

  return null;
}

function getHeroStylePreset(categorySlug) {
  const preset = DETAIL_HERO_PRESET[categorySlug] ?? DEFAULT_DETAIL_HERO_PRESET;
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

function getRhythmPreset(categorySlug) {
  return DETAIL_RHYTHM_PRESET[categorySlug] ?? DEFAULT_DETAIL_RHYTHM_PRESET;
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
      creator: SOCIAL.twitterHandle,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [ASSETS.ogAi],
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
  const faqs = getServiceFaq(service);
  const related = getRelatedServices(service.categorySlug, service.slug, 6);
  const theme = DETAIL_VISUAL_THEME[category.slug] ?? DEFAULT_DETAIL_THEME;
  const heroPreset = getHeroStylePreset(category.slug);
  const rhythm = getRhythmPreset(category.slug);
  const pageBgClassName = theme.pageBg;

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
    <main
      id="main-content"
      className={`min-h-screen ${pageBgClassName} text-white`}
    >
      <VerticalDecorations categorySlug={category.slug} />
      <JsonLd data={[breadcrumb, serviceSchema, faqSchema]} />

      <Section className={rhythm.heroSectionClass}>
        <Container>
          <div className={heroPreset.shellClass}>
            <div className="pointer-events-none absolute -top-28 right-[-60px] h-56 w-56 rounded-full bg-white/10 blur-[100px]" />
            {heroPreset.bottomRail}
            <div className="relative z-10">
              <p className={`fb-kicker ${theme.accentText}`}>{category.title}</p>
              <Heading as="h1" className={heroPreset.titleClass}>
                {service.hero}
              </Heading>
              <p className={heroPreset.subheadClass}>
                {service.subhead}
              </p>
              <div
                className={`mt-6 flex flex-wrap items-center gap-2 ${
                  category.slug === "ai-automation" || category.slug === "design"
                    ? "justify-center"
                    : ""
                }`}
              >
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium text-white/90 ${theme.chipBg}`}
                >
                  Outcome-first delivery
                </span>
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                  Senior pod ownership
                </span>
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                  Scoped for measurable impact
                </span>
              </div>
              <div className={heroPreset.ctaRowClass}>
                <Link
                  href={category.ctaHref}
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
      <SiteFooter logo={logo} backgroundClassName={pageBgClassName} />
    </main>
  );
}
