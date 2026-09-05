"use server";

import { headers } from "next/headers";

import { COMPANY } from "@/config/site";
import { deliverContact } from "@/lib/contact-deliver";
import { CONTACT_VERTICALS, parseContactForm } from "@/lib/contact-validate";
import { consumeRateLimit } from "@/lib/rate-limit";

export { CONTACT_VERTICALS };

function clientIp() {
  const requestHeaders = headers();
  const forwarded = requestHeaders.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return requestHeaders.get("x-real-ip") || "unknown";
}

/**
 * Server Action consumed by the /contact form.
 *
 * Returns `{ ok, errors?, message? }` so the client can render inline
 * validation without throwing or exposing internals.
 */
export async function submitContact(_prevState, formData) {
  const parsed = parseContactForm(formData);
  if ("honeypot" in parsed && parsed.honeypot) {
    return { ok: true };
  }
  if ("errors" in parsed) {
    return { ok: false, errors: parsed.errors };
  }

  const { payload } = parsed;
  const ipLimit = consumeRateLimit(`contact:ip:${clientIp()}`, {
    limit: 5,
    windowMs: 15 * 60 * 1000,
  });
  const emailLimit = consumeRateLimit(`contact:email:${payload.email}`, {
    limit: 3,
    windowMs: 60 * 60 * 1000,
  });

  if (!ipLimit.ok || !emailLimit.ok) {
    return {
      ok: false,
      message:
        "Too many messages from this connection. Please wait and try again, or email us directly.",
    };
  }

  const delivery = await deliverContact(payload);
  if (!delivery.ok) {
    return {
      ok: false,
      message: `We could not send that just now. Email ${COMPANY.email} and we will reply within one business day.`,
    };
  }

  return {
    ok: true,
    message: `Thanks ${payload.name.split(" ")[0]}. We'll reply from ${COMPANY.email} within one business day.`,
  };
}
