import creativeImage2 from "../../../images/creative-page/2.png";
import creativeImage from "../../../images/creative-page/1.png";
import Heading from "./../../common/heading/heading";
import Fade from "react-reveal/Fade";
import "./creative-strategies.scss";
import { client } from "./../../../client";
import { useEffect, useState } from "react";

const CreativeStrategies = () => {
  const [creativeStrategies, setCreativeStrategies] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "ourStrategy",
        select: "fields",
      })
      .then((res) => {
        setCreativeStrategies(res.items[0].fields);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("creative", creativeStrategies);

  return (
    <div className="creative-strategies">
      <div className="container">
        <Heading
          heading="Our Strategy"
          subHeading={creativeStrategies && creativeStrategies.subHeading}
        />
        <Fade duration={2000} delay={300} big>
          <div className="row middle-row">
            <div className="col-xl-6 col-lg-6 col-md-6 brain-storming-section">
              <img className="brain-storming" src={creativeImage} alt="" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h1>
                {creativeStrategies && creativeStrategies.strategies[0].heading}
              </h1>
              <p>
                {creativeStrategies &&
                  creativeStrategies.strategies[0].paragraph}
              </p>
            </div>
          </div>
        </Fade>
        <Fade duration={2000} delay={300} big>
          <div className="row last-row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h1>
                {creativeStrategies && creativeStrategies.strategies[1].heading}
              </h1>
              <p>
                {creativeStrategies &&
                  creativeStrategies.strategies[1].paragraph}
              </p>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6"
              style={{
                textAlign: "-webkit-center",
              }}
            >
              <img src={creativeImage2} alt="" className="dual" />
            </div>
          </div>
        </Fade>{" "}
        <Fade duration={2000} delay={300} big>
          <div className="row last-row">
            <div
              className="col-xl-6 col-lg-6 col-md-6"
              style={{
                textAlign: "-webkit-center",
              }}
            >
              <img src={creativeImage2} alt="" className="dual" />
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6">
              <h1>
                {creativeStrategies && creativeStrategies.strategies[2].heading}
              </h1>
              <p>
                {creativeStrategies &&
                  creativeStrategies.strategies[2].paragraph}
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default CreativeStrategies;
