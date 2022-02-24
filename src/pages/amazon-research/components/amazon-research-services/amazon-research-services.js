import PlusDetail from "../plus-detail/plus-detail";
import { GiBrain } from "react-icons/gi";
import Fade from "react-reveal/Fade";
import "./amazon-research-services.scss";
import Heading from "./../../../../components/common/heading/heading";
import { client } from "./../../../../client";
import { useEffect, useState } from "react";

const AmazonResearchService = () => {
  const [ARServices, setARServices] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "amazonResearchServices",
        select: "fields",
      })
      .then((res) => {
        setARServices(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="creative-services">
      <div className="container">
        <Heading
          heading="Our Services"
          subHeading="We deliver productive services for our clientele."
        />
        <div className="row">
          {ARServices &&
            ARServices.map((ar, i) => (
              <div
                className={
                  `col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 ` +
                  (i == 0
                    ? "service-1"
                    : i == 1
                    ? "service-2 border-left"
                    : i == 2
                    ? "service-3 border-top"
                    : i == 3
                    ? "service-4 border-left border-top"
                    : "")
                }
              >
                <Fade duration={2000} delay={300} big>
                  <PlusDetail
                    icon={<GiBrain />}
                    heading={ar.fields.serviceName}
                    paragraph={ar.fields.serviceDescription}
                  />
                </Fade>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AmazonResearchService;
