import "./servicePanel.scss";
import { BsBarChartLine, BsFillPencilFill } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import Heading from "../common/heading/heading";
import ServiceCard from "../cards/serviceCard/serviceCard";
import Line from "../common/line/line";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { useEffect, useState } from "react";
import { client } from "./../../client";

const ServicePanel = (props) => {
  const [services, setServices] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "mainServices",
        select: "fields",
      })
      .then((res) => {
        setServices(res.items[0].fields);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container">
        <Heading heading="Services." />

        <div className="row service-row">
          {services &&
            services.services.map((s) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                {console.log(s)}
                <Link to={s.slug}>
                  <Fade big>
                    <ServiceCard
                      heading={s.serviceName}
                      icon={<BsBarChartLine />}
                      paragraph={s.service_description}
                    />
                  </Fade>
                </Link>
              </div>
            ))}
        </div>
      </div>

      <br />
      <br />
      <br />
      <Line />

      <br />
      <br />
      <br />
    </>
  );
};

export default ServicePanel;
