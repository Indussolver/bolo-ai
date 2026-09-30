import "./odometer.css";

// Every digit is a vertical 0-9 strip. Changing the value slides each strip, right digit first.
export default function Odometer({ value, prefix = "" }) {
  const text = Math.round(value).toLocaleString("en-IN");
  const chars = text.split("");
  const n = chars.length;
  return (
    <span className="odo" role="text" aria-label={`${prefix}${text}`}>
      {prefix && <span className="odo__pre" aria-hidden="true">{prefix}</span>}
      {chars.map((c, i) => {
        const k = n - 1 - i; // key by position from the right so columns persist between values
        return /\d/.test(c) ? (
          <span key={k} className="odo__col" aria-hidden="true" style={{ "--d": Number(c), "--delay": `${k * 70}ms` }}>
            <span className="odo__strip">{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => <b key={x}>{x}</b>)}</span>
          </span>
        ) : <span key={k} className="odo__sep" aria-hidden="true">{c}</span>;
      })}
    </span>
  );
}
