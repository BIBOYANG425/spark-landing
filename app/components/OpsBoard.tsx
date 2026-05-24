"use client";
import { useEffect, useState } from "react";
import React from "react";

const SECTION_LABELS = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4"];

interface FeedEvent {
  t: string;
  kind: "info" | "warn" | "alert" | "ok";
  tag: string | null;
  text: React.ReactNode;
  sectionAlert?: [string, string];
}

const muted = { color: "rgba(255,255,255,0.55)" };

const EVENT_REEL: FeedEvent[] = [
  { t: "19:42:08", kind: "info", tag: null, text: <>Section <strong>B2</strong> <span style={muted}>— covers seated, 2 tops.</span></> },
  { t: "19:42:21", kind: "warn", tag: null, text: <>Table <strong>A3</strong> dwell <strong>4:18</strong> <span style={muted}>— no server contact since seat.</span></>, sectionAlert: ["A3", "warn"] },
  { t: "19:42:34", kind: "alert", tag: "ALERT", text: <>Entrance queue: <strong>7 guests</strong> waiting. <span style={muted}>Avg wait 6:42.</span></>, sectionAlert: ["ENT", "alert"] },
  { t: "19:42:41", kind: "ok", tag: "DISPATCH", text: <><strong>Server M.</strong> routed to <strong>A3</strong>. <span style={muted}>ETA 22s.</span></>, sectionAlert: ["A3", "ok"] },
  { t: "19:42:55", kind: "info", tag: null, text: <>POS: refund req. <strong>$48.20</strong> · table <strong>C1</strong> <span style={muted}>— out of policy.</span></> },
  { t: "19:43:08", kind: "ok", tag: "DISPATCH", text: <>Refund routed to <strong>GM Lin</strong> w/ context. <span style={muted}>Awaiting approval.</span></> },
  { t: "19:43:19", kind: "warn", tag: null, text: <>Coverage gap detected: <strong>section C</strong>. <span style={muted}>2 staff in B.</span></>, sectionAlert: ["C3", "warn"] },
  { t: "19:43:32", kind: "ok", tag: "DISPATCH", text: <>Suggest redeploy <strong>Server J → C</strong>. <span style={muted}>Manager confirmed.</span></>, sectionAlert: ["C3", "ok"] },
  { t: "19:43:48", kind: "info", tag: null, text: <>Regular recognized: <strong>Mr. Wei</strong>, <strong>11th visit</strong>. <span style={muted}>Prefers booth, no cilantro.</span></> },
  { t: "19:44:02", kind: "warn", tag: null, text: <>Table <strong>B4</strong> dwell <strong>3:55</strong> <span style={muted}>— check on water refill.</span></>, sectionAlert: ["B4", "warn"] },
];

export function OpsBoard() {
  const [feed, setFeed] = useState<FeedEvent[]>([EVENT_REEL[0]]);
  const [sectionState, setSectionState] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    SECTION_LABELS.forEach((s, i) => { init[s] = i === 5 ? "ok" : i === 9 ? "warn" : ""; });
    return init;
  });
  const [entranceState, setEntranceState] = useState("");
  const [covers, setCovers] = useState(42);
  const [wait, setWait] = useState(6.4);
  const [tableTurns, setTableTurns] = useState(2.1);

  useEffect(() => {
    let tickIx = 0;
    const id = setInterval(() => {
      tickIx = (tickIx + 1) % EVENT_REEL.length;
      const ev = EVENT_REEL[tickIx];
      setFeed((f) => [ev, ...f].slice(0, 6));
      if (ev.sectionAlert) {
        const [sec, kind] = ev.sectionAlert;
        if (sec === "ENT") {
          setEntranceState(kind);
          setTimeout(() => setEntranceState(""), 4500);
        } else {
          setSectionState((s) => ({ ...s, [sec]: kind }));
        }
      }
      setCovers((c) => Math.max(28, Math.min(56, c + (Math.random() < 0.5 ? -1 : 1))));
      setWait((w) => +Math.max(3.2, Math.min(9.4, w + (Math.random() - 0.5) * 0.6)).toFixed(1));
      setTableTurns((t) => +Math.max(1.6, Math.min(2.6, t + (Math.random() - 0.5) * 0.08)).toFixed(2));
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="ops-frame" aria-label="Live operations board demo">
      <div className="ops-topbar">
        <div className="ops-topbar-left">
          <span className="ops-loc">BAHE LI · DOWNTOWN LA</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>FRI · 19:42 PST</span>
        </div>
        <div className="ops-topbar-right">
          <span>SHIFT 2 / 3</span>
          <span className="ops-status">LIVE</span>
        </div>
      </div>

      <div className="ops-body">
        <div className="ops-floor">
          <h4 className="ops-floor-label">FLOOR · SECTIONS</h4>
          <div className="floor-grid">
            {SECTION_LABELS.map((s) => (
              <div key={s} className={`floor-cell ${sectionState[s] || ""}`}>{s}</div>
            ))}
          </div>
          <h4 className="ops-floor-label" style={{ marginTop: 8 }}>ENTRANCE</h4>
          <div className={`floor-cell ${entranceState}`} style={{ aspectRatio: "auto", height: 36, fontSize: 11 }}>
            QUEUE · {entranceState === "alert" ? "7 waiting" : "2 waiting"}
          </div>
          <div className="ops-kpis">
            <div className="ops-kpi">
              <div className="ops-kpi-label">COVERS</div>
              <div className="ops-kpi-val">{covers}<span className="ops-delta up">+3</span></div>
            </div>
            <div className="ops-kpi">
              <div className="ops-kpi-label">AVG WAIT</div>
              <div className="ops-kpi-val">{wait}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>m</span></div>
            </div>
            <div className="ops-kpi">
              <div className="ops-kpi-label">TURNS / TBL</div>
              <div className="ops-kpi-val">{tableTurns}</div>
            </div>
            <div className="ops-kpi">
              <div className="ops-kpi-label">ALERTS</div>
              <div className="ops-kpi-val">{feed.filter((f) => f.kind === "alert" || f.kind === "warn").length}</div>
            </div>
          </div>
        </div>

        <div className="ops-feed">
          <div className="ops-feed-header">
            <h4 className="ops-floor-label" style={{ margin: 0 }}>EVENT FEED</h4>
            <span className="ops-feed-count">{feed.length} events · last 90s</span>
          </div>
          <div className="feed-list">
            {feed.map((ev, i) => (
              <div className="feed-item" key={`${ev.t}-${i}`}>
                <span className="feed-time">{ev.t}</span>
                <span className={`feed-dot ${ev.kind}`} />
                <span className="feed-text">{ev.text}</span>
                {ev.tag && <span className={`feed-tag ${ev.tag.toLowerCase()}`}>{ev.tag}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
