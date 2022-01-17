import "./project_in_mind.scss";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import Button from "../../components/common/button/button";
import Line from "../common/line/line";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
const ProjectInMind = (props) => {
  return (
    <div className="project-in-mind" id="contact">
      <Line top={props.top ? props.top : ""} />

      {props.showSocialMedia ? (
        <Slide top>
          <span className="social-media-icons">
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsYoutube />
          </span>
        </Slide>
      ) : (
        ""
      )}

      <h1>{props.data.heading} </h1>

      {props.data.para ? (
        <h6 style={{ textAlign: "center", color: "white" }}>
          {props.data.para}
        </h6>
      ) : (
        ""
      )}

      <center>
        <Slide bottom>
          <Link to="/contact-us">
            <Button
              label={props.data.buttonLabel}
              style={{ marginBottom: "12rem", marginTop: "2rem" }}
            />
          </Link>
        </Slide>
      </center>
    </div>
  );
};

export default ProjectInMind;
