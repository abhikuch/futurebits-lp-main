import Link from "next/link";

import SiteFooter from "@/components/shared/SiteFooter";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import logo from "@/assets/logo.svg";
import { BLOG_POSTS } from "@/content/blog";
import { FREE_RESOURCES } from "@/content/link-building";

export default function ResourcesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#060618] text-white">
      <Section className="pt-8 pb-16">
        <Container>
          <p className="fb-kicker">Free resources</p>
          <Heading as="h1" className="mt-6 max-w-3xl fb-hero-title">
            Tools and checklists for product teams
          </Heading>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Linkable guides and checklists from Futurebits. Use them internally,
            share with your team, or cite them in your own content.
          </p>

          <div className="mt-12">
            <Heading as="h2" className="fb-h3">
              Checklists & tools
            </Heading>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {FREE_RESOURCES.map((resource) => (
                <Link
                  key={resource.slug}
                  href={resource.path}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
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
            </div>
          </div>

          <div className="mt-16">
            <Heading as="h2" className="fb-h3">
              Guides from the blog
            </Heading>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {BLOG_POSTS.slice(0, 6).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-white/80 transition hover:bg-white/[0.05] hover:text-white"
                >
                  {post.title}
                </Link>
              ))}
            </div>
            <Link
              href="/blog"
              className="mt-6 inline-block text-sm text-white/60 underline underline-offset-4 hover:text-white"
            >
              View all articles →
            </Link>
          </div>

          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
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
          </div>
        </Container>
      </Section>
      <SiteFooter logo={logo} homePath="/" />
    </main>
  );
}
