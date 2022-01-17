import ServiceCard from "./../../cards/serviceCard/serviceCard";
import { FaAdversal, FaConnectdevelop } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { HiDocumentSearch } from "react-icons/hi";
import Heading from "../../common/heading/heading";
import { SiMarketo } from "react-icons/si";
import Fade from "react-reveal/Fade";
import "./amazon-services.scss";

const AmazonServices = () => {
  return (
    <div className="amazon-services">
      <div className="container">
        <Heading
          heading="Our Services"
          subHeading="We Provide the best service to our customers."
        />
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={300} big>
              <ServiceCard
                heading="Product Hunting"
                icon={<GiArchiveResearch />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={400} big>
              <ServiceCard
                heading="Amazon SEO & Product Optimization"
                icon={<HiDocumentSearch />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={500} big>
              <ServiceCard
                heading="Amazon Advertising Management"
                icon={<FaAdversal />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={600} big>
              <ServiceCard
                heading="Amazon Stores & Marketplace Launch"
                icon={<SiMarketo />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={700} big>
              <ServiceCard
                heading="Product Development"
                icon={<FaConnectdevelop />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonServices;
