import React from 'react'
import './style.css'
import Github from '../../image/github-icon.gif'

const Header = () => {
  const handleScroll = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='header-container'>
      <div className='header-logo'> Web Developer</div>
      <div className='header-links'>
        <a onClick={() => handleScroll('herosection')} className='header-tabs'>
          Home
        </a>
        <a onClick={() => handleScroll('about')} className='header-tabs'>
          About
        </a>
        <a onClick={() => handleScroll('services')} className='header-tabs'>
          What I Do
        </a>
        <a onClick={() => handleScroll('resume')} className='header-tabs'>
          Resume
        </a>
        <a onClick={() => handleScroll('contact')} className='header-tabs'>
          Contact
        </a>
        <a onClick={() => handleScroll('mywork')} className='header-tabs'>
          My Work
        </a>
      </div>
      <div className='header-icons'>
        <a
          href='https://www.linkedin.com/in/ruchi-gour-014649335/'
          target='_blank'
          rel='noopener noreferrer'
          className='dribbble-icons'
        >
          <img
            width='25px'
            height='25px'
            src='https://img.icons8.com/papercut/120/linkedin.png'
            alt='linkedin'
          />
        </a>
        <a
          href='https://github.com/RuchiGour7'
          target='_blank'
          rel='noopener noreferrer'
          className='dribbble-icons'
        >
          <img width='18px' height='18px' src={Github} alt='linkedin' />
        </a>
      </div>
    </div>
  )
}

export default Header
