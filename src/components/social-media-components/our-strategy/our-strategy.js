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
import { useEffect, useState } from "react";
import { client } from "./../../../client";

const OurStrategy = () => {
  const [socailMediaStrategy, setSocialMediaStrategy] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "socialMediaStrategy",
        select: "fields",
      })
      .then((res) => {
        setSocialMediaStrategy(res.items[0].fields);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(socailMediaStrategy);

  return (
    <div className="our-strategy">
      <div className="container">
        <Heading
          heading="Our Strategy"
          subHeading={socailMediaStrategy && socailMediaStrategy.supportHeading}
        />
        <Fade duration={2000} delay={200} big>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h6>
                {socailMediaStrategy &&
                  socailMediaStrategy.strategies[0].subHeading}
              </h6>
              <h1>
                {socailMediaStrategy &&
                  socailMediaStrategy.strategies[0].heading}
              </h1>
              <p>
                {socailMediaStrategy &&
                  socailMediaStrategy.strategies[0].paragraph}
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
              <h6>
                {socailMediaStrategy &&
                  socailMediaStrategy.strategies[1].subHeading}
              </h6>
              <h1>
                {socailMediaStrategy &&
                  socailMediaStrategy.strategies[1].heading}
              </h1>
              <p>
                {socailMediaStrategy &&
                  socailMediaStrategy.strategies[1].paragraph}
              </p>
            </div>
          </div>{" "}
        </Fade>
        <Fade duration={2000} delay={200} big>
          <div className="row last-row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h6>
                {socailMediaStrategy &&
                  socailMediaStrategy.strategies[2].subHeading}
              </h6>
              <h1>
                {socailMediaStrategy &&
                  socailMediaStrategy.strategies[2].heading}
              </h1>
              <p>
                {socailMediaStrategy &&
                  socailMediaStrategy.strategies[2].paragraph}
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
