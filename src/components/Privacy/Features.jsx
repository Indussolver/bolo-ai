import { features } from "../../data/privacy.js";
import RecordingToggle from "./RecordingToggle.jsx";
import "./features.css";

export default function Features({ step }) {
  return (
    <div className="feats">
      {step === 0 && <p className="feats__hint">Scroll kariye. Shield band ho raha hai.</p>}
      <ul>
        {features.map((f, i) => (
          <li key={f.id} className={`feat ${i < step ? "on" : ""} ${i === step - 1 ? "last" : ""}`}>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
            {f.toggle && <RecordingToggle />}
          </li>
        ))}
      </ul>
    </div>
  );
}
