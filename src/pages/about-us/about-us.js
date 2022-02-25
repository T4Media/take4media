import Navbar from "../../components/navbar/navbar";
import {
  AiOutlineAntDesign,
  AiFillFastForward,
  AiOutlineSolution,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { TiTickOutline } from "react-icons/ti";
import sec from "../../images/about/sec2.jpg";
import solution from "../../images/about/solution.jpg";
import "./about-us.scss";
import Button from "../../components/common/button/button";
import ProjectInMind from "./../../components/project_in_mind/project_in_mind";
import Footer from "../../components/footer/footer";
import Line from "../../components/common/line/line";
import MeetOurTeam from "./../../components/meet-our-team/meet-out-team";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { client } from "../../client";
import { useState, useEffect } from "react";

const AboutUs = () => {
  const [about, setAbout] = useState();
  const [skills, setSkills] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "aboutBenefits",
        select: "fields",
      })
      .then((res) => {
        setAbout(res.items);
      })
      .catch((err) => {
        console.log(err);
      });

    client
      .getEntries({
        content_type: "aboutSkills",
        select: "fields",
      })
      .then((res) => {
        setSkills(res.items[0].fields);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="about-us">
      <div className="about-us-banner">
        <Navbar />

        <Slide left delay={500} duration={1200}>
          <h1>About Us.</h1>
        </Slide>
      </div>

      <div className="qualities">
        <div className="container">
          <div className="row">
            {about &&
              about.map((ab) => (
                <Fade big>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
                    <AiOutlineAntDesign />
                    <h2>{ab.fields.benefitName}</h2>
                    <p>{ab.fields.benefitText}</p>
                  </div>
                </Fade>
              ))}
          </div>
        </div>
      </div>

      <div className="skills">
        <div className="container">
          <Fade delay={300} big>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h1>{skills && skills.skillHeading.heading}</h1>
                <p>{skills && skills.skillHeading.paragraph}</p>

                <h5>{skills && skills.skillsName.skill_1}</h5>
                <div class="bar learning"></div>
                <h5>{skills && skills.skillsName.skill_2}</h5>
                <div class="bar back basic"></div>
                <h5>{skills && skills.skillsName.skill_3}</h5>
                <div class="bar back intermediate"> </div>
                <h5>{skills && skills.skillsName.skill_4}</h5>
                <div class="bar front advanced"></div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img src={sec} alt="" />
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="solution">
        <div className="container">
          <Fade delay={300} big>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img src={solution} alt="" />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h1>{skills && skills.solution.heading}</h1>
                <p>{skills && skills.solution.paragraph}</p>

                <Button label="Watch Video" style={{ marginTop: "1rem" }} />
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <MeetOurTeam />

      <ProjectInMind
        data={{
          heading: "Are You Ready to Change Your Life?",
          buttonLabel: "MAKE YOUR MOVE",
        }}
      />
      <Footer />
    </div>
  );
};

export default AboutUs;
