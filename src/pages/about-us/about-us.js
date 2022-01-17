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

const AboutUs = () => {
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
            <Fade big>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
                <AiOutlineAntDesign />
                <h2>Excellent Design</h2>
                <p>
                  Vivamus at vehicula justo hendrerit euismod ante. Suspendisse
                  egestas efficitur euismod.
                </p>
              </div>
            </Fade>

            <Fade delay={300} big>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
                <AiFillFastForward />
                <h2>Fast Response</h2>
                <p>
                  Vivamus at vehicula justo hendrerit euismod ante. Suspendisse
                  egestas efficitur euismod.
                </p>
              </div>
            </Fade>

            <Fade delay={400} big>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
                <AiOutlineSolution />
                <h2>Perfect Solutions</h2>
                <p>
                  Vivamus at vehicula justo hendrerit euismod ante. Suspendisse
                  egestas efficitur euismod.
                </p>
              </div>
            </Fade>
            <Fade delay={500} big>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
                <AiOutlineFieldTime />
                <h2>Time Saving</h2>
                <p>
                  Vivamus at vehicula justo hendrerit euismod ante. Suspendisse
                  egestas efficitur euismod.
                </p>
              </div>
            </Fade>
            <Fade delay={600} big>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
                <BiSupport />
                <h2>Personal Support</h2>
                <p>
                  Vivamus at vehicula justo hendrerit euismod ante. Suspendisse
                  egestas efficitur euismod.
                </p>
              </div>
            </Fade>
            <Fade delay={700} big>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
                <TiTickOutline />
                <h2>Best Quality</h2>
                <p>
                  Vivamus at vehicula justo hendrerit euismod ante. Suspendisse
                  egestas efficitur euismod.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="skills">
        <div className="container">
          <Fade delay={300} big>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h1>Here are some of our great skills</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  id arcu luctus, pellentesque lorem ac, pharetra sapien.
                </p>

                <h5>UI DESIGN</h5>
                <div class="bar learning"></div>
                <h5>UX DESIGN</h5>
                <div class="bar back basic"></div>
                <h5>DIGITAL MARKETING</h5>
                <div class="bar back intermediate"> </div>
                <h5>SOCIAL MEDIA</h5>
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
                <h1>Best Solutions for Your Business</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sit amet urna quis odio vehicula consectetur. Donec eu
                  gravida diam. Aenean accumsan nisl sed fringilla sollicitudin.
                  Donec tincidunt quis dolor eget consectetur. Suspendisse a
                  mollis lacus.
                </p>

                <Button label="Watch Video" style={{ marginTop: "1rem" }} />
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <MeetOurTeam />

      <ProjectInMind
        data={{
          heading: "Have any project in mind?",
          buttonLabel: "MAKE INQUIRY",
        }}
      />
      <Footer />
    </div>
  );
};

export default AboutUs;
