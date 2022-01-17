import img1 from "../../images/blog/Capture.PNG";
import Heading from "../common/heading/heading";
import Button from "./../common/button/button";
import img2 from "../../images/blog/1.PNG";
import img3 from "../../images/blog/2.PNG";
import Fade from "react-reveal/Fade";
import "./new-blog.scss";
import { Link } from "react-router-dom";

const NewBlog = () => {
  return (
    <div className="new-blog" id="blog">
      <div className="container">
        <Heading
          heading="Blogs"
          subHeading="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <div className="row">
          <Fade duration={2000} delay={300} big>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="section-1">
                <img src={img1} alt="" />
                <p>The standard chunk of lorem ipsum since the 1500's</p>
              </div>
            </div>
          </Fade>
          <Fade duration={2000} delay={400} big>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="section-2">
                <img src={img2} alt="" />
                <p>The standard chunk of lorem ipsum since the 1500's</p>
              </div>
              <div className="section-3">
                <img src={img3} alt="" />
                <p>The standard chunk of lorem ipsum since the 1500's</p>
              </div>
            </div>
          </Fade>
        </div>
        <center>
          <Link to="/blog">
            <Button
              label="Show more"
              style={{ marginBottom: "5rem", marginTop: "2rem" }}
            />
          </Link>
        </center>
      </div>
    </div>
  );
};

export default NewBlog;
