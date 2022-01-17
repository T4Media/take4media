import "./button.scss";
const Button = ({ label, style }) => {
  return (
    <button className="common-button" style={style}>
      {label}
    </button>
  );
};

export default Button;
