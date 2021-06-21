import "./App.css";
import { Switch, Route } from "react-router-dom";
import Assignment from "./Components/Assignment";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/MainComponent";
import Files from "./Components/Files";

function App() {
  return (
    <div className="App">
      <Main />
      <Switch>
        <Route path="/assignment">
          <Assignment />
        </Route>
        <Route path="/file">
          <Assignment />
        </Route>
        <Route path="/files">
          <Files />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
