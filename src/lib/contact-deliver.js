import { Resend } from "resend";

import { COMPANY } from "@/config/site";

/**
 * @typedef {{
 *   name: string,
 *   email: string,
 *   company: string,
 *   vertical: string,
 *   budget: string,
 *   message: string,
 *   receivedAt: string,
 * }} ContactPayload
 */

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/**
 * @param {ContactPayload} payload
 */
export function formatContactPlainText(payload) {
  return [
    `New Futurebits inquiry`,
    `Received: ${payload.receivedAt}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "(not given)"}`,
    `Vertical: ${payload.vertical}`,
    `Budget: ${payload.budget}`,
    ``,
    payload.message,
  ].join("\n");
}

/**
 * @param {ContactPayload} payload
 */
export function formatContactHtml(payload) {
  const rows = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Company", payload.company || "(not given)"],
    ["Vertical", payload.vertical],
    ["Budget", payload.budget],
    ["Received", payload.receivedAt],
  ];

  const table = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:4px 12px 4px 0;color:#555">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`
    )
    .join("");

  return `<!doctype html>
<html><body style="font-family:sans-serif;line-height:1.5;color:#111">
  <h1 style="font-size:18px">New Futurebits inquiry</h1>
  <table>${table}</table>
  <p style="white-space:pre-wrap;margin-top:16px">${escapeHtml(payload.message)}</p>
</body></html>`;
}

function deliveryConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY || process.env.SLACK_CONTACT_WEBHOOK_URL
  );
}

/**
 * @param {ContactPayload} payload
 */
async function sendResend(payload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { skipped: true };

  const from =
    process.env.CONTACT_FROM_EMAIL || "Futurebits <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO_EMAIL || COMPANY.email;
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send(
    {
      from,
      to: [to],
      replyTo: payload.email,
      subject: `Inquiry: ${payload.name} (${payload.vertical})`,
      text: formatContactPlainText(payload),
      html: formatContactHtml(payload),
    },
    { idempotencyKey: `contact/${payload.email}/${payload.receivedAt}` }
  );

  if (error) {
    return { ok: false };
  }
  return { ok: true };
}

/**
 * @param {ContactPayload} payload
 */
async function sendSlack(payload) {
  const webhook = process.env.SLACK_CONTACT_WEBHOOK_URL;
  if (!webhook) return { skipped: true };

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: formatContactPlainText(payload) }),
  });

  if (!response.ok) {
    return { ok: false };
  }
  return { ok: true };
}

/**
 * Deliver a contact inquiry. Never logs PII.
 * Succeeds if at least one configured channel accepts the message.
 *
 * @param {ContactPayload} payload
 * @returns {Promise<{ ok: boolean, reason?: string }>}
 */
export async function deliverContact(payload) {
  if (!deliveryConfigured()) {
    return { ok: false, reason: "not_configured" };
  }

  const [emailResult, slackResult] = await Promise.all([
    sendResend(payload),
    sendSlack(payload),
  ]);

  const delivered = emailResult.ok === true || slackResult.ok === true;
  if (!delivered) {
    return { ok: false, reason: "delivery_failed" };
  }
  return { ok: true };
}
