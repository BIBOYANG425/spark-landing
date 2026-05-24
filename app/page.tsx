export default function Home() {
  return (
    <>
      <header className="w-full px-6 sm:px-10 py-6 flex items-center justify-between">
        <span className="font-display text-2xl tracking-tight text-spark-text">
          spark
        </span>
        <a
          href="#cta"
          className="btn-spark-pill"
          style={{ fontSize: 14, padding: "10px 20px" }}
        >
          Talk to us
        </a>
      </header>

      <section className="w-full px-6 sm:px-10 pt-8 pb-24 sm:pt-12 sm:pb-32">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:items-center">
          <div>
            <h1 className="font-display text-spark-text text-[44px] sm:text-[68px] md:text-[84px] lg:text-[88px] xl:text-[104px]">
              Physical experiences. E-commerce speed.
            </h1>
            <p className="mt-8 max-w-2xl text-lg sm:text-xl text-spark-text-muted leading-relaxed">
              Online stores make decisions in real time. Your restaurant floor can too.
            </p>

            <div className="mt-12 max-w-2xl space-y-4">
              <Stair
                label="Today"
                body="Know what's happening on your floor the moment it happens."
              />
              <Stair
                label="Next"
                body="Act on it instantly — the way online stores already do."
              />
              <Stair
                label="Tomorrow"
                body="Hand those same calls off to robots."
              />
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <a href="#cta" className="btn-spark-pill">
                Talk to us
              </a>
              <a href="#product" className="btn-spark-secondary">
                See how it works
              </a>
            </div>
          </div>

          <div className="lg:max-w-[520px] lg:justify-self-end w-full">
            <FloorPanel />
          </div>
        </div>
      </section>

      <section className="w-full px-6 sm:px-10 py-24 sm:py-32 bg-spark-surface">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-spark-dark mb-4">
            The problem
          </p>
          <h2 className="font-display text-spark-text text-4xl sm:text-6xl md:text-7xl max-w-5xl">
            Online stores react in seconds. Physical experiences still find out the next day.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-16">
            <p className="text-lg text-spark-text-muted leading-relaxed">
              When something goes wrong in an online store, it triggers an alert, routes a fix, and gets measured — all before the next customer arrives.
            </p>
            <p className="text-lg text-spark-text-muted leading-relaxed">
              When something goes wrong in a restaurant, the manager hears about it after the shift. Your cameras, POS, and staff aren't connected. Nothing talks. Nothing acts.
            </p>
          </div>
          <p className="mt-12 max-w-3xl font-display text-spark-text text-3xl sm:text-4xl">
            Spark closes that gap. Physical experiences with the decision speed of e-commerce.
          </p>
        </div>
      </section>

      <section id="product" className="w-full px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-spark-dark mb-4">
            How it works
          </p>
          <h2 className="font-display text-spark-text text-4xl sm:text-6xl md:text-7xl max-w-4xl">
            What online stores have had for years. Now for the floor.
          </h2>
          <p className="mt-8 max-w-3xl text-lg text-spark-text-muted leading-relaxed">
            Spark connects your cameras, POS, and sensors — and gives your team the same instant awareness that e-commerce teams already take for granted.
          </p>

          <div className="mt-16">
            <div className="border-t border-spark-border pt-8 pb-8 grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-12 items-baseline">
              <span className="text-xs font-bold uppercase tracking-widest text-spark-text-subtle">01</span>
              <div>
                <h3 className="font-display text-spark-text text-3xl sm:text-4xl md:text-5xl">Know the moment something goes wrong.</h3>
                <p className="mt-4 text-lg text-spark-text-muted leading-relaxed max-w-2xl">
                  A table waiting too long. An entrance getting crowded. A section with no coverage. Spark surfaces it while there's still time to act.
                </p>
              </div>
            </div>
            <div className="border-t border-spark-border pt-8 pb-8 grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-12 items-baseline">
              <span className="text-xs font-bold uppercase tracking-widest text-spark-text-subtle">02</span>
              <div>
                <h3 className="font-display text-spark-text text-3xl sm:text-4xl md:text-5xl">See what's costing you guests.</h3>
                <p className="mt-4 text-lg text-spark-text-muted leading-relaxed max-w-2xl">
                  Online stores run experiments to find what loses customers. Spark does the same for your shifts — which hours, which moments, which patterns drive people away.
                </p>
              </div>
            </div>
            <div className="border-t border-spark-border border-b border-spark-border pt-8 pb-8 grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-12 items-baseline">
              <span className="text-xs font-bold uppercase tracking-widest text-spark-text-subtle">03</span>
              <div>
                <h3 className="font-display text-spark-text text-3xl sm:text-4xl md:text-5xl">Act on it immediately.</h3>
                <p className="mt-4 text-lg text-spark-text-muted leading-relaxed max-w-2xl">
                  The right person gets the right call the moment it matters — not after the shift, not after the guest leaves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 sm:px-10 py-24 sm:py-32 bg-spark-mint">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-spark-dark mb-4">
            Starting with restaurants
          </p>
          <h2 className="font-display text-spark-text text-4xl sm:text-6xl md:text-7xl max-w-4xl">
            Built for the people who run the floor.
          </h2>
          <p className="mt-8 max-w-3xl text-lg text-spark-text-muted leading-relaxed">
            Restaurants are the first AI-native physical experience — every shift is full of high-frequency decisions that shape whether guests come back. Every one of these is something an online store would handle automatically.
          </p>

          <div className="mt-16 space-y-4 sm:space-y-5 max-w-4xl">
            <UseCaseLine text="A customer waits too long." />
            <UseCaseLine text="A queue forms at the entrance." />
            <UseCaseLine text="Part of the floor has no coverage." />
            <UseCaseLine text="A refund request needs approval." />
            <UseCaseLine text="A regular customer walks in." />
          </div>

          <p className="mt-16 max-w-3xl font-display text-spark-text text-3xl sm:text-4xl md:text-5xl">
            An online store would have fixed all of these before the next customer arrived.
          </p>
        </div>
      </section>

      <section className="w-full px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-spark-dark mb-4">
            Live now
          </p>
          <h2 className="font-display text-spark-text text-4xl sm:text-6xl md:text-7xl max-w-5xl">
            Running in 32 restaurant locations.
          </h2>
          <div className="mt-12 max-w-3xl space-y-6 text-lg text-spark-text-muted leading-relaxed">
            <p>
              Spark is live in 32 Bahe Li Chaoshan Beef Hotpot locations in China.
            </p>
            <p>
              Their managers use Spark to stay on top of every shift — catching problems as they happen, not after the fact.
            </p>
            <p>
              Next up: telling your team what to do the moment something happens.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-6 sm:px-10 py-24 sm:py-32 bg-spark-text text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-spark-lime mb-4">
            Vision
          </p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl max-w-5xl text-white">
            Every physical experience runs like an online one.
          </h2>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-white/80">
            Restaurants are the start. The same gap between physical and digital exists in retail, hospitality, fitness, healthcare. Every physical experience deserves the decision speed that online businesses already have. Spark is how that happens — first with your team acting on it, eventually with robots doing it automatically.
          </p>
          <p className="mt-12 max-w-3xl font-display text-3xl sm:text-4xl md:text-5xl text-spark-lime">
            The worker changes. The brain stays the same.
          </p>
        </div>
      </section>

      <section
        id="cta"
        className="w-full px-6 sm:px-10 py-24 sm:py-32 bg-spark-lime"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-spark-dark text-4xl sm:text-6xl md:text-7xl">
            Give your locations the speed they deserve.
          </h2>
          <p
            className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed"
            style={{ color: "var(--spark-dark-green)", opacity: 0.85 }}
          >
            We're working with restaurant groups ready to run their floors the way online stores already run their sites. If that's you, let's talk.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="mailto:yangb7777@gmail.com?subject=Spark%20-%20Let's%20talk"
              className="btn-spark-secondary"
              style={{ background: "rgba(22, 51, 0, 0.12)" }}
            >
              Let's talk
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full px-6 sm:px-10 py-12 border-t border-spark-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-display text-2xl tracking-tight text-spark-text">
            spark
          </span>
          <p className="text-sm text-spark-text-subtle">
            Built for the restaurant floor. Los Angeles.
          </p>
        </div>
      </footer>
    </>
  );
}

