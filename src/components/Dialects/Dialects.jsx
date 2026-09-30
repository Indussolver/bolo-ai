import { useEffect, useRef, useState } from "react";
import { dialects } from "../../data/dialects.js";
import useInView from "../../hooks/useInView.js";
import DialectCard from "./DialectCard.jsx";
import GlassButton from "../ui/GlassButton.jsx";
import "./dialects.css";

export default function Dialects() {
  const ref = useRef(null);
  const seen = useInView(ref, 0.35);
  const [flipped, setFlipped] = useState(dialects.map(() => false));
  const [done, setDone] = useState(false);
  const [run, setRun] = useState(0);
  const timers = useRef([]);

  // one orchestrated moment: cards flip one after another, then the shared meaning lights up
  useEffect(() => {
    if (!seen) return;
    timers.current.forEach(clearTimeout);
    timers.current = dialects.map((_, i) => setTimeout(() => setFlipped((f) => f.map((v, j) => (j === i ? true : v))), 1100 + i * 480));
    timers.current.push(setTimeout(() => setDone(true), 1100 + dialects.length * 480 + 500));
    return () => timers.current.forEach(clearTimeout);
  }, [seen, run]);

  const replay = () => { setFlipped(dialects.map(() => false)); setDone(false); setRun((r) => r + 1); };
  const toggle = (i) => setFlipped((f) => f.map((v, j) => (j === i ? !v : v)));

  return (
    <section id="lehja" className="dialects" ref={ref}>
      <h2>Ek matlab. Chaar tareeke.</h2>
      <p className="dialects__sub">Ek hi baat sau tareeke se kahi jaati hai. Kisi bhi tareeke se poochiye, Bolo AI matlab wahi pakadta hai.</p>

      <div className={`meaning ${done ? "is-on" : ""}`} role="status">
        <i />Sabka matlab ek: <b>Refund abhi tak nahi aaya</b>
      </div>

      <div className={`dialects__grid ${seen ? "is-in" : ""}`}>
        {dialects.map((d, i) => <DialectCard key={d.id} d={d} index={i} flipped={flipped[i]} onToggle={() => toggle(i)} />)}
      </div>

      <div className="dialects__foot">
        <GlassButton variant="glass" onClick={replay}>Dobara dekhein</GlassButton>
        <p>Kisi bhi card ko dabakar palat sakte hain.</p>
      </div>
    </section>
  );
}
