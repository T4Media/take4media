import client1 from "../../../images/our-clients/1.png";
import client2 from "../../../images/our-clients/2.png";
import client3 from "../../../images/our-clients/3.png";
import client4 from "../../../images/our-clients/4.png";
import client5 from "../../../images/our-clients/5.png";
import client6 from "../../../images/our-clients/6.png";
import Heading from "./../../common/heading/heading";
import Slide from "react-reveal/Slide";
import "./our-clients.scss";

const OurClients = () => {
  return (
    <div className="our-clients">
      <div className="container">
        <Heading heading="Our Clients" subHeading="Trusted By" />
        <div className="row">
          <div className="col">
            <Slide bottom>
              <img src={client1} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom>
              <img src={client2} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom>
              <img src={client3} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom>
              <img src={client4} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom>
              <img src={client5} alt="" />
            </Slide>
          </div>
          <div className="col">
            <Slide bottom>
              <img src={client6} alt="" />
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
