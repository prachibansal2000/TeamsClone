import "../CSS/SideNavBar.css";
import { Link } from "react-router-dom";
import { BsBellFill, BsThreeDots, BsChatDots } from "react-icons/bs";
import { SiMicrosoftteams } from "react-icons/si";
import { FaRegCalendarAlt } from "react-icons/fa";
import { ImFilesEmpty } from "react-icons/im";
import { AiTwotoneAppstore } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
const sidenav = () => {
  return (
    <div class="sidebar">
      <Link to="/signUp">
        <BsChatDots className="icons" />
        Chat
      </Link>
      <Link to="/assignment">
        <BsBellFill className="icons" />
        Activity
      </Link>
      <a href="/">
        <SiMicrosoftteams className="icons" />
        Teams
      </a>
      <a href="/">
        <FaRegCalendarAlt className="icons" />
        Calendar
      </a>
      <Link to="/files">
        <ImFilesEmpty className="icons" />
        Files
      </Link>
      <a href="/">
        <BsThreeDots className="icons" />
      </a>
      <div style={{ marginTop: "60px" }}>
        <a href="/">
          <AiTwotoneAppstore className="icons" />
          Apps
        </a>
        <a href="/">
          <BiHelpCircle className="icons" />
          Help
        </a>
      </div>
    </div>
  );
};

export default sidenav;
