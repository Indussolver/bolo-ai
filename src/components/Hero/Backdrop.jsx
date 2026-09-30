import "./backdrop.css";

export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <i className="backdrop__light backdrop__light--a" />
      <i className="backdrop__light backdrop__light--b" />
    </div>
  );
}
