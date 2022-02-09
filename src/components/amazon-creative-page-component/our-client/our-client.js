import client1 from "../../../images/our-clients/1.png";
import client2 from "../../../images/our-clients/2.png";
import client3 from "../../../images/our-clients/3.png";
import client4 from "../../../images/our-clients/4.png";
import client5 from "../../../images/our-clients/5.png";
import client6 from "../../../images/our-clients/6.png";
import Heading from "./../../common/heading/heading";
import Slide from "react-reveal/Slide";
import "./our-client.scss";

const OurClients = () => {
  return (
    <div className="our-clients-creative">
      <div className="container">
        <Heading heading="Our Clients" subHeading="Trusted By" />

        <div className="row">
          <Slide bottom>
            <div className="col">
              <img src={client1} alt="" />
            </div>
          </Slide>
          <Slide bottom>
            <div className="col">
              <img src={client2} alt="" />
            </div>
          </Slide>
          <Slide bottom>
            <div className="col">
              <img src={client3} alt="" />
            </div>
          </Slide>
          <Slide bottom>
            <div className="col">
              <img src={client4} alt="" />
            </div>
          </Slide>
          <Slide bottom>
            <div className="col">
              <img src={client5} alt="" />
            </div>
          </Slide>
          <Slide bottom>
            <div className="col">
              <img src={client6} alt="" />
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
