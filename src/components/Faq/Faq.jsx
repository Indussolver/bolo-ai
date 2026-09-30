import { useRef, useState } from "react";
import { faqs } from "../../data/faq.js";
import useInView from "../../hooks/useInView.js";
import FaqItem from "./FaqItem.jsx";
import "./faq.css";

export default function Faq() {
  const ref = useRef(null);
  const seen = useInView(ref, 0.15);
  const [open, setOpen] = useState(0); // first answer starts open

  return (
    <section id="faq" className="faq" ref={ref}>
      <h2>Sawal jo sab poochte hain.</h2>
      <p className="faq__sub">Aur agar aapka sawal yahan nahi hai, to demo mein seedha poochiye.</p>
      <div className={`faq__list ${seen ? "is-in" : ""}`}>
        {faqs.map((f, i) => (
          <FaqItem key={f.q} item={f} id={`faq${i}`} index={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
        ))}
      </div>
    </section>
  );
}
