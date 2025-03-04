import React from 'react'
import './style.css'

const MyWork = () => {
  return (
    <>
      <div className='mywork-container'>
        <div className='mywork-bottom-heading'>PORTFOLIO</div>
        <div className='mywork-main-container-heading'> My Work</div>
        <div className="mywork-cards">
        <div className="mywork-data">
          <button className="year">Ecommerce Project</button>
          <p className="degree">Ecommerce Website</p>
          <p className="university">Built with ReactJS, Redux, HTML, CSS Grid</p>
          <p className="college">View Project - <span><a href="https://glowing-snickerdoodle-21a927.netlify.app/"  target="_blank" className="project-link" rel="noreferrer">Project Link</a>
          </span></p>

        </div>
        <div className="mywork-data">
          <button className="year">Blogs Project</button>
          <p className="degree">Blogs Website   </p>
          <p className="university">Built with ReactJS, Redux, Material UI</p>
          <p className="college">View Project - <span><a href="https://cerulean-pavlova-5cf478.netlify.app/"  target="_blank" className="project-link" rel="noreferrer">Project Link</a>
          </span></p>

        </div>
      </div>
      </div>
    </>
  )
}
export default MyWork
