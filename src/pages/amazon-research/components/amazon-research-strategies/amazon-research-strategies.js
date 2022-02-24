import creativeImage2 from "../../../../images/creative-page/2.png";
import creativeImage from "../../../../images/creative-page/1.png";
import Fade from "react-reveal/Fade";
import "./amazon-research-strategies.scss";
import Heading from "./../../../../components/common/heading/heading";
import { useEffect, useState } from "react";
import { client } from "./../../../../client";

const AmazonResearchStrategies = () => {
  const [ARStrategies, setARStrategies] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "amazonResearchStrategy",
        select: "fields",
      })
      .then((res) => {
        setARStrategies(res.items[0].fields);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("creative", ARStrategies);

  return (
    <div className="creative-strategies">
      <div className="container">
        <Heading
          heading="Our Strategy"
          subHeading="We concentrate on ensuring that your platform excels exponentially"
        />
        <Fade duration={2000} delay={300} big>
          <div className="row middle-row">
            <div className="col-xl-6 col-lg-6 col-md-6 brain-storming-section">
              <img className="brain-storming" src={creativeImage} alt="" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h6>{ARStrategies && ARStrategies.strategies[0].subHeading}</h6>
              <h1>{ARStrategies && ARStrategies.strategies[0].heading}</h1>
              <p>{ARStrategies && ARStrategies.strategies[0].paragraph}</p>
            </div>
          </div>
        </Fade>
        <Fade duration={2000} delay={300} big>
          <div className="row last-row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h6>{ARStrategies && ARStrategies.strategies[1].subHeading}</h6>
              <h1>{ARStrategies && ARStrategies.strategies[1].heading}</h1>
              <p>{ARStrategies && ARStrategies.strategies[1].paragraph}</p>
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
              <h6>{ARStrategies && ARStrategies.strategies[2].subHeading}</h6>
              <h1>{ARStrategies && ARStrategies.strategies[2].heading}</h1>
              <p>{ARStrategies && ARStrategies.strategies[2].paragraph}</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AmazonResearchStrategies;
