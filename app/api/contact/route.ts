import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * Posts the message to Resend, which delivers it to INBOX. No third-party form
 * service sits in the middle, so the data goes from the browser to this
 * function to email and nowhere else.
 *
 * Needs two env vars in Vercel:
 *   RESEND_API_KEY   from resend.com/api-keys
 *   CONTACT_TO       where the mail lands (chloe@hichloe.me)
 */
const FROM = "hichloe.me <noreply@hichloe.me>"; // must be on a domain verified in Resend
const MAX = { name: 100, email: 200, subject: 150, message: 4000 };

/** Crude per-IP throttle on *sends only*. Serverless instances are short-lived
 *  so this resets often. It slows a lazy script down and isn't real abuse
 *  protection; the honeypot and the fill-time check do more work.
 *
 *  Checked just before sending, never before validation — otherwise someone who
 *  mistypes their email twice gets locked out, which is a terrible thing to do
 *  to a person who is trying to hire you. */
const hits = new Map<string, number[]>();
const RATE = { window: 600_000, max: 5 };

function throttled(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE.window);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) hits.clear(); // keep the map from growing unbounded
  return recent.length > RATE.max;
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const clean = (v: unknown, cap: number) =>
  typeof v === "string" ? v.trim().slice(0, cap) : "";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // Honeypot. A real person never sees this field, so anything in it is a bot.
  // Return 200 so the script thinks it worked and doesn't retry.
  if (clean(body.company, 50)) return NextResponse.json({ ok: true });

  // Instant POSTs are almost always scripts. A person using autofill still
  // takes a beat; 400ms is short enough not to punish that.
  const elapsed = Number(body.elapsed);
  if (!Number.isFinite(elapsed) || elapsed < 400) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const subject = clean(body.subject, MAX.subject);
  const message = clean(body.message, MAX.message);

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please add your name.";
  if (!email) errors.email = "Please add an email so I can reply.";
  else if (!isEmail(email)) errors.email = "That email doesn't look right.";
  if (!message) errors.message = "Please add a message.";
  else if (message.length < 10) errors.message = "A little more detail would help.";
  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (throttled(ip)) {
    return NextResponse.json(
      { error: "That's a few messages in a row. Give it a few minutes and try again." },
      { status: 429 },
    );
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "chloe@hichloe.me";
  if (!key) {
    console.error("contact: RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "The form isn't wired up yet. Email chloe@hichloe.me directly." },
      { status: 500 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [to],
      reply_to: email,          // hitting reply goes straight back to them
      subject: subject ? `hichloe.me — ${subject}` : `hichloe.me — message from ${name}`,
      text:
        `From: ${name} <${email}>\n` +
        (subject ? `Subject: ${subject}\n` : "") +
        `\n${message}\n`,
    }),
  });

  if (!res.ok) {
    console.error("contact: resend rejected", res.status, await res.text());
    return NextResponse.json(
      { error: "Something went wrong sending that. Email chloe@hichloe.me directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
