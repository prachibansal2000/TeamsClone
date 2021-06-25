import React from "react";
import "../CSS/Teams.css";
import { FiSettings } from "react-icons/fi";
import { AiOutlineTeam } from "react-icons/ai";
import { Button } from "react-bootstrap";

const Teams = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="headTeams">Teams</div>
        <div className="settingButton">
          <FiSettings className="settings" />
          <a href="https://video-chat-pb.netlify.app/">
            <Button className="teamsButton">
              <AiOutlineTeam /> Join or create team
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Teams;
