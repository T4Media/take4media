import "./bannerCard.scss";

const BannerCard = (props) => {
  return (
    <div className={props.class}>
      {props.icon}
      <h4>{props.name}</h4>
      <hr />
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
        tellus.​
      </p>
    </div>
  );
};

export default BannerCard;
