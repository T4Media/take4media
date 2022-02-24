import { BsTextParagraph } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import "./videography-buisness-process.scss";
import { GiBrain } from "react-icons/gi";
import Fade from "react-reveal/Fade";
import Heading from "./../../../../components/common/heading/heading";
import { client } from "./../../../../client";
import { useEffect, useState } from "react";

const VideographyBuisnessProcess = () => {
  const [videographyProcess, setVideographyProcess] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "videographyProcess",
        select: "fields",
      })
      .then((res) => {
        setVideographyProcess(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(videographyProcess);

  return (
    <div className="creative-business-process">
      <div className="container">
        <Heading
          heading="Fast Tracking Your Growth"
          subHeading="We are the solution to your expansion."
        />

        <div className="row">
          {videographyProcess &&
            videographyProcess.items.map((vp) => (
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 process-1">
                <Fade duration={2000} delay={200} big>
                  <div className="processes">
                    <MdAnimation />
                    <h4>{vp.fields.heading}</h4>
                    <p>{vp.fields.paragraph}</p>
                  </div>
                </Fade>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideographyBuisnessProcess;
