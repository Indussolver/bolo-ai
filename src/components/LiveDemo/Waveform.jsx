import { useEffect, useRef } from "react";
import "./waveform.css";

const N = 41;
// syllable-like rhythm for simulated speech
const talk = (t, i) => Math.max(0.08, (0.5 + 0.5 * Math.sin(t * 6.5) * Math.sin(t * 2.3 + 1)) * (0.45 + 0.55 * Math.abs(Math.sin(t * 3.1 + i * 0.55))));

export default function Waveform({ phase, read, stageRef }) {
  const bars = useRef([]);
  const cur = useRef(Array(N).fill(0.05));
  const live = useRef({ phase, read });
  live.current = { phase, read };

  useEffect(() => {
    let raf;
    const tick = (ms) => {
      const t = ms / 1000, { phase: p, read: rd } = live.current;
      const data = p === "listening" ? rd() : null;
      let sum = 0;
      for (let i = 0; i < N; i++) {
        const c = Math.abs(i - (N - 1) / 2) / ((N - 1) / 2); // 0 centre, 1 edge
        const env = 1 - c * c * 0.85;
        let target;
        if (p === "listening") target = (data ? Math.min(1, Math.pow(data[Math.floor(c * 26) + 1] / 255, 0.8) * 1.5) : talk(t, i)) * env;
        else if (p === "replying") target = talk(t * 0.9 + 3, i) * env;
        else if (p === "thinking") target = (0.12 + 0.55 * Math.max(0, Math.sin(t * 5 - i * 0.35))) * env;
        else target = 0.05 + 0.02 * Math.sin(t * 2 + i * 0.4);
        cur.current[i] += (target - cur.current[i]) * 0.28;
        sum += cur.current[i];
        bars.current[i].style.transform = `scaleY(${Math.max(0.05, cur.current[i])})`;
      }
      stageRef.current?.style.setProperty("--lvl", (sum / N).toFixed(3));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [stageRef]);

  return (
    <div className="wave" aria-hidden="true">
      {Array.from({ length: N }, (_, i) => <b key={i} ref={(el) => (bars.current[i] = el)} />)}
      <span className="wave__gloss" />
    </div>
  );
}
