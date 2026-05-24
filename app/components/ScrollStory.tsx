"use client";
import { useEffect, useRef, useState } from "react";

function EyeArt() {
  return (
    <svg
      viewBox="0 0 360 440"
      className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none lg:h-[440px]"
      fill="none"
      aria-hidden
    >
      {/* Outer cream oval — the eye form */}
      <path
        d="M180 35 C248 35 302 107 302 205 C302 318 248 390 180 390 C112 390 58 318 58 205 C58 107 112 35 180 35Z"
        fill="#fdf4e3"
      />
      {/* Dark iris */}
      <path
        d="M180 105 C218 105 244 147 244 205 C244 272 218 308 180 308 C142 308 116 272 116 205 C116 147 142 105 180 105Z"
        fill="#1a1a18"
      />
      {/* Catch light — cream circle */}
      <circle cx="200" cy="168" r="24" fill="#fdf4e3" />
      {/* Leaf forms — deep green */}
      <path d="M55 65 C82 22 124 34 128 72 C100 92 54 88 55 65Z" fill="#1a4020" />
      <path d="M305 65 C278 22 236 34 232 72 C260 92 306 88 305 65Z" fill="#1a4020" />
      <path d="M68 360 C92 318 130 328 128 365 C106 388 64 385 68 360Z" fill="#1a4020" />
      <path d="M292 360 C268 318 230 328 232 365 C254 388 296 385 292 360Z" fill="#1a4020" />
      <path d="M180 400 C165 378 168 365 180 360 C192 365 195 378 180 400Z" fill="#1a4020" />
      {/* Gold dot accents */}
      <circle cx="44" cy="210" r="13" fill="#f0a030" />
      <circle cx="316" cy="195" r="10" fill="#f0a030" />
      <circle cx="145" cy="25" r="9" fill="#f0a030" />
      <circle cx="228" cy="22" r="12" fill="#f0a030" />
    </svg>
  );
}

function ArrowArt() {
  return (
    <svg
      viewBox="0 0 360 440"
      className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none lg:h-[440px]"
      fill="none"
      aria-hidden
    >
      {/* Main swoosh — organic arrow body */}
      <path
        d="M30 230 C70 175 150 168 230 192 C295 212 335 205 355 185 L355 225 C335 248 295 258 225 238 C150 218 75 228 45 272Z"
        fill="#ea5a2e"
      />
      {/* Arrow tip — organic */}
      <path
        d="M352 178 C375 168 388 185 378 205 C368 215 350 210 352 178Z"
        fill="#ea5a2e"
      />
      {/* Ivory leaf accents — suggest motion */}
      <path d="M40 160 C65 125 98 130 95 158 C75 178 36 175 40 160Z" fill="#fdf4e3" />
      <path d="M35 305 C62 340 95 335 90 307 C70 287 32 290 35 305Z" fill="#fdf4e3" />
      {/* Trailing leaf — smaller */}
      <path d="M75 215 C95 198 114 202 112 218 C96 232 72 230 75 215Z" fill="#fdf4e3" opacity="0.55" />
      {/* Gold accents */}
      <circle cx="165" cy="145" r="22" fill="#f0b429" />
      <circle cx="290" cy="298" r="16" fill="#f0b429" />
      <circle cx="80" cy="382" r="11" fill="#f0b429" />
      {/* Small leaf bottom right */}
      <path d="M318 380 C340 348 368 355 364 382 C346 400 314 398 318 380Z" fill="#1a4020" />
    </svg>
  );
}

