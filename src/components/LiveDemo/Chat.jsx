import "./chat.css";

export default function Chat({ phase, userText, botText, sample }) {
  const started = userText || botText;
  if (!started) {
    return (
      <div className="chat chat--hint">
        <p>Mic dabayein aur bolein</p>
        <strong lang="und">{sample.q}</strong>
      </div>
    );
  }
  return (
    <div className="chat" aria-live="polite">
      <div className="bubble bubble--user">
        <small>Aap</small>
        <p>{userText}{phase === "listening" && <i className="caret" />}</p>
      </div>
      {(phase === "thinking" || botText) && (
        <div className="bubble bubble--bot">
          <small>Bolo</small>
          {botText ? <p>{botText}{phase === "replying" && <i className="caret" />}</p> : <p className="dots"><i /><i /><i /></p>}
          {phase === "idle" && <em>{sample.tr}</em>}
        </div>
      )}
    </div>
  );
}
