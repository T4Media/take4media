import "./serviceCard.scss";

const ServiceCard = (props) => {
  return (
    <div
      style={{ background: props.class ? "#66902f" : "" }}
      className="service-card"
    >
      {props.icon}
      <h4
      >{props.heading}</h4
      >
      <p>{props.paragraph}</p>
    </div>
  );
};

export default ServiceCard;
