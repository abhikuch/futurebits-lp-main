"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

import { ANALYTICS } from "@/config/site";
import {
  ANALYTICS_CONSENT_EVENT,
  prefersNoTracking,
  readStoredConsent,
} from "@/lib/analytics-consent";

/**
 * Google Analytics loads only after explicit consent (or never, if DNT/GPC).
 */
export default function Analytics() {
  const id = ANALYTICS.gaMeasurementId;
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => {
      if (prefersNoTracking()) {
        setAllowed(false);
        return;
      }
      setAllowed(readStoredConsent() === "granted");
    };
    sync();
    window.addEventListener(ANALYTICS_CONSENT_EVENT, sync);
    return () => window.removeEventListener(ANALYTICS_CONSENT_EVENT, sync);
  }, []);

  if (!id || !allowed) return null;

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
          gtag('consent', 'update', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
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
