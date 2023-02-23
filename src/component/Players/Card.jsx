import { useState } from "react";
import "./Players.css";

const Card = ({ img, name, statistics }) => {
  const [players, setPlayers] = useState(true);
  console.log(statistics);
  return (
    <div className="card" onClick={() => setPlayers(!players)}>
      {players ? (
        <div className="div-img">
          <img className="img" src={img} alt="" />
        </div>
      ) : (
        <div className="sta-div">
          <ul className="list">
            {statistics.map((item, i) => {
              return <li key={i}>🏀 {item}</li>;
            })}
          </ul>
        </div>
      )}
      <div className="name">
        <h6>{name}</h6>
      </div>
    </div>
  );
};

export default Card;
