import {
  buildEnquireHtml,
  buildEnquireMailtoBody,
  buildEnquirePayload,
  isEnquireHoneypot,
  parseEnquireFields,
  validateEnquire,
} from "./enquire.ts";

export const ENQUIRE_FROM = "Dhu Roofing <onboarding@resend.dev>";
export const ENQUIRE_TO_DEFAULT = "sbt.family.trust@gmail.com";

export type EnquireMailer = (message: {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) => Promise<{ error: { message: string } | null }>;

export type EnquireApiJson =
  | { ok: true }
  | { ok: false; errors: ReturnType<typeof validateEnquire> }
  | { ok: false; fallback: true };

export type EnquireApiResult = {
  status: number;
  json: EnquireApiJson;
};

/**
 * Shared POST /api/enquire handler. Missing RESEND_API_KEY or a send failure
 * returns `{ fallback: true }` so the form can use FormSubmit/mailto.
 * Honeypot (`company`) is accepted as success and never emailed.
 */
export async function handleEnquirePost(
  body: unknown,
  options: { apiKey: string | undefined; to?: string; send: EnquireMailer },
): Promise<EnquireApiResult> {
  const fields = parseEnquireFields(body);
  if (isEnquireHoneypot(fields)) {
    return { status: 200, json: { ok: true } };
  }

  const errors = validateEnquire(fields);
  if (Object.keys(errors).length) {
    return { status: 400, json: { ok: false, errors } };
  }

  const apiKey = options.apiKey?.trim();
  if (!apiKey) {
    return { status: 503, json: { ok: false, fallback: true } };
  }

  const payload = buildEnquirePayload(fields);
  const to = options.to?.trim() || ENQUIRE_TO_DEFAULT;

  try {
    const { error } = await options.send({
      from: ENQUIRE_FROM,
      to,
      replyTo: payload.email,
      subject: payload._subject,
      text: buildEnquireMailtoBody(payload),
      html: buildEnquireHtml(payload),
    });
    if (error) {
      return { status: 502, json: { ok: false, fallback: true } };
    }
    return { status: 200, json: { ok: true } };
  } catch {
    return { status: 502, json: { ok: false, fallback: true } };
  }
}
