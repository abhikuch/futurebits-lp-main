import Link from "next/link";
import { getServiceBySlugs } from "@/content/services";

export default function FeaturedServiceLinks({
  title,
  services,
  viewAllHref,
  viewAllLabel = "See this category",
}) {
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
              {viewAllLabel}
            </Link>
          ) : null}
        </div>
        <div className="mt-6 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-white/10 py-4 text-sm text-white/75 transition hover:text-white sm:pr-6"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
