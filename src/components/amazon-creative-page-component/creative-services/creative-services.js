import Heading from "./../../common/heading/heading";
import Fade from "react-reveal/Fade";
import "./creative-services.scss";
import { GiArchiveResearch, GiPublicSpeaker } from "react-icons/gi";
import {
  MdSocialDistance,
  MdPaid,
  MdScreenSearchDesktop,
  MdMarkEmailUnread,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { SiInfluxdb } from "react-icons/si";
import ServiceCard from "./../../cards/serviceCard/serviceCard";

const CreativeServices = () => {
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
                heading="Product Shoot"
                icon={<GiArchiveResearch />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={300} big>
              <ServiceCard
                heading="Listing Main Images"
                icon={<MdSocialDistance />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={400} big>
              <ServiceCard
                heading="Image Testing & Revision"
                icon={<MdPaid />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={500} big>
              <ServiceCard
                heading="A+ Content Designing"
                icon={<MdScreenSearchDesktop />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={600} big>
              <ServiceCard
                heading="Brand Story Creation"
                icon={<MdMarkEmailUnread />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={700} big>
              <ServiceCard
                heading="Storefront Banner Designing"
                icon={<MdOutlineProductionQuantityLimits />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={800} big>
              <ServiceCard
                heading="POST Banner Designing"
                icon={<GiPublicSpeaker />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={900} big>
              <ServiceCard
                heading="Display Ad Designing"
                icon={<SiInfluxdb />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={900} big>
              <ServiceCard
                heading="Image Editing/Finishing"
                icon={<SiInfluxdb />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeServices;
