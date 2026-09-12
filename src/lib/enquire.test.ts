import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  buildEnquireHtml,
  buildEnquireMailtoBody,
  buildEnquirePayload,
  emptyEnquireFields,
  escapeHtml,
  isAustralianPhone,
  isBasicEmail,
  isEnquireHoneypot,
  parseEnquireFields,
  validateEnquire,
} from "./enquire.ts";

const valid: typeof emptyEnquireFields = {
  ...emptyEnquireFields,
  name: "Alex Builder",
  email: "alex@example.com",
  phone: "0415 713 371",
  suburb: "Keysbrook",
  message: "New two-storey in Keysbrook, ColorBond.",
};

describe("isBasicEmail", () => {
  it("accepts a simple address", () => {
    assert.equal(isBasicEmail("alex@example.com"), true);
  });

  it("rejects missing @ or domain", () => {
    assert.equal(isBasicEmail("alex"), false);
    assert.equal(isBasicEmail("alex@"), false);
    assert.equal(isBasicEmail("alex@site"), false);
    assert.equal(isBasicEmail(""), false);
  });
});

describe("isAustralianPhone", () => {
  it("accepts 04xx mobiles with spaces or dashes", () => {
    assert.equal(isAustralianPhone("0415713371"), true);
    assert.equal(isAustralianPhone("0415 713 371"), true);
    assert.equal(isAustralianPhone("0415-713-371"), true);
  });

  it("accepts +61 and 61 national format", () => {
    assert.equal(isAustralianPhone("+61415713371"), true);
    assert.equal(isAustralianPhone("+61 415 713 371"), true);
    assert.equal(isAustralianPhone("61415713371"), true);
  });

  it("accepts 0[2378] landlines", () => {
    assert.equal(isAustralianPhone("08 9555 1234"), true);
  });

  it("rejects empty or non-AU numbers", () => {
    assert.equal(isAustralianPhone(""), false);
    assert.equal(isAustralianPhone("123"), false);
    assert.equal(isAustralianPhone("+1 415 555 1212"), false);
    assert.equal(isAustralianPhone("415713371"), false);
  });
});

describe("validateEnquire", () => {
  it("requires email and phone with existing field rules", () => {
    const errors = validateEnquire(emptyEnquireFields);
    assert.equal(errors.email, "Your email is required.");
    assert.equal(errors.phone, "Your phone is required.");
    assert.equal(errors.name, "Your name is required.");
    assert.equal(errors.suburb, "Choose a suburb.");
  });

  it("flags format problems without dropping required copy tone", () => {
    const errors = validateEnquire({
      ...valid,
      email: "not-an-email",
      phone: "1234",
    });
    assert.equal(errors.email, "That email doesn’t look right.");
    assert.equal(errors.phone, "Use an Australian number — 04xx or +61.");
  });

  it("passes a complete new-build enquiry", () => {
    assert.deepEqual(validateEnquire(valid), {});
  });
});

describe("enquire payload", () => {
  it("includes email and phone in FormSubmit JSON", () => {
    const payload = buildEnquirePayload(valid);
    assert.equal(payload.email, "alex@example.com");
    assert.equal(payload.phone, "0415 713 371");
    assert.equal(payload._replyto, "alex@example.com");
    assert.equal(payload._subject, "Dhu Roofing enquiry — Keysbrook");
  });

  it("includes email and phone in the mailto body", () => {
    const body = buildEnquireMailtoBody(buildEnquirePayload(valid));
    assert.match(body, /Email: alex@example.com/);
    assert.match(body, /Phone: 0415 713 371/);
    assert.match(body, /New two-storey in Keysbrook/);
  });

  it("escapes HTML in the Resend body", () => {
    const html = buildEnquireHtml(
      buildEnquirePayload({
        ...valid,
        name: 'Alex <script>alert("x")</script>',
        message: "Line one\nLine two & more",
      }),
    );
    assert.match(html, /Alex &lt;script&gt;alert\(&quot;x&quot;\)&lt;\/script&gt;/);
    assert.match(html, /Line one<br \/>Line two &amp; more/);
    assert.equal(escapeHtml("<a>"), "&lt;a&gt;");
  });
});

describe("parseEnquireFields", () => {
  it("reads known strings and defaults role", () => {
    const fields = parseEnquireFields({
      name: "Alex",
      email: "alex@example.com",
      extra: 1,
    });
    assert.equal(fields.name, "Alex");
    assert.equal(fields.email, "alex@example.com");
    assert.equal(fields.role, "Builder");
    assert.equal(fields.company, "");
  });

  it("treats junk bodies as empty fields", () => {
    assert.equal(parseEnquireFields(null).name, "");
    assert.equal(parseEnquireFields("nope").email, "");
  });
});

describe("isEnquireHoneypot", () => {
  it("flags a filled company field", () => {
    assert.equal(isEnquireHoneypot({ ...valid, company: "Acme" }), true);
    assert.equal(isEnquireHoneypot({ ...valid, company: "  " }), false);
  });
});
