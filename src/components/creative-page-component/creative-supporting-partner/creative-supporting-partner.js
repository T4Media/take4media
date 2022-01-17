import amazon from "../../../images/logo/partners-logo/amazon.png";
import google from "../../../images/logo/partners-logo/google.png";
import clutch from "../../../images/logo/partners-logo/clutch.png";
import trust from "../../../images/logo/partners-logo/trust.png";
import fb from "../../../images/logo/partners-logo/fb.png";
import Line from "./../../../components/common/line/line";
import "./creative-supporting-partner.scss";
import Slide from "react-reveal/Slide";

const CreativeSupportingPartner = () => {
  return (
    <div className="creative-supporting-partner-section">
      <Line top={30} />
      <h6>Proud Marketing Partners with</h6>
      <div className="container">
        <div className="row">
          <div className="col">
            <Slide bottom>
              <img src={amazon} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom>
              <img src={fb} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom>
              <img src={google} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom>
              <img src={trust} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom>
              <img src={clutch} alt="" />
            </Slide>
          </div>
        </div>
        <div className="row" style={{ marginBottom: "5rem" }}>
          <div className="col">
            <Slide bottom>
              <img src={google} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom>
              <img src={clutch} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom>
              <img src={trust} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom>
              <img src={amazon} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom>
              <img src={fb} alt="" />
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeSupportingPartner;
