import { integrations } from "../../data/integrations.js";
import CoreOrb from "./CoreOrb.jsx";
import Node from "./Node.jsx";
import "./orbit.css";
import "./node.css";

export default function Orbit({ seen, active, onActive }) {
  return (
    <div className={`orbit ${seen ? "is-in" : ""} ${active ? "is-paused" : ""}`} onMouseLeave={() => onActive(null)}>
      <CoreOrb talking={!!active} />
      {[1, 2].map((r) => (
        <div key={r} className={`ring ring--${r}`}>
          {integrations.filter((i) => i.ring === r).map((i) => (
            <Node key={i.id} item={i} active={active === i.id} onActive={onActive} />
          ))}
        </div>
      ))}
    </div>
  );
}
