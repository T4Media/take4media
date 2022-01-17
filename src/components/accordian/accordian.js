import Fade from "react-reveal/Fade";
import "./accordian.scss";

const Accordian = () => {
  return (
    <>
      <div class="accordion">
        <ul>
          <Fade duration={2000} delay={200} big>
            <li>
              <div>
                <a>
                  <h2>Curtain & Drapes</h2>
                </a>
              </div>
            </li>
          </Fade>
          <Fade duration={2000} delay={300} big>
            <li>
              <div>
                <a>
                  <h2>Table Runners</h2>
                </a>
              </div>
            </li>
          </Fade>

          <Fade duration={2000} delay={400} big>
            <li>
              <div>
                <a>
                  <h2>Bedding</h2>
                </a>
              </div>
            </li>
          </Fade>
          <Fade duration={2000} delay={500} big>
            <li>
              <div>
                <a>
                  <h2></h2>
                </a>
              </div>
            </li>
          </Fade>
          <Fade duration={2000} delay={600} big>
            <li>
              <div>
                <a>
                  <h2>Hotel Blackout</h2>
                </a>
              </div>
            </li>
          </Fade>
          <Fade duration={2000} delay={700} big>
            <li>
              <div>
                <a>
                  <h2>Lorem Ipsum</h2>
                </a>
              </div>
            </li>
          </Fade>
        </ul>
      </div>
    </>
  );
};

export default Accordian;
