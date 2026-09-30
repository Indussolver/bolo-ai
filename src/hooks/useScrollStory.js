import { useEffect, useState } from "react";

// Tall track + sticky stage. Writes --p (0..1) on the track and returns the active step.
export default function useScrollStory(ref, count) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0, last = -1;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / (r.height - window.innerHeight)));
      el.style.setProperty("--p", p.toFixed(4));
      const s = Math.min(count - 1, Math.floor(p * count));
      if (s !== last) { last = s; setStep(s); }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [ref, count]);
  return step;
}
