import { pageMetadata } from "@/lib/pageMetadata";
import { Nav } from "@/components/Nav";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Band, Meta, Callout } from "@/components/Band";
import { AuditEvidence } from "@/components/AuditEvidence";
import { AuditCrop } from "@/components/AuditCrop";
import { PortfolioFooter } from "@/components/PortfolioFooter";

const title = "Fable Pets, independent ecommerce UX & quality audit · Chloe Polk";
const description = "An independent, unsolicited storefront audit by Chloe Polk. Product discovery, image controls, variant selection, and cart verification across desktop and mobile.";
export const metadata = pageMetadata({
  title, description, path: "/fable-audit", type: "article",
  image: { url: "/og-fable-audit.png", alt: "Fable Pets: independent, unsolicited ecommerce UX and quality audit by Chloe Polk. No affiliation." },
});

export default function FableAudit() {
  return (
    <>
      <a className="skip" href="#scope">Skip to audit scope</a>
      <ReadingProgress />
      <Nav back />
      <main className="audit-page">
        <header className="band hero">
          <div className="eyebrow">Fable Pets · Independent audit · November 2026</div>
          <h1>Following the product choice through to the cart</h1>
          <p className="lede">I performed a first-time shopper walkthrough of Fable Pets, from finding
          Signature Crate to checkout entry. I checked image controls, variant selection, and cart pricing.</p>
          <p className="prov">Independent, unsolicited research. I wasn't hired by or affiliated with
          Fable Pets. The company didn't commission or endorse this audit, and no storefront changes were made.</p>
          <nav className="links audit-contents" aria-label="Fable audit sections">
            <a href="#summary">Results</a>
            <a href="#scope">Test details</a>
            <a href="#fbl-001">FBL-001 · Hover overlap</a>
            <a href="#fbl-006">FBL-006 · Gallery control</a>
            <a href="#fbl-009">FBL-009 · Promotional overlays</a>
            <a href="#refinements">Design opportunities</a>
            <a href="#ruled-out">Ruled out and unresolved</a>
            <a href="/reports/fable-pets-independent-ecommerce-quality-audit.pdf" download>Download the audit report (PDF, 2.5 MB)</a>
          </nav>
        </header>

        <Band id="summary" eyebrow="Results at a glance">
          <div className="cols audit-summary">
            <div className="body">
              <h2>Three priorities. A correct cart. One withdrawn concern.</h2>
              <ul className="audit-list">
                <li><b>Investigate first:</b> desktop hover overlap, mobile gallery control, and promotions covering content. All three carry provisional Medium priority.</li>
                <li><b>Verified:</b> Medium / White Gate / Signature Finish persisted in the cart. The 25% discount produced a $1,049.25 subtotal, before shipping and taxes.</li>
                <li><b>Withdrawn:</b> the sizing concern came from an incomplete test scenario. The store provided dimensions.</li>
              </ul>
              <p>This is a record of one walkthrough and its evidence. It doesn't establish a technical
              root cause, measured conversion impact, or an accessibility conformance result.</p>
              <a href="#fbl-009">Read the overlay finding and retest plan →</a>
            </div>
            <AuditCrop />
          </div>
        </Band>

        <Band id="scope" eyebrow="01 · The question and the method">
          <h2>Can you evaluate the product and carry the right choice to checkout?</h2>
          <p className="lede">For expensive pet furniture, the decision involves dimensions, materials,
          finishes, and delivery. I wanted to see whether a customer could find those details, inspect
          the product, and keep their selection intact across desktop and mobile.</p>
          <Meta items={[
            { term: "Auditor", detail: "Chloe Polk · Independent Product Quality & Ecommerce UX Auditor" },
            { term: "Platforms", detail: "Desktop Chrome and Chrome on iOS (iPhone)" },
            { term: "Selected variant", detail: "Medium / White Gate / Signature Finish" },
            { term: "Date", detail: "November 18, 2026" },
          ]} />
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
              I recorded the visible state and compared it with the task I was trying to complete.
              I was the only tester; this was my own walkthrough, without recruited participants.</p>
              <p>The scenario started with a hypothetical 20-pound dog. It didn't include body
              measurements. That mattered: weight alone wasn't enough to establish a sizing problem.</p>
              <p>The report and captures record the selected variant and cart amounts. Browser versions,
              iPhone model, and viewport sizes weren't recorded. The reproduction steps below are plans
              for controlled retesting; they don't claim a repeatable trigger was already established.</p>
              <h3>Where testing stopped</h3>
              <p>I opened checkout but didn't place an order. I had no access to analytics, storefront
              code, inventory logic, or customer research. This wasn't a comprehensive accessibility,
              performance, security, or full-site technical audit.</p>
            </div>
            <div className="side-card audit-copy">
              <h3>How to read the evidence</h3>
              <p><b>Screenshot-supported:</b> visible in a captured state.</p>
              <p><b>Tester-reported:</b> observed during the manual session.</p>
              <p><b>Recording-supported:</b> described in the report as supported by video.</p>
              <p><b>Opportunity:</b> a design recommendation that still needs validation.</p>
              <p className="foot">Priorities are provisional judgments about shopping friction. They
              aren't measured conversion impact. The five stills here are extracted from the original
              report; the recording isn't included on this page.</p>
            </div>
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

        <Band id="fbl-001" eyebrow="03 · FBL-001 · Medium · Screenshot-supported">
          <div id="findings" aria-hidden="true" />
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

        <Band id="fbl-006" eyebrow="04 · FBL-006 · Medium · Tester and recording-supported">
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

        <Band id="fbl-009" eyebrow="05 · FBL-009 · Medium · Screenshot-supported">
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
              <h3 id="fbl-007">FBL-007 · Product-specific enlargement · Low / explore</h3>
              <p>Tapping the product image didn't open a dedicated enlarged view during testing.
              Page-level zoom was possible. A gallery with zoom and manual navigation could help
              shoppers inspect materials and finishes. This is an enhancement opportunity.</p>
              <h3 id="fbl-002-003">FBL-002 / FBL-003 · Card separation and spacing · Low / design</h3>
              <p>Pale photography and similarly colored backgrounds give the cards subtle boundaries.
              Titles, descriptions, and prices also appear close to card edges. I'd test modest
              separation and consistent metadata padding while keeping Fable's minimalist aesthetic.</p>
              <h3 id="fbl-008">FBL-008 · Third-party panel styling · Low / design</h3>
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
              <h3 id="fbl-004">FBL-004 · Sizing concern withdrawn</h3>
              <p>The scenario specified a 20-pound dog without body measurements. The store supplied
              product dimensions. The gap was in my scenario, so I withdrew the proposed defect.</p>
              <h3 id="fbl-010">FBL-010 · Timer excluded as a defect</h3>
              <p>Checkout showed a roughly 10-minute order-secured countdown. It may reflect a
              legitimate inventory reservation. I didn't verify backend behavior and couldn't support
              a claim of deceptive urgency.</p>
            </div>
            <div>
              <h3 id="fbl-005">FBL-005 · Final-sale prominence unresolved</h3>
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
