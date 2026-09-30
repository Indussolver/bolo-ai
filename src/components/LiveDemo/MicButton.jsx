import "./mic.css";

const labels = { idle: "Bolna shuru karein", listening: "Bolna band karein", thinking: "Rukiye", replying: "Jawab band karein" };

export default function MicButton({ phase, onPress }) {
  return (
    <div className={`mic mic--${phase}`}>
      <i className="mic__ring" /><i className="mic__ring" />
      <button className="mic__btn" onClick={onPress} aria-label={labels[phase]}>
        <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          {phase === "idle"
            ? <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></>
            : <rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor" stroke="none" />}
        </svg>
      </button>
    </div>
  );
}
