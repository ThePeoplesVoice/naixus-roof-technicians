import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  buildEnquireMailtoBody,
  buildEnquirePayload,
  emptyEnquireFields,
  validateEnquire,
  type EnquireFields,
} from "@/lib/enquire";
import { submitEnquireLead } from "@/lib/enquire-submit";
import { business, roles, suburbs } from "@/lib/site";
import { cn } from "@/lib/utils";

export function EnquireForm({ invert = false }: { invert?: boolean }) {
  const [fields, setFields] = useState<EnquireFields>(emptyEnquireFields);
  const [errors, setErrors] = useState<Partial<EnquireFields>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validateEnquire(fields);
    setErrors(e);
    setSendError("");
    if (Object.keys(e).length) return;

    if (fields.company.trim()) {
      setSent(true);
      return;
    }

    setSending(true);
    try {
      const result = await submitEnquireLead(fields, {
        fetch: globalThis.fetch.bind(globalThis),
        formSubmitUrl: `https://formsubmit.co/ajax/${business.email}`,
      });
      if (result.outcome === "invalid") {
        setErrors(result.errors);
        return;
      }
      if (result.outcome === "sent") {
        setSent(true);
        return;
      }
      const payload = buildEnquirePayload(fields);
      const body = buildEnquireMailtoBody(payload);
      window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`;
      setSendError(
        "Couldn’t send through the form — your email app should be open with the message ready.",
      );
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div
        className={cn(
          "rounded-xl p-8 shadow-[var(--shadow-border)]",
          invert ? "bg-ink-soft text-paper" : "bg-paper-2 text-ink",
        )}
      >
        <p
          className={cn(
            "text-[0.65rem] font-medium uppercase tracking-[0.2em]",
            invert ? "text-paper/55" : "text-stone",
          )}
        >
          Enquiry in
        </p>
        <h3 className="mt-3 font-display text-3xl font-medium">We’ll read this.</h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed opacity-80">
          Shawn looks at every new-build enquiry. Limited projects each month — if you’re planning
          ahead, that’s the right time to have written.
        </p>
        <Button
          type="button"
          variant={invert ? "invert" : "outline"}
          className="mt-6"
          onClick={() => {
            setFields(emptyEnquireFields);
            setSent(false);
          }}
        >
          Send another
        </Button>
      </div>
    );
  }

  const fieldClass = invert
    ? "bg-ink-soft text-paper placeholder:text-paper/40 shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-paper)_20%,transparent)]"
    : "";
  const labelClass = invert ? "text-paper/70" : undefined;
  const errorClass = invert ? "text-sm text-red-200" : "text-sm text-red-800";

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="sr-only">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={fields.company}
          onChange={(e) => setFields((f) => ({ ...f, company: e.target.value }))}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="name" className={labelClass}>
          Name
        </Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={fields.name}
          onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
          className={fieldClass}
        />
        {errors.name ? <p className={errorClass}>{errors.name}</p> : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email" className={labelClass}>
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={fields.email}
            onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
            className={fieldClass}
          />
          {errors.email ? <p className={errorClass}>{errors.email}</p> : null}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone" className={labelClass}>
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={fields.phone}
            onChange={(e) => setFields((f) => ({ ...f, phone: e.target.value }))}
            className={fieldClass}
          />
          {errors.phone ? <p className={errorClass}>{errors.phone}</p> : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="role" className={labelClass}>
            You’re a
          </Label>
          <select
            id="role"
            name="role"
            value={fields.role}
            onChange={(e) => setFields((f) => ({ ...f, role: e.target.value }))}
            className={cn(
              "flex h-11 w-full rounded-md bg-paper px-3.5 text-base text-ink shadow-[inset_0_0_0_1px_var(--color-rule)] focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-metal)] md:text-sm",
              fieldClass,
            )}
          >
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="suburb" className={labelClass}>
            Build suburb
          </Label>
          <select
            id="suburb"
            name="suburb"
            value={fields.suburb}
            onChange={(e) => setFields((f) => ({ ...f, suburb: e.target.value }))}
            className={cn(
              "flex h-11 w-full rounded-md bg-paper px-3.5 text-base text-ink shadow-[inset_0_0_0_1px_var(--color-rule)] focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-metal)] md:text-sm",
              fieldClass,
            )}
          >
            <option value="">Select</option>
            {suburbs.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
            <option value="Outside this corridor">Outside this corridor</option>
          </select>
          {errors.suburb ? <p className={errorClass}>{errors.suburb}</p> : null}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message" className={labelClass}>
          The build
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="New-build residential. Timing, roof type if you know it, anything that helps."
          value={fields.message}
          onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
          className={fieldClass}
        />
        {errors.message ? <p className={errorClass}>{errors.message}</p> : null}
      </div>

      <p className={cn("text-sm leading-relaxed", invert ? "text-paper/60" : "text-stone")}>
        New-build residential only. Limited books — write in early if you’re planning ahead. Or call
        / email Shawn directly.
      </p>

      {sendError ? <p className={errorClass}>{sendError}</p> : null}

      <Button type="submit" size="lg" variant={invert ? "invert" : "primary"} disabled={sending}>
        {sending ? "Sending…" : business.cta}
      </Button>
    </form>
  );
}
