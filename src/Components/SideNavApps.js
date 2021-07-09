import React from "react";
import "../CSS/sideNavApps.css";
import {
  SiMicrosoftonedrive,
  SiMicrosoftonenote,
  SiMicrosoftoutlook,
  SiMicrosoftpowerpoint,
  SiMicrosoftword,
  SiMicrosoftteams,
  SiMicrosoftsharepoint,
} from "react-icons/si";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsGrid3X3Gap } from "react-icons/bs";

const sideNavApp = () => {
  return (
    <div className="container sideNavApp">
      <div className="row">
        <Link to="/">
          <BsGrid3X3Gap className="sideicon" />
        </Link>
        <a className="ms365" target="blank" href="https://www.office.com">
          Microsoft 365 <FaArrowRight />
        </a>
      </div>
      <div className="allsideicons">
        <p>Apps</p>
        <div className="row sidenavicons">
          <div className="col-6">
            <a
              target="blank"
              href="https://www.microsoft.com/en-gb/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook"
            >
              <SiMicrosoftoutlook style={{ color: "#0072c6" }} />
              <span>Outlook</span>
            </a>
          </div>
          <div className="col-6">
            <a
              target="blank"
              href="https://www.microsoft.com/en-gb/microsoft-365/onedrive/online-cloud-storage"
            >
              <SiMicrosoftonedrive style={{ color: "#094ab2" }} />
              <span>OneDrive</span>
            </a>
          </div>
        </div>
        <div className="row sidenavicons">
          <div className="col-6">
            <a
              target="blank"
              href="https://www.microsoft.com/en-gb/microsoft-365/word"
            >
              <SiMicrosoftword style={{ color: "#2b579a" }} />
              <span>Word</span>
            </a>
          </div>
          <div className="col-6">
            <a
              target="blank"
              href="https://www.microsoft.com/en-gb/microsoft-365/excel"
            >
              <RiFileExcel2Fill style={{ color: "#217346" }} />
              <span>Excel</span>
            </a>
          </div>
        </div>
        <div className="row sidenavicons">
          <div className="col-6">
            <a
              target="blank"
              href="https://www.microsoft.com/en-gb/microsoft-365/powerpoint"
            >
              <SiMicrosoftpowerpoint style={{ color: "#d24726" }} />
              <span>PowerPoint</span>
            </a>
          </div>
          <div className="col-6">
            <a
              target="blank"
              href="https://www.office.com/launch/onenote?auth=2"
            >
              <SiMicrosoftonenote style={{ color: "#80397b" }} />
              <span>OneNote</span>
            </a>
          </div>
        </div>
        <div className="row sidenavicons">
          <div className="col-6">
            <a
              target="blank"
              href="https://www.microsoft.com/en-gb/microsoft-365/sharepoint/collaboration"
            >
              <SiMicrosoftsharepoint style={{ color: "#038387" }} />
              <span>SharePoint</span>
            </a>
          </div>
          <div className="col-6">
            <a
              target="blank"
              href="https://www.microsoft.com/en-in/microsoft-teams/group-chat-software"
            >
              <SiMicrosoftteams style={{ color: "#464775" }} />
              <span>Teams</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sideNavApp;
