import { MdAnimation } from "react-icons/md";
import "./amazon-research-buisness-process.scss";
import Fade from "react-reveal/Fade";
import Heading from "./../../../../components/common/heading/heading";
import { useEffect, useState } from "react";
import { client } from "./../../../../client";

const AmazonResearchBuinessProcess = () => {
  const [ARProcess, setARProcess] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "amazonResearchProcess",
        select: "fields",
      })
      .then((res) => {
        setARProcess(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="creative-business-process">
      <div className="container">
        <Heading
          heading="We Put You on The Winning Spot"
          subHeading="Our tactics are tried and tested"
        />

        <div className="row">
          {ARProcess &&
            ARProcess.map((arp, i) => (
              <div
                className={`col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 process-${
                  i + 1
                }`}
              >
                <Fade duration={2000} delay={200} big>
                  <div className="processes">
                    <MdAnimation />
                    <h4>{arp.fields.heading}</h4>
                    <p>{arp.fields.paragraph}</p>
                  </div>
                </Fade>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AmazonResearchBuinessProcess;
