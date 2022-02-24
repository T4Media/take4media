import AMSHelpFromExperts from "../../components/amazon-page-component/ams-help-from-experts";
import AMSBanner from "../../components/amazon-page-component/ams-banner";
import AMSKeyFeatures from "../../components/amazon-page-component/ams-key-features";
import ProjectInMind from "../../components/project_in_mind/project_in_mind";
import AMSHowToUse from "../../components/amazon-page-component/how-to-use";
import Footer from "../../components/footer/footer";
import "./amazon-ams-services.scss";
import AMSStrategies from "../../components/amazon-page-component/ams-strategy/ams-strategies";
import AMSServices from "../../components/amazon-page-component/amazon-services/AMSServices";
import AMSSupportingPartner from "../../components/amazon-page-component/amazon-supporting-partner/ams-supporting-partner";
import AMSHowWeHelp from "../../components/amazon-page-component/ams-how-we-help/ams-how-we-help";
import AMSFaqs from "../../components/amazon-page-component/amazon-faqs/ams-faqs";
import NewBlog from "../../components/new-blog/new-blog";
import OurClients from "../../components/social-media-components/our-clients/our-clients";
import NewTestimonial from "../../components/new-testimonial/new-testimonial";

const AmazonAMSServices = () => {
  return (
    <div className="service-page-1">
      <AMSBanner />
      <AMSSupportingPartner />
      <AMSServices />
      <AMSStrategies />
      <AMSHowWeHelp />
      <AMSHelpFromExperts />
      <AMSKeyFeatures />
      <NewTestimonial />
      <NewBlog />
      <AMSFaqs />
      <AMSHowToUse />
      <OurClients />
      <ProjectInMind
        data={{
          heading: "Embark on Becoming a Bestseller with Us",
          para: "Your product will enjoy supremacy on Amazon with the traffic and conversion it accumulates.",
          buttonLabel: "Find Service Providers",
        }}
        showSocialMedia={true}
        top={50}
      />
      <Footer />
    </div>
  );
};

export default AmazonAMSServices;
