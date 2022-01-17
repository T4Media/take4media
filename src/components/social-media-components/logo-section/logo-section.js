import "./logo-section.scss";
import amazon from "../../../images/logo/partners-logo/amazon.png";
import fb from "../../../images/logo/partners-logo/fb.png";
import google from "../../../images/logo/partners-logo/google.png";
import trust from "../../../images/logo/partners-logo/trust.png";
import clutch from "../../../images/logo/partners-logo/clutch.png";
import Line from "./../../../components/common/line/line";
import Slide from "react-reveal/Slide";
const LogoSection = () => {
  return (
    <div className="logo-section">
      <Line top={30} />
      <h6>Proud Marketing Partners with</h6>
      <div className="container">
        <div className="row">
          <div className="col">
            <Slide bottom duration={1500}>
              <img src={amazon} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom duration={1500}>
              <img src={fb} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom duration={1500}>
              <img src={google} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom duration={1500}>
              <img src={trust} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom duration={1500}>
              <img src={clutch} alt="" />
            </Slide>
          </div>
        </div>
        <div className="row" style={{ marginBottom: "5rem" }}>
          <div className="col">
            <Slide bottom duration={1500}>
              <img src={google} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom duration={1500}>
              <img src={clutch} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom duration={1500}>
              <img src={trust} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom duration={1500}>
              <img src={amazon} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom duration={1500}>
              <img src={fb} alt="" />
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
