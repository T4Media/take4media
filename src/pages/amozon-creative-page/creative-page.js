import CreativeSupportingPartner from "../../components/amazon-creative-page-component/creative-supporting-partner/creative-supporting-partner";
import CreativeBuisnessProcess from "./../../components/amazon-creative-page-component/creative-buisness-process/creative-business-process";
import CreativeStrategies from "../../components/amazon-creative-page-component/creative-strategies/creative-strategies";
import CreativePortfolio from "../../components/amazon-creative-page-component/creative-portfolio/creative-portfolio";
import GrowYourBuisness from "../../components/amazon-creative-page-component/grow-your-buisness/grow-your-buisness";
import CreativeBanner from "./../../components/amazon-creative-page-component/creative-page-banner/creative-banner";
import CreativeServices from "../../components/amazon-creative-page-component/creative-services/creative-services";
import CreativeFaqs from "./../../components/amazon-creative-page-component/creative-faqs/creative-faqs";
import OurClient from "../../components/amazon-creative-page-component/our-client/our-client";
import NewTestimonial from "./../../components/new-testimonial/new-testimonial";
import NewBlog from "./../../components/new-blog/new-blog";
import Footer from "./../../components/footer/footer";
import { useEffect } from "react";
import "./creativePage.scss";

const CreativePage = () => {
  return (
    <div className="creative-page">
      <CreativeBanner />
      <CreativeStrategies />
      <CreativeServices />
      <CreativePortfolio />
      <OurClient />
      <NewTestimonial />
      <CreativeBuisnessProcess />
      <CreativeFaqs />
      <NewBlog />
      <CreativeSupportingPartner />
      <GrowYourBuisness />
      <Footer />
    </div>
  );
};

export default CreativePage;
