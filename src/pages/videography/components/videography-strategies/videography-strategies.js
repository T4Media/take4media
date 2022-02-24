import creativeImage2 from "../../../../images/creative-page/2.png";
import creativeImage from "../../../../images/creative-page/1.png";
import Fade from "react-reveal/Fade";
import "./videography-strategies.scss";
import Heading from "./../../../../components/common/heading/heading";
import { client } from "./../../../../client";
import { useState, useEffect } from "react";

const VideographyStrategies = () => {
  const [videographyStrategies, setVideographyStrategies] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "videographyStrategy",
        select: "fields",
      })
      .then((res) => {
        setVideographyStrategies(res.items[0].fields.strategies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="creative-strategies">
      <div className="container">
        <Heading heading="Our Strategy" />
        <Fade duration={2000} delay={300} big>
          <div className="row middle-row">
            <div className="col-xl-6 col-lg-6 col-md-6 brain-storming-section">
              <img className="brain-storming" src={creativeImage} alt="" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h6>
                {videographyStrategies && videographyStrategies[0].subHeading}
              </h6>
              <h1>
                {videographyStrategies && videographyStrategies[0].heading}
              </h1>
              <p>
                {videographyStrategies && videographyStrategies[0].paragraph}
              </p>
            </div>
          </div>
        </Fade>
        <Fade duration={2000} delay={300} big>
          <div className="row last-row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h6>
                {videographyStrategies && videographyStrategies[1].subHeading}
              </h6>
              <h1>
                {videographyStrategies && videographyStrategies[1].heading}
              </h1>
              <p>
                {videographyStrategies && videographyStrategies[1].paragraph}
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
              <h6>
                {videographyStrategies && videographyStrategies[2].subHeading}
              </h6>
              <h1>
                {videographyStrategies && videographyStrategies[2].heading}
              </h1>
              <p>
                {videographyStrategies && videographyStrategies[2].paragraph}
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default VideographyStrategies;
