"use client";
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

// ── Matisse SVG primitives ─────────────────────────────────────────────────

function Leaf({ x, y, rotate = 0, scale = 1, fill, opacity = 1 }: {
  x: number; y: number; rotate?: number; scale?: number; fill: string; opacity?: number;
}) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate}) scale(${scale})`} opacity={opacity}>
      <path d="M0,0 C 20,-40 70,-50 90,-20 C 102,4 80,40 40,46 C 8,50 -10,30 0,0 Z" fill={fill} />
    </g>
  );
}

function HumanFigure({ x, y, scale = 1, opacity = 1, color = "#0e0f0c" }: {
  x: number; y: number; scale?: number; opacity?: number; color?: string;
}) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`} opacity={opacity}>
      <ellipse cx="0" cy="-78" rx="22" ry="26" fill={color} />
      <path d="M -28 -50 C -32 -30, -38 0, -30 30 C -22 50, 22 50, 30 30 C 38 0, 32 -30, 28 -50 C 18 -56, -18 -56, -28 -50 Z" fill={color} />
      <path d="M 26 -30 C 50 -20, 60 0, 56 22 C 52 30, 44 28, 42 18 C 40 4, 32 -10, 22 -16 Z" fill={color} />
      <path d="M -16 30 C -22 50, -22 90, -18 110 C -14 116, -6 112, -6 100 C -6 80, -10 50, -10 36 Z" fill={color} />
      <path d="M 10 30 C 8 50, 14 90, 18 108 C 22 116, 28 112, 26 100 C 24 80, 22 50, 22 34 Z" fill={color} />
    </g>
  );
}

