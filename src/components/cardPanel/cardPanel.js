import BannerCard from "../cards/bannerCard/bannerCard";
import { IoMdPaperPlane } from "react-icons/io";
import { GoLightBulb } from "react-icons/go";
import { GiBrain } from "react-icons/gi";
import "./cardPanel.scss";

const CardPanel = () => {
  return (
    <div className="container upper-gap">
      <div className="row cards-panel">
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <BannerCard
            class="cards"
            name="Future Concept."
            icon={<IoMdPaperPlane />}
          />
        </div>

        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <BannerCard
            class="cards middle-cards"
            name="The Big Ideas."
            icon={<GiBrain />}
          />
        </div>

        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <BannerCard
            class="cards "
            name="Creative Solutions."
            icon={<GoLightBulb />}
          />
        </div>
      </div>
    </div>
  );
};

export default CardPanel;
