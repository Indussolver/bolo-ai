import "./scenes.css";

const words = ["मेरा", "ऑर्डर", "कहाँ", "है"];

export default function SceneUnderstand() {
  return (
    <div className="su">
      <div className="su__words">
        {words.map((w, i) => <span key={w} className="su__word" style={{ "--d": `${i * 0.16}s` }}>{w}</span>)}
      </div>
      <dl className="su__rows">
        <div style={{ "--d": "0.9s" }}><dt>Bhasha</dt><dd>Hindi + English</dd></div>
        <div style={{ "--d": "1.15s" }}><dt>Matlab</dt><dd>Order tracking</dd></div>
      </dl>
      <div className="su__conf" style={{ "--d": "1.4s" }}>
        <svg viewBox="0 0 36 36" aria-hidden="true">
          <circle cx="18" cy="18" r="15" pathLength="1" className="su__t" />
          <circle cx="18" cy="18" r="15" pathLength="1" className="su__f" />
        </svg>
        <span>96% pakka</span>
      </div>
    </div>
  );
}
