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
