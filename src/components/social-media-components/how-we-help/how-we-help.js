import "./how-we-help.scss";
import BannerCard from "./../../../components/cards/bannerCard/bannerCard";
import { GiStumpRegrowth } from "react-icons/gi";
import { FaEye, FaHandshake } from "react-icons/fa";
import { SiInfluxdb } from "react-icons/si";
import Line from "./../../common/line/line";
import Heading from "./../../common/heading/heading";
import Fade from "react-reveal/Fade";
const HowWeHelp = () => {
  return (
    <div className="how-we-help">
      <div className="container">
        <Heading
          heading="Simplifying your growth strategy."
          subHeading="When are we right for you?"
        />

        <div className="row" style={{ justifyContent: "center" }}>
          <div className="mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <Fade duration={1500} delay={300} big>
              <BannerCard
                class="cards"
                name="Grow"
                icon={<GiStumpRegrowth />}
              />
            </Fade>
          </div>
          <div className="mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <Fade duration={1500} delay={400} big>
              <BannerCard class="cards" name="Monetize" icon={<FaEye />} />
            </Fade>
          </div>
          <div className="mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <Fade duration={1500} delay={500} big>
              <BannerCard class="cards" name="Engage" icon={<FaHandshake />} />
            </Fade>
          </div>
          <div className="mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <Fade duration={1500} delay={600} big>
              <BannerCard
                class="cards"
                name="Influence"
                icon={<SiInfluxdb />}
              />
            </Fade>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HowWeHelp;
