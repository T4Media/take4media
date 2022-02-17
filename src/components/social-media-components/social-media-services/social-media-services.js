import "./social-media-services.scss";
import ServiceCard from "./../../cards/serviceCard/serviceCard";
import { GiArchiveResearch, GiPublicSpeaker } from "react-icons/gi";
import {
  MdSocialDistance,
  MdPaid,
  MdScreenSearchDesktop,
  MdMarkEmailUnread,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { SiInfluxdb } from "react-icons/si";
import Heading from "./../../common/heading/heading";
import Fade from "react-reveal/Fade";
import { client } from "./../../../client";
import { useEffect, useState } from "react";

const SocialMediaServices = () => {
  const [socailMediaServices, setSocialMediaServices] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "socialMediaServices",
        select: "fields",
      })
      .then((res) => {
        setSocialMediaServices(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="social-media-services">
      <div className="container">
        <Heading
          heading="Our Services"
          subHeading="Our digital media marketing services are tried, tested and effective."
        />
        <div className="row">
          {socailMediaServices &&
            socailMediaServices.map((sm) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <Fade duration={2000} delay={200} big>
                  <ServiceCard
                    heading={sm.fields.serviceName}
                    icon={<GiArchiveResearch />}
                    paragraph={sm.fields.serviceDescription}
                  />
                </Fade>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaServices;
