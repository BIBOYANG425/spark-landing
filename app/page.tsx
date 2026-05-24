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
          Request a pilot
        </a>
      </header>

      <section className="w-full px-6 sm:px-10 pt-8 pb-24 sm:pt-12 sm:pb-32">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:items-center">
          <div>
            <h1 className="font-display text-spark-text text-[44px] sm:text-[68px] md:text-[84px] lg:text-[88px] xl:text-[104px]">
              Make restaurants think in real time.
            </h1>
            <p className="mt-8 max-w-2xl text-lg sm:text-xl text-spark-text-muted leading-relaxed">
              Cameras, POS, sensors — turned into a live decision layer for the store floor.
            </p>

            <div className="mt-12 max-w-2xl space-y-4">
              <Stair
                label="Today"
                body="See where service breaks down."
              />
              <Stair
                label="Next"
                body="Dispatch the right action to the right person in real time."
              />
              <Stair
                label="Tomorrow"
                body="Route the same decisions to robots."
              />
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <a href="#cta" className="btn-spark-pill">
                Request a pilot
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
            Online businesses optimize every second. Restaurants still run on intuition.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-16">
            <p className="text-lg text-spark-text-muted leading-relaxed">
              E-commerce teams know when customers drop off, which experiments work, and where revenue is leaking.
            </p>
            <p className="text-lg text-spark-text-muted leading-relaxed">
              Restaurants have cameras, POS systems, and staff schedules, but these systems do not think together. Managers still walk the floor manually, review reports after the shift, and miss problems while they are happening.
            </p>
          </div>
          <p className="mt-12 max-w-3xl font-display text-spark-text text-3xl sm:text-4xl">
            Spark brings the e-commerce decision loop into the physical world.
          </p>
        </div>
      </section>

      <section id="product" className="w-full px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-spark-dark mb-4">
            The product
          </p>
          <h2 className="font-display text-spark-text text-4xl sm:text-6xl md:text-7xl max-w-4xl">
            A real-time operating layer for the store floor.
          </h2>
          <p className="mt-8 max-w-3xl text-lg text-spark-text-muted leading-relaxed">
            Spark connects the signals already inside your store and turns them into operational decisions.
          </p>

          <div className="mt-16">
            <div className="border-t border-spark-border pt-8 pb-8 grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-12 items-baseline">
              <span className="text-xs font-bold uppercase tracking-widest text-spark-text-subtle">01</span>
              <div>
                <h3 className="font-display text-spark-text text-3xl sm:text-4xl md:text-5xl">Catch service breakdowns</h3>
                <p className="mt-4 text-lg text-spark-text-muted leading-relaxed max-w-2xl">
                  Detect unattended tables, long dwell times, queue spikes, and under-covered zones.
                </p>
              </div>
            </div>
            <div className="border-t border-spark-border pt-8 pb-8 grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-12 items-baseline">
              <span className="text-xs font-bold uppercase tracking-widest text-spark-text-subtle">02</span>
              <div>
                <h3 className="font-display text-spark-text text-3xl sm:text-4xl md:text-5xl">Find revenue leaks</h3>
                <p className="mt-4 text-lg text-spark-text-muted leading-relaxed max-w-2xl">
                  See which time slots, staff patterns, and service moments hurt conversion or customer experience.
                </p>
              </div>
            </div>
            <div className="border-t border-spark-border border-b border-spark-border pt-8 pb-8 grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-12 items-baseline">
              <span className="text-xs font-bold uppercase tracking-widest text-spark-text-subtle">03</span>
              <div>
                <h3 className="font-display text-spark-text text-3xl sm:text-4xl md:text-5xl">Route the next action</h3>
                <p className="mt-4 text-lg text-spark-text-muted leading-relaxed max-w-2xl">
                  Send the right task to the right server, manager, or future robot while the issue is still happening.
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
            Built for physical operations.
          </h2>
          <p className="mt-8 max-w-3xl text-lg text-spark-text-muted leading-relaxed">
            Restaurants are the first vertical because every shift is full of high-frequency decisions.
          </p>

          <div className="mt-16 space-y-4 sm:space-y-5 max-w-4xl">
            <UseCaseLine text="A customer waits too long." />
            <UseCaseLine text="A queue forms at the entrance." />
            <UseCaseLine text="Staff cluster in the wrong zone." />
            <UseCaseLine text="A refund request needs approval." />
            <UseCaseLine text="A regular customer walks in." />
          </div>

          <p className="mt-16 max-w-3xl font-display text-spark-text text-3xl sm:text-4xl md:text-5xl">
            These are not dashboard problems. They are real-time routing problems.
          </p>
        </div>
      </section>

      <section className="w-full px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-spark-dark mb-4">
            Live now
          </p>
          <h2 className="font-display text-spark-text text-4xl sm:text-6xl md:text-7xl max-w-5xl">
            Live in 32 chain restaurant locations.
          </h2>
          <div className="mt-12 max-w-3xl space-y-6 text-lg text-spark-text-muted leading-relaxed">
            <p>
              Spark is deployed across 32 Bahe Li Chaoshan Beef Hotpot locations in China.
            </p>
            <p>
              Operators use Spark to analyze real restaurant floor data across shifts, service moments, and store performance.
            </p>
            <p>
              The next product layer turns that analysis into real-time action.
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
            The spatial brain for physical stores and robots.
          </h2>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-white/80">
            Physical stores are becoming AI-native. First, software helps managers understand what is happening. Then it routes work to staff in real time. Eventually, the same decision layer can route work to robots.
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
            Bring real-time decisions to your stores.
          </h2>
          <p
            className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed"
            style={{ color: "var(--spark-dark-green)", opacity: 0.85 }}
          >
            We are taking pilot conversations with regional and mid-market restaurant chains running 10 to 50 locations.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="mailto:yangb7777@gmail.com?subject=Spark%20pilot%20conversation"
              className="btn-spark-secondary"
              style={{ background: "rgba(22, 51, 0, 0.12)" }}
            >
              Request a pilot
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
            The spatial brain for physical stores and robots. Los Angeles.
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
        event="Zone C under-covered for 8 min"
        action="Redeploy Server D"
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
