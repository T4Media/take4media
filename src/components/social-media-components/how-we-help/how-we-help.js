import "./how-we-help.scss";
import BannerCard from "./../../../components/cards/bannerCard/bannerCard";
import { GiStumpRegrowth } from "react-icons/gi";
import { FaEye, FaHandshake } from "react-icons/fa";
import { SiInfluxdb } from "react-icons/si";
import Heading from "./../../common/heading/heading";
import Fade from "react-reveal/Fade";
import { client } from "./../../../client";
import { useState, useEffect } from "react";
const HowWeHelp = () => {
  const [socialMediaProcess, setSocialMediaProcess] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "socialMediaProcess",
        select: "fields",
      })
      .then((res) => {
        setSocialMediaProcess(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(socialMediaProcess);

  return (
    <div className="how-we-help">
      <div className="container">
        <Heading
          heading="Secrets to Accelerating Your Growth"
          subHeading="How we make things possible for you?"
        />

        <div className="row" style={{ justifyContent: "center" }}>
          {socialMediaProcess &&
            socialMediaProcess.map((smp, i) => (
              <div className="mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <Fade duration={1500} delay={300} big>
                  <BannerCard
                    class="cards"
                    text={smp.fields.paragraph}
                    name={smp.fields.heading}
                    icon={
                      i == 0 ? (
                        <GiStumpRegrowth />
                      ) : i == 1 ? (
                        <FaHandshake />
                      ) : i == 2 ? (
                        <FaEye />
                      ) : i == 3 ? (
                        <SiInfluxdb />
                      ) : (
                        ""
                      )
                    }
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

export default HowWeHelp;
