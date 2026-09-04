export const CONTACT_VERTICALS = new Set([
  "ai",
  "markets",
  "design",
  "build",
  "other",
]);

export const CONTACT_BUDGETS = new Set([
  "under_10k",
  "10k_25k",
  "25k_50k",
  "50k_plus",
  "unsure",
]);

/**
 * @param {unknown} value
 * @param {number} [max]
 */
export function sanitize(value, max = 1000) {
  return String(value ?? "").trim().slice(0, max);
}

/**
 * @param {string} value
 */
export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * @param {FormData} formData
 * @returns {{ honeypot: boolean } | { errors: Record<string, string> } | { payload: {
 *   name: string,
 *   email: string,
 *   company: string,
 *   vertical: string,
 *   budget: string,
 *   message: string,
 *   receivedAt: string,
 * } }}
 */
export function parseContactForm(formData) {
  const honeypot = sanitize(formData.get("website"), 200);
  if (honeypot) {
    return { honeypot: true };
  }

  const name = sanitize(formData.get("name"), 120);
  const email = sanitize(formData.get("email"), 200).toLowerCase();
  const company = sanitize(formData.get("company"), 200);
  const verticalRaw = sanitize(formData.get("vertical"), 40);
  const budgetRaw = sanitize(formData.get("budget"), 40);
  const message = sanitize(formData.get("message"), 4000);

  /** @type {Record<string, string>} */
  const errors = {};
  if (name.length < 2) errors.name = "Please share your name.";
  if (!isEmail(email)) errors.email = "Use a valid email so we can reply.";
  if (message.length < 20) {
    errors.message = "Tell us a bit more. At least 20 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return {
    payload: {
      name,
      email,
      company,
      vertical: CONTACT_VERTICALS.has(verticalRaw) ? verticalRaw : "other",
      budget: CONTACT_BUDGETS.has(budgetRaw) ? budgetRaw : "unsure",
      message,
      receivedAt: new Date().toISOString(),
    },
  };
}
