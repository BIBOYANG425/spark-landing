"use client";
import { useEffect, useState } from "react";
import React from "react";
import { OpsBoard } from "./OpsBoard";

const PHASES = [
  {
    id: "today",
    when: "TODAY",
    ix: "PHASE 01 · LIVE",
    desc: "Awareness — know the moment something goes wrong.",
    h: (<>Catch problems <span className="text-warm">during</span> the shift, not after it.</>),
    body: "Spark watches the floor across cameras, POS, and sensors. The instant something breaks — a table waiting too long, a queue spike, a section without coverage — it surfaces on your phone with full context.",
    metaA: { label: "Median time-to-surface", val: "8s" },
    metaB: { label: "Live in", val: "32 stores" },
  },
  {
    id: "next",
    when: "NEXT",
    ix: "PHASE 02 · 2026",
    desc: "Action — the right person, the right call.",
    h: (<>The right call goes to the right person in <span className="text-warm">seconds</span>.</>),
    body: "Beyond surfacing, Spark routes. A dwelling table pings the nearest server with the guest's context. An out-of-policy refund goes to the GM with the ticket pre-loaded. Coverage gaps become redeploy suggestions before guests notice.",
    metaA: { label: "First US pilots", val: "Q4 26" },
    metaB: { label: "Avg actions / shift", val: "60–120" },
  },
  {
    id: "tomorrow",
    when: "TOMORROW",
    ix: "PHASE 03 · VISION",
    desc: "Automation — same brain, new actuators.",
    h: (<>Hand the same decisions to <span style={{ color: "#9fe870" }}>robots</span>.</>),
    body: "The decision layer doesn't change as automation enters the floor. The same call that routes to a server today routes to a service robot tomorrow. Only the actuator changes. The brain stays the same.",
    metaA: { label: "Decision layer", val: "Same" },
    metaB: { label: "Actuator", val: "Robot" },
  },
];

function NextVisual() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 5), 1800);
    return () => clearInterval(id);
  }, []);
  const steps = [
    { num: "01", label: "Event detected", meta: "TABLE A3 · 19:42:21" },
    { num: "02", label: "Context attached", meta: "PARTY 2 · NO CONTACT" },
    { num: "03", label: "Best actor selected", meta: "SERVER M · 6m AWAY" },
    { num: "04", label: "Routed to phone", meta: "PUSH · 19:42:38" },
    { num: "05", label: "Confirmed on floor", meta: "ACK 4s · ETA 22s" },
  ];
  return (
    <div className="visual-pad" style={{ color: "var(--ink)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="spark-pill" style={{ background: "rgba(22,51,0,0.10)", color: "var(--dark-green)" }}>
          DISPATCH CHAIN
        </span>
        <span className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em" }}>
          EVENT → ACTOR · 17s
        </span>
      </div>
      <div className="dispatch-card" style={{ marginTop: 16 }}>
        {steps.map((s, i) => (
          <div key={s.num} className={`dispatch-step ${i < step ? "done" : i === step ? "" : "pending"}`}>
            <div className="dispatch-num">{s.num}</div>
            <div>
              <div style={{ fontWeight: 600, color: i <= step ? "var(--ink)" : "var(--muted)" }}>{s.label}</div>
            </div>
            <div className="dispatch-meta mono">{s.meta}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, padding: 14, background: "rgba(22,51,0,0.06)", borderRadius: 10, fontSize: 13, color: "var(--ink-2)", lineHeight: 1.4 }}>
        <strong>Why server M.</strong> Closest, lowest current load (3 tables), best historical pickup time on this section. Spark learns who to dispatch.
      </div>
    </div>
  );
}

function TomorrowVisual() {
  const [pos, setPos] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPos((p) => (p + 1) % 3), 2000);
    return () => clearInterval(id);
  }, []);
  const positions = [
    { top: "75%", left: "12%" },
    { top: "40%", left: "40%" },
    { top: "24%", left: "72%" },
  ];
  return (
    <div className="visual-pad">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="spark-pill" style={{ background: "rgba(255,255,255,0.10)", color: "#fff" }}>
          AUTOMATED · DISPATCH
        </span>
        <span className="mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em" }}>
          SAME BRAIN · NEW ACTUATOR
        </span>
      </div>
      <div className="robo-stage" style={{ flex: 1, marginTop: 16, minHeight: 280, position: "relative" }}>
        <div className="robo-cell" style={{ top: "15%", left: "68%", width: 60, height: 38 }}>A3</div>
        <div className="robo-cell" style={{ top: "15%", left: "15%", width: 50, height: 30 }}>A1</div>
        <div className="robo-cell" style={{ top: "15%", left: "40%", width: 50, height: 30 }}>A2</div>
        <div className="robo-cell" style={{ top: "52%", left: "15%", width: 50, height: 30 }}>B1</div>
        <div className="robo-cell" style={{ top: "52%", left: "40%", width: 50, height: 30 }}>B2</div>
        <div className="robo-cell" style={{ top: "52%", left: "68%", width: 50, height: 30 }}>B3</div>
        <div className="robo-cell" style={{ bottom: "8%", left: "15%", width: 80, height: 28 }}>ENTRANCE</div>
        <div className="robo-bot" style={{ top: positions[pos].top, left: positions[pos].left }}>BOT</div>
      </div>
      <div style={{ marginTop: 14, padding: 14, background: "rgba(255,255,255,0.04)", borderRadius: 10, fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}>
        <strong style={{ color: "#9fe870" }}>Routing call → BOT-04.</strong> Same event, same decision, no human in the loop.
      </div>
    </div>
  );
}

export function PhaseStage() {
  const [active, setActive] = useState("today");
  const phase = PHASES.find((p) => p.id === active)!;
  return (
    <>
      <div className="phase-tabs">
        {PHASES.map((p) => (
          <button
            key={p.id}
            className={`phase-tab ${active === p.id ? "active" : ""}`}
            onClick={() => setActive(p.id)}
          >
            <span className="phase-tab-ix mono">{p.ix}</span>
            <div className="when-label font-display">{p.when}</div>
            <div className="phase-tab-desc">{p.desc}</div>
          </button>
        ))}
      </div>

      <div className="phase-stage" key={active}>
        <div className="phase-fade-enter">
          <h3 className="font-display phase-h">{phase.h}</h3>
          <p className="phase-body">{phase.body}</p>
          <div className="phase-meta">
            <div className="meta-box">
              <div className="meta-label mono">{phase.metaA.label}</div>
              <div className="meta-val font-display">{phase.metaA.val}</div>
            </div>
            <div className="meta-box">
              <div className="meta-label mono">{phase.metaB.label}</div>
              <div className="meta-val font-display">{phase.metaB.val}</div>
            </div>
          </div>
        </div>
        <div className={`stage-visual ${active} phase-fade-enter`}>
          {active === "today" && <OpsBoard />}
          {active === "next" && <NextVisual />}
          {active === "tomorrow" && <TomorrowVisual />}
        </div>
      </div>
    </>
  );
}
