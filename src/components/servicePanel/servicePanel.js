import "./servicePanel.scss";
import { BsBarChartLine, BsFillPencilFill } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import Heading from "../common/heading/heading";
import ServiceCard from "../cards/serviceCard/serviceCard";
import Line from "../common/line/line";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const ServicePanel = () => {
  return (
    <>
      <div className="container">
        <Heading heading="Services." />

        <div className="row service-row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Link to="/digital-media-marketing">
              <Fade big>
                <ServiceCard
                  heading="Digital Media Marketing"
                  icon={<BsBarChartLine />}
                  paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
    luctus."
                />
              </Fade>
            </Link>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Link to="/amazon-research">
              <Fade delay={300} big>
                <ServiceCard
                  heading="Amazon Research and Development"
                  icon={<BsFillPencilFill />}
                  paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
    luctus."
                />
              </Fade>
            </Link>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Link to="/videography">
              <Fade delay={500} big>
                <ServiceCard
                  heading="Videography"
                  icon={<ImUsers style={{ fill: "white" }} />}
                  paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
    luctus."
                />
              </Fade>
            </Link>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Link to="/amazon-creative-services">
              <Fade delay={500} big>
                <ServiceCard
                  heading="Amazon Creatives"
                  icon={<ImUsers style={{ fill: "white" }} />}
                  paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
    luctus."
                />
              </Fade>
            </Link>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Link to="/amazon-ams-services">
              <Fade delay={500} big>
                <ServiceCard
                  heading="Amazon AMS Services"
                  icon={<ImUsers style={{ fill: "white" }} />}
                  paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
    luctus."
                />
              </Fade>
            </Link>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Link to="/product-listing">
              <Fade delay={500} big>
                <ServiceCard
                  heading="Product Listing"
                  icon={<ImUsers style={{ fill: "white" }} />}
                  paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
    luctus."
                />
              </Fade>
            </Link>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <Line />

      <br />
      <br />
      <br />
    </>
  );
};

export default ServicePanel;
