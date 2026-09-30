import "./scenes.css";

const N = 25;
const noise = (i) => 25 + ((i * 47 + 13) % 61);                         // fixed pseudo-random "shor"
const voice = (i) => Math.round(18 + 72 * Math.sin((Math.PI * i) / (N - 1)) * (0.6 + 0.4 * Math.abs(Math.sin(i * 0.9))));

export default function SceneListen() {
  return (
    <div className="sl">
      <div className="sl__bars">
        {Array.from({ length: N }, (_, i) => (
          <span key={i} className="sl__col" style={{ "--i": i }}>
            <b className="sl__noise" style={{ "--h": noise(i) }} />
            <b className="sl__voice" style={{ "--h": voice(i) }} />
          </span>
        ))}
      </div>
      <p className="sl__cap">Shor hat raha hai</p>
    </div>
  );
}
