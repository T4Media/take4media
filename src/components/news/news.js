import Heading from "../../components/common/heading/heading";
import Button from "../../components/common/button/button";
import news1 from "../../images/news/1.jpg";
import news2 from "../../images/news/2.jpg";
import news3 from "../../images/news/3.jpg";
import "./news.scss";
const News = () => {
  return (
    <div className="news">
      <div className="container">
        <Heading heading="Blogs" subHeading="CHECK OUT SOME OF OUR BLOGS" />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="img-text">
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
          <div className="col-xl-4 col-lg-4">
            <div className="img-text">
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
          <div className="col-xl-4 col-lg-4">
            <div className="img-text">
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
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default News;
