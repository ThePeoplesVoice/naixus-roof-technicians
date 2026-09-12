import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { ENQUIRE_FROM, ENQUIRE_TO_DEFAULT, handleEnquirePost } from "./enquire-delivery.ts";
import { emptyEnquireFields } from "./enquire.ts";

const valid = {
  ...emptyEnquireFields,
  name: "Alex Builder",
  email: "alex@example.com",
  phone: "0415 713 371",
  suburb: "Keysbrook",
  message: "New two-storey in Keysbrook, ColorBond.",
};

describe("handleEnquirePost", () => {
  it("sends via the mailer and returns JSON success", async () => {
    const sent: unknown[] = [];
    const result = await handleEnquirePost(valid, {
      apiKey: "re_test",
      send: async (message) => {
        sent.push(message);
        return { error: null };
      },
    });
    assert.deepEqual(result, { status: 200, json: { ok: true } });
    assert.equal(sent.length, 1);
    const message = sent[0] as {
      from: string;
      to: string;
      replyTo: string;
      subject: string;
      text: string;
    };
    assert.equal(message.from, ENQUIRE_FROM);
    assert.equal(message.to, ENQUIRE_TO_DEFAULT);
    assert.equal(message.replyTo, "alex@example.com");
    assert.equal(message.subject, "Dhu Roofing enquiry — Keysbrook");
    assert.match(message.text, /Phone: 0415 713 371/);
    assert.match(ENQUIRE_FROM, /onboarding@resend\.dev/);
  });

  it("uses ENQUIRE_TO when provided", async () => {
    let to = "";
    await handleEnquirePost(valid, {
      apiKey: "re_test",
      to: "ops@example.com",
      send: async (message) => {
        to = message.to;
        return { error: null };
      },
    });
    assert.equal(to, "ops@example.com");
  });

  it("ignores honeypot spam without sending", async () => {
    let called = false;
    const result = await handleEnquirePost(
      { ...valid, company: "bot" },
      {
        apiKey: "re_test",
        send: async () => {
          called = true;
          return { error: null };
        },
      },
    );
    assert.deepEqual(result, { status: 200, json: { ok: true } });
    assert.equal(called, false);
  });

  it("validates the payload server-side", async () => {
    let called = false;
    const result = await handleEnquirePost(
      { name: "" },
      {
        apiKey: "re_test",
        send: async () => {
          called = true;
          return { error: null };
        },
      },
    );
    assert.equal(result.status, 400);
    assert.equal(result.json.ok, false);
    if (!result.json.ok && "errors" in result.json) {
      assert.equal(result.json.errors.name, "Your name is required.");
      assert.equal(result.json.errors.email, "Your email is required.");
    }
    assert.equal(called, false);
  });

  it("signals fallback when RESEND_API_KEY is missing", async () => {
    let called = false;
    const result = await handleEnquirePost(valid, {
      apiKey: undefined,
      send: async () => {
        called = true;
        return { error: null };
      },
    });
    assert.deepEqual(result, { status: 503, json: { ok: false, fallback: true } });
    assert.equal(called, false);
  });

  it("signals fallback when Resend returns an error", async () => {
    const result = await handleEnquirePost(valid, {
      apiKey: "re_test",
      send: async () => ({ error: { message: "rate limited" } }),
    });
    assert.deepEqual(result, { status: 502, json: { ok: false, fallback: true } });
  });

  it("signals fallback when the mailer throws", async () => {
    const result = await handleEnquirePost(valid, {
      apiKey: "re_test",
      send: async () => {
        throw new Error("network");
      },
    });
    assert.deepEqual(result, { status: 502, json: { ok: false, fallback: true } });
  });
});
