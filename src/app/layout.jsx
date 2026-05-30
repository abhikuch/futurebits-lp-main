import { Montserrat, Poppins } from "next/font/google";

import Analytics from "@/components/analytics/Analytics";
import JsonLd, {
  organizationJsonLd,
  siteNavigationJsonLd,
  websiteJsonLd,
} from "@/components/seo/JsonLd";
import {
  ASSETS,
  DEFAULT_OG_IMAGE,
  COMPANY,
  SOCIAL,
  SITE_URL,
} from "@/config/site";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
  preload: false,
});

export const metadata = {
  title: {
    default: "Futurebits | Design, AI, and Automation",
    template: "%s",
  },
  description:
    "Futurebits is a senior product pod across AI systems, trading infrastructure, and product design with frontend delivery.",
  keywords: [
    "AI automation",
    "product design and development",
    "trading infrastructure",
    "software development",
    "Futurebits",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: COMPANY.name,
    title: "Futurebits | Design, AI, and Automation",
    description:
      "Futurebits is a senior product pod across AI systems, trading infrastructure, and product design with frontend delivery.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Futurebits",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SOCIAL.twitterHandle,
    creator: SOCIAL.twitterHandle,
    title: "Futurebits | Design, AI, and Automation",
    description:
      "Futurebits is a senior product pod across AI systems, trading infrastructure, and product design with frontend delivery.",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: ASSETS.favicon,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#060618",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="dns-prefetch" href="https://cal.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="antialiased font-poppins select-none">
        <a className="sr-only-focusable" href="#main-content">
          Skip to content
        </a>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd(), siteNavigationJsonLd()]} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
