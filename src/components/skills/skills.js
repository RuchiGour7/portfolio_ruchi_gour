import React from "react";
import "./style.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <p className="skill-heading">My Skills</p>
      <div className="skills-heading-content">
        <h1 className="skills-data-left">Web Design <span className="percentage">80%</span></h1>
        <h1 className="skills-data-right">HTML/CSS <span className="percentage-right">80%</span></h1>
      </div>
      <div className="skills-progress-card">
        <div className="card-web">
          <div className="progress-bar"></div>
        </div>
        <div className="card-design">
          <div className="progress-bar"></div>
        </div>
      </div>
      <div className="skills-heading-content">
        <h1 className="skills-data-left">Javascript <span className="percentage">80%</span></h1>
        <h1 className="skills-data-right">React JS<span className="percentage-right">80%</span></h1>
      </div>
      <div className="skills-progress-card">
        <div className="card-web">
          <div className="progress-bar"></div>
        </div>
        <div className="card-design">
          <div className="progress-bar"></div>
        </div>
      </div>
      <div className="skills-heading-content">
        <h1 className="skills-data-left">Material UI <span className="percentage">80%</span></h1>
        <h1 className="skills-data-right">Bootstrape<span className="percentage-right">80%</span></h1>
      </div>
      <div className="skills-progress-card">
        <div className="card-web">
          <div className="progress-bar"></div>
        </div>
        <div className="card-design">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
