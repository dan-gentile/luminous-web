import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/home"
            className={
              window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/theDrop"
            className={
              window.location.pathname === "/theDrop"
                ? "nav-link active"
                : "nav-link"
            }
          >
            The Drop
          </Link>
        </li>
        <li>
          <Link
            to="/coffee"
            className={
              window.location.pathname === "/coffee"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Coffee
          </Link>
        </li>
        <li>
          <a href="https://www.instagram.com/luminouscoffee/">
            <FontAwesomeIcon
              className="nav-link"
              icon={faInstagram}
              size="2x"
              title="Luminous Coffee Instagram"
              aria-hidden={false}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
