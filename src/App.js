import "../node_modules/font-awesome/css/font-awesome.min.css";
import AmazonCreativeServices from "./pages/amozon-creative-page/creative-page";
import DigitalMediaMarketing from "./pages/digital-media-marketing/social-media";
import ScrollToTop from "./components/common/scrollToTop";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { Route } from "react-router-dom";
import AboutUs from "./pages/about-us/about-us";
import Contact from "./pages/contact/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "./pages/Blogs/blog";
import Work from "./pages/work/work";
import Home from "./pages/home/home";
import "./mediaquery.scss";
import "./App.scss";
import AmazonAMSServices from "./pages/amazon-ams-services/amazon-ams-services";
import Videography from "./pages/videography/videography";
import ProductListing from "./pages/product-listing/product-listing";
import AmazonResearch from "./pages/amazon-research/amazon-research";
import { useEffect, useState } from "react";
import { client } from "./client";
import { addData } from "./services/slices/dataSlice";
import { useDispatch } from "react-redux";

function App() {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    client
      .getEntries()
      .then((res) => {
        dispatch(addData(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <Route exact path="/" component={Home} />
      <Route
        path="/digital-media-marketing"
        component={DigitalMediaMarketing}
      />
      <Route
        path="/amazon-creative-services"
        component={AmazonCreativeServices}
      />
      <Route path="/amazon-ams-services" component={AmazonAMSServices} />
      <Route path="/videography" component={Videography} />

      <Route path="/product-listing" component={ProductListing} />
      <Route path="/amazon-research" component={AmazonResearch} />

      <Route path="/blog" component={Blog} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/contact-us" component={Contact} />
      <Route
        path="/work/photography"
        render={(props) => <Work photography={true} {...props} />}
      />
      <Route
        path="/work/videography"
        render={(props) => <Work videography={true} {...props} />}
      />
      <Route path="/work/design" render={(props) => <Work design={true} />} />
      <BsArrowUpCircleFill
        className="arrow-global"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="upper-arrow"
        style={{
          bottom: "70px",
          position: "fixed",
          color: "white",
          fontSize: "3rem",
          right: "70px",
          color: "#638b2e",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default App;
