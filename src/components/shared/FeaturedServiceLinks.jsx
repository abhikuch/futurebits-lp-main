import Link from "next/link";
import { getServiceBySlugs } from "@/content/services";

/**
 * SEO internal-linking band for vertical landing pages.
 */
export default function FeaturedServiceLinks({ title, services, viewAllHref }) {
  const links = services
    .map(({ categorySlug, serviceSlug, label }) => {
      const service = getServiceBySlugs(categorySlug, serviceSlug);
      if (!service) return null;
      return {
        label: label ?? service.title,
        href: service.path,
      };
    })
    .filter(Boolean);

  if (links.length === 0) return null;

  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-10">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">
              Popular services
            </p>
            <h2 className="mt-2 font-montserrat text-xl font-semibold text-white sm:text-2xl">
              {title}
            </h2>
          </div>
          {viewAllHref ? (
            <Link
              href={viewAllHref}
              className="text-sm text-white/70 underline underline-offset-4 transition hover:text-white"
            >
              View all services
            </Link>
          ) : null}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/[0.07] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
