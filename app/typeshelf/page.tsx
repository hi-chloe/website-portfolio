import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ReadingProgress } from "@/components/ReadingProgress";
import { LiveEmbed } from "@/components/LiveEmbed";

export const metadata: Metadata = {
  title: "Typeshelf, a font viewer that never uploads your fonts · Chloe Polk",
  description: "Typeshelf is a client-side font viewer. Case study by Chloe Polk.",
  openGraph: {
    title: "Typeshelf, a font viewer that never uploads your fonts · Chloe Polk",
    description: "Typeshelf is a client-side font viewer. Case study by Chloe Polk.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "hi, i'm chloe" }],
  },
};

export default function Typeshelf() {
  return (
    <>
      <a className="skip" href="#try">Skip to the live app</a>
      <ReadingProgress />
      <Nav back />
      <main>
<header className="band hero">
    <div className="eyebrow">Shipped · Open source · Solo build</div>
    <h1>A font viewer that never uploads your fonts</h1>
    <p className="lede">Typeshelf loads a whole directory of type at once, sorts it for you, and hands you
    the specimen controls: size, spacing, color, background. Every font file gets read, parsed, and
    rendered in your browser. Nothing is sent anywhere, because there's no server to send it to.</p>

    <dl className="meta">
      <div><dt>Role</dt><dd>Solo. Product, UX, visual, code</dd></div>
      <div><dt>Scope</dt><dd><b>~7,100</b> lines TS/TSX · <b>19</b> components · <b>5</b> test suites</dd></div>
      <div><dt>Stack</dt><dd>Next.js · TypeScript · Tailwind v4 · WASM WOFF2 decode</dd></div>
      <div><dt>Status</dt><dd><b>Live</b> at typeshelf.vercel.app · MIT, source public</dd></div>
    </dl>

    <figure>
      <div className="shot">
        <img src="/assets/typeshelf-library.webp" alt="Typeshelf with a font folder loaded and sorted into Serif, Sans-serif and Monospace, previewing DejaVu Serif at 48px" width="1920" height="916" loading="eager" />
      </div>
      <figcaption>A folder of fonts, read and sorted into categories without being asked. The variant
      chips list only the weights that were really there: DejaVu Serif loaded a Book, an
      Italic and a Bold, so that is what you get.</figcaption>
    </figure>
  </header>


  <section className="band" id="try">
    <div className="eyebrow">Try it</div>
    <h2>The real thing, running here</h2>
    <p className="lede">That frame below is the deployed app, and you can use it. Click <b>Load 3 sample
    fonts</b>, or drag a font off your desktop into it. The file gets read in your browser and
    goes nowhere.</p>
    <LiveEmbed src="https://typeshelf.vercel.app/" host="typeshelf.vercel.app" />
    <p className="figcaption">Drag-and-drop and the bundled samples work inside the
    frame. "Load my installed fonts" needs a top-level window, so use the tab for that.</p>
  </section>

  <section className="band" id="why">
    <div className="eyebrow">Why it exists</div>
    <h2>Picking type from a folder means opening files one at a time</h2>
    <div className="cols">
      <div className="body">
        <p>Every OS font viewer shows you one file, at one size, saying one fixed sentence. If
        you're choosing between forty faces you open forty windows, and you still can't see them
        against the background you'll actually use.</p>
        <p>The web tools that fix this want you to upload. If you don't hold the redistribution
        rights to a font, you shouldn't be casually handing it to someone else's server.</p>
        <p>So the whole product is one constraint: load the folder, drive the specimen, and never
        move the bytes.</p>
      </div>
      <aside className="side-card">
        <h4>What it reads</h4>
        <div className="chips">
          <span className="chip">.ttf</span><span className="chip">.otf</span><span className="chip">.woff</span>
          <span className="chip">.woff2</span><span className="chip">.ttc</span>
        </div>
        <p className="foot">Plus the Local Font Access API on Chrome and Edge, which hands over every font
        already installed on the machine. Often 300 to 1,000+ faces.</p>
      </aside>
    </div>

    <figure>
      <div className="shot">
        <img src="/assets/typeshelf-empty.webp" alt="Typeshelf's empty state: a drop zone, a Load 3 sample fonts button, and an empty library panel" width="1920" height="916" loading="lazy" />
      </div>
      <figcaption>The zero state has to answer "what do I do now" with no library to show. A drop
      target for files you already have, and three bundled fonts for anyone who just wants
      to watch it work.</figcaption>
    </figure>
  </section>

  <section className="band">
    <div className="eyebrow">The constraint</div>
    <h2>There is no server, and that shapes everything</h2>
    <p className="lede">Font bytes never get persisted and never leave the browser. The only thing stored
    is how you organized things: favorites, custom categories, theme, specimen settings. All of that
    lives in <code>localStorage</code>.</p>
    <p className="body" style={{marginTop: '20px'}}>That constraint decides how the thing is built. All the
    parsing has to happen in the browser, so the app ships its own sfnt table reader for TTF and
    OTF metadata. It decompresses WOFF2 through WebAssembly just to read the same OS/2 and name
    tables. Preview still hands the <b>original</b> WOFF2 bytes to <code>FontFace</code>, since
    browsers decode those natively and re-encoding them would be work for nothing.</p>
    <div className="callout">
      <p>Storage sits behind a <code>PreferencesStore</code> interface so a backend could be added
      without touching a single call site. None is implemented. The default build makes no network
      requests for user data at all.</p>
      <span className="who">Persistence, designed to stay optional</span>
    </div>
  </section>

  <section className="band">
    <div className="eyebrow">Classification</div>
    <h2>Sorting a folder you've never seen</h2>
    <p className="lede">Fonts arrive with no reliable category. Some carry good metadata, plenty carry
    none, and a few lie. So classification runs as a ladder. Each rung only answers when it
    actually knows, and hands down when it doesn't.</p>
    <ol className="ladder">
      <li><span className="k">01</span><div><b>Fixed pitch flag</b>
        <p>The <code>post</code> table says outright whether every glyph is the same width. If
        it's set, it's Monospace. Nothing downstream can override that.</p></div></li>
      <li><span className="k">02</span><div><b>PANOSE</b>
        <p>Family Kind settles Script, Display, and Symbol on its own. For Latin Text, the Serif
        Style digit splits serif shapes from sans, and that includes flared and rounded, which read
        as sans and usually get miscategorized.</p></div></li>
      <li><span className="k">03</span><div><b>OS/2 family class</b>
        <p>IBM's classification, mapped down to the five buckets. Ornamental and Symbolic classes
        are protected, so Latin Text PANOSE isn't allowed to overrule them.</p></div></li>
      <li><span className="k">04</span><div><b>Name keywords</b>
        <p>Last resort. <code>mono</code>, <code>code</code>, <code>courier</code>, and the
        handful of families whose names are more reliable than their tables.</p></div></li>
      <li><span className="k">05</span><div><b>Other</b>
        <p>When nothing above answers, the font goes to Other. You can go find a font in Other.
        You'll never think to look for a serif under Script.</p></div></li>
    </ol>
  </section>

  <section className="band">
    <div className="eyebrow">The rule I'd defend hardest</div>
    <h2>It won't fake a weight it doesn't have</h2>
    <p className="lede">Browsers will happily synthesize a bold by smearing the outline, and an italic
    by shearing it. Both look approximately right and are typographically wrong.</p>
    <p className="body" style={{marginTop: '20px'}}>Typeshelf only offers the variants it actually loaded.
    Drop in DejaVu Serif Regular, Bold, and Italic and you get three chips. Drop in Regular alone
    and you get one. No grayed-out Bold hinting something is missing, and no fake one pretending
    something is there.</p>
    <div className="callout">
      <p>This is the same call as the low-confidence state in Meridian, in a much smaller box. A
      tool that fabricates what it doesn't know is a tool you have to double-check.</p>
      <span className="who">The thread between both projects</span>
    </div>
    <figure>
      <div className="shot">
        <img src="/assets/typeshelf-picker.webp" alt="The specimen color picker open, showing presets, an HSV field, hex, RGB and CMYK inputs, and a live contrast ratio of 15.2:1 AAA" width="1440" height="900" loading="lazy" />
      </div>
      <figcaption>The specimen colors carry a live contrast ratio. You're picking type against a
      real background, so the app tells you what that pairing actually scores.</figcaption>
    </figure>
  </section>

  <section className="band">
    <div className="eyebrow">Theming</div>
    <h2>Five schemes, two modes, one token file</h2>
    <p className="lede">A scheme changes the neutrals as well as the accent, so every surface moves when
    you switch. That means re-checking every color pair in every theme. Ten full palettes.</p>
    <pre>data-scheme × data-mode  →  CSS custom properties
<b>no</b> dark: variants in components
<b>no</b> Tailwind palette classes anywhere
<b>no</b> raw color literals outside two documented exceptions</pre>
    <p className="body" style={{marginTop: '22px'}}>Every token pair carries its computed contrast ratio
    as a comment in <code>globals.css</code>. Body text clears <b>14.6:1</b> in light and
    <b>15.2:1</b> in dark, which is AAA.</p>
    <figure>
      <div className="shot">
        <img src="/assets/typeshelf-themes.webp" alt="Matrix of five color schemes rendered in both light and dark mode, each showing its own contrast ratio" width="1400" height="1774" loading="lazy" />
      </div>
      <figcaption>Ember, Azure, Verdant, Amethyst, and Garnet, light and dark. Every tile reports
      its own live contrast readout, and the lowest one here is 14.6:1.</figcaption>
    </figure>
    <div className="callout">
      <p>CI fails the build on a Tailwind palette class, a raw color literal, or a DOM id built
      from a template string. Each rule exists because that exact thing already broke once in this
      repo.</p>
      <span className="who">What CI refuses to let through</span>
    </div>
  </section>

  <section className="band">
    <div className="eyebrow">Accessibility</div>
    <h2>Twelve findings, and I kept the write-up</h2>
    <p className="lede">I audited it against WCAG 2.1 AA by reviewing every component and recomputing
    every color pair by hand with the relative-luminance formula. Twelve findings, all resolved.
    The write-up keeps what was wrong, because that's the useful part.</p>
    <table className="audit">
      <thead><tr><th scope="col">#</th><th scope="col">Finding</th><th scope="col">SC</th></tr></thead>
      <tbody>
        <tr><td>B1</td><td>A 1,000-face library meant up to 1,200 tab stops before a keyboard user reached the controls</td><td>2.4.1</td></tr>
        <tr><td>B2</td><td>Ids built from family names collided when a font appeared in two sections, orphaning labels</td><td>1.3.1</td></tr>
        <tr><td>B3</td><td>Popovers announced <code>role="dialog"</code> but never moved focus</td><td>4.1.2</td></tr>
        <tr><td>M4</td><td>Focus ring was a hue-only border change, <b>1.03:1</b> between states</td><td>2.4.7</td></tr>
        <tr><td>M5</td><td>Category assignment appeared on hover only, so it didn't exist on touch</td><td>1.4.13</td></tr>
        <tr><td>m8</td><td>Selection check sat at 2.38:1 on the gold stop of the color spectrum</td><td>1.4.11</td></tr>
      </tbody>
    </table>
    <p className="body" style={{marginTop: '18px'}}>Six of twelve shown. B1 got fixed with three skip links.
    I could have moved the settings above the font list instead, but that puts the page out of
    meaningful sequence just to save someone a tab.</p>

    <figure>
      <div className="shot">
        <img src="/assets/typeshelf-skiplink.webp" alt="The first Tab press revealing the skip link" width="1440" height="900" loading="lazy" />
      </div>
      <figcaption>First Tab. Distance to any region is now fixed at one, no matter how many fonts
      are loaded.</figcaption>
    </figure>

    <div className="callout">
      <p>B3 got recorded as fixed after I checked one component. A second component used the
      identical pattern and hadn't been touched at all. I only found it later, while I was in that
      file for something unrelated. Verifying a pattern means finding every instance of it.
      Grepping the whole tree is part of the check now.</p>
      <span className="who">What I got wrong</span>
    </div>
  </section>

  <section className="band">
    <div className="eyebrow">Dark mode</div>
    <h2>The second theme had to be free</h2>
    <figure style={{marginTop: '0'}}>
      <div className="shot">
        <img src="/assets/typeshelf-dark.webp" alt="Typeshelf in dark mode, contrast readout at 14.8:1 AAA" width="1440" height="900" loading="lazy" />
      </div>
      <figcaption>Collapsed settings sections unmount their contents instead of hiding them. Content
      that's visually hidden but still focusable is a keyboard trap you can tab into and never see.</figcaption>
    </figure>
  </section>

  <section className="band">
    <div className="eyebrow">Result</div>
    <h2>What you can actually use</h2>
    <p className="lede">One constraint, followed all the way down. "Nothing leaves your browser" is easy
    to put on a landing page. Here it shows up in how the files are parsed, how the categories are
    decided, how the tokens resolve, and what CI is allowed to fail you for.</p>
    <div className="close-grid">
      <div>
        <h4>What I'd do next</h4>
        <ul>
          <li>Test whether anyone notices that variants are load-only, or whether a missing Bold just reads as broken.</li>
          <li>Virtualize the list. 1,000 faces from the Local Font Access API is a lot of DOM.</li>
          <li>Specimen presets: paragraph, numerals, and a real pangram set instead of one sentence.</li>
        </ul>
      </div>
      <div>
        <h4>Known limitations</h4>
        <ul>
          <li>Contrast is verified. Keyboard and screen reader flows are only partly verified.</li>
          <li>Local Font Access is Chrome and Edge only; everywhere else is drag-and-drop.</li>
          <li>Classification is Latin-centric. A CJK or Arabic library will land mostly in Other.</li>
        </ul>
      </div>
    </div>
    <div className="links">
      <a className="btn primary" href="https://typeshelf.vercel.app/" target="_blank" rel="noopener noreferrer" data-cursor="Open">Open Typeshelf &rarr;</a>
      <a className="btn" href="https://github.com/hi-chloe/typeshelf" target="_blank" rel="noopener noreferrer" data-cursor="Open">Source on GitHub</a>
      <a className="btn" href="https://github.com/hi-chloe/typeshelf/blob/main/docs/ACCESSIBILITY_AUDIT.md" target="_blank" rel="noopener noreferrer" data-cursor="Open">Read the full audit</a>
    </div>
  </section>

  <div className="next">
    <span>Next</span>
    <a href="/meridian" data-cursor="View">Meridian, hospitality operations &rarr;</a>
  </div>
      </main>
      <footer>
        <span>Typeshelf · MIT · Chloe Polk</span>
        <span>hichloe.me · © 2026</span>
      </footer>
    </>
  );
}
