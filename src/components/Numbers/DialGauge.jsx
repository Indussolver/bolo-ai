// Half-dial 0..max seconds. The fill stops well before the 1s tick, which is the whole point.
export default function DialGauge({ t, value, max }) {
  const frac = value / max;
  const angle = -90 + 180 * frac * t;
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <path d="M 10 50 A 40 40 0 0 1 90 50" pathLength="1" className="g-track" />
      <path d="M 10 50 A 40 40 0 0 1 90 50" pathLength="1" className="g-fill" style={{ strokeDasharray: 1, strokeDashoffset: 1 - frac * t }} />
      <line x1="50" y1="3" x2="50" y2="15" className="g-tick" />
      <text x="50" y="-1" className="g-text" textAnchor="middle">1s</text>
      <text x="10" y="62" className="g-text" textAnchor="middle">0</text>
      <text x="90" y="62" className="g-text" textAnchor="middle">{max}s</text>
      <g transform={`rotate(${angle} 50 50)`}>
        <line x1="50" y1="50" x2="50" y2="17" className="g-needle" />
      </g>
      <circle cx="50" cy="50" r="3.6" className="g-hub" />
    </svg>
  );
}
