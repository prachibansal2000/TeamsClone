import "../CSS/SideNavBar.css";
import { Link } from "react-router-dom";
import { BsThreeDots, BsChatDots } from "react-icons/bs";
import { SiMicrosoftteams } from "react-icons/si";
import { FaRegCalendarAlt } from "react-icons/fa";
import { ImFilesEmpty } from "react-icons/im";
import { AiTwotoneAppstore } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { GiSchoolBag } from "react-icons/gi";

const Sidenav = () => {
  return (
    <div class="sidebar">
      <Link to="/">
        <BsChatDots className="icons" />
        Chat
      </Link>
      <Link to="/assignment">
        <GiSchoolBag className="icons" />
        Assignment
      </Link>
      <a href="/">
        <SiMicrosoftteams className="icons" />
        Teams
      </a>
      <a href="/calendar">
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
      <div style={{ marginTop: "8rem" }}>
        <a href="/appsPages">
          <AiTwotoneAppstore className="icons" />
          Apps
        </a>
        <a href="/help">
          <BiHelpCircle className="icons" />
          Help
        </a>
      </div>
    </div>
  );
};

export default Sidenav;
