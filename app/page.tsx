import { ScrollStory } from "./components/ScrollStory";

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

      <section className="w-full">
        {/* Headline zone */}
        <div className="px-6 sm:px-10 pt-8 sm:pt-12 pb-24 sm:pb-32">
          <div className="max-w-7xl mx-auto">
            <h1 className="animate-fade-up font-display text-spark-text text-[48px] sm:text-[74px] md:text-[96px] lg:text-[108px] xl:text-[124px] max-w-5xl">
              Make physical stores think in real time.
            </h1>
            <p className="animate-fade-up delay-100 mt-6 max-w-lg text-lg sm:text-xl text-spark-text-muted leading-relaxed">
              Online stores make decisions in real time. Your restaurant floor can too.
            </p>
            <div className="animate-fade-up delay-200 mt-10 flex flex-wrap gap-3">
              <a href="#cta" className="btn-spark-pill">
                Talk to us
              </a>
              <a href="#product" className="btn-spark-secondary">
                See how it works
              </a>
            </div>
          </div>
        </div>

      </section>

      <ScrollStory />

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

          <div className="mt-16 max-w-4xl border-b border-spark-dark/15 pb-4">
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
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-white/70">
            Restaurants are the start. The same gap between physical and digital exists in retail, hospitality, fitness, healthcare. Every physical experience deserves the decision speed that online businesses already have. Spark is how that happens — first with your team acting on it, eventually with robots doing it automatically.
          </p>
          <p className="mt-16 font-display text-5xl sm:text-7xl md:text-8xl text-spark-lime max-w-4xl">
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


function UseCaseLine({ text }: { text: string }) {
  return (
    <div className="flex items-baseline gap-4 border-t border-spark-dark/15 pt-4 pb-1">
      <span className="text-spark-dark/40 text-sm font-bold flex-shrink-0">→</span>
      <p className="font-display text-spark-text text-2xl sm:text-3xl md:text-4xl">
        {text}
      </p>
    </div>
  );
}
