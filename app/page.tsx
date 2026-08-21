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
      <HeroLockup lines={["hi, i'm", "chloe"]} />
    </div>
    <div className="portrait">
      <img src="/assets/chloe-portrait.webp" alt="Chloe Polk" width="440" height="440" fetchPriority="high" />
    </div>
  </div>
  <p className="sub">I design the interface layer for enterprise AI products: the part that decides
  whether someone who isn't an engineer can actually run the thing.</p>
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
      <span className="row-desc">An AI decision-support system for multi-location operators. I built the
      whole spine: signal, incident, impact, recommendation, decision, action, outcome. That includes
      the state where Meridian doesn't have enough to go on and says so.</span>
      <span className="row-stats">
        <span><b>23</b> components</span>
        <span><b>63</b> variants</span>
        <span><b>74</b> tokens, <b>0</b> unused</span>
        <span><b>0</b> WCAG AA failures</span>
        <span><b>41</b> linked screens</span>
      </span>
    </span>
    <span className="tags">
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
        jobTitle: "UI/UX Product Specialist",
        url: "https://hichloe.me",
        email: "mailto:chloe@hichloe.me",
        address: { "@type": "PostalAddress", addressLocality: "Tacoma", addressRegion: "WA" },
        sameAs: [
          "https://www.linkedin.com/in/chloe-polk",
          "https://github.com/hi-chloe",
        ],
        worksFor: { "@type": "Organization", name: "Prosera, Inc." },
      }),
    }}
  />
  <div className="sec-head"><span>About</span><span className="count">Tacoma, WA</span></div>
  <div className="about-grid">
    <div>
      <p className="lead">I'm Chloe. I design the parts of AI products where a person has to decide
      whether to trust the machine.</p>

      <p>Right now that's at Prosera, where we build multi-agent AI systems for supply
      chain teams. I own the redesign of the product interface: I design in Figma, build
      features in Cursor alongside engineering, and tune how the agents behave and how
      accurate their output is. I'm in the client meetings, and I present the prototypes
      myself. I trained in prompt engineering under former Stanford AI faculty.</p>

      <p>Before this I spent four years at a collectibles company that grew from 8 people to 50+,
      running creative production and hosting live broadcasts. Before that, operations and
      accounting on a $46M military housing contract.</p>

      <p><b>It's a weird path into design. I know.</b> I've spent years inside
      the messy operational workflows enterprise software is supposed to fix. When I'm designing
      for someone making a call under pressure with half the information, I've been that person.</p>

      <p>A bit more about me. I'm a cat mom of four and a lifelong nerd: art, games, trading cards,
      tabletop. Four years at a collectibles company was not a coincidence.</p>

      <p>I like puzzles and anything that makes me sit with a problem longer than is comfortable.
      I'm a permanent student about most things, which is why the case studies here keep the parts
      I got wrong.</p>
    </div>

    <aside className="cv">
      <h3>Experience</h3>
      <div className="cv-item">
        <span><span className="cv-role">UI/UX &amp; Product Development, Sales &amp; Marketing</span>
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
  <div className="sec-head"><span>Contact</span><span className="count">Pacific Time</span></div>
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
        <span>Chloe Polk · UI/UX Product Specialist</span>
        <span>hichloe.me · © 2026</span>
      </footer>
    </>
  );
}
