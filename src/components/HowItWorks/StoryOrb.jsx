import SceneListen from "./SceneListen.jsx";
import SceneUnderstand from "./SceneUnderstand.jsx";
import SceneReply from "./SceneReply.jsx";
import "./storyorb.css";

const scenes = [SceneListen, SceneUnderstand, SceneReply];

export default function StoryOrb({ step }) {
  return (
    <div className="sorb" key="orb">
      {/* thin ring fills as you scroll */}
      <svg className="sorb__ring" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="49" pathLength="1" className="sorb__track" />
        <circle cx="50" cy="50" r="49" pathLength="1" className="sorb__fill" />
      </svg>
      <div className="sorb__glass">
        {scenes.map((Scene, i) => (
          <div key={i} className={`scene ${i === step ? "is-on" : ""}`} aria-hidden={i !== step}>
            <Scene />
          </div>
        ))}
        <span className="sorb__gloss" />
      </div>
    </div>
  );
}
