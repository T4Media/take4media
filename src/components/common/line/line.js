import "./line.scss";
const Line = (props) => {
  return (
    <div style={{ top: props.top }} className="line-container">
      <div className="line"></div>
    </div>
  );
};

export default Line;
