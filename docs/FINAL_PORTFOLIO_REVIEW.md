# Final portfolio polish review

November 19, 2026. Branch: `codex/final-evidence-seo`.

## Changes

- Replaced the Fable work-row description with a capability-led summary. Meridian stays first.
- Added a sample-report PDF link beside the service deliverables, with an independent, unsolicited research disclosure. The $349 USD starting pilot, agreed scope, timing, exclusions, and inquiry process remain intact.
- Added distinct 1200 × 630 Open Graph and Twitter images for Fable and Storefront Health Check. `scripts/gen-audit-og.mjs` uses the existing Next.js image renderer, fonts, and CSS color tokens. No dependency was added.
- Kept the metadata helper and apex canonicals. The helper now accepts a per-page social image. Updated sitemap dates for changed content.
- Enlarged full mobile evidence captures from a maximum of 360px to 420px on wider screens. Full captures, original-resolution links, captions, PDF, and explicitly labeled annotated crop remain available.
- Shared existing field-validation rules between browser and endpoint. Invalid input now gets the focused error summary before a request is made. Server-side validation remains enforced. Delivery, spam checks, and fallback email behavior are unchanged.
- Corrected existing heading order and landmarks without changing the type scale. Meridian statistics now have valid definition descriptions. Scrollable table/code content can receive keyboard focus. Existing narrative, confidentiality caveats, animation, and artwork remain intact.

## Missing recording

No original FBL-006 recording was found in repository history, public assets, or accessible session files in Downloads, Desktop, and Documents/Codex. The PDF has no embedded recording. Supply the original `.mov` or `.mp4` screen recording to complete this item.

The case study still accurately says the report describes recording support but the recording itself is unavailable here. The existing still remains context, without being presented as motion evidence. No player, simulated behavior, or fabricated footage was added. After the original arrives, optimize to an iOS-compatible MP4, extract a real poster, add native controls/playsInline and a descriptive explanation, and test on a real iPhone and desktop. Do not autoplay.

## Canonical domain action

Both `https://www.hichloe.me/` and `/fable-audit` currently return 200 without a redirect. Vercel confirms the verified www domain has no redirect configured. Apex canonicals are already correct. No domain or DNS settings were changed.

In Vercel, select the **hichloe** team and **hichloe** project. Open **Settings → Domains**, edit **www.hichloe.me**, choose **Redirect to → hichloe.me**, select permanent **308**, and save. Leave the apex domain connected to production. Then verify www root and a nested route with a query string each redirect to the equivalent apex URL, preserving path and query.

References: [Vercel domain redirects](https://vercel.com/docs/domains/working-with-domains/deploying-and-redirecting), [redirect status codes](https://vercel.com/changelog/domains-can-now-be-redirected-with-a-custom-status-code).

## Verification

- Typecheck and production build pass.
- Browser checks across Home, Meridian, Typeshelf, Fable, and services at 320, 375, 768, and 1440px: no document overflow; one H1; unique, consistent rendered titles/descriptions/canonical/OG/Twitter metadata.
- Visitor flow: Home → Typeshelf → Fable → individual finding → services → inquiry. Meridian remains first. Named audit navigation and distinct evidence links preserved.
- Controlled form tests: invalid input, error summary and field-link focus, disabled sending state, failed transport/server response, fallback email, and successful confirmation focus. Successful responses are intercepted; no real message was sent.
- Real endpoint receives invalid fields only and returns 422. Email delivery through Resend remains unverified and needs an explicitly approved test submission.
- All internal link targets, report/resume assets, social image URLs, sitemap, and robots checked. PDF browser download completes; PDF bytes match the supplied report.
- Reduced-motion rendering and reveal failsafe checked. Desktop and mobile visual review completed for both audit pages.

## Limits and publishing review

Review the two social previews, service sample-report placement, and the new Fable work summary. The original gallery recording, www redirect, and authorized Resend delivery test remain open. Browser emulation does not establish real-device iOS playback or VoiceOver/NVDA behavior. Automated accessibility checks exclude the third-party Typeshelf iframe and cannot certify accessibility or all image/overlay contrast. No production merge or deployment is authorized by this review batch.
