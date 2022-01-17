import Navbar from "./../../components/navbar/navbar";
import Slide from "react-reveal/Slide";
import "./contact.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { MdMarkEmailUnread } from "react-icons/md";
import Button from "../../components/common/button/button";
import ProjectInMind from "../../components/project_in_mind/project_in_mind";
import Footer from "../../components/footer/footer";
import Line from "../../components/common/line/line";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-banner">
        <Navbar />

        <Slide left delay={500} duration={1200}>
          <h1>Contact Us.</h1>
        </Slide>
      </div>

      <div className="get-in-touch">
        <h1>Get in touch with us!</h1>
        <h3>LOREM IPSUM DOLOR SIT AMET</h3>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-5">
              <BsFillTelephoneFill />
              <h3>Phone</h3>
              <p>
                +1 234 567 890 <br />
                +0 987 654 321
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-5 left-line">
              <ImLocation2 />
              <h3>Address</h3>
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit.
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-5 left-line">
              <MdMarkEmailUnread />
              <h3>Email</h3>
              <p>
                anymail@mail.com <br />
                officialmail@mail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="send-us-message">
        <div className="container">
          <h1>Send us a message!</h1>
          <h3>LOREM IPSUM DOLOR SIT AMET</h3>

          <div className="input-first-row mt-5">
            <input name="" value="" placeholder="First Name" />
            <input name="" value="" placeholder="Last Name" />
          </div>
          <div className="input-second-row mt-3">
            <input name="" value="" placeholder="Email" />
            <input name="" value="" placeholder="Subject" />
          </div>

          <div className="input-third-row mt-3 ">
            <textarea
              name=""
              value=""
              placeholder="Type Your Message Here .."
            />
          </div>
          <center>
            <Button label="Send Messge" style={{ marginBottom: "5rem" }} />
          </center>
        </div>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.0888105163503!2d67.06348311530672!3d24.79241228408608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33cebc04eb153%3A0x7e2ded11148c9f9!2sTake4Media!5e0!3m2!1sen!2s!4v1640090452943!5m2!1sen!2s"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>

        <Line />
      </div>

      <ProjectInMind
        data={{
          heading: "Have any project in mind?",
          buttonLabel: "MAKE INQUIRY",
        }}
        showSocialMedia={true}
      />

      <Footer />
    </div>
  );
};

export default Contact;
