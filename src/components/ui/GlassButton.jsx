import "./glass-button.css";

export default function GlassButton({ children, variant = "black", ...rest }) {
  return <button className={`gbtn gbtn--${variant}`} {...rest}>{children}</button>;
}
