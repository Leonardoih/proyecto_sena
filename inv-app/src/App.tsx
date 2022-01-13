import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Laptop from "./Pages/Laptop";
import Desktop from "./Pages/Desktop";
import Otros from "./Pages/Otros";
import ControlPanel from "./Pages/ControlPanel";
import  './Main.js'

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="navbar">
            <Navbar></Navbar>
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/Laptop" element={<Laptop />}></Route>
            <Route path="/Desktop" element={<Desktop />}></Route>
            <Route path="/Otros" element={<Otros />}></Route>
            <Route path="/ControlPanel" element={<ControlPanel />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
