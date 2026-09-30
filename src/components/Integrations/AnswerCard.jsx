import "./answer.css";

export default function AnswerCard({ item }) {
  return (
    <div className="ans" aria-live="polite">
      <div key={item?.id || "idle"} className="ans__in">
        {item
          ? <><b>{item.name}</b><p>{item.line}</p></>
          : <p className="ans__idle">Kisi ek par ruk kar dekhiye ki Bolo AI wahan kya karta hai.</p>}
      </div>
    </div>
  );
}
