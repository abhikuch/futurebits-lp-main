import Script from "next/script";

import { ANALYTICS } from "@/config/site";

/**
 * Google Analytics gtag.js loaded with `lazyOnload` so it never blocks
 * page interactivity. Mounted once at the root layout.
 */
export default function Analytics() {
  const id = ANALYTICS.gaMeasurementId;
  if (!id) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="lazyOnload"
      />
      <Script id="ga-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
