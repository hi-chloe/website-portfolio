# hichloe.me

Portfolio site. Next.js App Router, TypeScript, no CSS framework.

```bash
npm install
npm run dev        # localhost:3000
npm run build      # static export to ./out
npm run typecheck
```

`next.config.ts` sets `output: "export"`, so a build produces plain static files.
Nothing here needs a server.

## Layout

```
app/
  layout.tsx          fonts, <Cursor />, metadata
  globals.css         every style in the project — tokens first
  page.tsx            landing
  meridian/page.tsx   case study 01
  typeshelf/page.tsx  case study 02
components/
  Cursor.tsx          "use client" — the contextual cursor
  HeroLockup.tsx      "use client" — the name lockup and its physics
  ReadingProgress.tsx "use client" — scroll hairline + nav border
  LiveEmbed.tsx       "use client" — the Typeshelf iframe and its fallback
  Nav.tsx  Figure.tsx  Band.tsx    server components
public/assets/        case study screens, WebP
```

## The type system

From the CP brand file, type scale node `41:2`. Everything is a custom property
in `:root`, so the scale is edited in one place.

| Token | Value |
|---|---|
| Display XL | Unbounded 600 · 96 / 1.05 / −2% |
| Display L | Unbounded 600 · 64 / 1.06 / −2% |
| Display M | Unbounded 600 · 44 / 1.10 / −1% |
| Eyebrow | Schibsted Grotesk 500 · 13 · +8% · uppercase |
| Body | 16 / 1.62 · Body large 18 / 1.67 |
| Caption | 12 / 1.30 / +2% |

Inter is loaded for one reason: the three live Meridian components in the case
study use Meridian's own typeface, so they match the screenshots beside them.

## Decisions worth not undoing

**The accent is `#5B4BE8` at 60% peak tint.** That reads 9.60:1 on paper, which
clears WCAG AA at both the 3:1 and 4.5:1 thresholds. Push the intensity higher
and it stops clearing 4.5:1, which matters the moment the accent gets reused on
a tag or a link.

**The hero lockup measures itself.** Unbounded is a wide face and a hardcoded
`clamp()` overflowed on real viewports, so `fit()` in `HeroLockup.tsx` renders at
a probe size, reads the widest line, and scales to fill the column. Swapping the
display face doesn't break it. The ceiling is `--lockup-max`.

**Reduced motion gets a composition, not a freeze.** The letters settle into
varied rotations with a static tint. Check it before changing the hero.

**The Meridian screens carry their own frame.** Their rounded corners and drop
shadow live in the alpha channel, so `.shot.own-frame` adds no border, background,
shadow or overflow clip. Adding any doubles the frame. Typeshelf stills stay
opaque, so the shared `.shot` class still supplies that frame there.

**Tags in the work index are metadata, not filters.** A filter that returns
"2 of 2" makes the roster look smaller than just showing it. Turn filtering on
somewhere around six projects.


## Contact form

The form at the bottom of the landing page posts to `app/api/contact/route.ts`,
which sends the message through Resend. No third-party form service sits in the
middle — the data goes browser → your function → email.

**This is why `next.config.ts` has no `output: "export"`.** Static export builds
plain files with no server, so nothing could receive the POST. Every page is
still statically prerendered; only `/api/contact` runs on demand.

### Setup, once

1. Sign up at [resend.com](https://resend.com). Free tier is 3,000 emails a
   month, 100 a day, one custom domain — far more than this needs.
2. Add `hichloe.me` under Domains and paste the DNS records it gives you into
   your registrar. Verification usually takes a few minutes.
3. Make an API key at resend.com/api-keys.
4. In Vercel, Settings → Environment Variables, add:

   ```
   RESEND_API_KEY=re_...
   CONTACT_TO=chloe@hichloe.me
   ```

   Locally, put the same two lines in `.env.local`. See `.env.example`.

The `from` address is `noreply@hichloe.me`, set at the top of the route. It has
to be on the domain you verified in step 2. `reply_to` is set to whoever filled
the form, so hitting reply in your inbox goes straight back to them.

### Without the env vars

The endpoint returns a 500 and the form tells the visitor to email you directly,
so a missing key degrades to a working fallback rather than a silent black hole.

### Spam handling

Three layers, none of which make a real person solve anything:

- **Honeypot.** A `company` field positioned offscreen. People never see it,
  scripts fill it. Anything with it filled gets a 200 and goes nowhere, so the
  bot thinks it worked and doesn't retry.
- **Fill time.** Under three seconds between page load and submit is a script.
  Same silent 200.
- **Rate limit.** Five sends per IP per ten minutes. Checked *after* validation
  on purpose — someone who mistypes their email twice must not get locked out.

The rate limit lives in memory, so it resets whenever the serverless instance
recycles. It slows a lazy script; it isn't real abuse protection. If the form
ever gets hammered, move that check to Vercel KV or Upstash.

## Known gaps

- Meridian's screens are 1x exports. They want re-exporting at 2x.
- The Typeshelf embed depends on Vercel allowing framing. `LiveEmbed` shows a
  link after 6s if the frame never loads.
- LinkedIn and the résumé link on the landing page are still `#`.
- The plain HTML files in the parent folder have no contact form. They have no
  server, so they keep the copy-email button only.
