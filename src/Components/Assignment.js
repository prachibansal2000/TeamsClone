import React from "react";
import "../CSS/assignment.css";
const Assignment = () => {
  return (
    <div className="page">
      <img
        className="assignment"
        alt="assignment"
        src="https://res-1.cdn.office.net/eduassignmentsui/assets/6pu4deme.backend-provisioning.svg"
      />
      <p className="assignmentText">
        You need a class to start using assignments!
      </p>
      <p>
        <u>
          <a
            target="blank"
            style={{ color: "black" }}
            href="https://support.microsoft.com/en-us/topic/create-a-class-team-in-microsoft-teams-fae422eb-58b7-4431-9ff2-a4b9b6ae7c5b?ui=en-us&rs=en-gb&ad=gb"
          >
            Teachers: start here.
          </a>
        </u>
      </p>
      <p className="students">
        Students: ask your teacher to create the class for you.
      </p>
    </div>
  );
};
export default Assignment;
