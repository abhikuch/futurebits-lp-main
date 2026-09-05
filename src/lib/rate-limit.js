/**
 * In-memory sliding-window limiter for serverless instances.
 * Best-effort: each isolate has its own map. Still stops casual floods.
 */

/**
 * @typedef {{ count: number, resetAt: number }} Bucket
 */

/** @type {Map<string, Bucket>} */
const buckets = new Map();

/**
 * @param {string} key
 * @param {{ limit?: number, windowMs?: number }} [options]
 * @returns {{ ok: true, remaining: number } | { ok: false, retryAfterMs: number }}
 */
export function consumeRateLimit(key, { limit = 5, windowMs = 15 * 60 * 1000 } = {}) {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || now >= existing.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1 };
  }

  if (existing.count >= limit) {
    return { ok: false, retryAfterMs: existing.resetAt - now };
  }

  existing.count += 1;
  return { ok: true, remaining: limit - existing.count };
}

/** Test helper. */
export function resetRateLimitStore() {
  buckets.clear();
}
