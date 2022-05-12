import React from 'react'
import IMG1 from '../../images/original.png'
import IMG2 from '../../images/pusheencat.png'
import IMG3 from '../../images/codercat2.png'
import './projects.css'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Sweater Weather',
    github: 'https://github.com/khoifishpond/sweater-weather'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Viewing Party',
    github: 'https://github.com/khoifishpond/viewing_party'
  },
  {
    id: 2,
    image: IMG3,
    title: 'Little Esty Shop',
    github: 'https://github.com/khoifishpond/little-esty-shop'
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Some Of My Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='projects__item'>
                <div className="projects__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="projets__item-cta">
                  <a href={github} className='btn btn-primary projects-btn' target='_blank'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects