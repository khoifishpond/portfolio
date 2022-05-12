import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter, BsInstagram} from 'react-icons/bs'


const Socials = () => {
  return (
    <div className='socials'>
      <a href='https://linkedin.com/in/khoifishpond' target='_blank'><BsLinkedin /></a>
      <a href='https://github.com/khoifishpond' target='_blank'><BsGithub /></a>
      <a href='https://twitter.com/khoifishpond' target='_blank'><BsTwitter /></a>
      <a href='https://instagram.com/khoifishpond' target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default Socials