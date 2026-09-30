import { useState } from "react";
import { calc, plans } from "../../data/pricing.js";
import Odometer from "./Odometer.jsx";
import "./calc.css";

function Slider({ label, value, min, max, step, onChange, format }) {
  return (
    <label className="slider">
      <span className="slider__top"><em>{label}</em><b>{format(value)}</b></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))}
        style={{ "--v": `${((value - min) / (max - min)) * 100}%` }} />
    </label>
  );
}

export default function CostCalculator({ yearly }) {
  const [calls, setCalls] = useState(3000);
  const [len, setLen] = useState(3);
  const minutes = calls * len;
  const rate = yearly ? calc.boloPerMin.y : calc.boloPerMin.m;
  const human = minutes * calc.humanPerMin;
  const bolo = Math.round(minutes * rate);
  const save = human - bolo;
  const rec = minutes <= plans[0].minutes ? "Starter" : minutes <= plans[1].minutes ? "Growth" : "Enterprise";

  return (
    <div className="calc">
      <div className="calc__inputs">
        <h3>Apne call ka kharcha dekhiye</h3>
        <Slider label="Mahine mein kitne call" value={calls} min={200} max={20000} step={100} onChange={setCalls} format={(v) => v.toLocaleString("en-IN")} />
        <div className="calc__len">
          <em>Ek call ki lambai</em>
          <div role="group" aria-label="Call ki lambai">
            {[1, 2, 3, 5, 8].map((m) => <button key={m} className={m === len ? "on" : ""} aria-pressed={m === len} onClick={() => setLen(m)}>{m} min</button>)}
          </div>
        </div>
        <p className="calc__rec">Aapke hisaab se: <b>{rec}</b> plan</p>
      </div>

      <div className="calc__out">
        <p className="calc__label">Har mahine ki bachat</p>
        <p className="calc__save"><Odometer value={save} prefix="₹" /></p>
        <div className="bar"><span>Insaani agent</span><div><i style={{ width: "100%" }} /></div><b>₹{human.toLocaleString("en-IN")}</b></div>
        <div className="bar bar--bolo"><span>Bolo AI</span><div><i style={{ width: `${(bolo / human) * 100}%` }} /></div><b>₹{bolo.toLocaleString("en-IN")}</b></div>
        <p className="calc__note">Andaza: insaani agent ₹{calc.humanPerMin}/min, Bolo ₹{rate}/min. Asli bill plan ke hisaab se aayega.</p>
      </div>
    </div>
  );
}
