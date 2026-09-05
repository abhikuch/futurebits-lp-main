import { notFound } from "next/navigation";

import JsonLd, { gulfPageJsonLd } from "@/components/seo/JsonLd";
import GulfGeoPage from "@/components/gulf/GulfGeoPage";
import { gulfRouteMetadata } from "@/config/site";
import {
  GULF_PAGE_KEYS,
  getGulfCountrySlugs,
  getGulfPage,
} from "@/content/gulf";
import { assertNever } from "@/lib/assert-never";

export function generateStaticParams() {
  return getGulfCountrySlugs().map((country) => ({ country }));
}

export function generateMetadata({ params }) {
  const key = params.country;
  if (!getGulfCountrySlugs().includes(key)) {
    return {};
  }
  return gulfRouteMetadata(key);
}

export default function GulfCountryPage({ params }) {
  const key = params.country;
  if (!getGulfCountrySlugs().includes(key)) {
    notFound();
  }

  switch (key) {
    case "saudi-arabia":
    case "qatar":
    case "kuwait":
    case "bahrain":
    case "oman":
      return (
        <>
          <JsonLd data={gulfPageJsonLd(key)} />
          <GulfGeoPage page={getGulfPage(key)} />
        </>
      );
    default:
      if (GULF_PAGE_KEYS.includes(key)) {
        return assertNever(key);
      }
      notFound();
  }
}
