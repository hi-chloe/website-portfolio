<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# hichloe.me

Chloe Polk's portfolio. Next.js App Router, no CSS framework. Statically prerendered except app/api/contact, which runs as a serverless function.

```bash
npm run dev        # localhost:3000
npm run build      # production build
npm run typecheck
```

## Structure

- `app/globals.css` — every style in the project. Tokens in `:root` at the top.
- `app/page.tsx` — landing. `app/meridian/`, `app/typeshelf/` — case studies.
- `components/` — client components (`Cursor`, `HeroLockup`, `ReadingProgress`,
  `LiveEmbed`, `Reveal`, `ContactForm`, `CopyEmail`), the rest server.
- `public/assets/` — case study screens, WebP.

## Rules

**Do not add Tailwind or any CSS framework.** The design is a hand-authored token
system. Every color comes from a custom property in `globals.css`. No hex literals in
components.

**Do not raise the accent tint above 60%.** `#5B4BE8` at 60% reads 9.60:1 on paper,
which clears WCAG AA at both 3:1 and 4.5:1. Higher breaks 4.5:1, and the accent is
reused on tags and links.

**Do not replace `fit()` in `HeroLockup.tsx` with a CSS `clamp()`.** Unbounded is a wide
face; a hardcoded clamp overflowed on real viewports. `fit()` measures the rendered
width and scales to fill the column, so swapping the display face doesn't break it.
The ceiling is `--lockup-max`.

**`prefers-reduced-motion` gets a composed still, not a freeze.** Letters settle into
varied rotations with a static tint. Test it before touching the hero.

**`.shot` framing depends on the export format.** Typeshelf stills are opaque, so
`.shot` supplies radius, overflow clip, and shadow. Meridian stills are 2x PNGs
with the radius and drop shadow in the alpha. Those figures use `.shot.own-frame`,
which drops the CSS frame. Adding it back clips the chrome and doubles the shadow.

**Tags in the work index are metadata, not filters.** Turn filtering on around six
projects. A filter that returns "2 of 2" makes the roster look smaller.

**Never add a seniority claim.** No "senior", no years-of-experience line. Chloe
started design work in April 2025 and the resume contradicts any level claim. The
position is "UI/UX Product Specialist" plus one narrow hard problem.

**Meridian's body copy is Chloe's, pulled verbatim from her Figma file. Don't rewrite
it.** Same for anything quoted from the Typeshelf repo's audit doc.


**Don't re-add `output: "export"`.** It was removed so `app/api/contact` can run.
Putting it back silently kills the contact form at build time.

**Motion is opt-out, not opt-in.** `components/Reveal.tsx` tags elements by
selector on mount — adding a section needs no wrapper. It carries a scroll sweep
and an 8s failsafe because IntersectionObserver samples and can skip elements on
a fast scroll, and a skipped element would stay invisible forever. Don't remove
those nets.

**Meridian discloses once.** The Status field in its meta block says a
non-anonymized copy shipped, and that the problems on the page reflect client
work Chloe can't show. One limitations bullet says the scenario data is
constructed. That's the floor. The numbers in that case study are invented, so
removing those would be showing fabricated outcomes to employers. Everything
else reads as a real product case study on purpose.

## Writing copy

If you write or edit prose on these pages:

- Contractions. Second person. Short declaratives — break long clause-chains in two.
- **Never use the "X, not Y" construction.** It reads as a tic.
- **Never use these words:** deliberately, genuinely, coherent, precisely.
- **US spelling always.** Watch for `greyed`, `authorised`, `modelled`, `colour`.
- **No em dashes.** Use a comma, a period, or a colon.
- No writerly flourishes. Explain the reasoning, don't assert the conclusion.
- Concrete nouns and real numbers. Cut abstract ones like "architecture" and
  "mechanisms" unless they're the actual subject.

## Adding a project

1. `app/<slug>/page.tsx`, copying the band structure from `app/typeshelf/page.tsx`.
2. Screens into `public/assets/`, WebP, 2x, named `<slug>-*.webp`.
3. A `.row` in the work index in `app/page.tsx`. Row shape holds at any count.
4. Bump the count in `.sec-head`.

## Backlog

See `TODO.md`.
