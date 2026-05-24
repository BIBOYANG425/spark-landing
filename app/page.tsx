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
              Make restaurants think in real time.
            </h1>
            <p className="mt-8 max-w-2xl text-lg sm:text-xl text-spark-text-muted leading-relaxed">
              Your cameras, POS, and sensors already see everything. Now they talk to each other.
            </p>

            <div className="mt-12 max-w-2xl space-y-4">
              <Stair
                label="Today"
                body="See what's happening on your floor right now."
              />
              <Stair
                label="Next"
                body="Tell the right person what to do before the problem gets worse."
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
            Online stores know the moment something goes wrong. Restaurants find out the next day.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-16">
            <p className="text-lg text-spark-text-muted leading-relaxed">
              Online stores know the moment a customer gets frustrated — and they fix it instantly.
            </p>
            <p className="text-lg text-spark-text-muted leading-relaxed">
              Your cameras, POS, and scheduling tools don't talk to each other. Managers walk the floor guessing, read reports after the shift, and find out about problems too late.
            </p>
          </div>
          <p className="mt-12 max-w-3xl font-display text-spark-text text-3xl sm:text-4xl">
            Spark gives restaurants the same real-time awareness that online stores have had for years.
          </p>
        </div>
      </section>

      <section id="product" className="w-full px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-spark-dark mb-4">
            How it works
          </p>
          <h2 className="font-display text-spark-text text-4xl sm:text-6xl md:text-7xl max-w-4xl">
            Always know what's happening on your floor.
          </h2>
          <p className="mt-8 max-w-3xl text-lg text-spark-text-muted leading-relaxed">
            Spark reads your cameras, POS, and sensors together — and tells your team what to do.
          </p>

          <div className="mt-16">
            <div className="border-t border-spark-border pt-8 pb-8 grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-12 items-baseline">
              <span className="text-xs font-bold uppercase tracking-widest text-spark-text-subtle">01</span>
              <div>
                <h3 className="font-display text-spark-text text-3xl sm:text-4xl md:text-5xl">Spot problems before guests notice.</h3>
                <p className="mt-4 text-lg text-spark-text-muted leading-relaxed max-w-2xl">
                  Know when a table's been waiting too long, when the entrance is getting crowded, or when part of your floor needs more staff.
                </p>
              </div>
            </div>
            <div className="border-t border-spark-border pt-8 pb-8 grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-12 items-baseline">
              <span className="text-xs font-bold uppercase tracking-widest text-spark-text-subtle">02</span>
              <div>
                <h3 className="font-display text-spark-text text-3xl sm:text-4xl md:text-5xl">See what's costing you guests.</h3>
                <p className="mt-4 text-lg text-spark-text-muted leading-relaxed max-w-2xl">
                  Find out which hours, which shifts, and which moments are where people stop coming back.
                </p>
              </div>
            </div>
            <div className="border-t border-spark-border border-b border-spark-border pt-8 pb-8 grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-12 items-baseline">
              <span className="text-xs font-bold uppercase tracking-widest text-spark-text-subtle">03</span>
              <div>
                <h3 className="font-display text-spark-text text-3xl sm:text-4xl md:text-5xl">Tell your team what to do.</h3>
                <p className="mt-4 text-lg text-spark-text-muted leading-relaxed max-w-2xl">
                  The right message goes to the right person while there's still time to fix it.
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
            Every shift has moments that can make or break a guest's experience.
          </p>

          <div className="mt-16 space-y-4 sm:space-y-5 max-w-4xl">
            <UseCaseLine text="A customer waits too long." />
            <UseCaseLine text="A queue forms at the entrance." />
            <UseCaseLine text="Part of the floor has no coverage." />
            <UseCaseLine text="A refund request needs approval." />
            <UseCaseLine text="A regular customer walks in." />
          </div>

          <p className="mt-16 max-w-3xl font-display text-spark-text text-3xl sm:text-4xl md:text-5xl">
            Your team can't fix what they can't see. Spark makes sure they always see it.
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
            Today your team acts on it. Tomorrow, robots do.
          </h2>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-white/80">
            Today, Spark helps your managers see everything happening on the floor. Next, it helps your team act on it the moment it happens. And eventually, the same system will run the floor — with or without humans.
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
            Ready to run a smarter floor?
          </h2>
          <p
            className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed"
            style={{ color: "var(--spark-dark-green)", opacity: 0.85 }}
          >
            We're working with restaurant groups that want to stay ahead of every shift. If that's you, let's talk.
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
