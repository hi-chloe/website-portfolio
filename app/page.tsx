import { HeroLockup } from "@/components/HeroLockup";
import { Nav } from "@/components/Nav";
import { CopyEmail } from "@/components/CopyEmail";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <a className="skip" href="#work">Skip to work</a>
      <ReadingProgress />
      <Nav />
      <div className="home">
<header className="hero-home" id="top">
  <div className="hero-row">
    <div className="lockup-wrap">
      <HeroLockup lines={["hi, i'm", "chloe."]} />
    </div>
    <div className="portrait">
      <img src="/assets/chloe-portrait.webp" alt="Chloe Polk" width="1200" height="1200" fetchPriority="high" />
    </div>
  </div>
  <p className="sub">I've run Shopify and TikTok Shop merchant operations. Now I'm a technical product manager
  and product designer building enterprise AI tools people can actually use.</p>
  <div className="hero-foot">
    <span className="scroll">Selected work ↓</span>
  </div>
</header>

<section id="work">
  <div className="sec-head"><span>Selected work</span><span className="count">02 · 2026</span></div>

  <a className="row" href="/meridian" data-cursor="View">
    <span className="row-num">01</span>
    <span className="row-copy">
      <span className="row-title">Meridian, hospitality operations</span>
      <span className="row-desc">Anonymized client work. An AI decision-support system for multi-location
      operators. I built the whole spine: signal, incident, impact, recommendation, decision, action,
      outcome — including the state where Meridian doesn't have enough to go on and says so.</span>
      <span className="row-stats">
        <span><b>23</b> components</span>
        <span><b>63</b> variants</span>
        <span><b>74</b> tokens, <b>0</b> unused</span>
        <span><b>0</b> WCAG AA failures</span>
        <span><b>41</b> linked screens</span>
      </span>
    </span>
    <span className="tags">
      <span className="tag">Client work</span>
      <span className="tag">Design systems</span>
      <span className="tag">AI &amp; agents</span>
      <span className="tag">Product</span>
      <span className="tag">Accessibility</span>
    </span>
  </a>


  <a className="row" href="/typeshelf" data-cursor="View">
    <span className="row-num">02</span>
    <span className="row-copy">
      <span className="row-title">Typeshelf, a local font viewer</span>
      <span className="row-desc">A font viewer that reads, parses, and renders everything in the browser. No upload, no server, no account.</span>
      <span className="row-stats">
        <span><b>7.1k</b> lines, solo</span>
        <span><b>5</b> schemes &times; 2 modes</span>
        <span><b>12</b> a11y findings, resolved</span>
        <span><b>14.6:1</b> min body contrast</span>
          <span>typeshelf.vercel.app</span>
      </span>
    </span>
    <span className="tags">
      <span className="tag live">Live</span><span className="tag">Product</span><span className="tag">Front-end</span>
      <span className="tag">Typography</span><span className="tag">Accessibility</span>
    </span>
  </a>

  <div className="index-foot">More work in progress. Tags become filters once there's enough to filter.</div>
</section>

