import { mishears } from "../../data/problem.js";
import Swap from "./Swap.jsx";

export default function Mishears({ fixed }) {
  return (
    <div className="mis" role="table" aria-label="Customer ne kya kaha aur bot ne kya suna">
      <div className="mis__row mis__row--head" role="row">
        <span>Customer ne kaha</span>
        <span><Swap fixed={fixed} wrong="Purana bot ne suna" right="Bolo AI ne suna" /></span>
      </div>
      {mishears.map((m) => (
        <div className="mis__row" role="row" key={m.said}>
          <b>{m.said}</b>
          <span className={`mis__heard ${fixed ? "is-ok" : ""}`}>
            <Swap fixed={fixed} wrong={<s>{m.heard}</s>} right={m.said} />
          </span>
        </div>
      ))}
    </div>
  );
}
