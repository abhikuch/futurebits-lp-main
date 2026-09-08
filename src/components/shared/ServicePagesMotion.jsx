import Link from "next/link";

import Heading from "@/components/ui/heading";

export function ServiceCategoryPopular({ services, shortTitle }) {
  if (!services.length) return null;

  return (
    <div>
      <Heading as="h2" className="fb-h3">
        Selected {shortTitle.toLowerCase()} services
      </Heading>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-y border-white/10 py-5">
        {services.map((serviceItem) => (
          <Link
            key={serviceItem.slug}
            href={serviceItem.path}
            className="text-sm text-white/75 underline-offset-4 transition hover:text-white hover:underline"
          >
            {serviceItem.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ServiceCategoryGrid({ services, theme }) {
  return (
    <div>
      <Heading as="h2" className="fb-h2">
        Services in this track
      </Heading>
      <div className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((serviceItem) => (
          <Link
            key={serviceItem.slug}
            href={serviceItem.path}
            className={`${theme.serviceCardClass} flex h-full flex-col`}
          >
            <h3 className="fb-h3">{serviceItem.title}</h3>
            <p className="mt-3 text-sm text-white/70">
              {serviceItem.shortDescription}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ServiceDetailRelated({ related }) {
  if (!related.length) return null;

  return (
    <div>
      <Heading as="h2" className="fb-h3">
        Related services
      </Heading>
      <div className="mt-6 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
          <Link
            key={item.slug}
            href={item.path}
            className="block h-full border-b border-white/10 py-5 pr-6 transition hover:text-white"
          >
            <h3 className="fb-h3 text-lg">{item.title}</h3>
            <p className="mt-2 text-sm text-white/70">{item.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