function DanceArt() {
  return (
    <svg
      viewBox="0 0 360 440"
      className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none lg:h-[440px]"
      fill="none"
      aria-hidden
    >
      {/* Three organic blobs in triangle = interconnected system */}
      {/* Blob 1 — lime, top left */}
      <path
        d="M85 165 C85 110 118 82 158 82 C198 82 228 110 228 165 C228 220 198 248 158 248 C118 248 85 220 85 165Z"
        fill="#9fe870"
      />
      {/* Blob 2 — coral, top right */}
      <path
        d="M215 140 C215 92 242 68 275 68 C308 68 332 92 332 140 C332 188 308 212 275 212 C242 212 215 188 215 140Z"
        fill="#ea5a2e"
      />
      {/* Blob 3 — cream, bottom center */}
      <path
        d="M135 315 C135 268 162 244 200 244 C238 244 265 268 265 315 C265 362 238 386 200 386 C162 386 135 362 135 315Z"
        fill="#fdf4e3"
      />
      {/* Organic connectors */}
      <path d="M220 158 C235 150 250 150 260 158 C250 168 235 168 220 158Z" fill="#9fe870" />
      <path d="M175 244 C182 262 188 278 194 292 C184 292 176 276 175 244Z" fill="#9fe870" />
      <path d="M242 215 C237 232 230 252 224 268 C216 260 220 242 242 215Z" fill="#ea5a2e" />
      {/* Leaf accents */}
      <path d="M42 260 C62 224 94 232 90 262 C70 282 38 280 42 260Z" fill="#9fe870" opacity="0.65" />
      <path d="M310 355 C330 318 358 325 354 355 C336 374 306 372 310 355Z" fill="#9fe870" opacity="0.65" />
      {/* Small dot inside blob 1 */}
      <circle cx="158" cy="165" r="18" fill="#163300" />
      {/* Small dot inside blob 3 */}
      <circle cx="200" cy="315" r="16" fill="#454745" />
    </svg>
  );
}

const panels = [
  {
    label: "Today",
    headline: "Know the moment it happens.",
    body: "Spark surfaces problems while there's still time to act — not after the shift is over.",
    bg: "#b33826",
    labelColor: "rgba(255,190,170,0.85)",
    art: <EyeArt />,
  },
  {
    label: "Next",
    headline: "Act on it instantly.",
    body: "The right person gets the call the moment it matters — the way e-commerce teams already work.",
    bg: "#1a3357",
    labelColor: "rgba(160,200,255,0.85)",
    art: <ArrowArt />,
  },
  {
    label: "Tomorrow",
    headline: "Robots take it from here.",
    body: "Hand those same decisions to automation. Same intelligence, no human in the loop.",
    bg: "#0e0f0c",
    labelColor: "rgba(159,232,112,0.85)",
    art: <DanceArt />,
  },
];

export function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      const height = el.offsetHeight;
      const scrolled = -top;
      const max = height - window.innerHeight;
      const p = Math.max(0, Math.min(1, scrolled / max));
      setActive(p < 1 / 3 ? 0 : p < 2 / 3 ? 1 : 2);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {panels.map((panel, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center"
            style={{
              background: panel.bg,
              opacity: active === i ? 1 : 0,
              transform:
                active === i
                  ? "translateY(0)"
                  : active > i
                  ? "translateY(-16px)"
                  : "translateY(16px)",
              transition:
                "opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)",
              pointerEvents: active === i ? "auto" : "none",
            }}
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Art */}
              <div
                className={`flex justify-center lg:justify-start ${i % 2 === 1 ? "lg:order-2" : ""}`}
                style={{
                  transform: active === i ? "scale(1)" : "scale(0.96)",
                  transition: "transform 0.75s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {panel.art}
              </div>

              {/* Text */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span
                  className="text-xs font-bold uppercase tracking-widest block mb-5"
                  style={{ color: panel.labelColor }}
                >
                  {panel.label}
                </span>
                <h2
                  className="font-display text-white"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    lineHeight: 0.9,
                  }}
                >
                  {panel.headline}
                </h2>
                <p
                  className="mt-6 text-lg leading-relaxed max-w-sm"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                >
                  {panel.body}
                </p>
              </div>
            </div>

            {/* Progress dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
              {panels.map((_, j) => (
                <div
                  key={j}
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 999,
                    background:
                      j === active
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(255,255,255,0.22)",
                    transform: j === active ? "scale(1.35)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
