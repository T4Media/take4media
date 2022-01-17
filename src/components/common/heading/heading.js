import Slide from "react-reveal/Slide";
import "./heading.scss";

const Heading = ({ heading, subHeading }) => {
  return (
    <div className="heading-thatis-common">
      <Slide left duration={1200}>
        <div className="heading">
          <span></span>
          <h1>{heading}</h1>
        </div>
      </Slide>
      <Slide left delay={500} duration={1200}>
        <h3>{subHeading}</h3>
      </Slide>
    </div>
  );
};

export default Heading;
