import { useRef } from "react";

// Thin wrapper over the browser's SpeechRecognition (Chrome, Edge, Safari).
export default function useSpeech(handlers) {
  const h = useRef(handlers);
  h.current = handlers;
  const rec = useRef(null);
  const Ctor = typeof window !== "undefined" ? window.SpeechRecognition || window.webkitSpeechRecognition : null;

  const start = (lang) => {
    const r = new Ctor();
    r.lang = lang; r.interimResults = true; r.continuous = false;
    r.onresult = (e) => h.current.onText(Array.from(e.results, (x) => x[0].transcript).join(""));
    r.onerror = (e) => h.current.onError(e.error);
    r.onend = () => h.current.onEnd();
    rec.current = r;
    r.start();
  };
  const stop = () => rec.current?.stop();
  const abort = () => { if (rec.current) { rec.current.onend = null; rec.current.onerror = null; rec.current.abort(); rec.current = null; } };
  return { supported: !!Ctor, start, stop, abort };
}
