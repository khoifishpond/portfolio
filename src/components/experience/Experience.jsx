import React from 'react'
import {DiHtml5, DiCss3, DiJavascript1, DiReact, DiRubyRough, DiPython, DiPostgresql} from 'react-icons/di'
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
              <DiHtml5 className='experience__details-icon'/>
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <DiCss3 className='experience__details-icon'/>
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <DiJavascript1 className='experience__details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <DiReact className='experience__details-icon'/>
              <h4>React</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <DiRubyRough className='experience__details-icon'/>
              <h4>Ruby</h4>
            </article>
            <article className='experience__details'>
              <DiPython className='experience__details-icon'/>
              <h4>Python</h4>
            </article>
            <article className='experience__details'>
              <DiPostgresql className='experience__details-icon'/>
              <h4>PostgreSQL</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience