import assert from "node:assert/strict";
import { describe, it, beforeEach } from "node:test";

import { consumeRateLimit, resetRateLimitStore } from "../src/lib/rate-limit.js";

describe("rate limit", () => {
  beforeEach(() => {
    resetRateLimitStore();
  });

  it("allows traffic under the limit", () => {
    const first = consumeRateLimit("ip:1", { limit: 2, windowMs: 60_000 });
    const second = consumeRateLimit("ip:1", { limit: 2, windowMs: 60_000 });
    assert.equal(first.ok, true);
    assert.equal(second.ok, true);
  });

  it("blocks the next request after the limit", () => {
    consumeRateLimit("ip:2", { limit: 1, windowMs: 60_000 });
    const blocked = consumeRateLimit("ip:2", { limit: 1, windowMs: 60_000 });
    assert.equal(blocked.ok, false);
    assert.ok(blocked.retryAfterMs > 0);
  });

  it("isolates keys", () => {
    consumeRateLimit("a", { limit: 1, windowMs: 60_000 });
    const other = consumeRateLimit("b", { limit: 1, windowMs: 60_000 });
    assert.equal(other.ok, true);
  });
});
