import { useEffect, useRef, useState } from "react";
import { stories } from "../../data/stories.js";
import useInView from "../../hooks/useInView.js";
import StoryCard from "./StoryCard.jsx";
import Controls from "./Controls.jsx";
import "./stories.css";

export default function Stories() {
  const ref = useRef(null);
  const track = useRef(null);
  const seen = useInView(ref, 0.25);
  const [active, setActive] = useState(0);

  // the card nearest the centre of the row is the active one
  useEffect(() => {
    const el = track.current;
    let raf = 0;
    const update = () => {
      raf = 0;
      const mid = el.scrollLeft + el.clientWidth / 2;
      let best = 0, d = Infinity;
      [...el.children].forEach((c, i) => { const dist = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid); if (dist < d) { d = dist; best = i; } });
      setActive(best);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    el.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => { cancelAnimationFrame(raf); el.removeEventListener("scroll", onScroll); };
  }, []);

  const go = (i) => {
    const el = track.current, c = el.children[i];
    if (c) el.scrollTo({ left: c.offsetLeft - (el.clientWidth - c.offsetWidth) / 2, behavior: "smooth" });
  };

  return (
    <section id="stories" className="stories" ref={ref}>
      <h2>Jo bol rahe hain, unki zubaani.</h2>
      <p className="stories__sub">Chhote clinic se lekar NBFC tak, sabka ek hi sawal tha: phone kaun uthaye?</p>
      <div className={`stories__track ${seen ? "is-in" : ""}`} ref={track} role="region" aria-roledescription="carousel" aria-label="Customer stories" tabIndex={0}>
        {stories.map((s, i) => <StoryCard key={s.id} s={s} i={i} total={stories.length} active={i === active} seen={seen} onPick={() => go(i)} />)}
      </div>
      <Controls count={stories.length} active={active} onGo={go} />
    </section>
  );
}
