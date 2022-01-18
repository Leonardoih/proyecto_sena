import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import ReactDOM from "react-dom";
import Home from "./Routes/Home";
import Reportes from "./Routes/Reportes";
import Sesion from "./Routes/Sesion";
import Inventario from "./Routes/Inventario";
import Laptop from "./components/Laptop";
import Desktop from "./components/Desktop";
import Otros from "./components/Otros";

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <div >
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route index element={<Home />} />
        <Route path="Reportes" element={<Reportes />}></Route>
        <Route path="Sesion" element={<Sesion />}></Route>
        <Route path="Inventario/*" element={<Inventario />}>
            <Route index element={<Laptop />}></Route>
            <Route path="Laptop" element={<Laptop />} />
            <Route path="Desktop" element={<Desktop />} />
            <Route path="Otros" element={<Otros />} />
          </Route>
      </Routes>
    </div>
  </BrowserRouter>,

  document.getElementById("root")
);
