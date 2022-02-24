import { BsTextParagraph } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import "./productListing-buisness-process.scss";
import { GiBrain } from "react-icons/gi";
import Fade from "react-reveal/Fade";
import Heading from "./../../../../components/common/heading/heading";
import { useState, useEffect } from "react";
import { client } from "./../../../../client";

const ProductListingBusinessProcess = () => {
  const [productListProcess, setProductListProcess] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "productListProcess",
        select: "fields",
      })
      .then((res) => {
        setProductListProcess(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="creative-business-process">
      <div className="container">
        <Heading
          heading="Kickstart Your Product Listing in Its Prime"
          subHeading="Simplifying your growth strategy"
        />

        <div className="row">
          {productListProcess &&
            productListProcess.map((plp) => (
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 process-1">
                <Fade duration={2000} delay={200} big>
                  <div className="processes">
                    <MdAnimation />
                    <h4>{plp.fields.heading}</h4>
                    <p>{plp.fields.subHeading}</p>
                  </div>
                </Fade>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListingBusinessProcess;
