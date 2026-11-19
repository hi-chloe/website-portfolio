# Independent ecommerce audit expansion

## Routes and integration

- `/fable-audit`: independent, unsolicited Fable Pets case study, dated November 18, 2026.
- `/ecommerce-audits`: Storefront Health Check pilot, starting at $349 USD, with scope agreed before work.
- Homepage: project 03, count 03, understated services links below Selected Work and in Contact.
- Sitemap includes both new routes. Both pages define titles, descriptions, canonical URLs, Open Graph, and Twitter metadata.
- Reuses Nav, Band, Meta, Callout, Figure, ReadingProgress, Reveal, ContactForm, and CopyEmail.
- AuditEvidence is a server component wrapping Figure with provenance captions and full-size image links. It uses browser-native new tabs, without modal focus handling or new client JavaScript.
- PortfolioFooter is shared by the two new routes. Existing case-study files and the contact endpoint are unchanged.
- ContactForm accepts an optional defaultSubject. The homepage retains its empty subject; services uses an editable audit inquiry subject.

The tester confirmed the platforms as desktop Chrome and Chrome on iOS (iPhone).
The original report is retained unchanged.

## Evidence provenance

The supplied `Fable_Pets_Independent_Ecommerce_Quality_Audit.pdf` is copied unchanged to
`public/reports/fable-pets-independent-ecommerce-quality-audit.pdf` (2,546,712 bytes).
Five images were extracted from the PDF without cropping, resizing, or annotation and
encoded as WebP at quality 90:

- page 2 / Evidence A: `fable-audit-hover-overlap.webp`, 1182 × 1394.
- page 3 / Evidence B: `fable-audit-mobile-gallery.webp`, 706 × 1536.
- page 4 / Evidence C: `fable-audit-mobile-navigation.webp`, 1206 × 2622.
- page 5 / Evidence D: `fable-audit-product-cards.webp`, 1206 × 2622.
- page 6 / Evidence E: `fable-audit-cart.webp`, 1206 × 2622.

Separate original screenshots and the mobile screen recording were not available in this
session. The page explicitly says the gallery still cannot show motion and that recording
support is described in the source report. It includes no simulated video or placeholders.
Add a recording only after reviewing the actual file; use native controls, a descriptive
caption/transcript, and no autoplay.

## Editorial boundaries

- FBL-001 and FBL-009: screenshot-supported observations, provisional Medium priority.
- FBL-006: tester observation, recording support described by the report; triggers and timing need controlled retesting.
- FBL-007, FBL-002/003, and panel styling: enhancement/design opportunities.
- FBL-004: withdrawn because dog body measurements were absent from the test scenario.
- FBL-005: unresolved decision-point disclosure prominence.
- FBL-010: reservation timer excluded as a defect; backend behavior was not verified.
- Positive outcomes include navigation, dimensions, shipping information, variant persistence, correct discount/subtotal, dismissible panel, returns, and FAQs.
- No commissioned relationship, implementation, conversion outcome, technical root cause, or WCAG conformance is claimed.

## Review before publishing

- Approve the pilot price, scope, and inquiry copy.
- Review the public report download and evidence captions.
- Supply the recording if it should be included; the text-only account is explicitly qualified meanwhile.
- Confirm production email delivery separately. Browser verification checks validation and mocks success without sending email.

## Validation

`npm run typecheck`, `npm run build`, and `git diff --check`.
Browser checks cover 320, 375, 768, and 1440px; internal links and anchors; five image
responses and dimensions; PDF content type and byte equality; a single H1 and canonical
metadata per page; three homepage projects; default subject behavior; validation; mocked
inquiry success; real API validation; visible keyboard focus; reading progress; reduced
motion; reveal failsafe; and page JavaScript errors.

These are viewport emulations in desktop Chrome, rather than a new iPhone storefront audit.
The unchanged dependency lockfile reports existing npm audit findings. No packages were added.

## Portfolio polish

- Chloe is explicitly the sole walkthrough tester. The recorded devices are desktop Chrome
  and Chrome on iOS (iPhone), with a November 18, 2026 audit date and the recorded Medium /
  White Gate / Signature Finish variant. Browser versions, iPhone model, and viewport sizes
  were not recorded. Reproduction steps remain proposed controlled retests.
- A concise result summary and `AuditCrop` appear near the top. AuditCrop uses CSS to show a
  detail of unchanged Evidence C, with a separately rendered violet outline and marker.
  The caption identifies the crop and annotation and links to the uncropped source. It is
  also the worked sample near the service offer. No fabricated or retouched source image is used.
- Section links are a named navigation landmark. Major findings have direct anchors;
  supplementary findings have individual heading IDs. The previous `#findings` link remains
  valid. Full captures have distinct, visible accessible link names.
- The service H1 names Storefront Health Check. Pilot pricing appears once in the offer's
  metadata; inquiry and submit labels name the audit. Shared form validation has a focused,
  announced error summary, linked invalid fields, and focused success confirmation. The
  homepage retains its default subject and submit label. The contact endpoint is unchanged.
- Meridian stays first. Typeshelf links next to Fable. Home, Meridian, and Typeshelf own
  canonical URLs and complete Open Graph/Twitter fields through `pageMetadata`.
- Existing low-contrast secondary text now uses the existing `--ink-60` token. Decorative
  light borders, brand fonts, and motion are retained. Contact counts inherit their light
  text color so dark surfaces remain readable.

Polish verification uses real empty-form validation (which cannot send mail) and controlled
503 / 200 responses for delivery failure and success. It verifies summary focus, keyboard
links to invalid fields, described-by associations, and confirmation focus. It also follows
Home → Typeshelf → Fable → individual finding → services → inquiry, checks metadata on all
five routes at 320/375/768/1440px, and verifies PDF byte equality, reduced motion, reading
progress, and reveal behavior. Visual inspection covers the annotated crop and both pages
at desktop and mobile widths. Actual email delivery and listening with a screen reader
remain manual checks; DOM roles, live-region markup, and keyboard behavior are verified.
