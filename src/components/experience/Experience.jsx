import React from 'react'
import {SiHtml5, SiCss3, SiJavascript, SiReact, SiRubyonrails, SiPython, SiDjango, SiPostgresql} from 'react-icons/si'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiHtml5 className='experience__details-icon'/>
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <SiCss3 className='experience__details-icon'/>
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <SiReact className='experience__details-icon'/>
              <h4>React</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiRubyonrails className='experience__details-icon'/>
              <h4>Ruby on Rails</h4>
            </article>
            <article className='experience__details'>
              <SiPython className='experience__details-icon'/>
              <h4>Python</h4>
            </article>
            <article className='experience__details'>
              <SiDjango className='experience__details-icon'/>
              <h4>Django</h4>
            </article>
            <article className='experience__details'>
              <SiPostgresql className='experience__details-icon'/>
              <h4>PostgreSQL</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience