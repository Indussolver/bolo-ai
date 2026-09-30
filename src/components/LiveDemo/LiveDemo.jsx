import { useRef, useState } from "react";
import { languages } from "../../data/languages.js";
import useDemoFlow from "../../hooks/useDemoFlow.js";
import useInView from "../../hooks/useInView.js";
import LanguageChips from "../Hero/LanguageChips.jsx";
import Waveform from "./Waveform.jsx";
import MicButton from "./MicButton.jsx";
import Chat from "./Chat.jsx";
import "./demo.css";

const status = { idle: "Tayyar", listening: "Sun raha hoon", thinking: "Samajh raha hoon", replying: "Jawab de raha hoon" };

export default function LiveDemo() {
  const [i, setI] = useState(0);
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const seen = useInView(sectionRef);
  const flow = useDemoFlow(languages[i].id);

  return (
    <section id="demo" className="demo" ref={sectionRef}>
      <h2 className="demo__title">Ek baar bolke dekhiye.</h2>
      <p className="demo__sub">Apni bhasha chuniye, mic dabaiye aur sawal poochiye. Bolo AI turant sunta hai aur usi bhasha mein jawab deta hai.</p>

      <div className={`demo__stage ${seen ? "is-in" : ""}`} ref={stageRef}>
        <div className={`demo__status demo__status--${flow.phase}`}><i />{status[flow.phase]}</div>
        <Waveform phase={flow.phase} read={flow.readLevels} stageRef={stageRef} />
        <MicButton phase={flow.phase} onPress={flow.press} />
        <Chat phase={flow.phase} userText={flow.userText} botText={flow.botText} sample={flow.sample} />
        {flow.notice && <p className="demo__notice" role="status">{flow.notice}</p>}
        <LanguageChips index={i} onPick={setI} />
        <button className="demo__sample" onClick={flow.playSample}>Mic nahi hai? Sample sunein</button>
      </div>
      <p className="demo__fine">Aapka sawal live sunaa jaata hai. Jawab abhi scripted hai, AI backend jodne par har sawal ka asli jawab milega.</p>
    </section>
  );
}
