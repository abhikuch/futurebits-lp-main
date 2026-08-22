import Link from "next/link";

import SiteFooter from "@/components/shared/SiteFooter";
import { EditorialCardGrid } from "@/components/shared/EditorialPageMotion";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import logo from "@/assets/logo.svg";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";
import { BLOG_POSTS } from "@/content/blog";
import { getTopicCardClass } from "@/lib/page-theme";

export default function BlogIndexPage() {
  return (
    <main
      id="main-content"
      className={`min-h-screen ${SERVICE_HUB_THEME.pageBgClass} text-white`}
    >
      <Section className="pb-16 pt-32 sm:pt-36">
        <Container>
          <p className="fb-kicker fb-page-hero-enter">Insights</p>
          <Heading as="h1" className="mt-6 max-w-3xl fb-hero-title fb-page-hero-enter">
            Guides on UX, AI, and product growth
          </Heading>
          <p className="fb-hero-copy mt-6 fb-page-hero-copy-enter">
            Practical articles for teams evaluating UX audits, AI chatbots,
            custom GPTs, landing page design, and product delivery.
          </p>

          <EditorialCardGrid className="mt-12 grid gap-6 md:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`${getTopicCardClass(post.category)} fb-interactive-surface block p-6`}
              >
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  {post.category} · {post.readMinutes} min read
                </p>
                <h2 className="mt-3 font-montserrat text-xl font-semibold text-white">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {post.description}
                </p>
                <span className="mt-5 inline-block text-sm text-white/55">
                  Read article →
                </span>
              </Link>
            ))}
          </EditorialCardGrid>
        </Container>
      </Section>
      <SiteFooter logo={logo} backgroundClassName={SERVICE_HUB_THEME.footerBgClass} />
    </main>
  );
}
