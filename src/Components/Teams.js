import React from "react";
import "../CSS/Teams.css";
import { FiSettings } from "react-icons/fi";
import { AiOutlineTeam } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Teams = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="headTeams">Teams</div>
        <div className="settingButton">
          <FiSettings className="settings" />
          <Button className="teamsButton">
            <AiOutlineTeam /> Join or create team
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Teams;
