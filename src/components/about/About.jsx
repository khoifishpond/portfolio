import React from 'react'
import {BsBook, BsFolder} from 'react-icons/bs'
import {GiDiploma} from 'react-icons/gi'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsBook className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years</small>
            </article>

            <article className='about__card'>
              <BsFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>

            <article className='about__card'>
              <GiDiploma className='about__icon'/>
              <h5>CSU Long Beach</h5>
              <small>B.S. - Management Information Systems</small>
            </article>
          </div>

          <p>
            I recently made the decision to transition out of the health industry 
            where I was a Service Account Manager at Optum, a Pharmacy Benefits 
            Manager. I have since graduated Turing's School of Software & Design 
            with a focus on backend engineering, providing me the pleasure of meeting
            so many wonderful developers across the industry within the country. 
            With a background in Ruby on Rails, Python, PostgreSQL, and React, I'm
            so excited to see where my journey takes me. I hope that involves you!
          </p>

          <a href='#contact' className='btn btn-primary about-btn'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About