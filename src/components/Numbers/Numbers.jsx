import { useRef } from "react";
import { numbers } from "../../data/numbers.js";
import useInView from "../../hooks/useInView.js";
import NumberCard from "./NumberCard.jsx";
import "./numbers.css";
import "./gauge.css";

export default function Numbers() {
  const ref = useRef(null);
  const seen = useInView(ref, 0.3);
  return (
    <section id="numbers" className="numbers" ref={ref}>
      <h2>Aankde jo bharosa dilate hain.</h2>
      <p className="numbers__sub">Bolo AI ki kasauti teen cheezon par hai: kitna sahi samjha, kitni jaldi jawab diya, aur kitni boliyan pakadi.</p>
      <div className="numbers__grid">
        {numbers.map((n, i) => <NumberCard key={n.id} n={n} index={i} seen={seen} />)}
      </div>
    </section>
  );
}
