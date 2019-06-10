import React from 'react'
import './services.scss';
import { Link } from 'gatsby'

const index = ({ tratement }) => {


  return (
    <div className="container is-fluid services">
      <div className="container">
        <button className="btn">
          <Link className="navbar-item" to="/services">
            VER TODOS SERVICIOS
          </Link>
        </button>
        <div className="columns is-multiline">
          {
            Object.keys(tratement).map((key, idx) => {
              const imageSrc = !!tratement[key].image.childImageSharp ? tratement[key].image.childImageSharp.fluid.src : tratement[key].image
              return (
                <div key={idx} className={`column is-half services__${idx}`}>
                  <img src={imageSrc} alt="" className="services__icon" />
                  <h2 className="services__title">{tratement[key].heading}</h2>
                  <h3 className="services__text">{tratement[key].subHeading}</h3>

                </div>
              )

            })}

        </div>
      </div>
    </div>
  )
}

export default index
