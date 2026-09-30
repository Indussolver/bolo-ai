import { useRef, useState } from "react";
import { usecases } from "../../data/usecases.js";
import useInView from "../../hooks/useInView.js";
import useConversation from "../../hooks/useConversation.js";
import Tabs from "./Tabs.jsx";
import Conversation from "./Conversation.jsx";
import "./usecases.css";

export default function UseCases() {
  const ref = useRef(null);
  const seen = useInView(ref, 0.3);
  const [i, setI] = useState(0);
  const [run, setRun] = useState(0);
  const uc = usecases[i];
  const convo = useConversation(uc.chat, seen, `${i}-${run}`);

  return (
    <section id="usecases" className="uc" ref={ref}>
      <h2>Har business ki apni boli.</h2>
      <p className="uc__sub">Bank ho ya kirana dukaan, sawal alag hote hain. Bolo AI wahi kaam sambhalta hai jo aapki team ka poora din kha jaata hai.</p>

      <Tabs index={i} onPick={setI} />

      <div className={`uc__stage ${seen ? "is-in" : ""}`}>
        <div className="uc__info" key={uc.id}>
          <h3>{uc.label}</h3>
          <p>{uc.tagline}</p>
          <ul>{uc.tasks.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
        <Conversation uc={uc} {...convo} onReplay={() => setRun((r) => r + 1)} />
      </div>
    </section>
  );
}
