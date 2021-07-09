import React from "react";
import "../CSS/Teams.css";
import { FiSettings } from "react-icons/fi";
import { AiOutlineTeam } from "react-icons/ai";
import { Button } from "react-bootstrap";

const Teams = () => {
  return (
    <div>
      <div className="headTeams">Teams</div>
      <Button className="teamsButton">
        <a style={{ color: "black" }} href="https://videocallpb.netlify.app">
          <AiOutlineTeam />
          <span className="showText">Join meeting</span>
          <span className="hiddenText">Join or create team</span>
        </a>
      </Button>
      <FiSettings className="settings" />
    </div>
  );
};
export default Teams;
