import { data } from "../../component/data";
import Card from "./Card";
import "./Players.css";
const Players = (name) => {
  console.log(name);
  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <div>
            <Card {...item} key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Players;
