import { AiFillCustomerService } from "react-icons/ai";
import Heading from "../common/heading/heading";
import { GoVerified } from "react-icons/go";
import { GiWorld } from "react-icons/gi";
import Line from "../common/line/line";
import Fade from "react-reveal/Fade";
import "./style.scss";
import { client } from "../../client";
import { useState, useEffect } from "react";

const AMSKeyFeatures = () => {
  const [AMSKeyFeatures, setAMSKeyFeatures] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "amazonAmsKeyFeatures",
        select: "fields",
      })
      .then((res) => {
        setAMSKeyFeatures(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="key-features">
      <div className="container key-features-box">
        <div className="row">
          <Heading heading="Key Features" />

          {AMSKeyFeatures &&
            AMSKeyFeatures.map((ams, i) => (
              <Fade duration={2000} delay={200} big>
                <div className="col-xl-4 col-lg-4">
                  {i === 0 ? (
                    <GoVerified />
                  ) : i === 1 ? (
                    <AiFillCustomerService />
                  ) : i === 2 ? (
                    <GiWorld />
                  ) : (
                    ""
                  )}

                  <h6>{ams.fields.heading}</h6>
                  <p>{ams.fields.subHeading}</p>
                </div>
              </Fade>
            ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Line top={-45} />
    </div>
  );
};

export default AMSKeyFeatures;
