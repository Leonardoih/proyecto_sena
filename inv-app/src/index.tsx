import ReactDOM from "react-dom";
//import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";
import "./inventario.scss";
import "./mediaQuery.scss";
import "./tablas.scss";
import Router from "./Routes/router";

//import "./btn_botton";

ReactDOM.render(
  <div className="container">
    <Router></Router>
  </div>,
  document.getElementById("root")
);
