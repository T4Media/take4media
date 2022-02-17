import OurClients from "../../components/amazon-creative-page-component/our-client/our-client";
import NewBlog from "../../components/new-blog/new-blog";
import NewTestimonial from "../../components/new-testimonial/new-testimonial";
import GrowYourBuisness from "./../../components/amazon-creative-page-component/grow-your-buisness/grow-your-buisness";
import Footer from "./../../components/footer/footer";
import ProductListingBanner from "./components/productListing-banner/productListing-banner";
import ProductListingStrategies from "./components/productListing-strategies/productListing-strategies";
import ProductListingServices from "./components/productListing-services/productListing-services";
import ProductListingBusinessProcess from "./components/productListing-buisness-process/productListing-buisness-process";
import ProductListingSupportingPartner from "./components/productListing-supporting-partner/productListing-supporting-partner";

const ProductListing = () => {
  return (
    <div className="product-listing">
      <ProductListingBanner />
      <ProductListingStrategies />
      <ProductListingServices />
      <OurClients />
      <NewTestimonial />
      <ProductListingBusinessProcess />

      <NewBlog />
      <ProductListingSupportingPartner />
      <GrowYourBuisness />
      <Footer />
    </div>
  );
};

export default ProductListing;
