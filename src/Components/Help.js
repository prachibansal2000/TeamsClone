import React from "react";
import "../CSS/Help.css";

const Help = () => {
  return (
    <div className="container helpBox">
      <ul className="helpList">
        <li>Topics</li>
        <li>Training</li>
        <li>What's new</li>
        <hr />
        <li>Suggest a feature</li>
        <li>Ask the community</li>
      </ul>
    </div>
  );
};

export default Help;
