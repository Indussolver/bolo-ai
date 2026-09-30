import Odometer from "./Odometer.jsx";
import "./plans.css";

const Check = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 10.5l4 4 8-9" /></svg>
);

export default function PlanCard({ plan, yearly, index }) {
  const p = plan.price;
  return (
    <article className={`plan ${plan.featured ? "plan--dark" : ""}`} style={{ "--k": index }}>
      {plan.featured && <span className="plan__badge">Sabse zyada chuna gaya</span>}
      <h3>{plan.name}</h3>
      <p className="plan__tag">{plan.tagline}</p>

      <div className="plan__price">
        {p ? (<><Odometer value={yearly ? p.y : p.m} prefix="₹" /><small>/mahina</small></>) : <span className="plan__custom">Custom</span>}
      </div>
      <p className="plan__bill">
        {p ? (yearly ? `Saal ka ₹${(p.y * 12).toLocaleString("en-IN")} ek saath` : "Mahine ke hisaab se, kabhi bhi band karein") : "Aapke call volume ke hisaab se"}
      </p>

      <ul>{plan.features.map((f) => <li key={f}><Check />{f}</li>)}</ul>
      <button className="plan__cta">{plan.cta}</button>
    </article>
  );
}
