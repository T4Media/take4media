import "./social-media.scss";
import SoicalMediaBanner from "../../components/social-media-components/social-media-banner/social-media-banner";
import LogoSection from "../../components/social-media-components/logo-section/logo-section";
import SocialMediaServices from "../../components/social-media-components/social-media-services/social-media-services";
import HowWeHelp from "../../components/social-media-components/how-we-help/how-we-help";
import Footer from "../../components/footer/footer";
import OurStrategy from "../../components/social-media-components/our-strategy/our-strategy";
import OurClients from "../../components/social-media-components/our-clients/our-clients";
import ReadyToGrow from "../../components/social-media-components/ready-to-grow/ready-to-grow";
import NewTestimonial from "../../components/new-testimonial/new-testimonial";
import NewBlog from "../../components/new-blog/new-blog";
import SocialMediaFaqs from "../../components/social-media-components/social-media-faqs/social-media-faqs";
const SocialMedia = (props) => {
  return (
    <div className="social-media">
      <SoicalMediaBanner />
      <LogoSection />
      <SocialMediaServices />
      <OurStrategy />
      <HowWeHelp />
      <NewTestimonial />
      <NewBlog />
      <SocialMediaFaqs />
      <OurClients />
      <ReadyToGrow />
      <Footer />
    </div>
  );
};

export default SocialMedia;
