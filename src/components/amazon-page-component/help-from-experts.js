import helpFromExpert from "../../images/services/help_from_experts.svg";
import Heading from "./../common/heading/heading";
import Fade from "react-reveal/Fade";
import "./style.scss";

const HelpFromExperts = () => {
  return (
    <div className="help-from-experts">
      <div className="container help-from-experts-box">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <Heading
              heading="Get Help from Experts"
              subHeading="Need help with listing your products?"
            />
            <Fade duration={2000} delay={300} big>
              <p>
                Our network of qualified third party service providers will help
                you with everything you need to launch, manage and grow your
                business on Amazon. From shooting great images for your products
                to improving your chances of increasing sales on Amazon, our
                service providers help you with every step of selling online.
              </p>
            </Fade>
          </div>
          <div className="col-xl-5 col-lg-6">
            <Fade duration={2000} delay={300} big>
              <img src={helpFromExpert} alt="" />
            </Fade>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HelpFromExperts;
