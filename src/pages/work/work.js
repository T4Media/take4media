import Navbar from "../../components/navbar/navbar";
import "./work.scss";
import work3 from "../../images/our-work/3.jpg";
import work4 from "../../images/our-work/4.jpg";
import work5 from "../../images/our-work/5.jpg";
import work6 from "../../images/our-work/6.jpg";
import work7 from "../../images/our-work/7.jpg";
import work8 from "../../images/our-work/8.jpg";
import w from "../../images/our-work/002.jpg";
import w2 from "../../images/our-work/001.jpg";
import w3 from "../../images/our-work/004.jpg";
import w4 from "../../images/our-work/005.jpg";
import w5 from "../../images/our-work/11.jpg";
import w6 from "../../images/our-work/12.jpg";

import { useDispatch } from "react-redux";
import Footer from "../../components/footer/footer";
import { useState, useEffect } from "react";
import Slide from "react-reveal/Slide";
import React from "react";
import ReactPlayer from "react-player";
import vid from "../../videos/1.mp4";
import vid1 from "../../videos/2.mp4";
import vid2 from "../../videos/3.mp4";
import vid3 from "../../videos/4.mp4";

const Work = (props) => {
  const dispatch = useDispatch();

  const portfolio = [
    { img: w, type: "photography" },
    { img: vid, type: "videography" },
    { img: vid1, type: "videography" },
    { img: w6, type: "design" },
    { img: w3, type: "photography" },
    { img: w4, type: "photography" },
    { img: vid2, type: "videography" },
    { img: w5, type: "design" },
    { img: vid3, type: "videography" },
    { img: w2, type: "photography" },
  ];

  const [menus, setMenus] = useState({
    all: true,
    videography: false,
    photography: false,
    design: false,
  });

  useEffect(() => {
    let temp = { ...menus };

    if (props.videography) {
      temp.all = false;
      temp.videography = true;
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
    temp.videography = false;
    temp.photography = false;
    temp.design = false;

    setMenus(temp);
  };
  const photographyTrue = () => {
    let temp = { ...menus };
    temp.all = false;
    temp.videography = false;
    temp.photography = true;
    temp.design = false;
    setMenus(temp);
  };

  const videographyTrue = () => {
    let temp = { ...menus };
    temp.all = false;
    temp.videography = true;
    temp.photography = false;
    temp.design = false;
    setMenus(temp);
  };

  const designTrue = () => {
    let temp = { ...menus };
    temp.all = false;
    temp.videography = false;
    temp.photography = false;
    temp.design = true;
    setMenus(temp);
  };

  const check = (e) => {
    console.log(e);
  };

  let [videoPlay, setVideoPlay] = useState(false);

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
            className={menus.videography ? "make-red" : ""}
            onClick={videographyTrue}
          >
            Videography
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

                {menus.videography
                  ? portfolio
                      .splice(0, Math.ceil(portfolio.length / 2))
                      .map((p) =>
                        p.type === "videography" ? (
                          <Slide bottom>
                            <div className="col-xl-12">
                              <ReactPlayer url={p.img} controls width="100%" />

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

                {menus.videography
                  ? portfolio.splice(-Math.ceil(portfolio.length)).map((p) =>
                      p.type === "videography" ? (
                        <Slide bottom>
                          <div className="col-xl-12">
                            <ReactPlayer
                              url={p.img}
                              muted
                              width="100%"
                              controls
                            />

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
