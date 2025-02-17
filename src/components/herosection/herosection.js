import React from "react";
import DeveloperImage from "../../image/developer-image.jpg";
import "./style.css";
import Header from "../header/header";

const Herosection = () => {
  return (
    <div className="image-container">
      <img src={DeveloperImage} className="developer-image" alt="Developer" />
      <div className="overlay"></div>
      <Header />
      <h1 className="text">Welcome</h1>
      <p className="herosection-subheading">I am React JS Developer</p>
      <button className="hire-button">Hire Me</button>
    </div>
  );
};

export default Herosection;
