import Fade from "react-reveal/Fade";
import "./videography-services.scss";
import Heading from "./../../../../components/common/heading/heading";
import { GiArchiveResearch, GiPublicSpeaker } from "react-icons/gi";
import {
  MdSocialDistance,
  MdPaid,
  MdScreenSearchDesktop,
  MdMarkEmailUnread,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import ServiceCard from "./../../../../components/cards/serviceCard/serviceCard";
import { client } from "./../../../../client";
import { useEffect, useState } from "react";

const VideographyServices = () => {
  const [videographyServices, setVideographyServices] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "videographyServices",
        select: "fields",
      })
      .then((res) => {
        setVideographyServices(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(videographyServices);

  return (
    <div className="creative-services">
      <div className="container">
        <Heading
          heading="Our Services"
          subHeading="Our videography guarantees you your traffic"
        />

        <div className="row">
          {videographyServices &&
            videographyServices.map((vs) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <Fade duration={2000} delay={200} big>
                  <ServiceCard
                    heading={vs.fields.serviceName}
                    icon={<GiArchiveResearch />}
                    paragraph={vs.fields.serviceDescription}
                  />
                </Fade>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideographyServices;
