"use server";

import { COMPANY } from "@/config/site";

const VERTICALS = new Set(["ai", "markets", "design", "other"]);
const BUDGETS = new Set(["under_10k", "10k_25k", "25k_50k", "50k_plus", "unsure"]);

function sanitize(value, max = 1000) {
  return String(value ?? "").trim().slice(0, max);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * Server Action consumed by the /contact form.
 *
 * Returns `{ ok, errors?, message? }` so the client can render inline
 * validation without throwing or exposing internals.
 *
 * Persistence is intentionally a server-side log for now. When Resend +
 * Slack + CRM are wired in, replace the `deliver()` call below; the
 * Action signature stays stable.
 */
export async function submitContact(_prevState, formData) {
  const honeypot = sanitize(formData.get("website"), 200);
  if (honeypot) {
    // Silent success: bots get a positive response, humans see the same.
    return { ok: true };
  }

  const name = sanitize(formData.get("name"), 120);
  const email = sanitize(formData.get("email"), 200).toLowerCase();
  const company = sanitize(formData.get("company"), 200);
  const verticalRaw = sanitize(formData.get("vertical"), 40);
  const budgetRaw = sanitize(formData.get("budget"), 40);
  const message = sanitize(formData.get("message"), 4000);

  const errors = {};
  if (name.length < 2) errors.name = "Please share your name.";
  if (!isEmail(email)) errors.email = "Use a valid email so we can reply.";
  if (message.length < 20) errors.message = "Tell us a bit more — at least 20 characters.";
  const vertical = VERTICALS.has(verticalRaw) ? verticalRaw : "other";
  const budget = BUDGETS.has(budgetRaw) ? budgetRaw : "unsure";

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  await deliver({
    name,
    email,
    company,
    vertical,
    budget,
    message,
    receivedAt: new Date().toISOString(),
  });

  return {
    ok: true,
    message: `Thanks ${name.split(" ")[0]} — we'll reply from ${COMPANY.email} within four working hours.`,
  };
}

async function deliver(payload) {
  // TODO(integration): swap to Resend transactional + Slack webhook.
  // Console output is still picked up by Vercel function logs.
  // eslint-disable-next-line no-console
  console.info("[contact] new submission", payload);
}
