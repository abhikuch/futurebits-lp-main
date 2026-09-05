import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  CONTACT_VERTICALS,
  isEmail,
  parseContactForm,
  sanitize,
} from "../src/lib/contact-validate.js";

function form(entries) {
  const data = new FormData();
  for (const [key, value] of Object.entries(entries)) {
    data.set(key, value);
  }
  return data;
}

describe("contact validation", () => {
  it("accepts the build vertical", () => {
    assert.equal(CONTACT_VERTICALS.has("build"), true);
  });

  it("sanitizes and rejects short messages", () => {
    assert.equal(sanitize("  hello  ", 4), "hell");
    assert.equal(isEmail("not-an-email"), false);
  });

  it("treats a filled honeypot as a bot", () => {
    const result = parseContactForm(
      form({
        website: "https://spam.example",
        name: "Ada Lovelace",
        email: "ada@example.com",
        message: "We need a trading desk dashboard this quarter.",
      })
    );
    assert.deepEqual(result, { honeypot: true });
  });

  it("returns a sanitized payload for a valid inquiry", () => {
    const result = parseContactForm(
      form({
        name: " Ada Lovelace ",
        email: "ADA@Example.com",
        company: "Analytical Engines",
        vertical: "build",
        budget: "10k_25k",
        message: "We need a trading desk dashboard this quarter.",
      })
    );
    assert.equal("payload" in result, true);
    assert.equal(result.payload.email, "ada@example.com");
    assert.equal(result.payload.vertical, "build");
    assert.equal(result.payload.name, "Ada Lovelace");
  });
});
