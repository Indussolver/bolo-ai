import { useEffect, useState } from "react";
import { BARS, barHeight } from "../../data/languages.js";
import "./orb.css";

export default function VoiceOrb({ lang }) {
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 700); return () => clearTimeout(t); }, []);

  return (
    <div className="orb" role="img" aria-label={`Voice wave, ${lang.en}`}>
      <i className="orb__ripple" /><i className="orb__ripple" /><i className="orb__ripple" />
      <div className="orb__glass">
        <div className="orb__bars">
          {Array.from({ length: BARS }, (_, i) => (
            <b key={i} className="orb__bar" style={{ "--i": i, "--h": ready ? barHeight(i, lang.wave) : 6 }} />
          ))}
        </div>
        <span className="orb__gloss" />
      </div>
    </div>
  );
}
