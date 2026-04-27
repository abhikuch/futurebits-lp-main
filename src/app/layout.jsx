import { Montserrat, Poppins } from "next/font/google";

import Analytics from "@/components/analytics/Analytics";
import JsonLd, {
  organizationJsonLd,
  websiteJsonLd,
} from "@/components/seo/JsonLd";
import {
  ASSETS,
  buildRouteMetadata,
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
  ...buildRouteMetadata("ai"),
  metadataBase: new URL(SITE_URL),
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
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
