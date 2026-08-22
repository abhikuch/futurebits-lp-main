import Link from "next/link";

import SiteFooter from "@/components/shared/SiteFooter";
import {
  EditorialBlock,
  EditorialCardGrid,
} from "@/components/shared/EditorialPageMotion";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import logo from "@/assets/logo.svg";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";
import { BLOG_POSTS } from "@/content/blog";
import { FREE_RESOURCES } from "@/content/link-building";
import { getTopicCardClass } from "@/lib/page-theme";

export default function ResourcesPage() {
  return (
    <main
      id="main-content"
      className={`min-h-screen ${SERVICE_HUB_THEME.pageBgClass} text-white`}
    >
      <Section className="pb-16 pt-32 sm:pt-36">
        <Container>
          <p className="fb-kicker fb-page-hero-enter">Free resources</p>
          <Heading as="h1" className="mt-6 max-w-3xl fb-hero-title fb-page-hero-enter">
            Tools and checklists for product teams
          </Heading>
          <p className="fb-hero-copy mt-6 fb-page-hero-copy-enter">
            Linkable guides and checklists from Futurebits. Use them internally,
            share with your team, or cite them in your own content.
          </p>

          <EditorialBlock>
            <Heading as="h2" className="fb-h3">
              Checklists & tools
            </Heading>
            <EditorialCardGrid className="mt-6 grid gap-4 md:grid-cols-2">
              {FREE_RESOURCES.map((resource) => (
                <Link
                  key={resource.slug}
                  href={resource.path}
                  className={`${getTopicCardClass(resource.category)} fb-interactive-surface block p-6`}
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                    {resource.category}
                  </p>
                  <h3 className="mt-2 font-montserrat text-lg font-semibold">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">{resource.description}</p>
                  <span className="mt-4 inline-block text-sm text-white/55">
                    Open checklist →
                  </span>
                </Link>
              ))}
            </EditorialCardGrid>
          </EditorialBlock>

          <EditorialBlock className="fb-section mt-16 pt-16">
            <Heading as="h2" className="fb-h3">
              Guides from the blog
            </Heading>
            <EditorialCardGrid className="mt-6 grid gap-4 md:grid-cols-2">
              {BLOG_POSTS.slice(0, 6).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`${getTopicCardClass(post.category)} fb-interactive-surface block px-5 py-4 text-sm text-white/80 hover:text-white`}
                >
                  {post.title}
                </Link>
              ))}
            </EditorialCardGrid>
            <Link
              href="/blog"
              className="mt-6 inline-block text-sm text-white/60 underline underline-offset-4 transition hover:text-white"
            >
              View all articles →
            </Link>
          </EditorialBlock>

          <EditorialBlock className={`mt-16 ${SERVICE_HUB_THEME.ctaPanelClass}`}>
            <Heading as="h2" className="fb-h3 text-lg">
              Need help implementing this?
            </Heading>
            <p className="mt-3 text-sm text-white/70">
              We run website UX audits, AI implementations, and product design
              sprints for teams that want senior execution — not just checklists.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/services/design/website-ux-audit"
                className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
              >
                UX Audit service
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </EditorialBlock>
        </Container>
      </Section>
      <SiteFooter logo={logo} backgroundClassName={SERVICE_HUB_THEME.footerBgClass} />
    </main>
  );
}
