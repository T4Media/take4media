import "./creative-testimonials.scss";
import logo1 from "../../../images/icons/testimonial-icons/1.png";
import logo2 from "../../../images/icons/testimonial-icons/2.png";
import logo3 from "../../../images/icons/testimonial-icons/3.png";
import logo4 from "../../../images/icons/testimonial-icons/4.png";
import logo5 from "../../../images/icons/testimonial-icons/5.png";
import logo6 from "../../../images/icons/testimonial-icons/6.png";
import logo7 from "../../../images/icons/testimonial-icons/7.png";
import Heading from "../../../components/common/heading/heading";
import SimpleSlider from "./../../../components/carousel/carousel";
import Line from "../../common/line/line";

const CreativeTestimonials = () => {
  return (
    <div className="creative-testimonials">
      <div className="container mb-5">
        <Heading
          heading="Testimonials."
          subHeading="WE ARE MORE THAN DIGITAL AGENCY"
        />
      </div>
      <SimpleSlider />
      <div className="logos">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logo1} alt="" />
            </div>
            <div className="col">
              <img src={logo2} alt="" />
            </div>
            <div className="col">
              <img src={logo3} alt="" />
            </div>
            <div className="col">
              <img src={logo4} alt="" />
            </div>
            <div className="col">
              <img src={logo5} alt="" />
            </div>
            <div className="col">
              <img src={logo6} alt="" />
            </div>
            <div className="col">
              <img src={logo7} alt="" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Line />
      <br />
      <br />
    </div>
  );
};

export default CreativeTestimonials;
