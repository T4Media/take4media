import PlusDetail from "./../plus-detail/plus-detail";
import Heading from "./../../common/heading/heading";
import { BsTextParagraph } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { GiBrain } from "react-icons/gi";
import Fade from "react-reveal/Fade";
import "./creative-services.scss";

const CreativeServices = () => {
  return (
    <div className="creative-services">
      <div className="container">
        <Heading
          heading="Our Services"
          subHeading="We Provide the best service to our customers."
        />
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 service-1">
            <Fade duration={2000} delay={300} big>
              <PlusDetail
                icon={<GiBrain />}
                heading="All Creatives"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
              arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 service-2 border-left">
            <Fade duration={2000} delay={400} big>
              <PlusDetail
                icon={<MdAnimation />}
                heading="Animation"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
              arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 service-3 border-top">
            <Fade duration={2000} delay={500} big>
              <PlusDetail
                icon={<BsTextParagraph />}
                heading="Branding Content Creation"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
              arcu luctus."
              />
            </Fade>
          </div>{" "}
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 service-4 border-left border-top">
            <Fade duration={2000} delay={600} big>
              <PlusDetail
                icon={<FiMonitor />}
                heading="TVC"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
              arcu luctus."
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeServices;