function RobotFigure({ x, y, scale = 1, opacity = 1, color = "#0e0f0c", accent = "#9fe870" }: {
  x: number; y: number; scale?: number; opacity?: number; color?: string; accent?: string;
}) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`} opacity={opacity}>
      <path d="M -22 -100 C -22 -110, -16 -114, -8 -114 L 8 -114 C 16 -114, 22 -110, 22 -100 L 22 -70 C 22 -64, 18 -60, 12 -60 L -12 -60 C -18 -60, -22 -64, -22 -70 Z" fill={color} />
      <rect x="-14" y="-92" width="28" height="6" rx="3" fill={accent} />
      <rect x="-6" y="-60" width="12" height="6" fill={color} />
      <path d="M -30 -54 L 30 -54 L 34 28 C 34 38, 28 42, 20 42 L -20 42 C -28 42, -34 38, -34 28 Z" fill={color} />
      <circle cx="0" cy="-20" r="6" fill={accent} />
      <path d="M 30 -50 C 46 -42, 56 -20, 54 4 C 52 12, 44 12, 40 4 C 36 -14, 30 -28, 24 -38 Z" fill={color} />
      <path d="M -30 -50 C -46 -42, -56 -20, -54 4 C -52 12, -44 12, -40 4 C -36 -14, -30 -28, -24 -38 Z" fill={color} />
      <rect x="-20" y="42" width="14" height="68" rx="3" fill={color} />
      <rect x="6" y="42" width="14" height="68" rx="3" fill={color} />
    </g>
  );
}

function FloorTable({ x, y, w = 64, h = 24, fill = "#ea5a2e", accent = "#0e0f0c", opacity = 1 }: {
  x: number; y: number; w?: number; h?: number; fill?: string; accent?: string; opacity?: number;
}) {
  return (
    <g opacity={opacity}>
      <ellipse cx={x} cy={y} rx={w / 2} ry={h / 2} fill={fill} />
      <circle cx={x - w / 2 - 8} cy={y} r="6" fill={accent} />
      <circle cx={x + w / 2 + 8} cy={y} r="6" fill={accent} />
    </g>
  );
}

function SignalArc({ from, to, color, opacity = 1, dash = 0 }: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  color: string;
  opacity?: number;
  dash?: number;
}) {
  const midX = (from.x + to.x) / 2;
  const midY = Math.min(from.y, to.y) - 80;
  const d = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
  return (
    <path d={d} stroke={color} strokeWidth="3.5" fill="none" opacity={opacity}
      strokeDasharray="6 10" strokeDashoffset={dash} strokeLinecap="round" />
  );
}

// ── Matisse animated stage ─────────────────────────────────────────────────

function MatisseStage({ progress, artVisible }: { progress: number; artVisible: number }) {
  const brainOpacity = fade(progress, 0.45, 1.1);
  const brainScale = lerp(0.55, 1.1, easeInOut(clamp01((progress - 0.35) / 0.55)));
  const brainPulse = 1 + Math.sin(progress * Math.PI * 6) * 0.025;

  const humanOpacity = fade(progress, 0.2, 1.1);
  const humanX = lerp(360, 480, easeInOut(clamp01((progress - 0.2) / 0.7)));

  const robotOpacity = fade(progress, 0.72, 1.1);
  const robotScale = lerp(0.7, 1, easeInOut(clamp01((progress - 0.72) / 0.2)));

  const floorOpacity = fade(progress, 0.2, 1.1);
  const tablesOpacity = fade(progress, 0.22, 1.1);
  const signalOpacity = clamp01((progress - 0.5) / 0.15);
  const robotSignalOpacity = robotOpacity * 0.95;
  const dashOffset = -(progress * 240) % 16;
  const leavesOpacity = fade(progress, 0.18, 1.1);

  return (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: artVisible, transition: "opacity 500ms ease" }}>
      <g opacity={leavesOpacity * 0.18}>
        <Leaf x={-40} y={120} rotate={-25} scale={2.6} fill="#163300" />
        <Leaf x={1020} y={620} rotate={155} scale={2.0} fill="#163300" />
      </g>
      <path
        d="M 0 640 C 200 600, 380 660, 580 630 C 760 600, 900 660, 1080 620 C 1140 605, 1200 615, 1200 615 L 1200 800 L 0 800 Z"
        fill={progress < 0.78 ? "#163300" : "#0a1208"}
        opacity={floorOpacity * 0.94}
      />
      <g opacity={tablesOpacity}>
        <FloorTable x={200} y={700} w={70} h={26} fill="#ea5a2e" accent="#0e0f0c" />
        <FloorTable x={380} y={730} w={56} h={22} fill="#9fe870" accent="#0e0f0c" />
        <FloorTable x={760} y={710} w={66} h={24} fill="#ea5a2e" accent="#0e0f0c" />
        <FloorTable x={960} y={740} w={50} h={20} fill="#9fe870" accent="#0e0f0c" />
      </g>
      <g opacity={leavesOpacity}>
        <Leaf x={120} y={260} rotate={-15} scale={1.4} fill="#9fe870" opacity={0.75} />
        <Leaf x={980} y={180} rotate={180} scale={1.1} fill="#ea5a2e" opacity={0.85} />
        <Leaf x={1060} y={420} rotate={120} scale={1.6} fill="#9fe870" opacity={0.55} />
      </g>
      <g transform={`translate(660 240) scale(${brainScale * brainPulse})`} opacity={brainOpacity}>
        <path d="M 0 -100 C 80 -110, 140 -50, 130 30 C 124 90, 60 130, -20 120 C -100 110, -140 50, -130 -30 C -120 -90, -60 -110, 0 -100 Z" fill="#9fe870" />
        <path d="M -10 -50 C 30 -56, 60 -30, 56 10 C 54 38, 30 56, -10 54 C -44 50, -60 26, -56 -10 C -52 -38, -36 -52, -10 -50 Z" fill="#163300" opacity={0.85} />
        <circle cx="14" cy="-14" r="10" fill="#9fe870" />
      </g>
      <HumanFigure x={humanX} y={620} scale={1.05} opacity={humanOpacity} color="#0e0f0c" />
      <RobotFigure x={780} y={620} scale={robotScale} opacity={robotOpacity} color="#0e0f0c" accent="#9fe870" />
      <g opacity={signalOpacity}>
        <SignalArc from={{ x: 660, y: 280 }} to={{ x: humanX, y: 550 }} color="#ea5a2e" dash={dashOffset} />
        <SignalArc from={{ x: 660, y: 280 }} to={{ x: 200, y: 690 }} color="#ea5a2e" opacity={0.65} dash={dashOffset + 6} />
        <SignalArc from={{ x: 660, y: 280 }} to={{ x: 760, y: 700 }} color="#ea5a2e" opacity={0.65} dash={dashOffset + 12} />
      </g>
      <g opacity={robotSignalOpacity}>
        <SignalArc from={{ x: 660, y: 280 }} to={{ x: 780, y: 550 }} color="#9fe870" dash={dashOffset + 4} />
      </g>
      <g opacity={leavesOpacity * 0.9}>
        <Leaf x={60} y={560} rotate={-40} scale={1.8} fill="#163300" />
        <Leaf x={1080} y={560} rotate={140} scale={1.6} fill="#163300" />
      </g>
    </svg>
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
      <h1 className="font-display hs-mh">
        <span className="hs-mh-line">Give physical stores</span>
        <span className="hs-mh-line">the decision speed of</span>
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
      <div className="hs-mh-stamp">
        <span><em>Live</em> in 32 stores · regional hotpot chain · China</span>
        <span>·</span>
        <span>YC S26 applicant</span>
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

  const pStops = [0, 0.25, 0.5, 0.75, 1.0];
  const phaseIx = progress < pStops[1] ? 0 : progress < pStops[2] ? 1 : progress < pStops[3] ? 2 : 3;

  const phase = HERO_PHASES[phaseIx];
  const phaseStart = pStops[phaseIx];
  const phaseEnd = pStops[phaseIx + 1];
  const t = clamp01((progress - phaseStart) / (phaseEnd - phaseStart));
  const bgColor = lerpColor(phase.bg.from, phase.bg.to, easeInOut(t));

  const artVisible = clamp01((progress - 0.22) / 0.08);

  const manifestoOp = fade(progress, -0.01, 0.2);
  const captionOps = [
    0,
    fade(progress, 0.26, 0.49),
    fade(progress, 0.51, 0.74),
    fade(progress, 0.76, 1.05),
  ];

  const match = bgColor.match(/rgb\((\d+)/);
  const lum = match ? parseInt(match[1]) : 245;
  const onDark = lum < 90;

  return (
    <section ref={ref} className="hero-scroll">
      <div className="hero-scroll-sticky" style={{ background: bgColor, transition: "background 80ms linear" }}>
        <MatisseStage progress={progress} artVisible={artVisible} />

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
