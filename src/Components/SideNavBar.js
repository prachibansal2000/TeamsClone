import "../CSS/SideNavBar.css";
import { BsBellFill, BsThreeDots, BsChatDots } from "react-icons/bs";
import { SiMicrosoftteams } from "react-icons/si";
import { FaRegCalendarAlt } from "react-icons/fa";
import { ImFilesEmpty } from "react-icons/im";
import { AiTwotoneAppstore } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
const sidenav = () => {
  return (
    <div class="sidebar">
      <a>
        <BsChatDots className="icons" />
        Chat
      </a>
      <a>
        <BsBellFill className="icons" />
        Activity
      </a>
      <a>
        <SiMicrosoftteams className="icons" />
        Teams
      </a>
      <a>
        <FaRegCalendarAlt className="icons" />
        Calendar
      </a>
      <a>
        <ImFilesEmpty className="icons" />
        Files
      </a>
      <a>
        <BsThreeDots className="icons" />
      </a>
      <div style={{ marginTop: "60px" }}>
        <a>
          <AiTwotoneAppstore className="icons" />
          Apps
        </a>
        <a>
          <BiHelpCircle className="icons" />
          Help
        </a>
      </div>
    </div>
  );
};

export default sidenav;
