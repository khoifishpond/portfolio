import React from 'react'
import './header.css'
import CTA from './CTA'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Khoi!</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <Socials />
      </div>
    </header>
  )
}

export default Header