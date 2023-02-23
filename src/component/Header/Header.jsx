import logo from "./nba-logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <h1>NBA Legends</h1>
    </div>
  );
};

export default Header;
