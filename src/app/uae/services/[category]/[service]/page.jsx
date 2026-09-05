import { notFound } from "next/navigation";

import UaeServiceGeoPage from "@/components/uae/UaeServiceGeoPage";
import { ASSETS, COMPANY, SITE_URL, SOCIAL } from "@/config/site";
import { getUaeServiceLandingBySlugs } from "@/content/uae-service-landings";
import { SERVICES } from "@/content/services";

const CATEGORY_OG_IMAGES = {
  "ai-automation": ASSETS.ogAi,
  design: ASSETS.ogDesign,
  "markets-trading": ASSETS.ogMarkets,
};

export function generateStaticParams() {
  return SERVICES.map((item) => ({
    category: item.categorySlug,
    service: item.slug,
  }));
}

export function generateMetadata({ params }) {
  const landing = getUaeServiceLandingBySlugs(params.category, params.service);
  if (!landing) return {};
  const ogImage = CATEGORY_OG_IMAGES[params.category] ?? ASSETS.ogAi;
  const url = `${SITE_URL}${landing.path}`;
  return {
    title: landing.metaTitle,
    description: landing.metaDescription,
    keywords: landing.keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        "en-AE": url,
        en: `${SITE_URL}${landing.catalogPath}`,
        "x-default": url,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: COMPANY.name,
      title: landing.metaTitle,
      description: landing.metaDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: landing.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: SOCIAL.twitterHandle,
      creator: SOCIAL.twitterHandle,
      title: landing.metaTitle,
      description: landing.metaDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function UaeServiceGeoRoute({ params }) {
  const landing = getUaeServiceLandingBySlugs(params.category, params.service);
  if (!landing) {
    notFound();
  }
  return <UaeServiceGeoPage landing={landing} />;
}
