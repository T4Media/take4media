import OurClients from "../../components/amazon-creative-page-component/our-client/our-client";
import NewBlog from "../../components/new-blog/new-blog";
import NewTestimonial from "../../components/new-testimonial/new-testimonial";
import VideographyBanner from "./components/videography-banner/videography-banner";
import VideographyBuisnessProcess from "./components/videography-buisness-process/videography-buisness-process";
import VideographyFaqs from "./components/videography-faqs/videography-faqs";
import VideographyServices from "./components/videography-services/videography-services";
import VideographyStrategies from "./components/videography-strategies/videography-strategies";
import VideographySupportingPartner from "./components/videography-supporting-partner/videography-supporting-partner";
import GrowYourBuisness from "./../../components/amazon-creative-page-component/grow-your-buisness/grow-your-buisness";
import Footer from "./../../components/footer/footer";

const Videography = () => {
  return (
    <div className="videography">
      <VideographyBanner />
      <VideographyStrategies />
      <VideographyServices />
      <OurClients />
      <NewTestimonial />
      <VideographyBuisnessProcess />
      <VideographyFaqs />
      <NewBlog />
      <VideographySupportingPartner />
      <GrowYourBuisness />
      <Footer />
    </div>
  );
};

export default Videography;