<section id="about" className="about">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Chloe Polk",
        jobTitle: "Technical Product Manager - UI/UX Specialist",
        url: "https://hichloe.me",
        email: "mailto:chloe@hichloe.me",
        address: { "@type": "PostalAddress", addressLocality: "St. Louis", addressRegion: "MO", addressCountry: "US" },
        sameAs: [
          "https://www.linkedin.com/in/chloe-polk",
          "https://github.com/hi-chloe",
        ],
        worksFor: { "@type": "Organization", name: "Prosera, Inc." },
      }),
    }}
  />
  <div className="sec-head"><span>About</span><span className="count">St. Louis, MO</span></div>
  <div className="about-grid">
    <div>
      <p className="lead">I came to product through the work of running a business: catalogs,
      promotions, orders, and live sales. Now I build tools for people doing that work.</p>

      <p>At Going Twice, I worked hands-on in Shopify and TikTok Shop Seller Center,
      managing catalog and promotion work across 1,800+ products. When a listing, price, or
      workflow caused trouble, I was one of the people who had to sort it out.</p>

      <p>Today I'm a Technical Product Manager - UI/UX Specialist at Prosera. I work on
      enterprise AI products for supply chain teams, from customer discovery and interface
      design in Figma to working features in Cursor alongside engineering. I present prototypes
      in live customer conversations and iterate in real time as people explain what they need.</p>

      <div className="nda" aria-label="Selected experience">
        <p><b>6 functional demo prototypes</b> built for third-party logistics (3PL), retail,
        and logistics workflows. These gave customers something they could try and respond to.</p>
        <p><b>A global logistics engagement progressed to proof of concept.</b> My work included
        customer discovery, prototyping, and iteration with feedback from those conversations.</p>
        <p><b>1,800+ products.</b> Hands-on merchant operations inform how I approach the
        catalog, promotion, and day-to-day decisions behind an interface.</p>
      </div>

      <p>The demos were built for discovery and evaluation. Their next steps depended on what
      customers needed and what we learned together. That feedback also shaped my work on
      agent behavior and output accuracy.</p>

      <p>Before ecommerce, I worked in operations and accounting on a $46M military housing
      contract. Those roles taught me to ask who needs to act, what information they're missing,
      and what happens when a tool gets in their way.</p>

      <p>Outside work, I'm a cat mom of three and a lifelong nerd: art, games, trading cards,
      and tabletop. I like puzzles and learning by building. The case studies here keep the
      parts I got wrong so you can see how the work changed.</p>
    </div>

    <aside className="cv">
      <h3>Experience</h3>
      <div className="cv-item">
        <span><span className="cv-role">Technical Product Manager - UI/UX Specialist</span>
        <span className="cv-org">Prosera, Inc.</span></span>
        <span className="cv-when">2025 &rarr; now</span>
      </div>
      <div className="cv-item">
        <span><span className="cv-role">Office Administrator</span>
        <span className="cv-org">Maintenance Man Unlimited</span></span>
        <span className="cv-when">2024 – 25</span>
      </div>
      <div className="cv-item">
        <span><span className="cv-role">Ecommerce Operations &amp; Livestream Sales Lead</span>
        <span className="cv-org">Going Twice, Inc.</span></span>
        <span className="cv-when">2021 – 24</span>
      </div>
      <div className="cv-item">
        <span><span className="cv-role">Service Coordinator, Accounting</span>
        <span className="cv-org">Lincoln Property Company</span></span>
        <span className="cv-when">2019 – 21</span>
      </div>
      <div className="cv-skills">
        <span className="tag">Figma</span><span className="tag">Cursor</span><span className="tag">Design systems</span>
        <span className="tag">Prompt engineering</span><span className="tag">Prototyping</span>
        <span className="tag">Illustrator</span><span className="tag">Photoshop</span>
      </div>
    </aside>
  </div>
</section>

<section id="contact" className="contact">
  <div className="sec-head"><span>Contact</span><span className="count">Central Time</span></div>
  <div className="contact-body">
    <h2>Let's build something people can actually operate.</h2>
    <ContactForm fallback="chloe@hichloe.me" />
    <div className="contact-alt">
      <span>Or skip the form.</span>
      <CopyEmail address="chloe@hichloe.me" />
    </div>
    <div className="contact-meta">
      <a href="https://www.linkedin.com/in/chloe-polk" target="_blank" rel="noopener noreferrer" data-cursor="Open">LinkedIn</a>
      <a href="/chloe-polk-resume.pdf" target="_blank" rel="noopener" data-cursor="Open">Résumé (PDF)</a>
    </div>
  </div>
</section>
      </div>
      <footer>
        <span>Chloe Polk · Technical Product Manager &amp; Product Designer</span>
        <span>hichloe.me · © 2026</span>
      </footer>
    </>
  );
}
