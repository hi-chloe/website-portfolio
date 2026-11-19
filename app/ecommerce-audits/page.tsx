import { EditorialArt } from "@/components/EditorialArt";
import { pageMetadata } from "@/lib/pageMetadata";
import { Nav } from "@/components/Nav";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Band, Meta } from "@/components/Band";
import { ContactForm } from "@/components/ContactForm";
import { CopyEmail } from "@/components/CopyEmail";
import { AuditCrop } from "@/components/AuditCrop";
import { PortfolioFooter } from "@/components/PortfolioFooter";

const title = "Independent ecommerce audits · Chloe Polk";
const description = "A structured, independent review of your storefront's shopping journey. Desktop and mobile observations, screenshot evidence, and practical recommendations. Pilot health checks starting at $349 USD.";
export const metadata = pageMetadata({
  title, description, path: "/ecommerce-audits", type: "website",
  image: { url: "/og-ecommerce-audits.png", alt: "Storefront Health Check by Chloe Polk. Evidence-led desktop and mobile reviews. Introductory pilot starting at $349 USD." },
});

export default function EcommerceAudits() {
  return (
    <>
      <a className="skip" href="#health-check">Skip to audit scope</a>
      <ReadingProgress />
      <Nav back />
      <main className="audit-page">
        <header className="band hero">
          <div className="eyebrow">Independent ecommerce audits</div>
          <h1>Storefront Health Check</h1>
          <p className="lede">I help ecommerce brands find usability issues, quality problems, and
          shopping friction through structured storefront reviews. You get a clear record of what
          happened, why it matters, and what to investigate next.</p>
          <Meta items={[
            { term: "Service", detail: "Storefront Health Check" },
            { term: "Pilot pricing", detail: <><b>Starting at $349 USD</b></> },
            { term: "Focus", detail: "One agreed shopping journey, desktop and mobile" },
            { term: "Deliverable", detail: "Prioritized findings and a concise report" },
          ]} />
          <p className="prov">Introductory pilot. We'll agree on the journey, timing, and final price
          before work begins.</p>
          <div className="links">
            <a className="btn primary" href="#inquire">Inquire about a Storefront Health Check →</a>
            <a className="btn" href="/fable-audit">See the Fable Pets audit →</a>
          </div>
          <div className="cols audit-sample">
            <div className="body">
              <div className="eyebrow">Sample finding · FBL-009</div>
              <h2>A promotion covers a navigation link</h2>
              <p>In my independent Fable Pets walkthrough, the “Want 10% off?” prompt covered part
              of a mobile menu item. I assigned provisional Medium priority and recommended suppressing
              promotions while navigation is open, then retesting at multiple mobile widths.</p>
              <p>The screenshot supports the obstruction. Its frequency and technical cause still need
              investigation. Fable Pets didn't commission the audit or implement recommendations through this work.</p>
              <a href="/fable-audit#fbl-009">Inspect the full finding and evidence →</a>
            </div>
            <AuditCrop />
          </div>
        </header>

        <Band id="health-check" eyebrow="01 · Storefront Health Check">
          <h2>For the details you stop noticing in your own store</h2>
          <p className="lede">If you're running a storefront, you already know how it's supposed to
          work. An independent review follows it as a shopper would: finding a product, understanding
          the options, and checking that the right selection reaches the cart.</p>
          <div className="cols">
            <div className="body">
              <h3>What you receive</h3>
              <ul className="audit-list">
                <li>A review of the key shopping journey we agree on.</li>
                <li>Desktop and mobile usability observations.</li>
                <li>Product discovery and product-page evaluation.</li>
                <li>Variant selection, cart, and checkout-entry review.</li>
                <li>Prioritized findings with supporting screenshots and reproduction details.</li>
                <li>Actionable recommendations and suggested follow-up checks.</li>
                <li>A concise final report that separates observed problems from design opportunities.</li>
              </ul>
              <div className="links">
                <a className="btn" href="/reports/fable-pets-independent-ecommerce-quality-audit.pdf" target="_blank" rel="noopener noreferrer">View a sample audit report (PDF) ↗</a>
              </div>
              <p className="prov">This sample is independent, unsolicited portfolio research.
              Fable Pets didn't commission or endorse it.</p>
            </div>
            <div className="side-card audit-copy">
              <h3>Where this is useful</h3>
              <p>You want an outside view of a shopping path before a promotion, after a storefront
              change, or when a product page feels harder to use than it should.</p>
              <p>I bring hands-on Shopify and TikTok Shop merchant operations experience alongside
              product design and technical product work. The review considers both the interface
              and the choice a customer is trying to make.</p>
              <p className="foot">The pilot keeps the scope focused. We'll confirm the products,
              devices, and journey together before starting.</p>
            </div>
          </div>
        </Band>

        <Band id="process" eyebrow="02 · How it works">
          <h2>Agree on a path. Test it. Keep the evidence.</h2>
          <div className="cols editorial-split">
          <ol className="ladder">
            <li><span className="k">01</span><div><b>Tell me about your storefront</b><p>Send your
              store URL, the products or journey you want reviewed, and any concerns you already
              have. I'll confirm fit, scope, timing, and price with you.</p></div></li>
            <li><span className="k">02</span><div><b>Walk the shopping journey</b><p>I review the
              agreed tasks on desktop and mobile, capture visible states, and check that product
              choices and pricing carry through to cart and checkout entry. No purchase is placed
              as part of the standard health check.</p></div></li>
            <li><span className="k">03</span><div><b>Receive a practical report</b><p>You'll see
              what worked, what needs attention, what I couldn't confirm, and where I'd start.
              Findings include evidence and suggested next checks so your team can investigate.</p></div></li>
          </ol>
          <EditorialArt kind="audit" />
          </div>
        </Band>

        <Band eyebrow="03 · A worked example">
          <h2>See how I separate an issue from an assumption</h2>
          <p className="lede">The Fable Pets case study follows discovery through checkout entry.
          It documents image and overlay behavior, verifies the cart math, and explains why a sizing
          concern was withdrawn when the test scenario didn't support it.</p>
          <p className="prov">Fable Pets was independent, unsolicited portfolio research. It wasn't
          commissioned client work, and no changes were made to the storefront.</p>
          <div className="links"><a className="btn" href="/fable-audit">Read the Fable Pets case study →</a></div>
        </Band>

        <Band eyebrow="04 · Boundaries">
          <h2>A focused review with clear limits</h2>
          <div className="close-grid">
            <div>
              <h3>What's outside this service</h3>
              <ul>
                <li>Comprehensive WCAG certification or a conformance claim.</li>
                <li>Security penetration testing.</li>
                <li>Code implementation or production storefront changes.</li>
                <li>A full-site technical, SEO, or performance audit.</li>
              </ul>
            </div>
            <div>
              <h3>What the report can tell you</h3>
              <p>It identifies observed friction and recommends next steps within the agreed journey.
              It doesn't guarantee conversion improvements, revenue gains, or a defect-free store.</p>
              <p>Priorities are based on the evidence available during the review. Your team can use
              them to guide investigation and validate changes with customers.</p>
            </div>
          </div>
        </Band>

        <section className="band contact audit-inquiry" id="inquire">
          <div className="sec-head"><span>Start a conversation</span><span className="count">Central Time</span></div>
          <div className="contact-body">
            <h2>What's worth a closer look in your store?</h2>
            <p className="lede">Share your store URL, the shopping path you'd like reviewed, and any
            timing constraints. I'll reply to confirm whether the health check is a fit. Sending an
            inquiry doesn't book or purchase an audit.</p>
            <ContactForm fallback="chloe@hichloe.me" defaultSubject="Storefront Health Check inquiry" submitLabel="Send audit inquiry" />
            <div className="contact-alt"><span>Or email me directly.</span><CopyEmail address="chloe@hichloe.me" /></div>
          </div>
        </section>
        <div className="next"><span>More about my work</span><a href="/#work" data-cursor="View">Browse the portfolio →</a></div>
      </main>
      <PortfolioFooter label="Independent ecommerce audits" />
    </>
  );
}
