import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Assignment from "./Components/Assignment";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/MainComponent";
import Files from "./Components/Files";
import SideNavApp from "./Components/SideNavApps";
import AppsPage from "./Components/AppsPage";
import Sign from "./Components/SignUp";
import Help from "./Components/Help";
import Calendar from "./TeamsCalendar/calendar_app";
import Chat from "./Chat/src/App";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import Welcome from "./Components/Welcome";
import VideoChat from "./Video_chat/src/components/App/App";

function App() {
  if (!localStorage.getItem("clicked")) return <Signup />;
  if (!localStorage.getItem("email")) return <Login />;
  if (!localStorage.getItem("password")) return <Login />;

  return (
    <div className="App">
      <Main />
      <Switch>
        <Route path="/videochat">
          <VideoChat />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/sign">
          <Sign />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/sidenavapp">
          <SideNavApp />
        </Route>
        <Route path="/assignment">
          <Assignment />
        </Route>
        <Route path="/files">
          <Files />
        </Route>
        <Route path="/appsPages">
          <AppsPage />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Redirect to="/welcome" />
        {/* welcome is open when there is no path defined */}
      </Switch>
    </div>
  );
}

export default App;
