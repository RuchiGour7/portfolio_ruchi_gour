import React from "react";
import "./style.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <p className="about-me-heading">ABOUT ME</p>
      <div className="about-main-container">
        <p className="about-me-text">
          Know Me More
          {/* <div className="line"></div> */}
        </p>
      </div>
      <div className="about-me-sections">
        <div className="about-me-intro-description">
          <p className="about-me-text-intro">
            I'm <span className="naming-text-about-me">RUCHI GOUR </span>, a Web
            Developer
          </p>{" "}
          <br></br>
          <p className="about-me-subheading">
            {" "}
            I am FrontEnd De with over 2 years of experience in creating
            user-friendly and visually appealing web applications. Skilled in
            ReactJS, JavaScript, HTML, and CSS, I specialize in building
            responsive and high-performance interfaces. I have worked on various
            projects, from designing interactive components to integrating APIs.
            My focus is on innovation, collaboration, and delivering seamless
            digital experiences. Always eager to learn and adapt, I strive to
            enhance web applications with modern technologies.
          </p>
        </div>
        <div className="about-me-naming">
          <p className="about-me-short-info">
            Name : <span>Ruchi Gour</span>
          </p>
          <p className="about-me-short-info">
            Email : <span>ruchidevfreelancer07@gmail.com</span>
          </p>
          <p className="about-me-short-info">
            Age : <span>33</span>
          </p>
          <p className="about-me-short-info">
            From : <span>Bhopal Madhya Pradesh</span>
          </p>

          <button className="download-buttton-cv">Download CV </button>


        </div>
      </div>
      <div className="about-me-work-experience">
        <div className="experience-container">
          <p className="number-experience">2+</p>
          <p className="experience-line">Years of Experience  </p>
        </div>
        <div className="project-container" >
          <p className="number-projects">
            100+
          </p>
          <p className="projects-text">Projects Done</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
