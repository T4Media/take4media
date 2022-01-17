import DiscoverServices from "../../components/amazon-page-component/discover-services";
import HelpFromExperts from "../../components/amazon-page-component/help-from-experts";
import ServiceBanner from "../../components/amazon-page-component/service-banner";
import KeyFeatures from "../../components/amazon-page-component/key-features";
import ProjectInMind from "../../components/project_in_mind/project_in_mind";
import HowToUse from "../../components/amazon-page-component/how-to-use";
import Footer from "./../../components/footer/footer";
import { useEffect } from "react";
import "./services.scss";
import AmazonStrategies from "./../../components/amazon-page-component/amazon-strategy/amazon-strategy";
import AmazonServices from "../../components/amazon-page-component/amazon-services/amazon-services";
import AmazonSupportingPartner from "./../../components/amazon-page-component/amazon-supporting-partner/amazon-supporting-partner";
import AmazonHowWeHelp from "../../components/amazon-page-component/amazon-how-we-help/amazon-how-we-help";
import Testimonials from "./../../components/testimonials/testimonial";
import AmazonFaqs from "./../../components/amazon-page-component/amazon-faqs/amazon-faqs";
import NewBlog from "./../../components/new-blog/new-blog";
import OurClients from "./../../components/social-media-components/our-clients/our-clients";
import NewTestimonial from "./../../components/new-testimonial/new-testimonial";

const Services = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="service-page-1">
      <ServiceBanner />
      <AmazonSupportingPartner />
      <AmazonServices />
      <AmazonStrategies />
      <AmazonHowWeHelp />
      <HelpFromExperts />
      <KeyFeatures />

      <NewTestimonial />
      <NewBlog />
      <AmazonFaqs />
      <HowToUse />
      <OurClients />
      <ProjectInMind
        data={{
          heading: "Start your Journey with us!",
          para: "Put your products in front of the millions of customers who search Amazon every day.",
          buttonLabel: "Find Service Providers",
        }}
        showSocialMedia={true}
        top={50}
      />
      <Footer />
    </div>
  );
};

export default Services;
