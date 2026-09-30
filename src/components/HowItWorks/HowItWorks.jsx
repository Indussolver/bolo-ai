import { useRef } from "react";
import { steps } from "../../data/steps.js";
import useScrollStory from "../../hooks/useScrollStory.js";
import Steps from "./Steps.jsx";
import StoryOrb from "./StoryOrb.jsx";
import "./how.css";

export default function HowItWorks() {
  const track = useRef(null);
  const step = useScrollStory(track, steps.length);

  return (
    <section id="how" className="how">
      <header className="how__head">
        <h2>Teen kadam. Ek second se kam.</h2>
        <p>Scroll kariye aur dekhiye ki aapke customer ke bolne ke baad andar kya hota hai.</p>
      </header>
      <div className="how__track" ref={track}>
        <div className="how__sticky">
          <StoryOrb step={step} />
          <Steps step={step} />
        </div>
      </div>
    </section>
  );
}
