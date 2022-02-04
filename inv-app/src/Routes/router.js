import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Inventario from "./../views/Inventario";
import Reportes from "./../views/Reportes";
import Login from "./../views/Login";
import Desktop from "./../components/Desktop"
import Laptop from "./../components/Laptop"
import Otros from "./../components/Otros"

const router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="inventario" element={<Inventario />}>
            <Route index element={<Laptop />}></Route>
            <Route path="Laptop" element={<Laptop />} />
            <Route path="Desktop" element={<Desktop />} />
            <Route path="Otros" element={<Otros />} />
            
          </Route>
          <Route path="Reportes" element={<Reportes />}></Route>
          <Route path="Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default router;
