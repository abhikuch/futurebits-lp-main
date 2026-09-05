export const ANALYTICS_CONSENT_KEY = "fb_analytics_consent";
export const ANALYTICS_CONSENT_EVENT = "fb-analytics-consent";
export const ANALYTICS_CONSENT_OPEN_EVENT = "fb-analytics-consent-open";

/** @typedef {"granted" | "denied"} AnalyticsConsent */

/**
 * @returns {boolean}
 */
export function prefersNoTracking() {
  if (typeof navigator === "undefined") return false;
  if (navigator.globalPrivacyControl === true) return true;
  if (navigator.doNotTrack === "1" || navigator.doNotTrack === "yes") {
    return true;
  }
  return false;
}

/**
 * @returns {AnalyticsConsent | null}
 */
export function readStoredConsent() {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    if (value === "granted" || value === "denied") return value;
  } catch {
    return null;
  }
  return null;
}

/**
 * @param {AnalyticsConsent} value
 */
export function writeStoredConsent(value) {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
  } catch {
    // Ignore quota / private-mode failures.
  }
  window.dispatchEvent(
    new CustomEvent(ANALYTICS_CONSENT_EVENT, { detail: value })
  );
}

export function openConsentBanner() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(ANALYTICS_CONSENT_OPEN_EVENT));
}
