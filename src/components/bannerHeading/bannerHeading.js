import Button from "../common/button/button";
import Slide from "react-reveal/Slide";
import "./bannerHeading.scss";

const BannerHeading = () => {
  return (
    <div className="container con">
      <Slide left duration={1200}>
        <h3>Creative minds, creative works.</h3>
      </Slide>
      <Slide left duration={1200} delay={500}>
        <h1>
          We are digital
          <br /> agency.
        </h1>
      </Slide>
      <Slide left duration={1200} delay={700}>
        <Button style={{ marginTop: 50 }} label="Get Started" />
      </Slide>
    </div>
  );
};

export default BannerHeading;
