import React from "react";
import ReactDOM from "react-dom";
import "./Main.css";
import App from "./components/Video/App";
import BrowserUnsupported from "./components/BrowserUnsupported/BrowserUnsupported";
import DailyIframe from "@daily-co/daily-js";

ReactDOM.render(
  DailyIframe.supportedBrowser().supported ? <App /> : <BrowserUnsupported />,
  document.getElementById("root")
);
