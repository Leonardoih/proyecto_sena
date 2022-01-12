import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Dashboar from "./Pages/Dashboar";
import Inventario from "./components/Inventario/Inventario";
import Report from "./components/Report/Report";
import "./index.css";
import "./Main.js";

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboar/*" element={<Dashboar />}>
          <Route path="Inventario" element={<Inventario />}/>
          <Route path="Report" element={<Report />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
