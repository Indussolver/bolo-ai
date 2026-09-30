export default function CoreOrb({ talking }) {
  return (
    <div className={`core ${talking ? "is-talking" : ""}`} aria-hidden="true">
      <i className="core__ripple" /><i className="core__ripple" />
      <div className="core__glass">
        <span className="core__bars">{Array.from({ length: 7 }, (_, i) => <b key={i} style={{ "--i": i }} />)}</span>
        <span className="core__gloss" />
      </div>
    </div>
  );
}
