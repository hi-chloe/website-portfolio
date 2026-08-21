# TODO

Ordered by what a reviewer notices first.

## Blocking a real launch

- [ ] **Point the domain at it.** Deploy and point hichloe.me at it. Everything else is
      theoretical until this happens.
- [ ] **Turn the contact form on.** Verify hichloe.me in Resend, then set
      `RESEND_API_KEY` and `CONTACT_TO` in Vercel. Until then the form politely
      tells people to email directly. Full steps in README.
- [ ] **Send yourself a test message** once the keys are in, and check it lands
      in the inbox rather than spam. A form nobody can reach you through is
      worse than no form.
- [ ] **Confirm the Typeshelf embed loads.** `app/typeshelf/page.tsx` frames
      typeshelf.vercel.app. If Vercel refuses framing, `LiveEmbed` swaps in a link after
      6s — verify which one a visitor actually gets.

## Screens

- [ ] **Recapture `typeshelf-empty.webp`.** The current file has a Next.js
      dev-tools badge burned into the bottom-left, sitting on SETTINGS. Recapture
      against a production build, or set `devIndicators: false` in the Typeshelf
      repo's `next.config` before capturing.
- [ ] **Hero and color picker are the same screen.** `typeshelf-library.webp` and
      `typeshelf-picker.webp` are the same 19-face library, DejaVu Serif, same
      sample sentence, in two accent colors. When either gets recaptured, change
      the selected family and the loaded set so they read as two different moments.
      Chloe has 388-face Local Font Access captures; if those land, swap files and
      rewrite captions together. Captions currently match the 19-face frames.

## Content

- [ ] **Fix two things in the Meridian Figma file** (`QFFNEkI81GeyRBpkcoX6d6`), not just
      the web page: the hero eyebrow contradiction and "Authorised" in the Rejected
      edge state stat row. The web page is already correct on both.
- [ ] **Meridian has no live artifact.** The index has one row you can click into and use,
      and one you can only read — and Meridian is the deeper project. Options: publish the
      41-link Figma prototype, or build one of these from Meridian's own IP:
  - **Token playground** — 44 primitives and 30 semantic tokens driving a live component
    set, light/dark rebind. Makes "0 dead variables, 0 drift" playable.
  - **Confidence toggle** — one screen, *recommend* vs *declines to recommend*. The most
    senior idea in the body of work, currently sitting in a static image.

## Meridian stills

- [ ] **Re-export the hero frame from Figma.** The `meridian-hero.webp` that shipped in the
      first commit was cropped 12px into the product logo at export time — the mark's top was
      sliced and the "Overview" breadcrumb was cut in half. The current file is a stand-in
      derived from `meridian-control-tower.webp`, which is the same Overview screen exported
      cleanly, trimmed to the hero's 1.72:1 slot. **Worth deciding first:** since the two are
      the same screen, a faithful re-export gives the page the same image twice. Leading with
      the Incident Workspace or the low-confidence edge state may be the better call.
- [ ] **Edge-state exports end mid-content.** `edge-allclear`, `edge-lowconfidence` and
      `edge-rejected` are faithful to their Figma exports, but each stops partway through a
      section ("Alternatives Meridian considered" is cut under its own subtitle). Re-export
      those three at a section boundary.
- Originals live in `tmp-shots/origs/`. Never crop `public/assets/` in place — restore from
  there and re-derive.


## Checks

- [ ] **Tabular figures.** Confirm Schibsted Grotesk honors `tabular-nums` on the
      predicted vs actual table and the stat strips. If columns are ragged, scope
      those numeric cells to Inter.
- [ ] **Reduced motion.** Turn it on at the OS level and check the hero reads as a
      composition, not a freeze.
- [ ] **Hero fill.** Check at 1440 and 1920 with Unbounded actually loaded. `fit()`
      gates on `document.fonts.ready` so this is probably fine, but it has not been
      checked on a real wide viewport.
