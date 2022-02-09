import getHelp from "../../../../images/services/help_from_experts.svg";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Collapse } from "react-collapse";
import Fade from "react-reveal/Fade";
import { useState } from "react";
import "./productListing-faqs.scss";
import Heading from "./../../../../components/common/heading/heading";

const ProductListingFaqs = () => {
  const [comment, setComment] = useState([
    {
      number: "01",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
      isOpened: true,
    },
    {
      number: "02",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
      isOpened: false,
    },
    {
      number: "03",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
      isOpened: false,
    },
  ]);

  const handleCollapse = (c) => {
    const temp = [...comment];
    temp.map((com) => {
      if (com.number === c.number) {
        com.isOpened = !com.isOpened;
      }
    });
    setComment(temp);
  };

  return (
    <div className="faqs">
      <div className="container">
        <Heading
          heading="FAQ's"
          subHeading="Check out some of the question people asked."
        />

        <div className="row">
          <Fade duration={2000} delay={200} big>
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 ">
              {comment.map((c) => (
                <div className="comment">
                  <div className="number">{c.number}</div>
                  <div className="text">
                    <span className="question">Hows Work This antivirus?</span>

                    <Collapse isOpened={c.isOpened}>
                      <span className="answer">{c.comment}</span>
                    </Collapse>
                  </div>

                  {c.isOpened ? (
                    <AiFillCaretUp onClick={() => handleCollapse(c)} />
                  ) : (
                    <AiFillCaretDown onClick={() => handleCollapse(c)} />
                  )}
                </div>
              ))}
            </div>
          </Fade>
          <Fade duration={2000} delay={300} big>
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 pic-side">
              <img className="img-side-faq" src={getHelp} alt="" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ProductListingFaqs;
