import { site } from "../../data/site.js";
import "./footer.css";

const cols = [
  { title: "Product", links: [["Bhashayein", "#lehja"], ["Kaise kaam karta hai", "#how"], ["Live demo", "#demo"], ["Pricing", "#pricing"]] },
  { title: "Bharosa", links: [["Privacy aur data", "#privacy"], ["Customer stories", "#stories"], ["Sawal-jawab", "#faq"]] },
  { title: "Baat karein", links: [["Demo book karein", "#book"], [site.email, `mailto:${site.email}`]] },
];

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot__top">
        <div className="foot__brand">
          <a href="#top" className="foot__logo"><span aria-hidden="true"><i /><i /><i /></span>Bolo</a>
          <p>Aap bolein. Hum samjhenge.</p>
        </div>
        {cols.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h4>{c.title}</h4>
            {c.links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </nav>
        ))}
      </div>

      <div className="foot__bottom">
        <p>© {site.year} Bolo AI. Bharat mein banaya, Bharat ke liye.</p>
        <p className="foot__made" aria-label="Made with love by Webnex">
          Made with
          <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 2.9 4.5 6.5 4.5c2 0 3.7 1 5.5 3 1.8-2 3.5-3 5.5-3 3.6 0 5.6 3.7 4.1 7.2C19.5 16.4 12 21 12 21z" /></svg>
          by <a href={site.webnexUrl}>Webnex</a>
        </p>
      </div>
    </footer>
  );
}
