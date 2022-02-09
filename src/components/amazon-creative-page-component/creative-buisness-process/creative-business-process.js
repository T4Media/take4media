import Heading from "./../../common/heading/heading";
import { BsTextParagraph } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import "./creative-business-process.scss";
import { GiBrain } from "react-icons/gi";
import Fade from "react-reveal/Fade";

const CreativeBuisnessProcess = () => {
  return (
    <div className="creative-business-process">
      <div className="container">
        <Heading
          heading="When are we right for you?"
          subHeading="Simplifying your growth strategy"
        />

        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 process-1">
            <Fade duration={2000} delay={200} big>
              <div className="processes">
                <MdAnimation />
                <h4>Grow</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>{" "}
            </Fade>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 process-2">
            <Fade duration={2000} delay={300} big>
              <div className="processes">
                <GiBrain />
                <h4>Monetize</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
            </Fade>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 process-3">
            <Fade duration={2000} delay={400} big>
              <div className="processes">
                <BsTextParagraph />
                <h4>Engage</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
            </Fade>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 process-4">
            <Fade duration={2000} delay={500} big>
              <div className="processes">
                <FiMonitor />
                <h4>Influence</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeBuisnessProcess;
