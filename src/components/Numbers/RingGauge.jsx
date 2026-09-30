export default function RingGauge({ t, value }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="42" pathLength="1" className="g-track" />
      <circle cx="50" cy="50" r="42" pathLength="1" className="g-fill"
        style={{ strokeDasharray: 1, strokeDashoffset: 1 - (value / 100) * t }} transform="rotate(-90 50 50)" />
    </svg>
  );
}
