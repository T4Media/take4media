import Carousel from "react-elastic-carousel";
import quote from "../../images/icons/1.png";
import Line from "../common/line/line";
import Fade from "react-reveal/Fade";
import "./new-testimonial.scss";
import { useEffect, useState } from "react";
import { client } from "./../../client";

const NewTestimonial = () => {
  const [testimonials, setTestimonials] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "testimonials",
        select: "fields",
      })
      .then((res) => {
        setTestimonials(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="new-testimonial">
      <Fade duration={2000} delay={300} big>
        <center>
          <img src={quote} alt="" />
        </center>
        <h1>Testimonials</h1>
        <h6>We prioritize your brand enrichment on Amazon</h6>

        <div className="container">
          <Carousel itemsToShow={1} disableArrowsOnEnd={false}>
            {testimonials &&
              testimonials.items.map((t) => (
                <div>
                  <div className="testimonial">
                    <p>{t.fields.comment.content[0].content[0].value} </p>
                    <h4>{t.fields.name}</h4>
                  </div>
                </div>
              ))}
          </Carousel>
        </div>
      </Fade>
      <Line top={-58} />
    </div>
  );
};

export default NewTestimonial;
