import Button from "./../../../components/common/button/button";
import news1 from "../../../images/news/1.jpg";
import news2 from "../../../images/news/2.jpg";
import news3 from "../../../images/news/3.jpg";
import "./blog-section.scss";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="container">
        <Slide left>
          <h1>Check out our latest news.</h1>
          <h6>CHECK OUT SOME OF OUR NEWS</h6>
        </Slide>
        <div className="row">
          <Fade big duration={1500} delay={300}>
            <div className="col-xl-4 col-lg-4 mt-5">
              <div className="blog-list">
                <img src={news1} alt="" />
                <p className="mt-3">
                  Could this VR sketching tool be coming of age for designers in
                  the future?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas scelerisque ornare tincidunt....
                </p>
                <Button label="Read More" />
              </div>
            </div>
          </Fade>
          <Fade big duration={1500} delay={400}>
            <div className="col-xl-4 col-lg-4 mt-5">
              <div className="blog-list">
                <img src={news2} alt="" />
                <p className="mt-3">
                  Could this VR sketching tool be coming of age for designers in
                  the future?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas scelerisque ornare tincidunt....
                </p>
                <Button label="Read More" />
              </div>
            </div>
          </Fade>
          <Fade big duration={1500} delay={500}>
            <div className="col-xl-4 col-lg-4 mt-5">
              <div className="blog-list">
                <img src={news3} alt="" />
                <p className="mt-3">
                  Could this VR sketching tool be coming of age for designers in
                  the future?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas scelerisque ornare tincidunt....
                </p>
                <Button label="Read More" />
              </div>
            </div>
          </Fade>
          <Fade big duration={1500} delay={300}>
            <div className="col-xl-4 col-lg-4 mt-5">
              <div className="blog-list">
                <img src={news3} alt="" />
                <p className="mt-3">
                  Could this VR sketching tool be coming of age for designers in
                  the future?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas scelerisque ornare tincidunt....
                </p>
                <Button label="Read More" />
              </div>
            </div>
          </Fade>
          <Fade big duration={1500} delay={400}>
            <div className="col-xl-4 col-lg-4 mt-5">
              <div className="blog-list">
                <img src={news2} alt="" />
                <p className="mt-3">
                  Could this VR sketching tool be coming of age for designers in
                  the future?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas scelerisque ornare tincidunt....
                </p>
                <Button label="Read More" />
              </div>
            </div>
          </Fade>
          <Fade big duration={1500} delay={500}>
            <div className="col-xl-4 col-lg-4 mt-5">
              <div className="blog-list">
                <img src={news1} alt="" />
                <p className="mt-3">
                  Could this VR sketching tool be coming of age for designers in
                  the future?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas scelerisque ornare tincidunt....
                </p>
                <Button label="Read More" />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
