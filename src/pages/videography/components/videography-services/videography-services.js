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
import { SiInfluxdb } from "react-icons/si";
import ServiceCard from "./../../../../components/cards/serviceCard/serviceCard";

const VideographyServices = () => {
  return (
    <div className="creative-services">
      <div className="container">
        <Heading
          heading="Our Services"
          subHeading="We Provide the best service to our customers."
        />

        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={200} big>
              <ServiceCard
                heading="Listing Video"
                icon={<GiArchiveResearch />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={300} big>
              <ServiceCard
                heading="Video Ads"
                icon={<MdSocialDistance />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={400} big>
              <ServiceCard
                heading="Video Editing"
                icon={<MdPaid />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={500} big>
              <ServiceCard
                heading="360 Video"
                icon={<MdScreenSearchDesktop />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={600} big>
              <ServiceCard
                heading="Storefront Video"
                icon={<MdMarkEmailUnread />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={700} big>
              <ServiceCard
                heading="TikTok Video"
                icon={<MdOutlineProductionQuantityLimits />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideographyServices;
