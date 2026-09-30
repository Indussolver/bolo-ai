import { useRef } from "react";
import { languages } from "../../data/languages.js";
import { site } from "../../data/site.js";
import useInView from "../../hooks/useInView.js";
import useCycle from "../../hooks/useCycle.js";
import VoiceOrb from "../Hero/VoiceOrb.jsx";
import Transcript from "../Hero/Transcript.jsx";
import "./cta.css";

export default function Cta() {
  const ref = useRef(null);
  const seen = useInView(ref, 0.35);
  const [i] = useCycle(languages.length, 3200);
  const lang = languages[i];
  const mail = `mailto:${site.email}?subject=${encodeURIComponent("Bolo AI demo")}`;
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Namaste, mujhe Bolo AI ka demo chahiye.")}`;

  return (
    <section id="book" className="cta" ref={ref}>
      <div className={`cta__panel ${seen ? "is-in" : ""}`}>
        <i className="cta__glow cta__glow--a" /><i className="cta__glow cta__glow--b" />
        {/* the orb is mounted only when visible, so its entrance plays again as a bookend to the hero */}
        <div className="cta__stage">
          {seen && <><VoiceOrb lang={lang} /><Transcript lang={lang} /></>}
        </div>
        <h2>Ek demo. Aapki apni bhasha mein.</h2>
        <p className="cta__sub">Apna sawal batayiye. 15 minute mein hum Bolo ko aapke business ki tarah bolta hua dikha denge.</p>
        <div className="cta__btns">
          <a className="gbtn gbtn--black" href={mail}>Demo book karein</a>
          <a className="gbtn gbtn--glass" href={wa} target="_blank" rel="noreferrer">WhatsApp par baat karein</a>
        </div>
        <p className="cta__fine">15 minute ka demo, koi zimmedari nahi.</p>
      </div>
    </section>
  );
}
