import getHelp from "../../../../images/services/help_from_experts.svg";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Collapse } from "react-collapse";
import Fade from "react-reveal/Fade";
import { useState, useEffect } from "react";
import "./videography-faqs.scss";
import Heading from "./../../../../components/common/heading/heading";
import { client } from "./../../../../client";

const VideographyFaqs = () => {
  const [videographyFaqs, setVideographyFaqs] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "videographyFaqs",
        select: "fields",
      })
      .then((res) => {
        setVideographyFaqs(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCollapse = (c) => {
    const temp = [...videographyFaqs];
    temp.map((com) => {
      if (com.fields.number === c.fields.number) {
        com.fields.isOpen = !com.fields.isOpen;
      }
    });
    setVideographyFaqs(temp);
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
              {videographyFaqs &&
                videographyFaqs.map((c) => (
                  <div className="comment">
                    <div className="number">{c.fields.numbers}</div>
                    <div className="text">
                      <span className="question">
                        <span className="question">{c.fields.question}</span>
                      </span>

                      <Collapse isOpened={c.fields.isOpen}>
                        <span className="answer">
                          {c.fields.answer.content[0].content[0].value}
                        </span>
                      </Collapse>
                    </div>

                    {c.isOpen ? (
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

export default VideographyFaqs;
