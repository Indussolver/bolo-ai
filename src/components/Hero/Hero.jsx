import { useRef } from "react";
import useParallax from "../../hooks/useParallax.js";
import useCycle from "../../hooks/useCycle.js";
import { languages } from "../../data/languages.js";
import Backdrop from "./Backdrop.jsx";
import VoiceOrb from "./VoiceOrb.jsx";
import LanguageChips from "./LanguageChips.jsx";
import Transcript from "./Transcript.jsx";
import GlassButton from "../ui/GlassButton.jsx";
import "./hero.css";

export default function Hero() {
  const ref = useRef(null);
  useParallax(ref);
  const [index, setIndex] = useCycle(languages.length);
  const lang = languages[index];

  return (
    <section id="top" className="hero" ref={ref}>
      <Backdrop />
      <h1 className="hero__title">
        Aap bolein.<br />
        <span>Hum samjhenge.</span>
      </h1>
      <p className="hero__sub">
        Bolo AI aapke customers se 8 Indian bhashaon mein baat karta hai, unke lehje aur Hinglish ke saath. Phone par, WhatsApp par, kahin bhi.
      </p>
      <div className="hero__cta">
        <GlassButton onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}>Live demo sunein</GlassButton>
        <GlassButton variant="glass">Pricing dekhein</GlassButton>
      </div>
      <div className="hero__stage">
        <VoiceOrb lang={lang} />
        <Transcript lang={lang} />
        <LanguageChips index={index} onPick={setIndex} />
      </div>
    </section>
  );
}
