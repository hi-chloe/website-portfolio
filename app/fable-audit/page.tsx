import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Band, Meta, Callout } from "@/components/Band";
import { AuditEvidence } from "@/components/AuditEvidence";
import { PortfolioFooter } from "@/components/PortfolioFooter";

const title = "Fable Pets, independent ecommerce UX & quality audit · Chloe Polk";
const description = "An independent, unsolicited storefront audit by Chloe Polk. Product discovery, image controls, variant selection, and cart verification across desktop and mobile.";
export const metadata: Metadata = {
  title, description, alternates: { canonical: "/fable-audit" },
  openGraph: { type: "article", url: "/fable-audit", title, description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Chloe Polk, technical product manager and product designer" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function FableAudit() {
  return (
    <>
      <a className="skip" href="#scope">Skip to audit scope</a>
      <ReadingProgress />
      <Nav back />
      <main className="audit-page">
        <header className="band hero">
          <div className="eyebrow">Fable Pets · Independent audit · November 2026</div>
          <h1>Evaluating the shopping experience behind a premium pet brand</h1>
          <p className="lede">A product photo has to stay still long enough to inspect. A chosen finish has
          to survive the trip to the cart. I followed a first-time shopper through Fable Pets to see how
          reliably those details held together, from discovery through checkout entry.</p>
          <Meta items={[
            { term: "Role", detail: "Independent Product Quality & Ecommerce UX Auditor" },
            { term: "Tested", detail: "Desktop Chrome and Chrome on iOS (iPhone)" },
            { term: "Focus", detail: "Signature Crate shopping journey" },
            { term: "Date", detail: "November 18, 2026" },
          ]} />
          <p className="prov">This was an independent, unsolicited audit. Fable Pets didn't commission or endorse
          this work. I wasn't hired by or affiliated with the company. No production changes were made to its
          storefront. The observations describe one test session and may change as the store changes.</p>
          <div className="links audit-contents" aria-label="Case study sections">
            <a href="#passed">What worked ↓</a>
            <a href="#findings">Prioritized findings ↓</a>
            <a href="#ruled-out">What I ruled out ↓</a>
            <a href="/reports/fable-pets-independent-ecommerce-quality-audit.pdf" download>Download the full report (PDF, 2.5 MB) ↗</a>
          </div>
        </header>

        <Band id="scope" eyebrow="01 · The question and the method">
          <h2>Can you evaluate the product and carry the right choice to checkout?</h2>
          <p className="lede">For expensive pet furniture, the decision involves dimensions, materials,
          finishes, and delivery. I wanted to see whether a customer could find those details, inspect
          the product, and keep their selection intact across desktop and mobile.</p>
          <ol className="chain audit-journey" aria-label="Tested shopping journey">
            {[
              ["Homepage", "Find a route into the catalog"], ["Navigation", "Locate the right collection"],
              ["Collection", "Find Signature Crate"], ["Product details", "Inspect images and information"],
              ["Variants", "Choose size, gate, and finish"], ["Cart", "Check selection and price"],
              ["Checkout entry", "Verify the displayed total"],
            ].map(([step, task]) => <li className="stop" key={step}><b>{step}</b><span>{task}</span></li>)}
          </ol>
          <div className="cols">
            <div className="body">
              <h3>How I tested</h3>
              <p>I used scenario-based usability testing, cross-device visual QA, heuristic evaluation,
              product discovery testing, variant-selection testing, and cart/checkout verification.
              I recorded the visible state and compared it with the task I was trying to complete.</p>
              <p>The scenario started with a hypothetical 20-pound dog. It didn't include body
              measurements. That mattered: weight alone wasn't enough to establish a sizing problem.</p>
              <h3>Where testing stopped</h3>
              <p>I opened checkout but didn't place an order. I had no access to analytics, storefront
              code, inventory logic, or customer research. This wasn't a comprehensive accessibility,
              performance, security, or full-site technical audit.</p>
            </div>
            <aside className="side-card audit-copy">
              <h3>How to read the evidence</h3>
              <p><b>Screenshot-supported:</b> visible in a captured state.</p>
              <p><b>Tester-reported:</b> observed during the manual session.</p>
              <p><b>Recording-supported:</b> described in the report as supported by video.</p>
              <p><b>Opportunity:</b> a design recommendation that still needs validation.</p>
              <p className="foot">Priorities are provisional judgments about shopping friction. They
              aren't measured conversion impact. The five stills here are extracted from the original
              report; the recording isn't included on this page.</p>
            </aside>
          </div>
        </Band>

        <Band id="passed" eyebrow="02 · What worked">
          <h2>The selection and the math held up</h2>
          <div className="cols audit-evidence-layout">
            <div className="body">
              <p>The journey had several useful, successful interactions. Those belong in the record
              alongside the problems.</p>
              <ul className="audit-list">
                <li><b>Discovery:</b> I reached Signature Crate through mobile navigation in two taps.</li>
                <li><b>Sizing:</b> dimensions appeared directly beneath the size selector.</li>
                <li><b>Shipping:</b> product descriptions included shipping information.</li>
                <li><b>Selection:</b> Medium, White Gate, and Signature Finish carried through to the cart.</li>
                <li><b>Pricing:</b> the 25% discount was applied correctly and visible before checkout.</li>
                <li><b>Support:</b> returns information and FAQs were available through the storefront.</li>
                <li><b>Dismissal:</b> the third-party accessibility panel could be closed.</li>
              </ul>
              <Callout who="Verified in the cart">
                $1,399.00 − $349.75 = $1,049.25. The selected variant and discounted total were
                visible together before entering checkout. Shipping and taxes were still to be calculated.
              </Callout>
              <p>That last check matters operationally. A correct product page isn't enough if the cart
              silently changes a finish or loses a promotion.</p>
            </div>
            <AuditEvidence image="cart" alt="Fable mobile cart showing White Gate, M, Signature Finish, a $1,399.00 item, a $349.75 discount, and a $1,049.25 subtotal."
              caption="Evidence E, report page 6. The chosen variant and discount are visible in the cart. This capture shows the cart and checkout button, rather than a completed purchase." />
          </div>
        </Band>

        <Band id="findings" eyebrow="03 · FBL-001 · Medium · Screenshot-supported">
          <h2>Hover imagery needs consistent bounds</h2>
          <div className="cols audit-evidence-layout">
            <div className="body">
              <p>During desktop hover interactions on a product listing, secondary imagery sometimes
              appeared over the primary image. The capture records a stacked presentation in the
              product-card area.</p>
              <h3>Why I'd investigate it</h3>
              <p>Product photography helps you understand what you're buying. An overlapping state
              makes the card harder to read while you're comparing products.</p>
              <h3>Reproduction path to verify</h3>
              <ol className="audit-list">
                <li>Open the desktop product listing and hover over a product card.</li>
                <li>Move the pointer on and off the card while watching the image transition.</li>
                <li>Record affected cards, browser, viewport, and whether both images remain visible.</li>
              </ol>
              <h3>Recommendation</h3>
              <p>Review the transition logic and keep images within consistent bounds. Positioning,
              stacking, timing, and overflow are places to inspect once code is available. The capture
              doesn't establish the root cause or how broadly the behavior occurs.</p>
            </div>
            <AuditEvidence image="overlap" alt="Desktop product listing capture with a large lifestyle image layered over primary product imagery above the Choose Options button."
              caption="Evidence A, report page 2. The captured hover state shows overlapping imagery. Frequency and affected products need a controlled retest." />
          </div>
        </Band>

        <Band eyebrow="04 · FBL-006 · Medium · Tester and recording-supported">
          <h2>Let the shopper hold an image still</h2>
          <div className="cols audit-evidence-layout">
            <div className="body">
              <p>On mobile, product imagery advanced without manual navigation during testing. That
              made it harder to stay on an individual photo and inspect the product.</p>
              <p>The report describes a short recording supporting the changing imagery. The still
              shown here establishes the gallery layout; it can't demonstrate motion. The recording
              isn't available in this case study.</p>
              <h3>Reproduction path to verify</h3>
              <ol className="audit-list">
                <li>Open Signature Crate in Chrome on iOS and leave the gallery untouched.</li>
                <li>Record a 20-second hands-off test, then try manual navigation.</li>
                <li>Check the trigger, timing, pause behavior, and reduced-motion preference.</li>
              </ol>
              <h3>Recommendation</h3>
              <p>Evaluate disabling autoplay or providing clear manual and pause controls. A customer
              should have time to inspect a finish or a dimension diagram. I didn't establish a WCAG
              failure from this behavior.</p>
            </div>
            <AuditEvidence image="gallery" alt="Mobile Signature Crate page showing multiple product views, a dimension diagram, and a floating Want 10% off promotion over the product title."
              caption="Evidence B, report page 3. A still of the mobile gallery and surrounding product information. The displayed promotional price belongs to this captured state; the cart verification used the selected Medium variant." />
          </div>
        </Band>

        <Band eyebrow="05 · FBL-009 · Medium · Screenshot-supported">
          <h2>Promotions should leave the shopping controls clear</h2>
          <div className="cols audit-evidence-layout">
            <div className="body">
              <p>The floating “Want 10% off?” prompt covered product information and part of the
              mobile navigation. The accessibility launcher also occupied space near the lower-right
              corner of the viewport.</p>
              <p>Each element uses a small area on its own. Together they leave less space for the
              content a shopper opened the page or menu to use.</p>
              <h3>Reproduction path to verify</h3>
              <ol className="audit-list">
                <li>Open the product page on mobile while the promotional prompt is visible.</li>
                <li>Open navigation and inspect the lower menu links.</li>
                <li>Repeat at several mobile widths, including after dismissing and reopening UI.</li>
              </ol>
              <h3>Recommendation</h3>
              <p>Suppress promotional prompts while navigation is open. Define safe areas for fixed
              widgets, keep essential controls clear, and make dismissal easy. Verify placement on
              the product page as well as in open drawers.</p>
            </div>
            <AuditEvidence image="navigation" alt="Open Fable mobile navigation with the Want 10% off prompt covering part of Our Story and the accessibility launcher in the lower-right corner."
              caption="Evidence C, report page 4. The promotion overlaps a lower navigation item. Its close control and the accessibility launcher are also visible." />
          </div>
        </Band>

        <Band id="refinements" eyebrow="06 · Opportunities for refinement">
          <h2>Keep design preferences separate from defects</h2>
          <div className="cols audit-evidence-layout">
            <div className="body">
              <h3>FBL-007 · Product-specific enlargement · Low / explore</h3>
              <p>Tapping the product image didn't open a dedicated enlarged view during testing.
              Page-level zoom was possible. A gallery with zoom and manual navigation could help
              shoppers inspect materials and finishes. This is an enhancement opportunity.</p>
              <h3>FBL-002 / FBL-003 · Card separation and spacing · Low / design</h3>
              <p>Pale photography and similarly colored backgrounds give the cards subtle boundaries.
              Titles, descriptions, and prices also appear close to card edges. I'd test modest
              separation and consistent metadata padding while keeping Fable's minimalist aesthetic.</p>
              <h3>FBL-008 · Third-party panel styling · Low / design</h3>
              <p>The dismissible accessiBe panel used a blue treatment that differed from the storefront.
              Better visual integration is worth exploring. The styling doesn't establish an
              accessibility failure, and an overlay's presence doesn't establish WCAG conformance.</p>
              <p>These recommendations need validation with shoppers before a broad redesign. I didn't
              measure their effect on purchase decisions.</p>
            </div>
            <AuditEvidence image="cards" alt="Mobile collection showing pale Signature Crate and Rest Set product cards, product names and prices near the card edges, and a floating Show filters control."
              caption="Evidence D, report page 5. Card boundaries and metadata spacing are design observations. No contrast failure was established from this screenshot." />
          </div>
        </Band>

        <Band id="ruled-out" eyebrow="07 · What I ruled out">
          <h2>A hypothesis has to survive the evidence</h2>
          <div className="close-grid">
            <div>
              <h3>FBL-004 · Sizing concern withdrawn</h3>
              <p>The scenario specified a 20-pound dog without body measurements. The store supplied
              product dimensions. The gap was in my scenario, so I withdrew the proposed defect.</p>
              <h3>FBL-010 · Timer excluded as a defect</h3>
              <p>Checkout showed a roughly 10-minute order-secured countdown. It may reflect a
              legitimate inventory reservation. I didn't verify backend behavior and couldn't support
              a claim of deceptive urgency.</p>
            </div>
            <div>
              <h3>FBL-005 · Final-sale prominence unresolved</h3>
              <p>Returns and purchase information were available, but I didn't fully verify the
              prominence of final-sale terms at the exact purchase decision. That remains an open
              question, rather than a confirmed defect.</p>
              <h3>What that changes in the report</h3>
              <p>I keep these decisions visible so you can see which concerns held up, which need
              more testing, and which should leave the issue list. A longer list wouldn't make the
              audit more accurate.</p>
            </div>
          </div>
        </Band>

        <Band eyebrow="08 · Recommendations and next validation">
          <h2>Start with image control and unobstructed navigation</h2>
          <p className="lede">The medium priorities affect product inspection and access to content.
          I'd validate them first, then implement the smallest changes the evidence supports. These
          priorities reflect likely friction in the observed journey, without measured business impact.</p>
          <ol className="ladder">
            <li><span className="k">01</span><div><b>Reproduce the hover overlap</b><p>Test affected
              cards in two desktop browsers. Record the viewport and transition before assigning a
              code fix. Acceptance: imagery stays inside its card throughout the hover transition.</p></div></li>
            <li><span className="k">02</span><div><b>Verify gallery control</b><p>Run the hands-off
              mobile test and inspect pause and manual controls. Acceptance: a shopper can hold a
              photo still, inspect it, and choose when to advance.</p></div></li>
            <li><span className="k">03</span><div><b>Retest floating UI with navigation open</b><p>Check
              several mobile widths. Acceptance: essential content, links, and controls remain clear
              and usable while prompts or drawers are visible.</p></div></li>
            <li><span className="k">04</span><div><b>Validate enhancements separately</b><p>Explore
              dedicated zoom, restrained card spacing, and panel styling. A broader follow-up could
              add keyboard and manual accessibility testing. Retest successful cart behavior after changes.</p></div></li>
          </ol>
        </Band>

        <Band eyebrow="09 · Reflection">
          <h2>Follow the choice all the way through</h2>
          <div className="body">
            <p>My ecommerce background makes me look beyond a single screen. The useful question is
            whether the product, variant, promotion, and next step still make sense as you move
            through the store.</p>
            <p>This audit also reinforced the need to challenge my own assumptions. A weak scenario
            can create a false issue. A screenshot can show overlap but can't establish a technical
            cause. Correct pricing deserves the same care as an inconvenient gallery.</p>
            <p>The outcome here is a documented investigation and a prioritized next-test plan.
            Fable Pets hasn't implemented or validated these recommendations through this work.
            No conversion improvement or production outcome is claimed.</p>
          </div>
          <div className="links">
            <a className="btn" href="/reports/fable-pets-independent-ecommerce-quality-audit.pdf" download>Download audit report (PDF) ↗</a>
            <a className="btn" href="/ecommerce-audits">Explore independent ecommerce audits →</a>
            <a className="btn" href="/#contact">Talk about product work →</a>
          </div>
        </Band>
        <div className="next"><span>Next · Product design</span><a href="/meridian" data-cursor="View">Meridian, hospitality operations →</a></div>
      </main>
      <PortfolioFooter label="Fable Pets · Independent audit" />
    </>
  );
}
