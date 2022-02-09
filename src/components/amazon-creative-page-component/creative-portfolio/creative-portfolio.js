import img10 from "../../../images/creative-portfolio/new/10.jpg";
import img11 from "../../../images/creative-portfolio/new/11.jpg";
import img12 from "../../../images/creative-portfolio/new/12.jpg";
import img13 from "../../../images/creative-portfolio/new/13.jpg";
import img1 from "../../../images/creative-portfolio/new/1.jpg";
import img6 from "../../../images/creative-portfolio/new/6.jpg";
import img7 from "../../../images/creative-portfolio/new/7.jpg";
import img8 from "../../../images/creative-portfolio/new/8.jpg";
import img9 from "../../../images/creative-portfolio/new/9.jpg";
import Heading from "./../../common/heading/heading";
import "./creative-portfolio.scss";

const CreativePortfolio = () => {
  return (
    <div className="creative-portfolio">
      <div className="container">
        <Heading
          heading="Our Portfolio"
          subHeading="Lorem ipmsum lacasa de papel dummy text"
        />
      </div>
      <div className="row-1">
        <div
          className="content"
          style={{
            width: "326px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={img6} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
        <div
          className="content"
          style={{
            width: "742px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={img1} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
        <div
          className="content"
          style={{
            width: "331px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={img7} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
        <div
          className="content"
          style={{
            width: "309px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={img8} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
        <div
          className="content"
          style={{
            width: "482px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={img9} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
      </div>

      <div className="row-2">
        <div
          className="content"
          style={{
            width: "627px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={img10} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
        <div
          className="content"
          style={{
            width: "278px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={img11} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
        <div
          className="content"
          style={{
            width: "609px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={img12} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
        <div
          className="content"
          style={{
            width: "279px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={img13} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativePortfolio;
