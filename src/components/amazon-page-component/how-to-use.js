import Line from "../../components/common/line/line";
import hero from "../../images/services/hero.png";
import Fade from "react-reveal/Fade";
import "./style.scss";

const HowToUse = () => {
  return (
    <div className="how-to-use">
      <Line top={35} />
      <div className="container how-to-use-box">
        <Fade duration={2000} delay={300} big>
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-2">
              <img src={hero} alt="" />
            </div>
            <div className="col-xl-10 col-lg-10 col-md-10">
              <h1>How to use the Service Provider Network</h1>

              <div className="step step-1">
                <h5>Step 1</h5>
                <h6>Become an Amazon Seller</h6>
              </div>
              <div className="step step-2">
                <h5>Step 2</h5>
                <p>
                  Visit the SPN website and select the service category you
                  want.
                </p>
              </div>
              <div className="step step-3">
                <h5>Step 3</h5>
                <p>
                  Filter results by service type, location, language, and
                  reviews to find what you need.
                </p>
              </div>
              <div className="step step-4">
                <h5>Step 4</h5>
                <p>
                  Once you find the service that you’re interested in, click
                  “Contact Provider” to raise a service request.
                </p>
              </div>
              <div className="step step-5">
                <h5>Step 5</h5>
                <p>The provider will contact you back.</p>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HowToUse;
