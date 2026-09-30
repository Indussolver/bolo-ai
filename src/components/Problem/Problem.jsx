import { useRef } from "react";
import useScrollStory from "../../hooks/useScrollStory.js";
import useInView from "../../hooks/useInView.js";
import PhoneChat from "./PhoneChat.jsx";
import Mishears from "./Mishears.jsx";
import Swap from "./Swap.jsx";
import "./problem.css";

export default function Problem() {
  const track = useRef(null);
  const step = useScrollStory(track, 2);
  const seen = useInView(track, 0.05);
  const fixed = step === 1;

  return (
    <section id="problem" className={`problem ${seen ? "is-in" : ""}`}>
      <header className="problem__head">
        <h2>Call aaya. Samajh nahi aaya.</h2>
        <p>Zyada tar voice bots angrezi sunne ke liye bane hain. Hindustani lehja unke liye shor hai, aur customer ka bharosa wahin toot jaata hai.</p>
      </header>
      <div className="problem__track" ref={track}>
        <div className="problem__sticky">
          <PhoneChat fixed={fixed} />
          <div className="problem__side">
            <div className="toggle" role="status" aria-live="polite">
              <i className="toggle__thumb" style={{ transform: `translateX(${step * 100}%)` }} />
              <span className={!fixed ? "on" : ""}>Purana bot</span>
              <span className={fixed ? "on" : ""}>Bolo AI</span>
            </div>
            <p className="problem__caption">
              <Swap fixed={fixed}
                wrong="Customer ne kaha order. Bot ne suna border. Jawab galat, customer pareshaan, aur ek aur call."
                right="Bolo AI Indian lehje aur Hinglish par bana hai. Wahi awaaz, sahi matlab, pehli baar mein." />
            </p>
            <Mishears fixed={fixed} />
          </div>
        </div>
      </div>
    </section>
  );
}
