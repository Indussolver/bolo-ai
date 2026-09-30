import "./controls.css";

const Chevron = ({ flip }) => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={flip ? { transform: "scaleX(-1)" } : undefined} aria-hidden="true"><path d="M7 4l6 6-6 6" /></svg>
);

export default function Controls({ count, active, onGo }) {
  return (
    <div className="ctrl">
      <button aria-label="Pichhli kahani" disabled={active === 0} onClick={() => onGo(active - 1)}><Chevron flip /></button>
      <div className="ctrl__dots" role="tablist" aria-label="Kahani chunein">
        {Array.from({ length: count }, (_, i) => (
          <button key={i} role="tab" aria-selected={i === active} aria-label={`Kahani ${i + 1}`} className={i === active ? "on" : ""} onClick={() => onGo(i)} />
        ))}
      </div>
      <button aria-label="Agli kahani" disabled={active === count - 1} onClick={() => onGo(active + 1)}><Chevron /></button>
    </div>
  );
}
