// Crossfades between the "wrong" and "right" version of a piece of content.
export default function Swap({ fixed, wrong, right }) {
  return (
    <span className="swap">
      <span className={`swap__a ${fixed ? "off" : ""}`} aria-hidden={fixed}>{wrong}</span>
      <span className={`swap__b ${fixed ? "on" : ""}`} aria-hidden={!fixed}>{right}</span>
    </span>
  );
}
