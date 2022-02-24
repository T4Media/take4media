import Line from "../../components/common/line/line";
import hero from "../../images/services/hero.png";
import Fade from "react-reveal/Fade";
import "./style.scss";
import { client } from "../../client";
import { useState, useEffect } from "react";

const AMSHowToUse = () => {
  const [AMSHowToUse, setAMSHowToUse] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "amazonAmsSteps",
        select: "fields",
      })
      .then((res) => {
        setAMSHowToUse(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(AMSHowToUse);
  return (
    <div className="how-to-use">
      <Line top={35} />
      <div className="container how-to-use-box">
        <Fade duration={2000} delay={300} big>
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-2">
              <img src={hero} alt="" />
            </div>
            <div className="col-xl-10 col-lg-10 col-md-10">
              <h1>How to Hire the Right Service Provider?</h1>

              {AMSHowToUse &&
                [...AMSHowToUse].reverse().map((ams, i) => (
                  <div className={`step step-${i + 1}`}>
                    <h5>Step {i + 1}</h5>
                    <h6>{ams.fields.stepText}</h6>
                  </div>
                ))}
            </div>
          </div>
        </Fade>
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

export default AMSHowToUse;
