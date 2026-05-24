"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ── Math utilities ─────────────────────────────────────────────────────────
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (n: number) => Math.max(0, Math.min(1, n));
const easeInOut = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

const hexRgb = (hex: string): [number, number, number] => {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
};
const lerpColor = (a: string, b: string, t: number) => {
  const A = hexRgb(a),
    B = hexRgb(b);
  return `rgb(${Math.round(lerp(A[0], B[0], t))}, ${Math.round(
    lerp(A[1], B[1], t)
  )}, ${Math.round(lerp(A[2], B[2], t))})`;
};
const fade = (p: number, start: number, end: number) => {
  if (p < start - 0.06) return 0;
  if (p < start) return (p - (start - 0.06)) / 0.06;
  if (p < end) return 1;
  if (p < end + 0.06) return 1 - (p - end) / 0.06;
  return 0;
};

// ── Generated Matisse image stage ──────────────────────────────────────────

const HERO_IMAGES = [
  { src: "/hero/hero-01-manifesto.svg", alt: "" },
  { src: "/hero/hero-02-now.svg", alt: "" },
  { src: "/hero/hero-03-next.svg", alt: "" },
  { src: "/hero/hero-04-future.svg", alt: "" },
];

const imageOpacity = (progress: number, index: number, stops: number[]) => {
  const start = stops[index];
  const end = stops[index + 1] ?? 1;
  const inOpacity = index === 0 ? 1 : clamp01((progress - (start - 0.06)) / 0.12);
  const outOpacity = index === HERO_IMAGES.length - 1 ? 1 : 1 - clamp01((progress - (end - 0.06)) / 0.12);
  return clamp01(inOpacity * outOpacity);
};

function HeroImageStage({
  progress,
  artVisible,
  prefersReducedMotion,
  stops,
}: {
  progress: number;
  artVisible: number;
  prefersReducedMotion: boolean;
  stops: number[];
}) {
  return (
    <div className="hs-image-stage" aria-hidden style={{ opacity: artVisible }}>
      {HERO_IMAGES.map((image, index) => {
        const start = stops[index];
        const end = stops[index + 1] ?? 1;
        const localProgress = easeInOut(clamp01((progress - start) / (end - start)));
        const opacity = imageOpacity(progress, index, stops);
        const baseScale = index === 0 ? 1.015 : 1.03;
        const scale = prefersReducedMotion ? 1 : lerp(baseScale, baseScale + 0.045, localProgress);
        const y = prefersReducedMotion ? 0 : lerp(8, -12, localProgress);

        return (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="hs-image-plate"
            style={{
              opacity,
              transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
            }}
          />
        );
      })}
      <div className="hs-image-scrim" />
    </div>
  );
}

// ── Phase data ─────────────────────────────────────────────────────────────

const HERO_PHASES = [
  {
    key: "intro",
    kicker: "Spark · Spatial decision layer",
    h: "manifesto",
    sub: "",
    bg: { from: "#0e0f0c", to: "#0e0f0c" },
    onDark: true,
  },
  {
    key: "now",
    kicker: "01 · Now",
    h: "You walk the floor.\nYou hope you catch it.",
    sub: "A guest waits. A queue forms. A section goes cold. Today you find out when a manager happens to look up — or when the report lands tomorrow.",
    bg: { from: "#0e0f0c", to: "#f5f3ee" },
    onDark: false,
  },
  {
    key: "next",
    kicker: "02 · Next",
    h: "The brain catches it.\nThe right call goes out.",
    sub: "Spark sees the floor across every camera, POS, and sensor at once. The instant something breaks, the right person gets the call — with full context.",
    bg: { from: "#f5f3ee", to: "#e2f6d5" },
    onDark: false,
  },
  {
    key: "future",
    kicker: "03 · Future",
    h: "Same brain.\nNew hands on the floor.",
    sub: "Tomorrow, the same decision routes to a service robot. The brain doesn't change. Only what it dispatches to.",
    bg: { from: "#e2f6d5", to: "#0e0f0c" },
    onDark: true,
  },
];

// ── Manifesto (phase 0) ────────────────────────────────────────────────────

