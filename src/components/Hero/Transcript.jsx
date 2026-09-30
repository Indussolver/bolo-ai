import "./transcript.css";

export default function Transcript({ lang }) {
  return (
    <figure className="transcript" aria-live="polite">
      <div key={lang.id} className="transcript__body">
        <p className="transcript__line" lang={lang.id}>{lang.line}</p>
        <p className="transcript__tr">{lang.tr}</p>
      </div>
    </figure>
  );
}
