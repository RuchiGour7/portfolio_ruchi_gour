import React from "react";
import "./style.css";
import Twitter from "../../image/twitter.png";
import Facebook from "../../image/facebook.png";

const Header = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="header-container">
      <div className="header-logo"> Web Developer</div>
      <div className="header-links">
        <a onClick={() => handleScroll("herosection")} className="header-tabs">
          Home
        </a>
        <a onClick={() => handleScroll("about")}  className="header-tabs">
          About
        </a>
        <a onClick={() => handleScroll("services")} className="header-tabs">What I Do</a>
        <a onClick={() => handleScroll("resume")} className="header-tabs">
          Resume
        </a>
        <a onClick={() => handleScroll("contact")}className="header-tabs">
          Contact
        </a>
      </div>
      <div className="header-icons">
        <img
          src={Twitter}
          className="dribbble-icons"
          width={"18px"}
          height={"18px"}
        />
        <img
          src={Facebook}
          className="dribbble-icons"
          width={"18px"}
          height={"18px"}
        />
        <img
          src={Facebook}
          className="dribbble-icons"
          width={"18px"}
          height={"18px"}
        />
      </div>
    </div>
  );
};

export default Header;
