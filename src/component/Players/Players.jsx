import { data } from "../../component/data";
import Card from "./Card";
import "./Players.css";
const Players = () => {
  return (
    <>
      <div className="search">
        <input type="search" name="search" id="search" />
      </div>
      <div className="container">
        {data.map((item, index) => {
          return (
            <div>
              <Card {...item} key={index} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Players;
