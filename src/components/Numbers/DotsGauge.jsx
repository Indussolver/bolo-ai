// One dot per language, lighting up as the counter climbs.
export default function DotsGauge({ t, value }) {
  const lit = Math.round(value * t);
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      {Array.from({ length: value }, (_, i) => {
        const a = (i / value) * Math.PI * 2 - Math.PI / 2;
        return <circle key={i} cx={50 + 42 * Math.cos(a)} cy={50 + 42 * Math.sin(a)} r="5.2" className={`g-dot ${i < lit ? "is-lit" : ""}`} />;
      })}
    </svg>
  );
}
