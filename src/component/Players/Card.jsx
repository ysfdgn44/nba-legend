import "./Players.css";
import Statistics from "./Statistics";

const Card = ({ img, name, statistics }) => {
  return (
    <div className="card">
      <div className="div-img">
        <img className="img" src={img} alt="" />
      </div>
      <div className="name">
        <h6>{name}</h6>
      </div>
      <Statistics name={statistics} />
    </div>
  );
};

export default Card;
