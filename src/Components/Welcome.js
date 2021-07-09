import React from "react";
import "../CSS/welcome.css";
import ParticlesBg from "particles-bg";

const Welcome = () => {
  return (
    <>
      <div className="welcomeBox">
        <h2 className="welcomeText">Welcome to Teams!</h2>
      </div>
      <ParticlesBg color="#ffffff" type="polygon" bg={true} />
    </>
  );
};
export default Welcome;
//center and style
