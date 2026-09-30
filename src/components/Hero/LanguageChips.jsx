import { useEffect, useRef } from "react";
import { languages } from "../../data/languages.js";
import "./chips.css";

export default function LanguageChips({ index, onPick }) {
  const box = useRef(null);
  const first = useRef(true);
  // keep the active chip centred when the row scrolls (phones). Scrolls the row only, never the page.
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    const el = box.current?.children[index];
    if (el) box.current.scrollTo({ left: el.offsetLeft - (box.current.clientWidth - el.clientWidth) / 2, behavior: "smooth" });
  }, [index]);

  return (
    <div className="chips" role="tablist" aria-label="Bhasha chunein" ref={box}>
      {languages.map((l, i) => (
        <button key={l.id} role="tab" aria-selected={i === index} className={`chip ${i === index ? "is-on" : ""}`} onClick={() => onPick(i)}>
          {l.label}
        </button>
      ))}
    </div>
  );
}
