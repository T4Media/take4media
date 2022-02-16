import Heading from "../common/heading/heading";
import Button from "./../common/button/button";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./about.scss";
import { useEffect, useState } from "react";
import { client } from "./../../client";

const About = () => {
  const [about, setAbout] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "homeAbout",
        select: "fields",
      })
      .then((res) => {
        setAbout(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="about" id="about">
      <div className="container">
        <Heading
          heading="About."
          subHeading="We build brand popularity and drive product sales for your Amazon presence."
        />

        <div className="row r1">
          <Fade duration={2000} delay={300} big>
            <div className="col-xl-6 col-md-6">
              <div className="bg-1">
                <h2>Team Work</h2>
                <p>Coordinated Collaboration and Cooperation.</p>
              </div>
            </div>
          </Fade>
          <Fade duration={2000} delay={400} big>
            <div className="col-xl-6 col-md-6">
              <div className="bg-2">
                <h2>Philosophy</h2>
                <p>
                  Unregulated Imagination opens up new and experimental
                  opportunities
                </p>
              </div>

              <div className="bg-3">
                <h2>Office</h2>
                <p>Operating intact in the earthly sphere.</p>
              </div>
            </div>
          </Fade>
        </div>

        <div className="row r2">
          {about &&
            about.items.map((a, i) => (
              <div
                className={
                  `col-xl-4 col-lg-4 col-md-4 col-sm-4` +
                  (i > 0 ? " left-border" : "")
                }
              >
                <h4>{a.fields.heading}</h4>
                <p>{a.fields.text}</p>
              </div>
            ))}
        </div>
      </div>

      <center>
        <Link to="/about-us">
          <Button label="See More" style={{ marginTop: "3rem" }} />
        </Link>
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
