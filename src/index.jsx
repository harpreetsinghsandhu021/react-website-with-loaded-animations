import React from "react";
import Loadable from "react-loadable";
import "./styles/home.scss";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./app";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
