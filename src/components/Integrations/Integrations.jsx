import { useRef, useState } from "react";
import { integrations } from "../../data/integrations.js";
import useInView from "../../hooks/useInView.js";
import Orbit from "./Orbit.jsx";
import AnswerCard from "./AnswerCard.jsx";
import "./integrations.css";

export default function Integrations() {
  const ref = useRef(null);
  const seen = useInView(ref, 0.25);
  const [active, setActive] = useState(null);

  return (
    <section id="integrations" className="int" ref={ref}>
      <h2>Aapke tools ke saath, pehle din se.</h2>
      <p className="int__sub">Naya software seekhne ki zaroorat nahi. Bolo AI wahi jodta hai jo aap pehle se use karte hain.</p>
      <Orbit seen={seen} active={active} onActive={setActive} />
      <AnswerCard item={integrations.find((i) => i.id === active)} />
    </section>
  );
}
