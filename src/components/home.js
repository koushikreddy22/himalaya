import React from "react";
// import logo from "../hlogo.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  function handleClick() {
    if (localStorage.getItem("blocks")) {
      console.log("false");
    } else {
      localStorage.setItem("blocks", JSON.stringify({}));
    }
    navigate("/blocks");
  }
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1 className="title">HIMALAYA HOSTELS</h1>
      <img
        className="logo"
        alt="logo"
        src="https://i.ibb.co/xmg7qTX/hlogo.png"
      />
      <button className="login" onClick={handleClick}>
        LOGIN
      </button>
    </div>
  );
};
export default Home;
