import "./bannerCard.scss";

const BannerCard = (props) => {
  return (
    <div className={props.class}>
      {props.icon}
      <h4>{props.name}</h4>
      <hr />
      <br />
      <p>{props.text}</p>
    </div>
  );
};

export default BannerCard;
