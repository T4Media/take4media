import { CircleProgress } from "react-gradient-progress";
import card1 from "../../../images/partners-logo/1.png";
import card2 from "../../../images/partners-logo/2.png";
import card3 from "../../../images/partners-logo/3.png";
import pc from "../../../images/services/pc.png";
import Line from "./../../../components/common/line/line";
import mob from "../../../images/services/mob.png";
import "./our-strategy.scss";
import Heading from "./../../common/heading/heading";
import Fade from "react-reveal/Fade";

const OurStrategy = () => {
  return (
    <div className="our-strategy">
      <div className="container">
        <Heading
          heading="Our Strategy"
          subHeading=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
          luctus."
        />
        <Fade duration={2000} delay={200} big>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h6>Certified Pay-Per-Click Advertising</h6>
              <h1>Improve your ROI with scalable PPC marketing.</h1>
              <p>
                SmartSites is rated in the top 1% of digital marketing agencies.
                Blending performance with exceptional customer service, our PPC
                specialists are some of the best in the industry with a track
                record for growing successful businesses.
              </p>

              <div className="row">
                <div className="col">
                  <img src={card1} alt="" />
                </div>
                <div className="col">
                  <img src={card2} alt="" />
                </div>
                <div className="col">
                  <img src={card3} alt="" />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="row percentages">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <CircleProgress
                    percentage={90}
                    strokeWidth={10}
                    fontColor="#66902f"
                    primaryColor={["#64b031", "#64b0316b"]}
                  />
                  <h6>SMARTSITES PERFORMANCE</h6>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <CircleProgress
                    percentage={83}
                    strokeWidth={10}
                    fontColor="#66902f"
                    primaryColor={["#fb9c05", "#fb9c0554"]}
                  />
                  <h6> BESTCOMPANY™ OVERALL</h6>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <CircleProgress
                    percentage={65}
                    strokeWidth={10}
                    fontColor="#66902f"
                    primaryColor={["#8501ad", "#8501ad5e"]}
                  />
                  <h6>BESTCOMPANY™ MINIMUM</h6>
                </div>
              </div>
            </div>
          </div>
        </Fade>{" "}
        <Fade duration={2000} delay={200} big>
          <div className="row middle-row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <img src={pc} alt="" className="dual" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h6>Proven Organic SEO</h6>
              <h1>Drive more organic traffic to your website.</h1>
              <p>
                Get more qualified traffic on the search terms that matter most
                to your business. We achieve measurable results by working on
                every variable that impacts SERPs. Trust our proven track record
                to maximize your visibility online. Set your business up for
                long-term success.
              </p>
            </div>
          </div>{" "}
        </Fade>
        <Fade duration={2000} delay={200} big>
          <div className="row last-row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h6>Results-Driven Website Design</h6>
              <h1>Get a beautiful website that wins customers.</h1>
              <p>
                Elevate your business with a trusted website that your customers
                will love. Our award-winning website designers will represent
                your brand in the best possible way. Your website will load
                extremely fast and look great on all devices.
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <img src={mob} alt="" className="dual" />
            </div>
          </div>{" "}
        </Fade>
      </div>
    </div>
  );
};

export default OurStrategy;
