import creativeImage2 from "../../../images/creative-page/2.png";
import creativeImage from "../../../images/creative-page/1.png";
import Heading from "../../common/heading/heading";
import Fade from "react-reveal/Fade";
import "./ams-strategies.scss";
import { useEffect, useState } from "react";
import { client } from "../../../client";

const AMSStrategies = () => {
  const [AMSStrategies, setAMSStrategies] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "amazonAmsStrategy",
        select: "fields",
      })
      .then((res) => {
        setAMSStrategies(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="amazon-strategies">
      <div className="container">
        <Heading
          heading="Our Strategy"
          subHeading="We Make your Advertising endeavors simpler and easier."
        />

        <Fade duration={2000} delay={300} big>
          <div className="row middle-row">
            <div className="col-xl-6 col-lg-6 col-md-6 brain-storming-section">
              <img className="brain-storming" src={creativeImage} alt="" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h6>{AMSStrategies && AMSStrategies[0].fields.subHeading}</h6>
              <h1>{AMSStrategies && AMSStrategies[0].fields.strategyName}</h1>
              <p>
                {AMSStrategies && AMSStrategies[0].fields.strategyDescription}
              </p>
            </div>
          </div>
        </Fade>
        <Fade duration={2000} delay={300} big>
          <div className="row last-row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h6>{AMSStrategies && AMSStrategies[1].fields.subHeading}</h6>
              <h1>{AMSStrategies && AMSStrategies[1].fields.strategyName}</h1>
              <p>
                {AMSStrategies && AMSStrategies[1].fields.strategyDescription}
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
        </Fade>
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
              <h6>{AMSStrategies && AMSStrategies[2].fields.subHeading}</h6>
              <h1>{AMSStrategies && AMSStrategies[2].fields.strategyName}</h1>
              <p>
                {AMSStrategies && AMSStrategies[2].fields.strategyDescription}
              </p>
            </div>
          </div>{" "}
        </Fade>
      </div>
    </div>
  );
};

export default AMSStrategies;
