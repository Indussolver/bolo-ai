import { useEffect, useState } from "react";

// Eased 0 -> 1 progress. Number and gauge both read it, so they always move together.
export default function useProgress(active, ms = 1800, delay = 0) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setT(1); return; }
    let raf, t0;
    const timer = setTimeout(() => {
      const tick = (now) => {
        t0 ??= now;
        const p = Math.min(1, (now - t0) / ms);
        setT(1 - Math.pow(1 - p, 4));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); };
  }, [active, ms, delay]);
  return t;
}
