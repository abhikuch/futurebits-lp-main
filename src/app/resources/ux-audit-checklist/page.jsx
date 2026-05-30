import Link from "next/link";

import JsonLd, {
  breadcrumbJsonLd,
  faqJsonLd,
  webPageJsonLd,
} from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import PageAccentGlow from "@/components/shared/PageAccentGlow";
import SiteFooter from "@/components/shared/SiteFooter";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import logo from "@/assets/logo.svg";
import { SITE_URL } from "@/config/site";
import { UX_AUDIT_CHECKLIST } from "@/content/link-building";
import { getTopicCtaPanelClass } from "@/lib/page-theme";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";

export const metadata = {
  title: `${UX_AUDIT_CHECKLIST.title} | Futurebits`,
  description: UX_AUDIT_CHECKLIST.description,
  alternates: {
    canonical: `${SITE_URL}/resources/ux-audit-checklist`,
  },
};

const CHECKLIST_FAQ = [
  {
    q: "Is this UX audit checklist free to use?",
    a: "Yes. Use it internally, share it with your team, or link to it from your own content. Attribution to Futurebits is appreciated but not required.",
  },
  {
    q: "How long does a full UX audit take using this checklist?",
    a: "A focused marketing-site audit takes 2-3 days with analytics access. Full product experience audits covering onboarding and core flows typically take 2-3 weeks.",
  },
  {
    q: "Can Futurebits run the audit for us?",
    a: "Yes. We offer complete website UX audits with prioritized findings, annotated screenshots, and a fix roadmap tied to conversion metrics.",
  },
];

export default function UxAuditChecklistPage() {
  const path = "/resources/ux-audit-checklist";
  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Resources", url: `${SITE_URL}/resources` },
    { name: UX_AUDIT_CHECKLIST.title, url: `${SITE_URL}${path}` },
  ];
  const breadcrumbNav = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "UX Audit Checklist", href: path },
  ];

  return (
    <main
      id="main-content"
      className={`relative min-h-screen ${SERVICE_HUB_THEME.pageBgClass} text-white`}
    >
      <PageAccentGlow themeKey="design" />
      <JsonLd
        data={[
          webPageJsonLd({
            path,
            name: UX_AUDIT_CHECKLIST.title,
            description: UX_AUDIT_CHECKLIST.description,
            breadcrumbItems,
          }),
          breadcrumbJsonLd(breadcrumbItems, path),
          faqJsonLd(CHECKLIST_FAQ, path),
        ]}
      />

      <Section className="pb-16 pt-32 sm:pt-36">
        <Container className="max-w-3xl">
          <Breadcrumbs items={breadcrumbNav} />
          <p className="fb-kicker">Free resource</p>
          <Heading as="h1" className="mt-4 fb-hero-title">
            {UX_AUDIT_CHECKLIST.title}
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            {UX_AUDIT_CHECKLIST.description} Work through each section and mark
            items pass, fail, or needs review.
          </p>

          <div className="mt-12 space-y-10">
            {UX_AUDIT_CHECKLIST.categories.map((category) => (
              <section key={category.name}>
                <h2 className="font-montserrat text-xl font-semibold text-white">
                  {category.name}
                </h2>
                <ul className="mt-4 space-y-3">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm leading-relaxed text-white/75"
                    >
                      <span
                        className="mt-0.5 inline-block h-4 w-4 shrink-0 rounded border border-white/30"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className={`mt-14 ${getTopicCtaPanelClass("design")}`}>
            <h2 className="fb-h3">Want an expert UX audit instead?</h2>
            <p className="mt-3 text-sm text-white/70">
              We deliver prioritized findings with analytics review, annotated
              screenshots, and a fix roadmap tied to conversion metrics.
            </p>
            <Link
              href="/services/design/website-ux-audit"
              className="mt-5 inline-flex rounded-full border border-[#01B0EA]/50 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#01B0EA]/10"
            >
              Website UX Audit service →
            </Link>
          </div>

          <p className="mt-8 text-xs text-white/45">
            Cite this page: Futurebits, &ldquo;Website UX Audit Checklist,&rdquo;{" "}
            {SITE_URL}/resources/ux-audit-checklist
          </p>
        </Container>
      </Section>
      <SiteFooter logo={logo} backgroundClassName={SERVICE_HUB_THEME.footerBgClass} />
    </main>
  );
}
