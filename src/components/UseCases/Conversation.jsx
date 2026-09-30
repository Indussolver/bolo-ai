import "./conversation.css";

export default function Conversation({ uc, shown, typing, done, onReplay }) {
  return (
    <div className="call">
      <div className="call__bar">
        <span className={`call__orb ${typing ? "is-talking" : ""}`} aria-hidden="true"><i /><i /><i /><i /><i /></span>
        <span className="call__who"><b>Live call</b><small>{uc.place}</small></span>
      </div>

      <div className="call__chat" aria-live="polite">
        {uc.chat.slice(0, shown).map((m, i) => (
          <div key={i} className={`bub bub--${m.who}`}>
            <small>{m.who === "bolo" ? "Bolo" : "Customer"}</small>
            <p>{m.text}</p>
          </div>
        ))}
        {typing && <div className="bub bub--bolo bub--typing" aria-label="Bolo jawab de raha hai"><i /><i /><i /></div>}
      </div>

      <div className={`call__outcome ${done ? "is-on" : ""}`} aria-hidden={!done}>
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10.5l4 4 8-9" /></svg>
        <span>Kaam ho gaya: {uc.outcome}</span>
      </div>
      <button className="call__replay" onClick={onReplay}>Dobara chalayein</button>
    </div>
  );
}
