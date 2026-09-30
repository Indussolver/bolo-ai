import "./card.css";

export default function DialectCard({ d, flipped, onToggle, index }) {
  return (
    <button className={`dcard ${flipped ? "is-flipped" : ""}`} onClick={onToggle} aria-pressed={flipped}
      aria-label={`${d.name}: ${flipped ? "Bolo AI ne kya samjha" : "customer ne kya kaha"}. Palatne ke liye dabayein`}
      style={{ "--k": index }}>
      <span className="dcard__inner">
        <span className="dcard__face dcard__front">
          <span className="dcard__tag"><b>{d.name}</b>{d.where}</span>
          <span className="dcard__say">{d.say}</span>
          <span className="dcard__hint">Palatkar dekhiye</span>
        </span>
        <span className="dcard__face dcard__back">
          <span className="dcard__tag"><b>Bolo AI ne samjha</b>{d.name}</span>
          <span className="dcard__rows">
            <span><em>Bhasha</em><strong>{d.lang}</strong></span>
            <span><em>Matlab</em><strong>Refund status</strong></span>
            <span><em>Pakka</em><strong>{d.conf}%</strong></span>
          </span>
          <span className="dcard__bar"><i style={{ "--c": d.conf }} /></span>
          <span className="dcard__reply">{d.reply}</span>
        </span>
      </span>
    </button>
  );
}
