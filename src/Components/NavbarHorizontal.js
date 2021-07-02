import "../CSS/NavBarHorizontal.css";
import { BsGrid3X3Gap } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { Button } from "react-bootstrap";

const navbar = () => {
  return (
    <div className="topbar">
      <Link to="/sidenavapp">
        <BsGrid3X3Gap className="gridIcon" />
      </Link>
      <div className="col-3">
        <p className="teams">
          <span className="showText">Teams</span>
          <span className="hiddenText">Microsoft Teams</span>
        </p>
      </div>
      <div className="col-4">
        <form>
          <div>
            <span>
              <i className="fas fa-search" />
            </span>
            <input className="searchbar" type="search" placeholder="Search" />
          </div>
        </form>
      </div>
      <div>
        <a href="/">
          <AiFillHome className="homeIcon" />
        </a>
        <Button
          className="logOutButton"
          onClick={() => {
            localStorage.removeItem("email");
            localStorage.removeItem("clicked");
            localStorage.removeItem("password");
            localStorage.removeItem("username");
            window.location.reload();
          }}
        >
          <GoSignOut /> <span className="hiddenText">Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default navbar;
