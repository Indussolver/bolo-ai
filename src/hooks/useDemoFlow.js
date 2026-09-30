import { useEffect, useRef, useState } from "react";
import { demo } from "../data/demo.js";
import useMic from "./useMic.js";
import useSpeech from "./useSpeech.js";

// idle -> listening -> thinking -> replying -> idle
export default function useDemoFlow(langId) {
  const d = demo[langId];
  const [phase, setPhase] = useState("idle");
  const [userText, setUserText] = useState("");
  const [botText, setBotText] = useState("");
  const [notice, setNotice] = useState("");
  const timers = useRef([]);
  const text = useRef("");
  const err = useRef("");
  const mic = useMic();

  const clear = () => { timers.current.forEach((t) => { clearTimeout(t); clearInterval(t); }); timers.current = []; };
  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));
  const typeOut = (full, set, ms, done) => {
    const chars = Array.from(full); let n = 0;
    const id = setInterval(() => { set(chars.slice(0, ++n).join("")); if (n >= chars.length) { clearInterval(id); done?.(); } }, ms);
    timers.current.push(id);
  };

  const respond = () => {
    setPhase("thinking");
    later(() => { setPhase("replying"); typeOut(d.a, setBotText, 34, () => later(() => setPhase("idle"), 500)); }, 1100);
  };

  const runSample = () => {
    setPhase("listening");
    typeOut(d.q, setUserText, 80, () => later(respond, 600));
  };

  const speech = useSpeech({
    onText: (t) => { text.current = t; setUserText(t); },
    onError: (e) => { err.current = e; },
    onEnd: () => {
      mic.stop();
      if (err.current === "not-allowed" || err.current === "service-not-allowed") {
        setNotice("Mic ki permission nahi mili, isliye sample chala rahe hain."); reset(); return runSample();
      }
      if (text.current.trim()) respond();
      else { setPhase("idle"); setNotice("Kuch sunai nahi diya. Mic dabakar dobara bolein."); }
    },
  });

  const reset = () => { clear(); speech.abort(); mic.stop(); setPhase("idle"); setUserText(""); setBotText(""); text.current = ""; err.current = ""; };

  const startLive = async () => {
    reset(); setNotice("");
    if (!speech.supported) { setNotice("Is browser mein live mic nahi chalta (Chrome ya Safari try kariye). Sample chal raha hai."); return runSample(); }
    try { await mic.start(); } catch { setNotice("Mic ki permission nahi mili, isliye sample chala rahe hain."); return runSample(); }
    setPhase("listening");
    speech.start(d.code);
  };

  // one big button: start, or stop/cancel
  const press = () => {
    if (phase === "idle") return startLive();
    if (phase === "listening" && speech.supported && mic.read() ) return speech.stop();
    reset();
  };
  const playSample = () => { reset(); setNotice(""); runSample(); };

  useEffect(() => { reset(); setNotice(""); return clear; }, [langId]); // eslint-disable-line

  return { phase, userText, botText, notice, press, playSample, readLevels: mic.read, sample: d };
}
