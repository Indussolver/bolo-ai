import { useRef, useState } from "react";
import { plans } from "../../data/pricing.js";
import useInView from "../../hooks/useInView.js";
import BillingToggle from "./BillingToggle.jsx";
import PlanCard from "./PlanCard.jsx";
import CostCalculator from "./CostCalculator.jsx";
import "./pricing.css";

export default function Pricing() {
  const ref = useRef(null);
  const seen = useInView(ref, 0.2);
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="pricing" ref={ref}>
      <h2>Seedha hisaab, saaf daam.</h2>
      <p className="pricing__sub">Jitna minute, utna hisaab. Saal bhar ka plan lene par kharcha kam ho jaata hai.</p>
      <BillingToggle yearly={yearly} onChange={setYearly} />
      <div className={`plans ${seen ? "is-in" : ""}`}>
        {plans.map((p, i) => <PlanCard key={p.id} plan={p} yearly={yearly} index={i} />)}
      </div>
      <CostCalculator yearly={yearly} />
      <p className="pricing__fine">Sab daam GST se pehle ke hain.</p>
    </section>
  );
}
