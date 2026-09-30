import { usecases } from "../../data/usecases.js";
import "./tabs.css";

export default function Tabs({ index, onPick }) {
  const key = (e) => {
    if (e.key === "ArrowRight") onPick((index + 1) % usecases.length);
    if (e.key === "ArrowLeft") onPick((index - 1 + usecases.length) % usecases.length);
  };
  return (
    <div className="utabs" role="tablist" aria-label="Business chunein" onKeyDown={key} style={{ "--n": usecases.length, "--i": index }}>
      <i className="utabs__thumb" />
      {usecases.map((u, i) => (
        <button key={u.id} role="tab" aria-selected={i === index} tabIndex={i === index ? 0 : -1}
          className={i === index ? "on" : ""} onClick={() => onPick(i)}>{u.label}</button>
      ))}
    </div>
  );
}
