import useProgress from "../../hooks/useProgress.js";
import "./story.css";

export default function StoryCard({ s, i, total, active, seen, onPick }) {
  const t = useProgress(active && seen, 1500); // count-up plays when the card comes into focus
  return (
    <article className={`story ${active ? "is-active" : ""}`} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${total}`} onClick={onPick}>
      <div className="story__meta"><span>{s.city}</span><span>{s.lang}</span></div>
      <blockquote className="story__quote">{s.quote}</blockquote>
      <div className="story__who">
        <span className="story__av" aria-hidden="true">{s.initials}</span>
        <p><b>{s.name}</b><small>{s.role}, {s.biz}</small></p>
      </div>
      <div className="story__result">
        <p className="story__num" aria-label={`${s.value}${s.suffix}`}><span aria-hidden="true">{(s.value * t).toFixed(s.decimals)}{s.suffix}</span></p>
        <p className="story__label">{s.label}</p>
      </div>
    </article>
  );
}
