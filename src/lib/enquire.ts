export type EnquireFields = {
  name: string;
  email: string;
  phone: string;
  role: string;
  suburb: string;
  message: string;
  company: string;
};

export const emptyEnquireFields: EnquireFields = {
  name: "",
  email: "",
  phone: "",
  role: "Builder",
  suburb: "",
  message: "",
  company: "",
};

const BASIC_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** AU mobiles (04xx) and +61 / 61 national format, plus 0[2378] landlines. */
export function isAustralianPhone(value: string): boolean {
  const compact = value.replace(/[\s().-]/g, "");
  return (
    /^\+61[2-478]\d{8}$/.test(compact) ||
    /^61[2-478]\d{8}$/.test(compact) ||
    /^0[2-478]\d{8}$/.test(compact)
  );
}

export function isBasicEmail(value: string): boolean {
  return BASIC_EMAIL.test(value.trim());
}

function asFieldString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

/** Coerce a JSON/form body into enquire fields. Unknown keys are ignored. */
export function parseEnquireFields(body: unknown): EnquireFields {
  const record = body && typeof body === "object" ? (body as Record<string, unknown>) : {};
  return {
    name: asFieldString(record.name),
    email: asFieldString(record.email),
    phone: asFieldString(record.phone),
    role: asFieldString(record.role) || emptyEnquireFields.role,
    suburb: asFieldString(record.suburb),
    message: asFieldString(record.message),
    company: asFieldString(record.company),
  };
}

export function isEnquireHoneypot(fields: EnquireFields): boolean {
  return fields.company.trim().length > 0;
}

export function validateEnquire(next: EnquireFields): Partial<EnquireFields> {
  const e: Partial<EnquireFields> = {};
  if (!next.name.trim()) e.name = "Your name is required.";
  if (!next.email.trim()) e.email = "Your email is required.";
  else if (!isBasicEmail(next.email)) e.email = "That email doesn’t look right.";
  if (!next.phone.trim()) e.phone = "Your phone is required.";
  else if (!isAustralianPhone(next.phone)) e.phone = "Use an Australian number — 04xx or +61.";
  if (!next.suburb) e.suburb = "Choose a suburb.";
  if (next.message.trim().length < 12) e.message = "A little more on the build helps.";
  return e;
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function buildEnquirePayload(fields: EnquireFields) {
  const email = fields.email.trim();
  return {
    name: fields.name.trim(),
    email,
    phone: fields.phone.trim(),
    role: fields.role,
    suburb: fields.suburb,
    message: fields.message.trim(),
    _subject: `Dhu Roofing enquiry — ${fields.suburb}`,
    _template: "table",
    _captcha: "false",
    _replyto: email,
  };
}

export function buildEnquireMailtoBody(payload: ReturnType<typeof buildEnquirePayload>) {
  return [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Role: ${payload.role}`,
    `Suburb: ${payload.suburb}`,
    "",
    payload.message,
  ].join("\n");
}

export function buildEnquireHtml(payload: ReturnType<typeof buildEnquirePayload>): string {
  const row = (label: string, value: string) =>
    `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`;
  return `<!doctype html><html><body>
<h1>${escapeHtml(payload._subject)}</h1>
<table>
${row("Name", payload.name)}
${row("Email", payload.email)}
${row("Phone", payload.phone)}
${row("Role", payload.role)}
${row("Suburb", payload.suburb)}
</table>
<p>${escapeHtml(payload.message).replaceAll("\n", "<br />")}</p>
</body></html>`;
}
