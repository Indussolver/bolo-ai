import { calc } from "../../data/pricing.js";
import "./toggle.css";

export default function BillingToggle({ yearly, onChange }) {
  return (
    <div className="bill" role="group" aria-label="Billing chunein">
      <i className="bill__thumb" style={{ transform: `translateX(${yearly ? 100 : 0}%)` }} />
      <button className={!yearly ? "on" : ""} aria-pressed={!yearly} onClick={() => onChange(false)}>Mahine ka</button>
      <button className={yearly ? "on" : ""} aria-pressed={yearly} onClick={() => onChange(true)}>
        Saal ka <small>{calc.yearlyDiscount}% bachat</small>
      </button>
    </div>
  );
}
