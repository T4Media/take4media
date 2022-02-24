import { GiArchiveResearch, GiPublicSpeaker } from "react-icons/gi";
import {
  MdSocialDistance,
  MdPaid,
  MdScreenSearchDesktop,
  MdMarkEmailUnread,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { SiInfluxdb } from "react-icons/si";
import Fade from "react-reveal/Fade";
import "./productListing-services.scss";
import Heading from "./../../../../components/common/heading/heading";
import ServiceCard from "./../../../../components/cards/serviceCard/serviceCard";
import { useEffect, useState } from "react";
import { client } from "./../../../../client";

const ProductListingServices = () => {
  const [productListingServices, setProductListingServices] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "productListServices",
        select: "fields",
      })
      .then((res) => {
        setProductListingServices(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="creative-services">
      <div className="container">
        <Heading
          heading="Our Services"
          subHeading="Our Services Have Always Delivered."
        />
        <div className="row">
          {productListingServices &&
            productListingServices.map((pls) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <Fade duration={2000} delay={200} big>
                  <ServiceCard
                    heading={pls.fields.serviceName}
                    icon={<GiArchiveResearch />}
                    paragraph={pls.fields.serviceDescription}
                  />
                </Fade>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListingServices;
