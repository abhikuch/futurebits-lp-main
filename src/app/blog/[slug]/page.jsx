import Link from "next/link";
import { notFound } from "next/navigation";

import JsonLd, {
  articleJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SiteFooter from "@/components/shared/SiteFooter";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import logo from "@/assets/logo.svg";
import { SITE_URL } from "@/config/site";
import { BLOG_POSTS, getBlogPost } from "@/content/blog";
import { getServiceBySlugs } from "@/content/services";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  const title = `${post.title} | Futurebits`;
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description: post.description,
      publishedTime: post.publishedAt,
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: post.title, url: `${SITE_URL}${path}` },
  ];
  const breadcrumbNav = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: path },
  ];

  const relatedServices = (post.serviceLinks ?? [])
    .map(({ categorySlug, serviceSlug, label }) => {
      const service = getServiceBySlugs(categorySlug, serviceSlug);
      if (!service) return null;
      return { label: label ?? service.title, href: service.path };
    })
    .filter(Boolean);

  return (
    <main id="main-content" className="min-h-screen bg-[#060618] text-white">
      <JsonLd
        data={[
          webPageJsonLd({
            path,
            name: post.title,
            description: post.description,
            breadcrumbItems,
            mainEntityId: `${SITE_URL}${path}#article`,
          }),
          breadcrumbJsonLd(breadcrumbItems, path),
          articleJsonLd(post),
        ]}
      />

      <Section className="pt-8 pb-16">
        <Container className="max-w-3xl">
          <Breadcrumbs items={breadcrumbNav} />
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">
            {post.category} · {post.readMinutes} min read ·{" "}
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <Heading as="h1" className="mt-4 fb-hero-title">
            {post.title}
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            {post.description}
          </p>

          <div className="mt-12 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-montserrat text-2xl font-semibold text-white">
                  {section.heading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/70">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          {relatedServices.length > 0 ? (
            <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="font-montserrat text-lg font-semibold">
                Related services
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {relatedServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:bg-white/[0.06] hover:text-white"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </Section>
      <SiteFooter logo={logo} />
    </main>
  );
}
