import logo from "./nba-logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <h1>NBA Legends</h1>
      <input type="search" name="search" id="search" />
    </div>
  );
};

export default Header;
