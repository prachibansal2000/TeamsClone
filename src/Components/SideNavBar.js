import "../CSS/SideNavBar.css";
import { BsBellFill } from "react-icons/bs";
const sidenav = () => {
  return (
    <div class="sidebar">
      <div className="icons">
        <a>
          <BsBellFill />
        </a>
      </div>
    </div>
  );
};

export default sidenav;
