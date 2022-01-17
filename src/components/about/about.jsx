import Heading from "../common/heading/heading";
import Button from "./../common/button/button";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./about.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <Heading
          heading="About."
          subHeading="WE ARE MORE THAN DIGITAL AGENCY"
        />

        <div className="row r1">
          <Fade duration={2000} delay={300} big>
            <div className="col-xl-6 col-md-6">
              <div className="bg-1">
                <h2>Team Work</h2>
                <p>Committed and creative</p>
              </div>
            </div>
          </Fade>
          <Fade duration={2000} delay={400} big>
            <div className="col-xl-6 col-md-6">
              <div className="bg-2">
                <h2>Philosophy</h2>
                <p>Trust pays off</p>
              </div>

              <div className="bg-3">
                <h2>Office</h2>
                <p>Somewhere on earth</p>
              </div>
            </div>
          </Fade>
        </div>

        <div className="row r2">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <h4>Who we are</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 left-border">
            <h4>Our philosophy</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 left-border">
            <h4>How we work</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>

      <center>
        <Link to="/about-us">
          <Button label="See More" style={{ marginTop: "3rem" }} />
        </Link>
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
