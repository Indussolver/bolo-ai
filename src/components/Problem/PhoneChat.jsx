import Swap from "./Swap.jsx";
import "./phone.css";

const bars = [30, 55, 40, 80, 60, 90, 50, 70, 35, 60, 85, 45, 65, 30, 55, 40];

export default function PhoneChat({ fixed }) {
  return (
    <div className={`phone ${fixed ? "is-fixed" : ""}`}>
      <div className="phone__frame">
        <div className="phone__screen">
          <i className="phone__island" />
          <div className="phone__bar"><span className="phone__av" />Support line<small>Live call</small></div>

          <div className="phone__chat">
            <div className="msg msg--me" style={{ "--d": "0.2s" }}>
              <span className="vn__play" aria-hidden="true" />
              <span className="vn__bars" aria-hidden="true">{bars.map((h, i) => <b key={i} style={{ "--h": h, "--i": i }} />)}</span>
              <small>0:03</small>
            </div>

            <div className="msg msg--tr" style={{ "--d": "1s" }}>
              <small><Swap fixed={fixed} wrong="Purana bot ne suna" right="Bolo AI ne suna" /></small>
              <p><Swap fixed={fixed} wrong={<>Mera <mark>border</mark> kahan hai</>} right="Mera order kahan hai" /></p>
              <span className="tag"><Swap fixed={fixed} wrong="Galat samjha" right="Sahi samjha" /></span>
            </div>

            <div className="msg msg--bot" style={{ "--d": "1.9s" }}>
              <Swap fixed={fixed}
                wrong="Border ki koi jaankari nahi mili. Kripya dobara koshish karein."
                right="Aapka order aaj shaam tak pahunch jayega. Delivery ka time badalna hai?" />
            </div>
          </div>
          <i className="phone__scan" />
        </div>
        <i className="phone__gloss" />
      </div>
    </div>
  );
}
