import "./shield.css";

const D = "M50 4 L92 18 V58 C92 86 74 106 50 116 C26 106 8 86 8 58 V18 Z";

// one full shield; CSS clips it into a left and right "door"
function Half({ side }) {
  return (
    <svg className={`shield__half shield__half--${side}`} viewBox="0 0 100 120" aria-hidden="true">
      <defs>
        <radialGradient id={`sg-${side}`} cx="32%" cy="18%" r="90%">
          <stop offset="0" stopColor="#4a4a50" /><stop offset="0.45" stopColor="#17171a" /><stop offset="1" stopColor="#050506" />
        </radialGradient>
        <linearGradient id={`gl-${side}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.45" /><stop offset="0.7" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={D} fill={`url(#sg-${side})`} stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
      <path d="M50 8 L88 20 V46 C68 38 32 38 12 46 V20 Z" fill={`url(#gl-${side})`} />
    </svg>
  );
}

export default function Shield() {
  return (
    <div className="shield" role="img" aria-label="Kaala glass shield jo scroll par band hota hai">
      <svg className="shield__ring" viewBox="0 0 200 200" aria-hidden="true">
        <defs><path id="priv-circle" d="M100 100 m-80 0 a80 80 0 1 1 160 0 a80 80 0 1 1 -160 0" /></defs>
        <text className="shield__ringtext">
          <textPath href="#priv-circle" textLength="498" lengthAdjust="spacing">
            AAPKA DATA INDIA KE SERVERS PAR — AAPKA DATA INDIA KE SERVERS PAR —
          </textPath>
        </text>
      </svg>
      <Half side="l" />
      <Half side="r" />
      <span className="shield__seam" />
      <svg className="shield__lock" viewBox="0 0 100 120" aria-hidden="true">
        <circle cx="50" cy="58" r="11" fill="#fff" />
        <circle cx="50" cy="55.5" r="3" fill="#0b0b0d" />
        <path d="M48.3 57.5 h3.4 l1.2 7 h-5.8 z" fill="#0b0b0d" />
      </svg>
    </div>
  );
}
