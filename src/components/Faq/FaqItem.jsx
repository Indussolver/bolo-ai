export default function FaqItem({ item, id, open, onToggle, index }) {
  return (
    <div className={`qa ${open ? "is-open" : ""}`} style={{ "--k": index }}>
      <h3>
        <button className="qa__q" aria-expanded={open} aria-controls={`${id}-a`} id={`${id}-q`} onClick={onToggle}>
          {item.q}
          <span className="qa__icon" aria-hidden="true" />
        </button>
      </h3>
      <div className="qa__a" id={`${id}-a`} role="region" aria-labelledby={`${id}-q`}>
        <div><p>{item.a}</p></div>
      </div>
    </div>
  );
}
