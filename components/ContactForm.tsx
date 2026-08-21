"use client";

import { useEffect, useRef, useState } from "react";

type Errors = Partial<Record<"name" | "email" | "message" | "form", string>>;

/**
 * Contact form. Posts to /api/contact, which sends the mail via Resend.
 *
 * Two things stop bots without making a person solve a puzzle: a honeypot field
 * that only a script would fill, and the time between mount and submit. Neither
 * costs a real visitor anything.
 */
export function ContactForm({ fallback }: { fallback: string }) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const mounted = useRef(0);

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
      <div className="form-done" role="status">
        <p><b>Got it.</b> I'll get back to you, usually within a day or two.</p>
      </div>
    );
  }

  const err = (k: keyof Errors) =>
    errors[k] ? <span className="field-err" id={`${k}-err`}>{errors[k]}</span> : null;

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field-row">
        <label className="field">
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required maxLength={100}
                 aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
          {err("name")}
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required maxLength={200}
                 aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
          {err("email")}
        </label>
      </div>

      <label className="field">
        <span>What's this about?<i> optional</i></span>
        <input name="subject" type="text" maxLength={150} />
      </label>

      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={5} required maxLength={4000}
                  aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
        {err("message")}
      </label>

      {/* honeypot — hidden from people, irresistible to scripts */}
      <div className="hp" aria-hidden="true">
        <label>Company<input name="company" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="form-foot">
        <button className="btn primary" type="submit" data-cursor="Send" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send it"} <span className="arrow">→</span>
        </button>
        <span className="form-status" role="status" aria-live="polite">
          {errors.form ?? (state === "sending" ? "Sending…" : "")}
        </span>
      </div>
    </form>
  );
}
