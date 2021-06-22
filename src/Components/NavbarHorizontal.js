import "../CSS/NavBarHorizontal.css";
import { BsGrid3X3Gap, BsThreeDots, BsPeopleCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <Link to="/sidenavapp">
            <BsGrid3X3Gap className="gridIcon" />
          </Link>
          <div className="col-3">
            <p className="teams">Microsoft Teams</p>
          </div>
          <div className="col-4">
            <form>
              <div>
                <span>
                  <i className="fas fa-search" />
                </span>
                <input
                  className="searchbar"
                  type="search"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div>
            <BsThreeDots className="dotIcon" />
            <BsPeopleCircle className="gridIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
