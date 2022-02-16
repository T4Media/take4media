import Heading from "./../../common/heading/heading";
import Fade from "react-reveal/Fade";
import "./creative-services.scss";
import { GiArchiveResearch } from "react-icons/gi";
import ServiceCard from "./../../cards/serviceCard/serviceCard";
import { client } from "./../../../client";
import { useEffect, useState } from "react";

const CreativeServices = () => {
  const [creativeServices, setCreativeServices] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "creativeServices",
        select: "fields",
      })
      .then((res) => {
        setCreativeServices(res);
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
          subHeading="Our Amazon creative services are abundant and adequate"
        />
        <div className="row">
          {creativeServices &&
            creativeServices.items.map((cs) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <Fade duration={2000} delay={200} big>
                  <ServiceCard
                    heading={cs.fields.mainHeading}
                    icon={<GiArchiveResearch />}
                    paragraph={cs.fields.subHeading}
                  />
                </Fade>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CreativeServices;
