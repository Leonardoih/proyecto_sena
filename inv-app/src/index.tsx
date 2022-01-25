import ReactDOM from "react-dom";
import "./index.scss";
import "./mediaQuery.scss";
import Router from "./Routes/router";
import "./btn_botton";

ReactDOM.render(
  <div className="container">
    <Router></Router>
  </div>,
  document.getElementById("root")
);
