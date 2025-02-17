import React from 'react';
import "./style.css";
import Design from "../../image/design.png";
import Git from "../../image/git.png";
import ReactEasy from "../../image/react.png";
import ResponsiveWeb from "../../image/responsive-web.png";
import Redux from "../../image/redux.png";

const Services = () => {
  return (
    <div className='services-container'>
      <p className='service-bottom-heading'>SERVICES</p>
      <p className="services-main-container-heading">What I do ?</p>
      {/* <div className="line"></div> */}
      <div className='services-chart'>
        <div className='service-chart-left'>
          <div className='icon-container-service'>
            <img src={ReactEasy} className='design-icon' width={"30px"} height={"30px"} />
          </div>
          <div className='service-chart-icon-data'>
            <p className='service-chart-icon-heading'>Front End Development</p>
            <p className='service-chart-icon-subheading'>Frontend development focuses on building interactive, responsive, and user-friendly web interfaces using React.js, HTML, CSS, and JavaScript.</p>
          </div>
        </div>
        <div className='service-chart-right'>
          <div className='icon-container-service'>
            <img src={Design} className='design-icon' width={"30px"} height={"30px"} />
          </div>
          <div className='service-chart-icon-data'>
            <p className='service-chart-icon-heading'>Single Page Application</p>
            <p className='service-chart-icon-subheading'>A Single Page Application (SPA) loads a single HTML page and dynamically updates content without full page reloads. It enhances speed, performance, and user experience.</p>
          </div>
        </div>


        {/* Material ui ,Bootstrape,css,tailwind */}
        <div className='service-chart-left'>
          <div className='icon-container-service'>
            <img src={Design} className='design-icon' width={"30px"} height={"30px"} />
          </div>
          <div className='service-chart-icon-data'>
            <p className='service-chart-icon-heading'>Material UI ,Tailwind</p>
            <p className='service-chart-icon-subheading'>Material UI and Tailwind CSS are popular libraries for building modern, responsive, and customizable UI components in React.js.</p>
          </div>
        </div>
        <div className='service-chart-right'>
          <div className='icon-container-service'>
            <img src={Git} className='design-icon' width={"30px"} height={"30px"} />
          </div>
          <div className='service-chart-icon-data'>
            <p className='service-chart-icon-heading'>Version Control & Deployment </p>
            <p className='service-chart-icon-subheading'>Version control tracks code changes using Git, while deployment automates releasing applications to production. Tools like GitHub, GitLab, and Netlify streamline the process.</p>
          </div>
        </div>



        {/*  */}
        <div className='service-chart-left'>
          <div className='icon-container-service'>
            <img src={ResponsiveWeb} className='design-icon' width={"30px"} height={"30px"} />
          </div>
          <div className='service-chart-icon-data'>
            <p className='service-chart-icon-heading'>Responsive Web Design
            </p>
            <p className='service-chart-icon-subheading'>Responsive Web Design ensures a website adapts to different screen sizes for a seamless user experience. It uses flexible layouts, media queries, and fluid grids.</p>
          </div>
        </div>
        <div className='service-chart-right'>
          <div className='icon-container-service'>
            <img src={Redux} className='design-icon' width={"30px"} height={"30px"} />
          </div>
          <div className='service-chart-icon-data'>
            <p className='service-chart-icon-heading'>State Management (Redux)</p>
            <p className='service-chart-icon-subheading'>State management handles data flow in applications for better performance and scalability. Tools like Redux, Zustand, and Recoil help manage global state efficiently in React apps.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
