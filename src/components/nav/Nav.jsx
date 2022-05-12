import {React, useState} from 'react'
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {BsCode, BsCodeSlash} from 'react-icons/bs'
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsCode /></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><BsCodeSlash /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMail /></a>
    </nav>
  )
}

export default Nav