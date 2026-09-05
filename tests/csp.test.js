import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { CONTENT_SECURITY_POLICY } from "../src/lib/csp.js";

describe("content security policy", () => {
  it("locks down frames, objects, and form targets", () => {
    assert.match(CONTENT_SECURITY_POLICY, /frame-ancestors 'self'/);
    assert.match(CONTENT_SECURITY_POLICY, /object-src 'none'/);
    assert.match(CONTENT_SECURITY_POLICY, /form-action 'self'/);
    assert.match(CONTENT_SECURITY_POLICY, /frame-src 'none'/);
  });

  it("allows first-party plus consented Google Analytics hosts", () => {
    assert.match(CONTENT_SECURITY_POLICY, /script-src 'self' 'unsafe-inline' https:\/\/www\.googletagmanager\.com/);
    assert.match(CONTENT_SECURITY_POLICY, /connect-src 'self'.*www\.google-analytics\.com/);
  });
});
