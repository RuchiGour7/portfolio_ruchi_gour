import React from "react";
import "./style.css";
import Skills from "../skills/skills";

const Resume = () => {
  return (
    <div className="resume-container">
      <p className="resume-back-heading">SUMMARY</p>
      {/* <div className="resume-main-container"> */}
        <p className="resume-main-container-heading">Resume</p>
        {/* <div className="line"></div> */}
      {/* </div> */}

      <div className="resume-cards-heading">
        <h1 className="main-heading">My Education</h1>
        <h1 className="main-heading-experience">My experience</h1>
      </div>
      <div className="resume-cards">
        <div className="cards-education">
          <button className="year">2009 - 2013</button>
          <p className="degree">Computer Science</p>
          <p className="university">Rajeev Gandhi Prodhoyik University</p>
          <p className="college">Technocrates Institute of Technology & Science</p>

        </div>
        <div className="cards-experience">
          <button className="year">2022 - Present</button>
          <p className="degree">FrontEnd Developer</p>
          <p className="university">React JS </p>
          <p className="college">2+ years of experience working as a web developer</p>
        </div>
      </div>
      <div className="resume-cards">
        <div className="cards-education">
          <button className="year">2008 - 2009</button>
          <p className="degree">XII STANDARD</p>
          <p className="university">Madhya Pradesh Board</p>
          <p className="college">Canyon H Sec School ,Bhopal</p>
        </div>
        <div className="cards-experience">
          <button className="year">2021=2022</button>
          <p className="degree">Software Trainee Engineer FrontEnd Developer</p>
          <p className="university">Audacious Technology Pvt Ltd </p>
          <p className="college">2+ years of experience working as a web developer</p>
        </div>
      </div>
      <Skills/>
 </div>
 
  );
};

export default Resume;
