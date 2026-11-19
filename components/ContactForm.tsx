"use client";

import { useEffect, useId, useRef, useState } from "react";

type Errors = Partial<Record<"name" | "email" | "message" | "form", string>>;

/**
 * Contact form. Posts to /api/contact, which sends the mail via Resend.
 *
 * Two things stop bots without making a person solve a puzzle: a honeypot field
 * that only a script would fill, and the time between mount and submit. Neither
 * costs a real visitor anything.
 */
export function ContactForm({ fallback, defaultSubject = "", submitLabel = "Send it" }: {
  fallback: string; defaultSubject?: string; submitLabel?: string;
}) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const mounted = useRef(0);
  const form = useRef<HTMLFormElement>(null);
  const feedback = useRef<HTMLDivElement>(null);
  const confirmation = useRef<HTMLDivElement>(null);
  const id = useId();
  const fields = ["name", "email", "message"] as const;
  const invalidFields = fields.filter((field) => errors[field]);

  useEffect(() => {
    if (state === "sent") confirmation.current?.focus();
    else if (Object.keys(errors).length) feedback.current?.focus();
  }, [state, errors]);

  useEffect(() => { mounted.current = Date.now(); }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
      company: fd.get("company"),               // honeypot
      elapsed: Date.now() - mounted.current,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) { setState("sent"); return; }
      if (data.errors) { setErrors(data.errors); setState("idle"); return; }
      setErrors({ form: data.error ?? "That didn't go through." });
      setState("error");
    } catch {
      setErrors({ form: `No connection. You can email ${fallback} instead.` });
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="form-done" role="status" tabIndex={-1} ref={confirmation}>
        <p><b>Got it.</b> I'll get back to you, usually within a day or two.</p>
      </div>
    );
  }

  const err = (k: keyof Errors) =>
    errors[k] ? <span className="field-err" id={`${id}-${k}-err`}>{errors[k]}</span> : null;

  return (
    <form className="contact-form" onSubmit={onSubmit} ref={form} noValidate>
      {Object.keys(errors).length ? (
        <div className="form-errors" role="alert" aria-atomic="true" tabIndex={-1}
          ref={feedback} aria-labelledby={`${id}-error-title`}>
          <h3 id={`${id}-error-title`}>{invalidFields.length
            ? `Please check ${invalidFields.length === 1 ? "this field" : `these ${invalidFields.length} fields`}.`
            : "Your message wasn't sent."}</h3>
          {invalidFields.length ? <ul>{invalidFields.map((field) => (
            <li key={field}><a href={`#${id}-${field}`} onClick={(event) => {
              event.preventDefault();
              (form.current?.elements.namedItem(field) as HTMLElement | null)?.focus();
            }}>{errors[field]}</a></li>
          ))}</ul> : <p>{errors.form} <a href={`mailto:${fallback}`}>Email {fallback}</a></p>}
        </div>
      ) : null}
      <div className="field-row">
        <label className="field">
          <span>Name</span>
          <input id={`${id}-name`} name="name" type="text" autoComplete="name" required maxLength={100}
                 aria-invalid={!!errors.name} aria-describedby={errors.name ? `${id}-name-err` : undefined} />
          {err("name")}
        </label>
        <label className="field">
          <span>Email</span>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={200}
                 aria-invalid={!!errors.email} aria-describedby={errors.email ? `${id}-email-err` : undefined} />
          {err("email")}
        </label>
      </div>

      <label className="field">
        <span>What's this about?<i> optional</i></span>
        <input name="subject" type="text" maxLength={150} defaultValue={defaultSubject} />
      </label>

      <label className="field">
        <span>Message</span>
        <textarea id={`${id}-message`} name="message" rows={5} required maxLength={4000}
                  aria-invalid={!!errors.message} aria-describedby={errors.message ? `${id}-message-err` : undefined} />
        {err("message")}
      </label>

      {/* honeypot — hidden from people, irresistible to scripts */}
      <div className="hp" aria-hidden="true">
        <label>Company<input name="company" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="form-foot">
        <button className="btn primary" type="submit" data-cursor="Send" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : submitLabel} <span className="arrow" aria-hidden="true">→</span>
        </button>
        <span className="form-status" role="status" aria-live="polite">
          {state === "sending" ? "Sending…" : ""}
        </span>
      </div>
    </form>
  );
}
