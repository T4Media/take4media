import Heading from "../common/heading/heading";
import Line from "../common/line/line";
import "./works.scss";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "./../../client";

const Works = () => {
  const [work, setWork] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "work",
        select: "fields",
      })
      .then((res) => {
        setWork(res.items);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="works" id="work">
      <div className="container">
        <Heading heading="Works." subHeading="We initiate our expertise in:" />
      </div>
      <div className="container">
        <div className="different-work">
          <div className="row">
            {work &&
              work.map((wrk, i) => (
                <Slide bottom>
                  <div
                    className={
                      `col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12` +
                      (i == 1 ? " top" : " ")
                    }
                  >
                    <div class="img-wrapper">
                      <Link to={wrk.fields.slug}>
                        <img
                          className="inner-img"
                          src={wrk.fields.image.fields.file.url}
                          alt=""
                        />
                      </Link>
                    </div>
                    <h1>{wrk.fields.name}</h1>
                    <h6>{wrk.fields.text}</h6>
                  </div>
                </Slide>
              ))}
          </div>
        </div>
      </div>

      {/* <Accordian /> */}
      <br />
      <Line top={-30} />
      <br />
    </div>
  );
};

export default Works;
