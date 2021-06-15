import React from "react";
import "../CSS/Login.css";

function Sign() {
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
          <div className="col-lg-6">
            <p className="meet">
              <br />
              <br />
              <span className="teams">Microsoft Teams</span>
              Meet, chat, call, and collaborate in just one place.
            </p>
            <br />
            <button className="btn1">Sign up for free</button>
            <br />
            <button className="btn2">Sign in</button>
          </div>
          <div className="col-lg-4">
            <img
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWDeEK?ver=e1e6&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true"
              alt="A family video call on teams"
              width="660px"
              height="442px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;