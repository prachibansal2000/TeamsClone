import React from "react";
import "../CSS/Teams.css";
import { FiSettings } from "react-icons/fi";
import { AiOutlineTeam } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Teams = () => {
  return (
    <div>
      <div className="headTeams">Teams</div>
      <Button className="teamsButton">
        <Link to="/videochat" target="blank" style={{ color: "black" }}>
          <AiOutlineTeam />
          <span className="showText">Join meeting</span>
          <span className="hiddenText">Join or create team</span>
        </Link>
      </Button>
      <FiSettings className="settings" />
    </div>
  );
};
export default Teams;
