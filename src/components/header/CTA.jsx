import React from 'react'
import Resume from '../../images/Khoi Nguyen Resume 2022.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} download className='btn'>My Resume</a>
      <a href='#contact' className='btn btn-primary'>Get in Touch!</a>
    </div>
  )
}

export default CTA