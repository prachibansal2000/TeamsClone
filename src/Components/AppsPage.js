import React from "react";
import "../CSS/appspages.css";
const AppsPage = () => {
  return (
    <div className="appsPages">
      <div className="appsText">
        <span className="appsMainHeading">Get more done with apps!</span>
        <br />
        <span className="appsSubHeading">
          Simplify workflows, share data, or find new ways to work smarter
          together.
        </span>
      </div>
      <div className="appsImages">
        <div className="down">
          <img
            alt="edcast"
            src="https://cxcs.cdn.office.net/static/public/teamsuserlifecycle/neutral/9b891351-5553-464f-900e-5eb2db86a505/3d6618469c7db95e3bde2f099d80ad1698bdb345.png"
          />
        </div>
        <div className="up up1">
          <img
            alt="buncee"
            src="https://cxcs.cdn.office.net/static/public/teamsuserlifecycle/neutral/7e4fac62-ec3c-40db-b16d-21938778fa59/701eb1ae344abf7d00e7223ec093b80b89b240a6.png"
          />
        </div>

        <div className="down">
          <img
            alt="edcast"
            src="https://cxcs.cdn.office.net/static/public/teamsuserlifecycle/neutral/2a7444c1-73d5-47ed-8dcb-7b06607e1482/522db086d92be327289734fbe59b7339a50bf304.png"
          />
        </div>
        <div className="up">
          <img
            alt="edcast"
            src="https://cxcs.cdn.office.net/static/public/teamsuserlifecycle/neutral/f41fb6d9-a230-4d5e-a563-f39970598458/bb0fa9b6273c0a4eb568e496b5f024449a99e3f4.png"
          />
        </div>
      </div>
    </div>
  );
};
export default AppsPage;
