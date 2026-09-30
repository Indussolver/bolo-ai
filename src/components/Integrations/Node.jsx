// Three wrappers keep the node upright while its ring spins (rotate(-angle), then counter-spin).
export default function Node({ item, active, onActive }) {
  return (
    <div className="node" style={{ "--a": `${item.angle}deg` }}>
      <div className="node__a">
        <div className="node__spin">
          <button className={`node__btn ${active ? "is-on" : ""}`} aria-pressed={active}
            aria-label={`${item.name}: ${item.line}`}
            onMouseEnter={() => onActive(item.id)} onFocus={() => onActive(item.id)}
            onClick={() => onActive(active ? null : item.id)}>
            <span className="node__disc">{item.logo ? <img src={item.logo} alt="" /> : item.mono}</span>
            <span className="node__name">{item.short}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
