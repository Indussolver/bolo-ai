import GlassButton from "../ui/GlassButton.jsx";
import "./navbar.css";

const links = [
  { label: "Bhashayein", href: "#lehja" },
  { label: "Kaise kaam karta hai", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Sawal-jawab", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#top" aria-label="Bolo AI home">
        <span className="nav__mark" aria-hidden="true"><i /><i /><i /></span>
        Bolo
      </a>
      <nav className="nav__links" aria-label="Main">
        {links.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
      </nav>
      <GlassButton onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}>Demo book karein</GlassButton>
    </header>
  );
}
