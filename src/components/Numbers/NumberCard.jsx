import useProgress from "../../hooks/useProgress.js";
import RingGauge from "./RingGauge.jsx";
import DialGauge from "./DialGauge.jsx";
import DotsGauge from "./DotsGauge.jsx";

const gauges = { ring: RingGauge, dial: DialGauge, dots: DotsGauge };

export default function NumberCard({ n, index, seen }) {
  const t = useProgress(seen, 1900, 300 + index * 250);
  const Gauge = gauges[n.kind];

  return (
    <article className={`ncard ${seen ? "is-in" : ""}`} style={{ "--k": index }}>
      <div className="gauge">
        <span className="gauge__glass" />
        <Gauge t={t} value={n.value} max={n.max} />
      </div>
      <div className="ncard__text">
        <p className="ncard__num" aria-label={`${n.value}${n.unit}`}>
          <span aria-hidden="true">{(n.value * t).toFixed(n.decimals)}</span>
          <small aria-hidden="true">{n.unit}</small>
        </p>
        <h3>{n.label}</h3>
        <p className="ncard__note">{n.note}</p>
      </div>
    </article>
  );
}
