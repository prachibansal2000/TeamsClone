import { WindowsFilled } from "@ant-design/icons";
import React, { useState } from "react";
import "../CSS/Signup.css";

function Sign() {
  const [clicked, setClicked] = useState("");

  localStorage.setItem("clicked", clicked);

  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <div className="box col-12">
        <p className="topHeader">
          Now use Microsoft Teams with family and friends to call, chat, and
          make plans.
        </p>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 md-6 xs-12">
            <p className="meet">
              <br />
              <br />
              <span className="loginTeams">Microsoft Teams</span>
              Meet, chat, call, and collaborate in just one place.
            </p>
            <br />
            <button className="btn1">
              <a href="https://www.microsoft.com/en-in/microsoft-teams/download-app#desktopAppDownloadregion">
                Download now
              </a>
            </button>
            <br />
            <button
              type="submit"
              onClick={(e) => {
                setClicked(e.target.type);
                window.location.reload();
              }}
              className="btn2"
            >
              Sign in
            </button>
          </div>
          <div className="col-lg-4 md-6 xs-12">
            <img
              className="teamsImage"
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWDeEK?ver=e1e6&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true"
              alt="A family video call on teams"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
