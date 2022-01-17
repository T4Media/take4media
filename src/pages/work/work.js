import Navbar from "../../components/navbar/navbar";
import "./work.scss";
import work1 from "../../images/our-work/1.jpg";
import work2 from "../../images/our-work/2.jpg";
import work3 from "../../images/our-work/3.jpg";
import work4 from "../../images/our-work/4.jpg";
import work5 from "../../images/our-work/5.jpg";
import work6 from "../../images/our-work/6.jpg";
import work7 from "../../images/our-work/7.jpg";
import work8 from "../../images/our-work/8.jpg";
import work9 from "../../images/our-work/9.jpg";
import work10 from "../../images/our-work/10.jpg";

import Footer from "../../components/footer/footer";
import { useState, useEffect } from "react";
import Slide from "react-reveal/Slide";

const Work = (props) => {
  const portfolio = [
    { img: work1, type: "photography" },
    { img: work3, type: "architecture" },
    { img: work5, type: "architecture" },
    { img: work7, type: "design" },
    { img: work9, type: "photography" },
    { img: work2, type: "photography" },
    { img: work4, type: "architecture" },
    { img: work6, type: "design" },
    { img: work8, type: "architecture" },
    { img: work10, type: "photography" },
  ];

  const [menus, setMenus] = useState({
    all: true,
    architecture: false,
    photography: false,
    design: false,
  });

  console.log(props);

  useEffect(() => {
    let temp = { ...menus };

    if (props.architecture) {
      temp.all = false;
      temp.architecture = true;
      setMenus(temp);
    }
    if (props.photography) {
      temp.all = false;
      temp.photography = true;
      setMenus(temp);
    }
    if (props.design) {
      temp.all = false;
      temp.design = true;
      setMenus(temp);
    }
  }, []);

  const allTrue = () => {
    let temp = { ...menus };
    temp.all = true;
    temp.architecture = false;
    temp.photography = false;
    temp.design = false;

    setMenus(temp);
  };
  const photographyTrue = () => {
    let temp = { ...menus };
    temp.all = false;
    temp.architecture = false;
    temp.photography = true;
    temp.design = false;
    setMenus(temp);
  };

  const architectureTrue = () => {
    let temp = { ...menus };
    temp.all = false;
    temp.architecture = true;
    temp.photography = false;
    temp.design = false;
    setMenus(temp);
  };

  const designTrue = () => {
    let temp = { ...menus };
    temp.all = false;
    temp.architecture = false;
    temp.photography = false;
    temp.design = true;
    setMenus(temp);
  };

  return (
    <div className="work">
      <div className="work-banner">
        <Navbar />

        <h1>Our Works.</h1>
      </div>

      <div className="work-section">
        <h1>Our Works.</h1>
        <h3 className="mt-1">See all our works.</h3>

        <div className="work-tabs">
          <li className={menus.all ? "make-red" : ""} onClick={allTrue}>
            All
          </li>
          <li
            className={menus.photography ? "make-red" : ""}
            onClick={photographyTrue}
          >
            Photography
          </li>
          <li
            className={menus.architecture ? "make-red" : ""}
            onClick={architectureTrue}
          >
            Architecture
          </li>
          <li className={menus.design ? "make-red" : ""} onClick={designTrue}>
            Design
          </li>
        </div>

        <div className="our-work-images">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                {menus.all
                  ? portfolio
                      .splice(0, Math.ceil(portfolio.length / 2))
                      .map((p) => (
                        <Slide bottom>
                          <div className="col-xl-12">
                            <img className="image" src={p.img} alt="" />
                            <div class="middle">
                              <div class="text"> {p.type}</div>
                            </div>
                          </div>
                        </Slide>
                      ))
                  : ""}

                {menus.architecture
                  ? portfolio
                      .splice(0, Math.ceil(portfolio.length / 2))
                      .map((p) =>
                        p.type === "architecture" ? (
                          <Slide bottom>
                            <div className="col-xl-12">
                              <img className="image" src={p.img} alt="" />
                              <div class="middle">
                                <div class="text"> {p.type}</div>
                              </div>
                            </div>
                          </Slide>
                        ) : (
                          ""
                        )
                      )
                  : ""}

                {menus.photography
                  ? portfolio
                      .splice(0, Math.ceil(portfolio.length / 2))
                      .map((p) =>
                        p.type === "photography" ? (
                          <Slide bottom>
                            <div className="col-xl-12">
                              <img className="image" src={p.img} alt="" />
                              <div class="middle">
                                <div class="text"> {p.type}</div>
                              </div>
                            </div>
                          </Slide>
                        ) : (
                          ""
                        )
                      )
                  : ""}

                {menus.design
                  ? portfolio
                      .splice(0, Math.ceil(portfolio.length / 2))
                      .map((p) =>
                        p.type === "design" ? (
                          <Slide bottom>
                            <div className="col-xl-12">
                              <img className="image" src={p.img} alt="" />
                              <div class="middle">
                                <div class="text"> {p.type}</div>
                              </div>
                            </div>
                          </Slide>
                        ) : (
                          ""
                        )
                      )
                  : ""}
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                {menus.all
                  ? portfolio.splice(-Math.ceil(portfolio.length)).map((p) => (
                      <Slide bottom>
                        <div className="col-xl-12">
                          <img className="image" src={p.img} alt="" />
                          <div class="middle">
                            <div class="text"> {p.type}</div>
                          </div>
                        </div>
                      </Slide>
                    ))
                  : ""}

                {menus.architecture
                  ? portfolio.splice(-Math.ceil(portfolio.length)).map((p) =>
                      p.type === "architecture" ? (
                        <Slide bottom>
                          <div className="col-xl-12">
                            <img className="image" src={p.img} alt="" />
                            <div class="middle">
                              <div class="text"> {p.type}</div>
                            </div>
                          </div>
                        </Slide>
                      ) : (
                        ""
                      )
                    )
                  : ""}

                {menus.photography
                  ? portfolio.splice(-Math.ceil(portfolio.length)).map((p) =>
                      p.type === "photography" ? (
                        <Slide bottom>
                          <div className="col-xl-12">
                            <img className="image" src={p.img} alt="" />
                            <div class="middle">
                              <div class="text"> {p.type}</div>
                            </div>
                          </div>
                        </Slide>
                      ) : (
                        ""
                      )
                    )
                  : ""}

                {menus.design
                  ? portfolio.splice(-Math.ceil(portfolio.length)).map((p) =>
                      p.type === "design" ? (
                        <Slide bottom>
                          <div className="col-xl-12">
                            <img className="image" src={p.img} alt="" />
                            <div class="middle">
                              <div class="text">John Doe</div>
                            </div>
                          </div>
                        </Slide>
                      ) : (
                        ""
                      )
                    )
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Work;
