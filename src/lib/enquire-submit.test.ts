import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { emptyEnquireFields } from "./enquire.ts";
import { submitEnquireLead } from "./enquire-submit.ts";

const valid = {
  ...emptyEnquireFields,
  name: "Alex Builder",
  email: "alex@example.com",
  phone: "0415 713 371",
  suburb: "Keysbrook",
  message: "New two-storey in Keysbrook, ColorBond.",
};

const formSubmitUrl = "https://formsubmit.co/ajax/sbt.family.trust@gmail.com";

function jsonResponse(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

describe("submitEnquireLead", () => {
  it("stops at the API and does not call FormSubmit", async () => {
    const urls: string[] = [];
    const result = await submitEnquireLead(valid, {
      formSubmitUrl,
      fetch: async (input) => {
        urls.push(String(input));
        return jsonResponse(200, { ok: true });
      },
    });
    assert.deepEqual(result, { outcome: "sent", via: "api" });
    assert.deepEqual(urls, ["/api/enquire"]);
  });

  it("falls back to FormSubmit when the API is unavailable", async () => {
    const urls: string[] = [];
    const result = await submitEnquireLead(valid, {
      formSubmitUrl,
      fetch: async (input) => {
        urls.push(String(input));
        if (String(input) === "/api/enquire") {
          return jsonResponse(503, { ok: false, fallback: true });
        }
        return jsonResponse(200, { success: true });
      },
    });
    assert.deepEqual(result, { outcome: "sent", via: "formsubmit" });
    assert.deepEqual(urls, ["/api/enquire", formSubmitUrl]);
  });

  it("falls back to mailto when API and FormSubmit both fail", async () => {
    const result = await submitEnquireLead(valid, {
      formSubmitUrl,
      fetch: async () => jsonResponse(500, { ok: false }),
    });
    assert.deepEqual(result, { outcome: "mailto" });
  });

  it("does not hit the network for a honeypot", async () => {
    let called = false;
    const result = await submitEnquireLead(
      { ...valid, company: "spam" },
      {
        formSubmitUrl,
        fetch: async () => {
          called = true;
          return jsonResponse(200, { ok: true });
        },
      },
    );
    assert.deepEqual(result, { outcome: "sent", via: "honeypot" });
    assert.equal(called, false);
  });

  it("surfaces API validation without FormSubmit", async () => {
    const urls: string[] = [];
    const result = await submitEnquireLead(valid, {
      formSubmitUrl,
      fetch: async (input) => {
        urls.push(String(input));
        return jsonResponse(400, {
          ok: false,
          errors: { email: "That email doesn’t look right." },
        });
      },
    });
    assert.equal(result.outcome, "invalid");
    if (result.outcome === "invalid") {
      assert.equal(result.errors.email, "That email doesn’t look right.");
    }
    assert.deepEqual(urls, ["/api/enquire"]);
  });

  it("rejects incomplete client fields before any POST", async () => {
    let called = false;
    const result = await submitEnquireLead(emptyEnquireFields, {
      formSubmitUrl,
      fetch: async () => {
        called = true;
        return jsonResponse(200, { ok: true });
      },
    });
    assert.equal(result.outcome, "invalid");
    assert.equal(called, false);
  });
});
