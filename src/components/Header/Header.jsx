import Navbar from "../NavBar/Navbar";
import LuminousWhite from "../../images/LuminousWhite.png";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Navbar />
      <img src={LuminousWhite} height={"80px"} alt="Luminous Logo" />
    </header>
  );
};

export default Header;
