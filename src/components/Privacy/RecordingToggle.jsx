import { useState } from "react";

// Small playful control: the feature is literally "recording aapke haath mein".
export default function RecordingToggle() {
  const [on, setOn] = useState(true);
  return (
    <button className={`rtoggle ${on ? "is-on" : ""}`} role="switch" aria-checked={on} onClick={() => setOn(!on)}>
      <span className="rtoggle__track"><i /></span>
      Recording: {on ? "chalu" : "band"}
    </button>
  );
}
