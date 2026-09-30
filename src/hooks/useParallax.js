import { useEffect } from "react";

// Writes --mx / --my (-1..1) on the element. No re-renders.
export default function useParallax(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5) * 2);
      el.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5) * 2);
    };
    const reset = () => { el.style.setProperty("--mx", 0); el.style.setProperty("--my", 0); };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", reset);
    return () => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", reset); };
  }, [ref]);
}
