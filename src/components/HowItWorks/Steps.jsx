import { steps } from "../../data/steps.js";
import "./steps.css";

export default function Steps({ step }) {
  return (
    <ol className="steps">
      <span className="steps__rail" aria-hidden="true"><i /></span>
      {steps.map((s, i) => (
        <li key={s.n} className={`step ${i === step ? "is-on" : ""} ${i < step ? "is-done" : ""}`} aria-current={i === step ? "step" : undefined}>
          <span className="step__badge">{s.n}</span>
          <div className="step__main">
            <h3>{s.title}</h3>
            <div className="step__body">
              <div>
                <p>{s.text}</p>
                <span className="step__pill">{s.metric}</span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
