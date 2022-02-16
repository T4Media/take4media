import Button from "../common/button/button";
import Slide from "react-reveal/Slide";
import "./bannerHeading.scss";

const BannerHeading = (props) => {
  console.log(props.data);
  return (
    <div className="container con">
      <Slide left duration={1200} delay={500}>
        <h1
          dangerouslySetInnerHTML={{
            __html: props.data && props.data.bannerUpperText,
          }}
        ></h1>
      </Slide>

      <Slide left duration={1200}>
        <h3
          dangerouslySetInnerHTML={{
            __html: props.data && props.data.bannerLowerText,
          }}
        ></h3>
      </Slide>

      <Slide left duration={1200} delay={700}>
        <Button style={{ marginTop: 50 }} label="Get Started" />
      </Slide>
    </div>
  );
};

export default BannerHeading;
