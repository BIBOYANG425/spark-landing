import { HeroScroll } from "./components/HeroScroll";
import { Ticker } from "./components/Ticker";
import { PhaseStage } from "./components/Phases";
import { NewsletterForm } from "./components/NewsletterForm";

const USE_CASES = [
  {
    ix: "A/B TESTING",
    ev: "Test the floor like a webpage",
    act: "Try a new seating order, staffing model, or table-flip rule. Spark measures the lift in covers and turn time.",
    metric: "lift per shift",
  },
  {
    ix: "ANALYTICS",
    ev: "Funnel the shift",
    act: "See exactly where guests drop off — door, queue, seat, order, return. Like a checkout funnel, for your dining room.",
    metric: "per moment",
  },
  {
    ix: "ONBOARDING",
    ev: "Up to speed in one shift",
    act: "New servers get live guidance — where to go, who's a regular, what's 86'd, what to upsell. Onboarding in real time.",
    metric: "1 shift",
  },
  {
    ix: "CONSISTENCY",
    ev: "Same standard, every location",
    act: "Service quality stops depending on which manager is on. Same brain runs every store the same way.",
    metric: "32 stores · same",
  },
  {
    ix: "PERSONALIZATION",
    ev: "Recognize every regular",
    act: "Their last order, allergies, and seat preference follow them across the chain. Like Amazon — on the floor.",
    metric: "cross-store",
  },
  {
    ix: "ATTRIBUTION",
    ev: "Attribute every cover",
    act: "End-of-shift, you know exactly what drove the night — what worked, what cost you, what to change tomorrow.",
    metric: "< 30s · auto",
  },
];

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="spark-nav">
        <div className="container spark-nav-inner">
          <a className="brand" href="#">
            <span className="brand-mark" />
            <span>Spark</span>
          </a>
          <div className="nav-links">
            <a href="#product" className="hide-sm">Product</a>
            <a href="#traction" className="hide-sm">Live now</a>
            <a href="#vision" className="hide-sm">Vision</a>
            <a href="#contact" className="btn btn-primary" style={{ fontSize: 14, padding: "10px 18px" }}>
              Book a pilot
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <HeroScroll />

      {/* Ticker */}
      <Ticker />

      {/* Problem */}
      <section className="section-pad">
        <div className="container">
          <div className="sec-title-block">
            <div>
              <div className="label-kicker">01 · The gap</div>
            </div>
            <h2 className="font-display sec-h">
              Same moment.<br />
              Two <span style={{ color: "var(--warm)" }}>different</span> worlds.
            </h2>
          </div>

          <p className="body-lg" style={{ maxWidth: 600, marginTop: 32, marginLeft: "auto", marginRight: 0, textAlign: "right" }}>
            Every customer moment that an online store handles in seconds, a restaurant floor still handles after the shift — or never at all.
          </p>

          <div className="gap-table">
            <div className="gap-row gap-head">
              <div className="gap-cell gap-online-h">
                <span className="gap-h-mark good">▣</span> Online store
              </div>
              <div className="gap-cell gap-moment-h">When a customer…</div>
              <div className="gap-cell gap-floor-h">
                <span className="gap-h-mark">▣</span> Restaurant floor · today
              </div>
            </div>

            <div className="gap-row">
              <div className="gap-cell gap-online">
                <span className="gap-when">T + 5s</span>
                <span className="gap-text">Exit-intent fires. Discount or chat pops.</span>
              </div>
              <div className="gap-cell gap-moment">Hesitates / waits too long</div>
              <div className="gap-cell gap-floor">
                <span className="gap-when warn">T + 4m</span>
                <span className="gap-text">Still sat at A3. Server is in section B.</span>
              </div>
            </div>

            <div className="gap-row">
              <div className="gap-cell gap-online">
                <span className="gap-when">T + 1m</span>
                <span className="gap-text">Re-targeted within the hour. Reason logged.</span>
              </div>
              <div className="gap-cell gap-moment">Leaves unhappy</div>
              <div className="gap-cell gap-floor">
                <span className="gap-when warn">T + 12m</span>
                <span className="gap-text">Empty seat. No one tracks why.</span>
              </div>
            </div>

            <div className="gap-row">
              <div className="gap-cell gap-online">
                <span className="gap-when">T + 0s</span>
                <span className="gap-text">Auto-scale. Another checkout lane opens.</span>
              </div>
              <div className="gap-cell gap-moment">Pile-up at the door</div>
              <div className="gap-cell gap-floor">
                <span className="gap-when warn">T + 0s</span>
                <span className="gap-text">7 waiting. Staff still in cold sections.</span>
              </div>
            </div>

            <div className="gap-row">
              <div className="gap-cell gap-online">
                <span className="gap-when">T + 10s</span>
                <span className="gap-text">One-tap, policy-checked, refunded.</span>
              </div>
              <div className="gap-cell gap-moment">Asks for a refund</div>
              <div className="gap-cell gap-floor">
                <span className="gap-when warn">T + 8m</span>
                <span className="gap-text">Server hunts for the GM mid-shift.</span>
              </div>
            </div>

            <div className="gap-row">
              <div className="gap-cell gap-online">
                <span className="gap-when">T + 0s</span>
                <span className="gap-text">"Hello again — your usual?"</span>
              </div>
              <div className="gap-cell gap-moment">Walks in as a regular</div>
              <div className="gap-cell gap-floor">
                <span className="gap-when warn">—</span>
                <span className="gap-text">New server. Doesn't know them.</span>
              </div>
            </div>
          </div>

          <div className="gap-coda">
            <p>
              Every physical store has the data.<br />
              None of them have the <span style={{ color: "var(--warm)" }}>brain</span> that turns it into action.
            </p>
          </div>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="section-pad section-surface">
        <div className="container">
          <div className="sec-title-block">
            <div>
              <div className="label-kicker">02 · How it works</div>
            </div>
            <h2 className="font-display sec-h tighter">
              One decision layer. Three phases.
            </h2>
          </div>

          <p className="body-lg" style={{ maxWidth: 640, marginTop: 24, marginLeft: "auto", marginRight: 0, textAlign: "right" }}>
            Spark already runs in 32 stores doing awareness. Action is rolling now. Automation is next. The brain doesn't change — only what it dispatches to.
          </p>

          <PhaseStage />
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-pad">
        <div className="container">
          <div className="sec-title-block">
            <div>
              <div className="label-kicker">03 · On the floor</div>
            </div>
            <h2 className="font-display sec-h tighter">
              What <span style={{ color: "var(--warm)" }}>e-commerce</span> got right.<br />
              Now on your floor.
            </h2>
          </div>

          <p className="body-lg" style={{ maxWidth: 640, marginTop: 24, marginLeft: "auto", marginRight: 0, textAlign: "right" }}>
            Online stores didn't win because they had better waiters. They won because they could test, measure, onboard, and stay consistent. Six of those same capabilities — running on your floor.
          </p>

          <div className="usecase-grid">
            {USE_CASES.map((u, i) => (
              <div className="usecase-row" key={i}>
                <span className="uc-ix">
                  {`0${i + 1}`}
                  <span className="uc-cat">{u.ix}</span>
                </span>
                <span className="uc-event">{u.ev}</span>
                <span className="uc-action">↗ {u.act}</span>
                <span className="uc-time">{u.metric}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction */}
      <section id="traction" className="section-pad section-surface">
        <div className="container">
          <div className="sec-title-block">
            <div>
              <div className="label-kicker">04 · Live now</div>
            </div>
            <h2 className="font-display sec-h tighter">
              Running in <span style={{ color: "var(--warm)" }}>32 stores</span>. Paid for. Used every shift.
            </h2>
          </div>

          <div className="traction-grid">
            <div>
              <div className="num-row">
                <span className="big-num">32</span>
                <span className="num-unit">stores<br />live</span>
              </div>
              <p className="body" style={{ maxWidth: 480, marginTop: 24 }}>
                Spark is in 32 locations of a regional hotpot chain in China — paying customer since April 2026. Managers use it during the shift, not after.
              </p>
              <div className="traction-detail">
                <div className="detail-row">
                  <span className="dl">Customer</span>
                  <span className="dv">Regional hotpot chain · 32 locations · China</span>
                </div>
                <div className="detail-row">
                  <span className="dl">Live since</span>
                  <span className="dv">April 2026 · paid from day one</span>
                </div>
                <div className="detail-row">
                  <span className="dl">Pipeline</span>
                  <span className="dv">2 additional chains negotiating pilots · US launch Q4 2026</span>
                </div>
              </div>
            </div>

            <div>
              <div className="quote-card">
                <p className="quote-text">
                  &ldquo;Before Spark, we knew which shifts went badly. Now we know which{" "}
                  <em style={{ color: "var(--warm)", fontStyle: "normal" }}>tables</em>{" "}
                  went badly — while there&rsquo;s still time to fix them.&rdquo;
                </p>
                <div className="quote-attr">
                  <div className="quote-avatar">L</div>
                  <div className="quote-name">
                    Operations lead
                    <span className="role">Regional hotpot chain · China (paraphrased)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="section-pad section-dark">
        <div className="container">
          <div className="label-kicker" style={{ color: "rgba(255,255,255,0.5)" }}>05 · The longer arc</div>
          <h2 className="font-display vision-mega">
            The worker changes.<br />
            <span style={{ color: "var(--lime)" }}>The brain stays the same.</span>
          </h2>
          <p className="vision-body">
            Restaurants are the first vertical because they're the loudest. The same gap between physical and digital exists in retail, fitness, hospitality, healthcare. Spark is the spatial decision layer underneath all of them. Today it dispatches your staff. Tomorrow it dispatches the robots that work alongside them.
          </p>

          <div className="vision-verticals">
            <div className="vertical-cell live">
              <div className="vertical-ix">VERTICAL 01</div>
              <div className="vertical-name">Restaurants</div>
              <div className="vertical-when">LIVE · 32 STORES</div>
            </div>
            <div className="vertical-cell">
              <div className="vertical-ix">VERTICAL 02</div>
              <div className="vertical-name">Specialty Retail</div>
              <div className="vertical-when">NEXT</div>
            </div>
            <div className="vertical-cell">
              <div className="vertical-ix">VERTICAL 03</div>
              <div className="vertical-name">Fitness</div>
              <div className="vertical-when">2027</div>
            </div>
            <div className="vertical-cell">
              <div className="vertical-ix">VERTICAL 04</div>
              <div className="vertical-name">Hospitality</div>
              <div className="vertical-when">2027</div>
            </div>
            <div className="vertical-cell">
              <div className="vertical-ix">VERTICAL 05</div>
              <div className="vertical-name">Healthcare</div>
              <div className="vertical-when">LATER</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="section-pad section-lime">
        <div className="container">
          <h2 className="font-display cta-h" style={{ color: "var(--dark-green)" }}>
            Run a pilot.<br />
            See your floor in{" "}
            <span style={{ color: "var(--dark-green)", borderBottom: "6px solid #0e0f0c", paddingBottom: "0.04em" }}>
              real time.
            </span>
          </h2>
          <div className="cta-row">
            <a
              href="mailto:yangb7777@gmail.com?subject=Spark%20pilot"
              className="btn"
              style={{ background: "var(--dark-green)", color: "var(--lime)", fontSize: 16, padding: "15px 28px" }}
            >
              Book a pilot conversation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="mailto:yangb7777@gmail.com"
              className="btn"
              style={{ background: "#f5f3ee", color: "var(--dark-green)", fontSize: 16, padding: "15px 24px", border: "1px solid rgba(22,51,0,0.15)" }}
            >
              Talk to the founders
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="spark-footer">
        <div className="container">
          {/* Top: brand + tagline + newsletter */}
          <div className="footer-top">
            <div className="footer-brand-block">
              <a className="footer-brand" href="#">
                <span className="brand-mark brand-mark-dark" style={{ width: 18, height: 18 }} />
                <span className="font-display" style={{ fontSize: 28, letterSpacing: 0, color: "#fff" }}>Spark</span>
              </a>
              <p className="footer-tagline">
                The decision speed of e-commerce, for physical stores.
              </p>
            </div>

            <NewsletterForm />
          </div>

          {/* Middle: 4-column link grid */}
          <div className="footer-grid">
            <div className="footer-col">
              <h4 className="footer-col-h">Product</h4>
              <ul>
                <li><a href="#product">How it works</a></li>
                <li><a href="#traction">Live now</a></li>
                <li><a href="#vision">Vision</a></li>
                <li><a href="#contact">Book a pilot</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-h">Company</h4>
              <ul>
                <li><a href="#vision">About</a></li>
                <li><a href="mailto:yangb7777@gmail.com?subject=Spark%20careers">Careers</a></li>
                <li><a href="mailto:yangb7777@gmail.com?subject=Spark%20press">Press</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-h">Contact</h4>
              <ul>
                <li><a href="mailto:yangb7777@gmail.com?subject=Spark%20sales">Sales</a></li>
                <li><a href="mailto:yangb7777@gmail.com?subject=Spark%20support">Support</a></li>
                <li><span className="footer-link-note">Los Angeles</span></li>
                <li><span className="footer-link-note">San Francisco</span></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-h">Legal</h4>
              <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom: copyright + socials */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              <span>&copy; 2026 Spark Systems, Inc.</span>
              <span className="footer-dot-light" />
              <span>Built for the restaurant floor.</span>
            </div>
            <div className="footer-socials">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="footer-social">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.07c.62-1.17 2.13-2.4 4.39-2.4 4.7 0 5.54 3.1 5.54 7.1V24h-5v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V24h-5V8z" />
                </svg>
              </a>
              <a href="https://x.com" aria-label="X (Twitter)" className="footer-social">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
