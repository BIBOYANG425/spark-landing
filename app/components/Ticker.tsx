const ITEMS = [
  "TABLE A3 · 4:18 dwell · NO CONTACT",
  "ENTRANCE QUEUE +5 IN 90S",
  "REFUND $48.20 · ROUTING TO GM",
  "COVERAGE GAP · SECTION C",
  "REGULAR RECOGNIZED · MR. WEI · VISIT 11",
  "SHIFT 2/3 · 19:42 · DOWNTOWN LA",
  "SERVER M ROUTED · ETA 22S",
  "B4 WATER REFILL · DISPATCHED",
];

export function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
