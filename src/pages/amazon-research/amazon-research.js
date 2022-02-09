import OurClients from "../../components/amazon-creative-page-component/our-client/our-client";
import NewBlog from "../../components/new-blog/new-blog";
import NewTestimonial from "../../components/new-testimonial/new-testimonial";
import GrowYourBuisness from "./../../components/amazon-creative-page-component/grow-your-buisness/grow-your-buisness";
import Footer from "./../../components/footer/footer";
import AmazonResearchBanner from "./components/amazon-research-banner/amazon-research-banner";
import AmazonResearchStrategies from "./components/amazon-research-strategies/amazon-research-strategies";
import AmazonResearchService from "./components/amazon-research-services/amazon-research-services";
import AmazonResearchBuinessProcess from "./components/amazon-research-buisness-process/amazon-research-buisness-process";
import AmazonResearchSupportingPartner from "./components/amazon-research-supporting-partner/amazon-research-supporting-partner";
import AmazonResearchFaqs from "./components/amazon-research-faqs/amazon-research-faqs";

const AmazonResearch = () => {
  return (
    <div className="amazon-research">
      <AmazonResearchBanner />
      <AmazonResearchStrategies />
      <AmazonResearchService />
      <OurClients />
      <NewTestimonial />
      <AmazonResearchBuinessProcess />
      <NewBlog />
      <AmazonResearchFaqs />
      <AmazonResearchSupportingPartner />
      <GrowYourBuisness />
      <Footer />
    </div>
  );
};

export default AmazonResearch;
