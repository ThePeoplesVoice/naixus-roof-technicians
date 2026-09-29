import assert from "node:assert/strict";
import { test } from "node:test";
import { injectGrokPwaHead, readPageShareMeta } from "./grok-pwa-shared.mjs";

const SITE = { description: "Site-wide fallback" };

test("keeps the route's own og:url and og:description through the strip", () => {
  const html =
    "<html><head><title>Enquire — Roofs</title>" +
    '<meta property="og:title" content="Enquire — Roofs"/>' +
    '<meta property="og:description" content="Enquire about a new roof &amp; more."/>' +
    '<meta property="og:url" content="https://example.com.au/enquire"/>' +
    "</head></html>";
  const out = injectGrokPwaHead(html, { site: SITE });
  assert.match(out, /property="og:url" content="https:\/\/example\.com\.au\/enquire"/);
  assert.match(out, /property="og:description" content="Enquire about a new roof &amp; more\."/);
  assert.doesNotMatch(out, /Site-wide fallback/);
  assert.match(out, /property="og:title" content="Enquire — Roofs"/);
  assert.equal(out.split('property="og:url"').length - 1, 1);
  assert.equal(out.split('property="og:description"').length - 1, 1);
  assert.equal(injectGrokPwaHead(out, { site: SITE }), out);
});

test("falls back to site.json description when the page has none", () => {
  const out = injectGrokPwaHead("<html><head><title>x</title></head></html>", { site: SITE });
  assert.match(out, /property="og:description" content="Site-wide fallback"/);
  assert.doesNotMatch(out, /property="og:url"/);
});

test("ignores a non-absolute page og:url", () => {
  const out = injectGrokPwaHead('<html><head><meta property="og:url" content="/enquire"></head></html>');
  assert.doesNotMatch(out, /property="og:url"/);
});

test("readPageShareMeta reads single- or double-quoted content", () => {
  assert.equal(readPageShareMeta(`<meta property='og:url' content='https://a.au/'>`, "og:url"), "https://a.au/");
  assert.equal(readPageShareMeta('<meta name="description" content="d">', "og:url"), "");
});

test("decodes the page's entities before re-escaping (no double-escaped apostrophe)", () => {
  const html =
    "<html><head><title>Enquire — Aaron&#x27;s Roof Plumbing</title>" +
    '<meta property="og:description" content="Aaron&#x27;s &amp; co &#39;quoted&#39; &quot;roofs&quot;"/>' +
    '<meta property="og:url" content="https://example.com.au/enquire"/>' +
    "</head></html>";
  const out = injectGrokPwaHead(html, {});
  assert.doesNotMatch(out, /&amp;#/);
  assert.match(out, /property="og:title" content="Enquire — Aaron&#39;s Roof Plumbing"/);
  assert.match(out, /property="og:description" content="Aaron&#39;s &amp; co &#39;quoted&#39; &quot;roofs&quot;"/);
  assert.equal(injectGrokPwaHead(out, {}), out);
});

test("decoding is one layer only: literal &amp;#x27; text stays literal", () => {
  const out = injectGrokPwaHead(
    '<html><head><title>x</title><meta property="og:description" content="code: &amp;#x27;"/></head></html>',
    {},
  );
  assert.match(out, /property="og:description" content="code: &amp;#x27;"/);
});
