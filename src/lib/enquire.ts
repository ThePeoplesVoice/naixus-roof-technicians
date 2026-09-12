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
