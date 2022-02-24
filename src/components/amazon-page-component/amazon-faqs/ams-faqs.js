import getHelp from "../../../images/services/help_from_experts.svg";
import Heading from "../../common/heading/heading";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Collapse } from "react-collapse";
import Fade from "react-reveal/Fade";
import { useState, useEffect } from "react";
import "./ams-faqs.scss";
import { client } from "../../../client";

const AMSFaqs = () => {
  const [AMSFaqs, setAMSFaqs] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "amazonAmsFaqs",
        select: "fields",
      })
      .then((res) => {
        setAMSFaqs(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCollapse = (c) => {
    const temp = [...AMSFaqs];
    temp.map((com) => {
      if (com.fields.number === c.fields.number) {
        com.fields.isOpen = !com.fields.isOpen;
      }
    });
    setAMSFaqs(temp);
  };

  return (
    <div className="amazon-faqs">
      <div className="container">
        <Heading
          heading="FAQ's"
          subHeading="Check out some of the question people asked."
        />
        <Fade duration={2000} delay={300} big>
          <div className="row">
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 ">
              {AMSFaqs &&
                AMSFaqs.map((c) => (
                  <div className="comment">
                    <div className="number">{c.fields.number}</div>
                    <div className="text">
                      <span className="question">{c.fields.question}</span>

                      <Collapse isOpened={c.fields.isOpen}>
                        <span className="answer">
                          {c.fields.answer.content[0].content[0].value}
                        </span>
                      </Collapse>
                    </div>

                    {c.fields.isOpen ? (
                      <AiFillCaretUp onClick={() => handleCollapse(c)} />
                    ) : (
                      <AiFillCaretDown onClick={() => handleCollapse(c)} />
                    )}
                  </div>
                ))}
            </div>
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 pic-side">
              <img className="img-side-faq" src={getHelp} alt="" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AMSFaqs;
