import "./scenes.css";

const words = ["आपका", "ऑर्डर", "आज", "शाम", "तक", "पहुँच", "जाएगा।"];

export default function SceneReply() {
  return (
    <div className="sr">
      <small>Bolo</small>
      <p className="sr__text">
        {words.map((w, i) => <span key={w} className="sr__w" style={{ "--d": `${0.15 + i * 0.17}s` }}>{w} </span>)}
      </p>
      <div className="sr__wave" aria-hidden="true">
        {Array.from({ length: 15 }, (_, i) => <b key={i} style={{ "--i": i }} />)}
      </div>
    </div>
  );
}
