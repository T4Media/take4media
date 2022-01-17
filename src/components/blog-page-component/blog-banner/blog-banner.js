import Navbar from "../../navbar/navbar";
import "./blog-banner.scss";
import Slide from "react-reveal/Slide";
const BlogBanner = () => {
  return (
    <div className="blog-page-banner">
      <Navbar />

      <Slide left>
        <h1>Blogs.</h1>
      </Slide>
    </div>
  );
};

export default BlogBanner;
