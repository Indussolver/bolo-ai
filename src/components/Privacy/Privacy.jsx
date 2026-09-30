import { useRef } from "react";
import { features } from "../../data/privacy.js";
import useScrollStory from "../../hooks/useScrollStory.js";
import Shield from "./Shield.jsx";
import Features from "./Features.jsx";
import "./privacy.css";

export default function Privacy() {
  const track = useRef(null);
  const step = useScrollStory(track, features.length + 1); // 0 = shield still open, then one step per point

  return (
    <section id="privacy" className="priv">
      <header className="priv__head">
        <h2>Aapki awaaz. Aapka data. India mein.</h2>
        <p>Customer ki awaaz sabse nijee cheez hai. Isliye use waise hi sambhalte hain.</p>
      </header>
      <div className="priv__track" ref={track}>
        <div className="priv__sticky">
          <Shield />
          <Features step={step} />
        </div>
      </div>
    </section>
  );
}