function FloorPanel() {
  return (
    <div className="floor-panel">
      <div className="flex items-center justify-between px-1 pb-2 border-b border-spark-border">
        <div className="flex items-center gap-2.5">
          <span className="live-dot" />
          <span className="font-display text-base text-spark-text">
            Live floor
          </span>
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-spark-text-subtle">
          3 events
        </span>
      </div>

      <FloorEvent
        event="Table 7 has waited 4 min without service"
        action="Ping Server A"
        assignee="Maria"
        role="Server"
        status="dispatched"
        time="12s ago"
      />
      <FloorEvent
        event="Entrance queue increased to 12 customers"
        action="Move Host B to front"
        assignee="Jordan"
        role="Host"
        status="pending"
        time="45s ago"
      />
      <FloorEvent
        event="Zone C has no coverage for 8 min"
        action="Send Server D to Zone C"
        assignee="Alex"
        role="Manager"
        status="acknowledged"
        time="1m ago"
      />
    </div>
  );
}

function FloorEvent({
  event,
  action,
  assignee,
  role,
  status,
  time,
}: {
  event: string;
  action: string;
  assignee: string;
  role: string;
  status: "dispatched" | "pending" | "acknowledged";
  time: string;
}) {
  const statusLabel = {
    dispatched: "Dispatched",
    pending: "Pending",
    acknowledged: "Acknowledged",
  }[status];

  return (
    <div className="floor-event">
      <p className="text-[15px] font-semibold text-spark-text leading-snug">
        {event}
      </p>
      <div className="floor-event-action">
        <span aria-hidden>→</span>
        <span>{action}</span>
      </div>
      <div className="floor-event-meta">
        <span className="text-xs font-semibold text-spark-text-subtle">
          {assignee}
          <span className="text-spark-text-subtle/60"> · {role}</span>
        </span>
        <span className={`floor-status floor-status-${status}`}>
          <span className="floor-status-dot" />
          {statusLabel} · {time}
        </span>
      </div>
    </div>
  );
}

function Stair({ label, body }: { label: string; body: string }) {
  return (
    <div className="grid sm:grid-cols-[120px_1fr] gap-1 sm:gap-6 items-baseline">
      <span className="text-xs font-bold uppercase tracking-wider text-spark-dark">
        {label}
      </span>
      <p className="text-base sm:text-lg text-spark-text-muted leading-relaxed">
        {body}
      </p>
    </div>
  );
}

function UseCaseLine({ text }: { text: string }) {
  return (
    <p className="font-display text-spark-text text-2xl sm:text-3xl md:text-4xl">
      {text}
    </p>
  );
}
