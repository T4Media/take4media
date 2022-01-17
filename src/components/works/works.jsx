import Heading from "../common/heading/heading";
import img_1 from "../../images/work/1.jpg";
import img_2 from "../../images/work/2.jpg";
import img_3 from "../../images/work/3.jpg";
import img_4 from "../../images/work/4.jpg";
import img_5 from "../../images/work/5.jpg";
import img_6 from "../../images/work/6.jpg";
import Line from "../common/line/line";
import "./works.scss";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="works" id="work">
      <div className="container">
        <Heading heading="Works." subHeading="THINGS WE'VE MADE" />
      </div>
      <div className="container">
        <div className="different-work">
          <div className="row">
            <Slide bottom>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div class="img-wrapper">
                  <Link to="/work/architecture">
                    <img className="inner-img" src={img_1} alt="" />
                  </Link>
                </div>
                <h1>Architecture</h1>
                <h6>Giving a garbage a good name</h6>
              </div>
            </Slide>
            <Slide bottom>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 top">
                <div class="img-wrapper">
                  <Link to="/work/photography">
                    <img className="inner-img" src={img_2} alt="" />
                  </Link>
                </div>
                <h1>Photography</h1>
                <h6>Humanizing Telecom Marketing</h6>
              </div>
            </Slide>
            <Slide bottom>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div class="img-wrapper">
                  <Link to="/work/design">
                    <img className="inner-img" src={img_3} alt="" />
                  </Link>
                </div>
                <h1> Design</h1>
                <h6>
                  Giving a name and face to a brand
                  <br />
                  Hiding in plain sight
                </h6>
              </div>
            </Slide>
          </div>
        </div>
      </div>

      {/* <Accordian /> */}
      <br />
      <Line top={-30} />
      <br />
    </div>
  );
};

export default Works;
