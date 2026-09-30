import { useEffect, useRef, useState } from "react";

// Plays a scripted chat: customer lines appear, Bolo "types" first, then answers.
export default function useConversation(chat, enabled, runKey) {
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);
  const timers = useRef([]);

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setShown(0); setTyping(false); setDone(false);
    if (!enabled) return;
    const at = (fn, ms) => timers.current.push(setTimeout(fn, ms));
    let t = 600;
    chat.forEach((m, i) => {
      if (m.who === "bolo") {
        at(() => setTyping(true), t);
        t += 800 + Math.min(m.text.length * 14, 1000);
        at(() => { setTyping(false); setShown(i + 1); }, t);
      } else {
        t += 500;
        at(() => setShown(i + 1), t);
      }
      t += 650;
    });
    at(() => setDone(true), t);
    return () => timers.current.forEach(clearTimeout);
  }, [chat, enabled, runKey]);

  return { shown, typing, done };
}
