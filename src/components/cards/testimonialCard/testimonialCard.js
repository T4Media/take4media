import quoteIcon from "../../../images/icons/1.png";
import suhab from "../../../images/icons/asd.jpg";
import { AiFillStar } from "react-icons/ai";
import "./testimonialCard.scss";

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <center>
        <img src={quoteIcon} alt="icon" style={{ width: 45 }} />
      </center>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        consequat bibendum turpis sit amet pretium. Nunc ut dui ornare,
        vulputate augue sed, varius velit.
      </p>

      <div className="rating-stars mt-5">
        <center>
          {[1, 2, 3, 4, 5].map((stars) => (
            <AiFillStar />
          ))}
        </center>
      </div>
      <center>
        <img
          src={suhab}
          style={{
            width: "65px",
            position: "relative",
            bottom: "-162px",
            borderRadius: "60px",
          }}
          alt="epmloyee"
        />

        <h5 className="name">Jhon Doe</h5>
        <h6 className="designation">Designation</h6>
      </center>
    </div>
  );
};

export default TestimonialCard;
