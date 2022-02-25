import NewTestimonial from "./../../components/new-testimonial/new-testimonial";
import ProjectInMind from "./../../components/project_in_mind/project_in_mind";
import BannerHeading from "./../../components/bannerHeading/bannerHeading";
import ServicePanel from "./../../components/servicePanel/servicePanel";
import CardPanel from "./../../components/cardPanel/cardPanel";
import NewBlog from "./../../components/new-blog/new-blog";
import Navbar from "./../../components/navbar/navbar";
import Footer from "./../../components/footer/footer";
import About from "./../../components/about/about";
import Works from "./../../components/works/works";
import { useSelector } from "react-redux";
import Slide from "react-reveal/Slide";
import "./home.scss";
import HomeBanner from "./../../components/home-banner/homeBanner";

const Home = () => {
  const data = useSelector((state) => state.dataReducer.data);
  return (
    <div className="home">
      <HomeBanner />
      <div className="services" id="services">
        <ServicePanel />
      </div>
      <Works />
      <About />
      <NewTestimonial />

      <NewBlog />
      <ProjectInMind
        data={{
          heading: "Have any project in mind?",
          buttonLabel: "MAKE INQUIRY",
        }}
        showSocialMedia={true}
      />
      <Footer />
    </div>
  );
};

export default Home;
