import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("Dashboar");
  };
  return (
    <div>
      <h1><p>Hola Pagina Principal!!!</p></h1>
      <br />
      <button onClick={handleClick}>Dashboar</button>
    </div>
  );
};

export default Home;
