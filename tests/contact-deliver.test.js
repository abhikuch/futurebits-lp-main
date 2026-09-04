import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  formatContactHtml,
  formatContactPlainText,
} from "../src/lib/contact-deliver.js";

const payload = {
  name: "Ada <script>",
  email: "ada@example.com",
  company: "Analytical",
  vertical: "ai",
  budget: "unsure",
  message: "Need a RAG assistant <b>now</b>.",
  receivedAt: "2026-09-04T00:00:00.000Z",
};

describe("contact delivery formatters", () => {
  it("includes fields in the plaintext operator email", () => {
    const text = formatContactPlainText(payload);
    assert.match(text, /ada@example.com/);
    assert.match(text, /Need a RAG assistant/);
    assert.match(text, /ai/);
  });

  it("escapes HTML in the HTML email body", () => {
    const html = formatContactHtml(payload);
    assert.equal(html.includes("<script>"), false);
    assert.match(html, /&lt;script&gt;/);
    assert.match(html, /&lt;b&gt;now&lt;\/b&gt;/);
  });
});
