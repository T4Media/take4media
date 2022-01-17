import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./employe-card.scss";

const EmployeCard = (props) => {
  return (
    <div class="card">
      <div class="content">
        <div class="front">
          <img class="profile" width="100%" src={props.img} alt="Neymar" />
        </div>
        <div class="back from-bottom">
          <h2>{props.data.name}</h2>
          <h4>{props.data.designation}</h4>
          <br />
          <p class="des">{props.data.description}</p>
          <ul class="social-icon">
            <li>
              <a href="">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeCard;
