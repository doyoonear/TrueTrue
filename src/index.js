import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import Reset from "./Styles/reset";

ReactDOM.render(
  <>
    <Reset /> <Routes />
  </>,
  document.getElementById("root")
);
