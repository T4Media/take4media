import Heading from "./../../common/heading/heading";
import { BsTextParagraph } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import "./creative-business-process.scss";
import { GiBrain } from "react-icons/gi";
import Fade from "react-reveal/Fade";
import { useEffect, useState } from "react";
import { client } from "./../../../client";

const CreativeBuisnessProcess = () => {
  const [creativeProcess, setCreativeProcess] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "creativeProcess",
        select: "fields",
      })
      .then((res) => {
        setCreativeProcess(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="creative-business-process">
      <div className="container">
        <Heading
          heading="We Secrete Imagination That Entices"
          subHeading="Your Amazon platform Will Get Its Boost"
        />

        <div className="row">
          {creativeProcess &&
            creativeProcess.items.map((cp, i) => (
              <div
                className={`col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 process-${
                  i + 1
                }`}
              >
                <Fade duration={2000} delay={200} big>
                  <div className="processes">
                    <MdAnimation />
                    {console.log()}
                    <h4>{cp.fields.heading}</h4>
                    <p>{cp.fields.paragraph}</p>
                  </div>{" "}
                </Fade>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CreativeBuisnessProcess;