function ManifestoHeadline({ opacity }: { opacity: number }) {
  return (
    <div className="hs-manifesto" style={{ opacity }}>
      <h1 className="font-display hs-mh hs-mh-desktop">
        <span className="hs-mh-line">Give physical stores</span>
        <span className="hs-mh-line">the decision speed of</span>
        <span className="hs-mh-line" style={{ color: "#9fe870" }}>e-commerce.</span>
      </h1>
      <h1 className="font-display hs-mh hs-mh-mobile">
        <span className="hs-mh-line">Give physical</span>
        <span className="hs-mh-line">stores the</span>
        <span className="hs-mh-line">decision speed of</span>
        <span className="hs-mh-line" style={{ color: "#9fe870" }}>e-commerce.</span>
      </h1>
      <div className="hs-mh-cta">
        <a href="#contact" className="btn btn-primary">
          Book a pilot conversation
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <span className="hs-mh-hint">
          <span className="hs-arrow-down">↓</span> Scroll to see how
        </span>
      </div>
    </div>
  );
}

// ── Phase caption (phases 1-3) ─────────────────────────────────────────────

function PhaseCaption({ phase, opacity, onDark }: {
  phase: (typeof HERO_PHASES)[number];
  opacity: number;
  onDark: boolean;
}) {
  const lines = phase.h.split("\n");
  return (
    <div className={`hs-caption ${onDark ? "on-dark" : ""}`} style={{ opacity }}>
      <div className="hs-cap-kicker">{phase.kicker}</div>
      <h2 className="font-display hs-cap-h">
        {lines.map((line, i) => (
          <span key={i} className="hs-cap-line">{line}</span>
        ))}
      </h2>
      {phase.sub && <p className="hs-cap-sub">{phase.sub}</p>}
    </div>
  );
}

// ── Main HeroScroll ────────────────────────────────────────────────────────

export function HeroScroll() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(clamp01(scrolled / total));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);
    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, []);

  const pStops = [0, 0.25, 0.5, 0.75, 1.0];
  const phaseIx = progress < pStops[1] ? 0 : progress < pStops[2] ? 1 : progress < pStops[3] ? 2 : 3;

  const phase = HERO_PHASES[phaseIx];
  const phaseStart = pStops[phaseIx];
  const phaseEnd = pStops[phaseIx + 1];
  const t = clamp01((progress - phaseStart) / (phaseEnd - phaseStart));
  const bgColor = lerpColor(phase.bg.from, phase.bg.to, easeInOut(t));

  const artVisible = 1;

  const manifestoOp = fade(progress, -0.01, 0.2);
  const captionOps = [
    0,
    fade(progress, 0.26, 0.49),
    fade(progress, 0.51, 0.74),
    fade(progress, 0.76, 1.05),
  ];

  const match = bgColor.match(/rgb\((\d+)/);
  const lum = match ? parseInt(match[1]) : 245;
  const onDark = phase.onDark || lum < 90;

  return (
    <section ref={ref} className="hero-scroll">
      <div className="hero-scroll-sticky" style={{ background: bgColor, transition: "background 80ms linear" }}>
        <HeroImageStage
          progress={progress}
          artVisible={artVisible}
          prefersReducedMotion={prefersReducedMotion}
          stops={pStops}
        />

        <div className="hs-vignette" aria-hidden style={{
          background: onDark
            ? "linear-gradient(180deg, rgba(14,15,12,0.0) 0%, rgba(14,15,12,0.0) 50%, rgba(14,15,12,0.35) 100%)"
            : "linear-gradient(180deg, rgba(245,243,238,0.0) 30%, rgba(245,243,238,0.55) 100%)",
        }} />

        <div className="hero-scroll-overlay">
          <div className="container hs-grid">
            <div className="hs-content">
              <ManifestoHeadline opacity={manifestoOp} />
              {HERO_PHASES.slice(1).map((p, i) => (
                <PhaseCaption key={p.key} phase={p} opacity={captionOps[i + 1]} onDark={onDark} />
              ))}
            </div>

            <div className={`hs-rail ${onDark ? "on-dark" : ""}`}>
              <div className="hs-rail-phases">
                {HERO_PHASES.map((p, i) => (
                  <div key={p.key} className={`hs-rail-row ${i === phaseIx ? "active" : ""}`}>
                    <span className="hs-rail-dot" />
                    <span className="hs-rail-label">{p.kicker}</span>
                  </div>
                ))}
              </div>
              <div className="hs-rail-foot">
                <span className="hs-rail-scroll">SCROLL</span>
                <span className="hs-rail-pct">{String(Math.round(progress * 100)).padStart(2, "0")}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
