import {
  buildEnquirePayload,
  isEnquireHoneypot,
  validateEnquire,
  type EnquireFields,
} from "./enquire.ts";

export type EnquireSubmitResult =
  | { outcome: "sent"; via: "api" | "formsubmit" | "honeypot" }
  | { outcome: "invalid"; errors: ReturnType<typeof validateEnquire> }
  | { outcome: "mailto" };

export type EnquireSubmitDeps = {
  fetch: typeof fetch;
  formSubmitUrl: string;
};

const jsonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

/**
 * Prefer first-party POST /api/enquire (Resend). FormSubmit is only used when
 * the API is down, missing RESEND_API_KEY, or otherwise fails. mailto is last.
 */
export async function submitEnquireLead(
  fields: EnquireFields,
  deps: EnquireSubmitDeps,
): Promise<EnquireSubmitResult> {
  const errors = validateEnquire(fields);
  if (Object.keys(errors).length) {
    return { outcome: "invalid", errors };
  }
  if (isEnquireHoneypot(fields)) {
    return { outcome: "sent", via: "honeypot" };
  }

  const apiBody = {
    name: fields.name,
    email: fields.email,
    phone: fields.phone,
    role: fields.role,
    suburb: fields.suburb,
    message: fields.message,
    company: fields.company,
  };
  try {
    const res = await deps.fetch("/api/enquire", {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(apiBody),
    });
    if (res.ok) return { outcome: "sent", via: "api" };
    if (res.status === 400) {
      const data = (await res.json().catch(() => null)) as {
        errors?: ReturnType<typeof validateEnquire>;
      } | null;
      if (data?.errors && Object.keys(data.errors).length) {
        return { outcome: "invalid", errors: data.errors };
      }
    }
  } catch {
    // API unreachable — FormSubmit, then mailto.
  }

  const payload = buildEnquirePayload(fields);
  try {
    const res = await deps.fetch(deps.formSubmitUrl, {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(payload),
    });
    if (res.ok) return { outcome: "sent", via: "formsubmit" };
  } catch {
    // FormSubmit unreachable — mailto.
  }

  return { outcome: "mailto" };
}
