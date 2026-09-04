"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ANALYTICS_CONSENT_OPEN_EVENT,
  prefersNoTracking,
  readStoredConsent,
  writeStoredConsent,
} from "@/lib/analytics-consent";

/**
 * GDPR/PDPL consent for Google Analytics. Default is no tracking.
 * GPC / DNT is treated as a deny.
 */
export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (prefersNoTracking()) {
      if (stored !== "denied") writeStoredConsent("denied");
      setVisible(false);
      return;
    }
    if (!stored) setVisible(true);

    const onOpen = () => setVisible(true);
    window.addEventListener(ANALYTICS_CONSENT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(ANALYTICS_CONSENT_OPEN_EVENT, onOpen);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-copy"
      className="fixed bottom-4 left-4 right-4 z-[80] mx-auto max-w-3xl rounded-2xl border border-white/15 bg-[#0b1020]/95 p-5 text-white shadow-[0_16px_50px_rgba(0,0,0,0.45)] backdrop-blur-md sm:bottom-6 sm:p-6"
    >
      <h2 id="cookie-consent-title" className="font-montserrat text-base font-semibold">
        Analytics cookies
      </h2>
      <p id="cookie-consent-copy" className="mt-2 text-sm leading-relaxed text-white/70">
        We use Google Analytics only if you accept. It is off by default. Cal.com
        bookings run on their site under their privacy policy.{" "}
        <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-white">
          Privacy policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          className="inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#060618] transition hover:bg-white/90"
          onClick={() => {
            writeStoredConsent("granted");
            setVisible(false);
          }}
        >
          Accept analytics
        </button>
        <button
          type="button"
          className="inline-flex h-10 items-center justify-center rounded-full border border-white/25 px-5 text-sm font-medium text-white transition hover:bg-white/10"
          onClick={() => {
            writeStoredConsent("denied");
            setVisible(false);
          }}
        >
          Reject
        </button>
      </div>
    </div>
  );
}
