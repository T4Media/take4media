import BannerCard from "../../cards/bannerCard/bannerCard";
import Heading from "../../common/heading/heading";
import { FaEye, FaHandshake } from "react-icons/fa";
import { GiStumpRegrowth } from "react-icons/gi";
import { SiInfluxdb } from "react-icons/si";
import Fade from "react-reveal/Fade";
import "./ams-how-we-help.scss";
import { client } from "../../../client";
import { useState, useEffect } from "react";

const AMSHowWeHelp = () => {
  const [AMSProcess, setAMSProcess] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "amazonAmsProcess",
        select: "fields",
      })
      .then((res) => {
        setAMSProcess(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="amazon-how-we-help">
      <div className="container">
        <Heading
          heading="How We Make It Big for You?"
          subHeading="Growing your Amazon infrastructure "
        />
        <div className="row" style={{ justifyContent: "center" }}>
          {AMSProcess &&
            AMSProcess.map((ams) => (
              <div className="mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <Fade duration={2000} delay={300} big>
                  <BannerCard
                    class="cards"
                    name={ams.fields.heading}
                    text={ams.fields.text}
                    icon={<GiStumpRegrowth />}
                  />
                </Fade>
              </div>
            ))}
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AMSHowWeHelp;
