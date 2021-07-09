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
    <>
      <div class="sidebar">
        <Link to="/assignment">
          <GiSchoolBag className="icons" />
          Assignment
        </Link>
        <Link to="/welcome">
          <SiMicrosoftteams className="icons" />
          Teams
        </Link>
        <Link to="/calendar">
          <FaRegCalendarAlt className="icons" />
          Calendar
        </Link>
        <Link to="/chat">
          <BsChatDots className="icons" />
          Chat
        </Link>
        <Link to="/files">
          <ImFilesEmpty className="icons" />
          Files
        </Link>
        <Link to="/">
          <BsThreeDots className="icons" />
        </Link>
        <div style={{ marginTop: "8rem" }}>
          <Link to="/appsPages">
            <AiTwotoneAppstore className="icons" />
            Apps
          </Link>
          <Link to="/help">
            <BiHelpCircle className="icons" />
            Help
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
