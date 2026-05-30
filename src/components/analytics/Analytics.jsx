import Script from "next/script";

import { ANALYTICS } from "@/config/site";

/**
 * Google Analytics gtag.js loaded with `lazyOnload` so it never blocks
 * page interactivity. Tracks Cal.com booking link clicks site-wide.
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

          document.addEventListener('click', function(e) {
            var link = e.target.closest('a[href*="cal.com"]');
            if (!link) return;
            gtag('event', 'cal_booking_click', {
              link_url: link.href,
              page_path: window.location.pathname,
              link_text: (link.textContent || '').trim().slice(0, 100)
            });
          });
        `}
      </Script>
    </>
  );
}
