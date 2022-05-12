import React from 'react'
import CTA from './CTA'
import Socials from './Socials'
import Me from '../../images/me.jpg'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi hello, I'm</h5>
        <h1>Khoi!</h1>
        <div className='me'>
          <img src={Me} alt='Hi hello!' />
        </div>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <Socials />
      </div>
    </header>
  )
}

export default Header