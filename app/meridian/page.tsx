import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ReadingProgress } from "@/components/ReadingProgress";

export const metadata: Metadata = {
  title: "Meridian, hospitality operations · Chloe Polk",
  description:
    "An AI decision-support system for multi-location hospitality operations. Case study by Chloe Polk.",
  openGraph: {
    title: "Meridian, hospitality operations · Chloe Polk",
    description:
      "An AI decision-support system for multi-location hospitality operations. Case study by Chloe Polk.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "hi, i'm chloe" }],
  },
};

export default function Meridian() {
  return (
    <>
      <a className="skip" href="#problem">Skip to case study</a>
      <ReadingProgress />
      <Nav back />
      <main>
{/* 01 ---------------------------------------------------------------- */}
  <header className="band hero">
    <div className="eyebrow">Product design · Multi-location hospitality</div>
    <h1>From scattered signals to a decision someone can defend</h1>
    <p className="lede">Meridian is an AI-assisted ops platform for multi-location hospitality. It catches
    problems early, explains what they'll cost in terms you can check yourself, and helps regional teams
    approve a response. The system does the prep. A person still makes the call.</p>

    <dl className="meta">
      <div><dt>Role</dt><dd>Product strategy, UX, interaction and visual design</dd></div>
      <div><dt>Scope</dt><dd><b>7 screens</b> incl. edge states, light and dark · <b>23-component</b> system</dd></div>
      <div><dt>Domain</dt><dd>Multi-location hospitality operations</dd></div>
      <div><dt>Status</dt><dd>Self-directed build, <b>not user tested</b>. The problems it
      works through are from client work I can't show</dd></div>
    </dl>

    <figure>
      <div className="shot">
        <img src="/assets/meridian-hero.webp" alt="Meridian Control Tower overview screen" width="1160" height="825" loading="eager" />
      </div>
    </figure>
  </header>

  {/* 02 ---------------------------------------------------------------- */}
  <section className="band" id="problem">
    <div className="eyebrow">The operating reality</div>
    <h2>There's no shortage of data. The hard part is knowing what it means.</h2>
    <div className="cols">
      <div className="body">
        <p>A regional director might run ten venues, or fifty. The job is working out which changes
        matter, which locations need help, what it costs if nobody acts, and getting a response moving
        before service starts.</p>
        <p>The signals that answer those questions already exist. They're just spread across eight
        systems that don't talk to each other, and none of them knows what the others saw.</p>
        <p>Most tools show you a metric or fire an alert, then leave you to piece the situation together
        yourself. Usually while guests are already feeling it.</p>
      </div>
      <aside className="side-card">
        <h4>Where the signals live</h4>
        <div className="chips">
          <span className="chip">Point of sale</span><span className="chip">Labor scheduling</span>
          <span className="chip">Inventory</span><span className="chip">Equipment &amp; maintenance</span>
          <span className="chip">Guest feedback</span><span className="chip">Reservations</span>
          <span className="chip">Demand forecast</span><span className="chip">Weather</span>
          <span className="chip">Local events</span><span className="chip">Messages from GMs</span>
        </div>
        <p className="foot">Ten sources. No shared definition of normal. No shared owner.</p>
      </aside>
    </div>
  </section>

  {/* --------------------------------------------------------------- */}
  <section className="band">
    <div className="eyebrow">Where this comes from</div>
    <h2>What I learned on a product I can&apos;t show you</h2>
    <p className="lede">Meridian is my own build, so none of this was learned by shipping
    Meridian. It came from an enterprise AI product I worked on with a team, in a different
    industry, under an agreement that means I can&apos;t show it. Three things from that work
    decided how Meridian is shaped.</p>

    <div className="callout">
      <p>How can I trust this? Where are these numbers from? This is great in theory, but
      what can I actually do with it?</p>
      <span className="who">The three questions that come up in almost every client meeting</span>
    </div>

    <ol className="ladder lessons">
      <li><span className="k">01</span><div><b>The demo was built to sell, and I was redesigning it to use</b>
        <p>The prototype clients first saw was built by our sales team to gauge interest,
        and it did that job. It showed everything the product could do at once: every input,
        every step of the reasoning, every caveat. That is the right instinct in a pitch and
        the wrong one for someone opening the tool on a Tuesday. My work was the redesign,
        which meant deciding what a person needs at a glance and what they only need on
        demand.</p>
        <p><b>In Meridian:</b> the band at the top of an incident carries four figures and
        nothing else. The reasoning behind them sits behind a <i>Why this reading</i> control.</p></div></li>

      <li><span className="k">02</span><div><b>We understood human-in-the-loop as a checkpoint before we understood it as trust</b>
        <p>The first pass reasoned about approval from the system&apos;s side: where does the
        pipeline need a person to sign off before it continues. That is a technical question
        and it produces a technical answer, which is one gate at the end. What clients kept
        telling us is that they will not act on a number they can&apos;t source, and they will
        not approve a plan wholesale when they are accountable for each piece of it. Approval
        is how someone builds a case they can defend to their own boss.</p>
        <p><b>In Meridian:</b> approval is per action rather than per plan, so the recommended
        response reads <i>4 actions, 2 need your approval</i>. Every impact figure carries its
        own math, and the block naming what weakens a reading sits on the same screen as the
        evidence supporting it.</p></div></li>

      <li><span className="k">03</span><div><b>We built past the brief</b>
        <p>The action view originally animated the steps of a plan so you could watch the
        sequence unfold. It was the most sophisticated thing in the build, and users told us
        it was confusing. The client had been clear from the start that they wanted something
        clean and simple enough for anyone in the company to navigate, and we had built
        something that needed explaining. It came out.</p>
        <p>That trade costs something. The plain list shows four actions with no visible order
        or dependency between them, so the sequence lives in the wording rather than in the
        structure. We took it anyway. A feature that fights the brief is impressive and still
        wrong.</p>
        <p><b>In Meridian:</b> Recommendation Review is a flat list of four actions.</p></div></li>
    </ol>
  </section>

  {/* 03 ---------------------------------------------------------------- */}
  <section className="band">
    <div className="eyebrow">The design challenge</div>
    <p className="lede">Operators need enough to make a real decision. Show them every signal and you get
    noise, slower responses, and a system nobody trusts.</p>
    <div className="challenges">
      <div><span className="n">01</span><h3>Surfacing</h3>
        <p>How do you surface the right issue without burying it in everything else the system noticed?</p></div>
      <div><span className="n">02</span><h3>Reasoning</h3>
        <p>How does AI explain itself without a wall of text nobody reads mid-service?</p></div>
      <div><span className="n">03</span><h3>Consequence</h3>
        <p>How do you make cost concrete without faking precision you don't have?</p></div>
      <div><span className="n">04</span><h3>Accountability</h3>
        <p>How does approval stay fast enough to use and slow enough to mean something?</p></div>
    </div>
  </section>

  {/* 04 ---------------------------------------------------------------- */}
  <section className="band">
    <div className="eyebrow">The product model</div>
    <h2>One lifecycle running under every screen</h2>
    <p className="lede">Meridian is built around one chain that runs under all of it. Each screen is a stop,
    and the fourth stop is a person.</p>
    <div className="chain">
      <div className="stop"><b>Signal</b><span>raw observation</span></div>
      <span className="arrow">→</span>
      <div className="stop"><b>Incident</b><span>signals correlated</span></div>
      <span className="arrow">→</span>
      <div className="stop"><b>Impact</b><span>modeled consequence</span></div>
      <span className="arrow">→</span>
      <div className="stop"><b>Recommendation</b><span>proposed response</span></div>
      <span className="arrow">→</span>
      <div className="stop human"><b>Decision</b><span>a named human</span></div>
      <span className="arrow">→</span>
      <div className="stop"><b>Action</b><span>assigned work</span></div>
      <span className="arrow">→</span>
      <div className="stop"><b>Outcome</b><span>measured result</span></div>
    </div>
    <p className="chain-foot">Everything before Decision is prep. Everything after is follow-through.
    <b>Meridian never crosses that line by itself.</b></p>
  </section>

  {/* 05 ---------------------------------------------------------------- */}
  <section className="band">
    <div className="eyebrow">The scenario</div>
    <h2>One disruption, start to finish</h2>
    <p className="lede">The whole thing follows a single Saturday. Every number here shows up again on every
    screen, and each one is worked out somewhere you can see it.</p>
    <dl className="stats">
      <div><dt>Region</dt><div className="fig">Southwest</div><div className="cap">12 locations</div></div>
      <div><dt>Trigger</dt><div className="fig">Sat 15 Mar</div><div className="cap">reservations +38% vs 4-week mean</div></div>
      <div><dt>Exposure</dt><div className="fig">270 – 420</div><div className="cap">covers at risk across 3 locations</div></div>
      <div><dt>Modeled</dt><div className="fig">$14k – $22k</div><div className="cap">270–420 covers × $52 avg check</div></div>
    </dl>
    <p className="figcaption">
      Every figure below traces back to these four. Nothing gets invented downstream.</p>
  </section>

  {/* 06 ---------------------------------------------------------------- */}
  <section className="band">
    <div className="eyebrow">06 · Control Tower</div>
    <h2>What needs attention, and what it costs</h2>
    <p className="lede">This screen answers one question: where does the next hour go. The band up top states
    the situation in a sentence before any metric shows up. The numbers under it are consequences.
    Covers at risk, revenue at risk.</p>
    <figure>
      <div className="shot">
        <img src="/assets/meridian-control-tower.webp" alt="Control Tower: regional overview with priority incidents and approvals queue" width="1137" height="806" loading="lazy" />
      </div>
    </figure>
    <div className="notes">
      <div className="note"><span className="n">1</span><p>Four figures share one container with divided cells,
        so the row reads as a single statement.</p></div>
      <div className="note"><span className="n">2</span><p>Status sits on a 4px rail, so you read severity before
        you read words. That matters when someone's scanning mid-service.</p></div>
      <div className="note"><span className="n">3</span><p>Pending approvals are on the same screen as detection,
        so you can see the whole loop without navigating away.</p></div>
    </div>
  </section>

  {/* 07 ---------------------------------------------------------------- */}
  <section className="band">
    <div className="eyebrow">07 · Incident Workspace</div>
    <h2>Explain before you ask</h2>
    <p className="lede">This screen leads with plain language, then evidence, then a proposal. Nothing asks
    you to act until the situation's been explained in words you could repeat to your own boss.</p>
    <figure>
      <div className="shot">
        <img src="/assets/meridian-incident.webp" alt="Incident Workspace: plain-language summary, contributing signals, evidence and recommended response" width="1137" height="1263" loading="lazy" />
      </div>
    </figure>
    <div className="notes">
      <div className="note"><span className="n">1</span><p>Every impact number shows its math. $14k–$22k is
        270–420 covers × $52 average check. You can redo that yourself.</p></div>
      <div className="note"><span className="n">2</span><p>Evidence is rated separately from severity. A critical
        incident can rest on weak evidence, and the screen says so.</p></div>
      <div className="note"><span className="n">3</span><p>There's a block for what weakens the read. Confidence
        you can't argue with isn't confidence.</p></div>
    </div>
  </section>

  {/* 08 ---------------------------------------------------------------- */}
  <section className="band">
    <div className="eyebrow">08 · Recommendation Review</div>
    <h2>Approval that actually does something</h2>
    <p className="lede">This screen makes oversight mean something. It shows what you're authorizing, what it
    costs, what you can undo, and how long you have to decide.</p>
    <figure>
      <div className="shot">
        <img src="/assets/meridian-recommendation.webp" alt="Recommendation Review: four proposed actions, alternatives considered, expected effect and decision record" width="1137" height="1128" loading="lazy" />
      </div>
    </figure>
    <div className="notes">
      <div className="note"><span className="n">1</span><p>Actions that need your sign-off are outlined in violet,
        so you can see your own exposure at a glance.</p></div>
      <div className="note"><span className="n">2</span><p>The alternatives Meridian ruled out are listed with
        reasons. If you can't argue with a recommendation, you can't really approve it either.</p></div>
      <div className="note"><span className="n">3</span><p>Reject and Escalate sit level with Approve. Saying yes
        isn't the default.</p></div>
    </div>
  </section>

  {/* 09 ---------------------------------------------------------------- */}
  <section className="band">
    <div className="eyebrow">09 · Outcome &amp; Learning</div>
    <h2>Closing the loop, including where the model was wrong</h2>
    <p className="lede">The last screen measures what happened against what was predicted, keeps your
    reasoning attached to the record, and lets the system suggest its own fixes. You still have to
    accept them.</p>
    <figure>
      <div className="shot">
        <img src="/assets/meridian-outcome.webp" alt="Outcome and Learning: predicted vs actual, decision record, and proposed model changes" width="1137" height="954" loading="lazy" />
      </div>
    </figure>

    <table>
      <caption>Predicted vs actual, stated plainly, including the miss</caption>
      <thead><tr><th scope="col">Measure</th><th scope="col">Predicted</th><th scope="col">Actual</th><th scope="col">Result</th></tr></thead>
      <tbody>
        <tr><td>Covers at risk after plan</td><td>40 – 90</td><td>62</td><td><span className="verdict ok">In range</span></td></tr>
        <tr><td>Revenue impact</td><td>$2k – $4.7k</td><td>$3.2k</td><td><span className="verdict ok">In range</span></td></tr>
        <tr><td>Median service time</td><td>≤ 12 min</td><td>14 min</td><td><span className="verdict miss">Missed</span></td></tr>
        <tr><td>Guest rating change</td><td>no change</td><td>−0.1</td><td><span className="verdict ok">Within tolerance</span></td></tr>
        <tr><td>Plan cost</td><td>$660 + $1.6k opp.</td><td>$0 + $1.4k opp.</td><td><span className="verdict under">Under</span></td></tr>
      </tbody>
    </table>

    <div className="notes">
      <div className="note"><span className="n">1</span><p>Predicted vs actual, stated plainly, including the one
        thing the model got wrong. Hiding that would make every other number worth less.</p></div>
      <div className="note"><span className="n">2</span><p>The record shows that holding overtime until the 14:00
        re-check saved $660. A person beat the plan, and it's logged that way.</p></div>
      <div className="note"><span className="n">3</span><p>Playbook and calibration changes get proposed for
        confirmation. Nothing gets applied quietly.</p></div>
    </div>
  </section>

  {/* 10 ---------------------------------------------------------------- */}
  <section className="band">
    <div className="eyebrow">Edge states</div>
    <h2>What it does when it has nothing useful to say</h2>
    <p className="lede">The happy path is the easy part. These three states are where an ops tool earns or
    loses trust: nothing's wrong, the model isn't sure, or a person says no.</p>

    <div className="edge">
      <h3>All clear</h3>
      <p>Silence has to mean somebody checked. The zero state names the threshold that wasn't crossed,
      shows the eight systems still reporting and when each last checked, and offers to adjust the
      threshold so you're not left wondering whether it's broken.</p>
      <figure>
        <div className="shot narrow">
          <img src="/assets/meridian-edge-allclear.webp" alt="All-clear zero state" width="647" height="418" loading="lazy" />
        </div>
      </figure>
    </div>

    <div className="edge">
      <h3>Not sure enough to advise</h3>
      <p>Three weak signals at a venue with four weeks of history. Meridian holds back the impact number,
      lists the three things that would change its mind, and offers to hand it to a person.</p>
      <figure>
        <div className="shot narrow">
          <img src="/assets/meridian-edge-lowconfidence.webp" alt="Low-confidence state where Meridian declines to recommend" width="647" height="418" loading="lazy" />
        </div>
        <figcaption>Revenue at risk reads <b>Withheld · Not modeled</b>. A range this wide would just be
        a guess.</figcaption>
      </figure>
    </div>

    <div className="edge">
      <h3>Rejected</h3>
      <p>A rejection isn't a dead end. Your reasoning gets recorded word for word, the withdrawn action is
      marked, and the new constraint carries into whatever gets proposed next. No overtime without a
      second re-check.</p>
      <figure>
        <div className="shot narrow">
          <img src="/assets/meridian-edge-rejected.webp" alt="Rejected approval state with recorded rationale" width="647" height="418" loading="lazy" />
        </div>
      </figure>
    </div>
  </section>

  {/* 11 ---------------------------------------------------------------- */}
  <section className="band">
    <div className="eyebrow">Trust</div>
    <h2>Three components doing the real work</h2>
    <p className="lede">Most of the thinking here isn't in the layout. It's in three small pieces that decide
    whether you can defend a call you made on Meridian's advice. All three are running in this page.</p>

    <div className="trust">
      <div>
        <div className="mer">
          <div className="row"><span className="lbl">Revenue at risk</span><span className="badge">Modeled</span></div>
          <div className="fig">$14k – $22k</div>
          <div className="math">270 – 420 covers at risk × $52 avg check</div>
          <p className="fine">The range covers uncertainty in how many covers get lost. The check average is
          fixed. This is a model output.</p>
        </div>
        <p className="trust-note"><b>Derivation</b>Every impact number carries the math behind it, and a range
        where a single figure would overstate what the model knows. A number you can't rebuild is a number
        you can't defend to your boss.</p>
      </div>

      <div>
        <div className="mer">
          <span className="lbl">Reservations · POS</span>
          <div className="ev">
            <b>Saturday covers forecast 412 against a four-week mean of 298</b>
            <span className="fine">Strong · 3 systems agree · 12-week history</span>
          </div>
        </div>
        <p className="trust-note"><b>Corroboration</b>Evidence strength describes the evidence itself. A
        serious incident can still rest on thin support, and it reads that way.</p>
      </div>

      <div>
        <div className="mer">
          <div className="row"><span className="lbl">Confidence</span><span className="badge">Medium</span></div>
          <div className="meter" aria-hidden="true"><i className="on"></i><i className="on"></i><i></i></div>
          <p className="fine">4 corroborating signals · no contradicting data</p>
        </div>
        <p className="trust-note"><b>Calibrated confidence</b>Confidence uses violet, which keeps it out of
        the status palette. A low-confidence read never looks like a healthy one, and it always ships with
        the reason behind it.</p>
      </div>
    </div>
  </section>

  {/* 12 ---------------------------------------------------------------- */}
  <section className="band">
    <div className="eyebrow">Design system</div>
    <h2>Built so the second theme was basically free</h2>
    <p className="lede">Two collections. Raw primitives, aliased by semantic tokens that resolve per mode. No
    component holds a hex value. Building the whole dark theme meant switching one frame's mode, then
    auditing what broke.</p>
    <dl className="stats">
      <div><dt>Primitives</dt><div className="fig">44</div><div className="cap">raw values, never used directly</div></div>
      <div><dt>Semantic tokens</dt><div className="fig">30</div><div className="cap">each resolving in light and dark</div></div>
      <div><dt>Text styles</dt><div className="fig">24</div><div className="cap">Inter throughout, mono for identifiers</div></div>
      <div><dt>Library components</dt><div className="fig">23</div><div className="cap">63 variants, every fill token-bound</div></div>
    </dl>
    <figure>
      <div className="theme-pair">
        <div className="shot">
          <img src="/assets/meridian-theme-light.webp" alt="Meridian components in light mode" width="1143" height="1005" loading="lazy" />
        </div>
        <div className="shot">
          <img src="/assets/meridian-theme-dark.webp" alt="The same components in dark mode" width="1143" height="1005" loading="lazy" />
        </div>
      </div>
      <figcaption>The same components in both modes. Verified: 0 WCAG AA failures on every text
      node, 0 paint drift, 0 unused variables.</figcaption>
    </figure>
  </section>

  {/* 13 ---------------------------------------------------------------- */}
  <section className="band">
    <div className="eyebrow">Result</div>
    <h2>The whole loop, closed</h2>
    <p className="lede">You can see what needs attention, understand why it matters, dig into the reasoning
    behind it, approve something you're personally accountable for, and afterward find out whether it
    worked. Including the places the model got it wrong.</p>

    <div className="close-grid">
      <div>
        <h4>What I want to test next</h4>
        <ul>
          <li>How long it takes to find the highest-risk incident cold.</li>
          <li>Whether people can restate where a revenue number came from.</li>
          <li>Whether the confidence meter changes what gets approved, or just gets ignored.</li>
        </ul>
      </div>
      <div>
        <h4>Known limitations</h4>
        <ul>
          <li>The scenario data is constructed. No model has been trained behind it yet.</li>
          <li>Only the approver's path is designed so far. The GM's mobile view is still open.</li>
          <li>Contrast is verified across every screen. Keyboard and screen reader flows still need a pass.</li>
        </ul>
      </div>
    </div>
  </section>

  <div className="next">
    <span>Next</span>
    <a href="/typeshelf" data-cursor="View">Typeshelf, a local font viewer &rarr;</a>
  </div>
      </main>
      <footer>
        <span>Meridian · Chloe Polk</span>
        <span>hichloe.me · © 2026</span>
      </footer>
    </>
  );
}
