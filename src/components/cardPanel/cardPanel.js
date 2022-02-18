import BannerCard from "../cards/bannerCard/bannerCard";
import { IoMdPaperPlane } from "react-icons/io";
import { GoLightBulb } from "react-icons/go";
import { GiBrain } from "react-icons/gi";
import "./cardPanel.scss";

const CardPanel = (props) => {
  return (
    <div className="container upper-gap">
      <div className="row cards-panel">
        {props.data &&
          props.data.bannerCards.map((bcards, i) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <BannerCard
                class="cards"
                name={bcards.heading}
                icon={
                  i == 0 ? (
                    <IoMdPaperPlane />
                  ) : i == 1 ? (
                    <GoLightBulb />
                  ) : i == 2 ? (
                    <GiBrain />
                  ) : (
                    ""
                  )
                }
                text={bcards.text}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardPanel;
