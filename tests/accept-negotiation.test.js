import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  parseAccept,
  preferredType,
} from "../src/lib/accept-negotiation.js";

describe("accept negotiation", () => {
  it("prefers markdown when listed first", () => {
    assert.equal(
      preferredType("text/markdown, text/html, */*"),
      "text/markdown"
    );
  });

  it("prefers html when markdown is explicitly rejected", () => {
    assert.equal(
      preferredType("text/html, text/markdown;q=0"),
      "text/html"
    );
  });

  it("returns null when all produced types are rejected", () => {
    assert.equal(
      preferredType("text/html;q=0, text/markdown;q=0"),
      null
    );
  });

  it("parses q values within bounds", () => {
    const [entry] = parseAccept("text/markdown;q=1.5");
    assert.equal(entry.q, 1);
  });
});
