import helpFromExpert from "../../images/services/help_from_experts.svg";
import Heading from "../common/heading/heading";
import Fade from "react-reveal/Fade";
import "./style.scss";
import { client } from "../../client";
import { useState, useEffect } from "react";

const AMSHelpFromExperts = () => {
  const [AMSDeal, setAMSDeal] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "amazonAmsDealSection",
        select: "fields",
      })
      .then((res) => {
        setAMSDeal(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(AMSDeal);

  return (
    <div className="help-from-experts">
      <div className="container help-from-experts-box">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <Heading
              heading={AMSDeal && AMSDeal[0].fields.heading}
              subHeading={AMSDeal && AMSDeal[0].fields.subHeading}
            />
            <Fade duration={2000} delay={300} big>
              <p>
                {AMSDeal && AMSDeal[0].fields.text.content[0].content[0].value}
              </p>
            </Fade>
          </div>
          <div className="col-xl-5 col-lg-6">
            <Fade duration={2000} delay={300} big>
              <img src={helpFromExpert} alt="" />
            </Fade>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AMSHelpFromExperts;
