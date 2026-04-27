import { ASSETS, COMPANY, SITE_URL } from "@/config/site";

export const metadata = {
  title: "Software, AI, Design and Integration Services | Futurebits",
  description:
    "Explore Futurebits services across software development, AI automation, product design, integrations, and startup tech partnership.",
  keywords: [
    "Software Development Services",
    "AI Automation Services",
    "Product Design Services",
    "SaaS Development",
    "Startup Tech Partner",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services`,
    siteName: COMPANY.name,
    title: "Software, AI, Design and Integration Services | Futurebits",
    description:
      "A complete service hub for building SaaS, AI systems, product design, integrations, and startup launches.",
    images: [
      {
        url: ASSETS.ogAi,
        width: 1200,
        height: 630,
        alt: "Futurebits Services Hub",
      },
    ],
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
