import React from 'react'
import {BsArrowUp} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__back'><BsArrowUp /></a>
      <div className="footer__copyright">
        <small>khoifishpond</small>
      </div>
    </footer>
  )
}

export default Footer