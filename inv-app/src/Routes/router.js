import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Inventario from './../views/Inventario';
import Reportes from './../views/Reportes';
import Login from './../views/Login';
import Header from "../components/Header/Header"

const router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/inventario" element={<Inventario />}></Route>
          <Route path="/Reportes" element={<Reportes />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default router;
