import React from 'react'
import './services.scss';

const index = ({ tratement }) => {

  console.log(tratement)

  return (
    <div className="container is-fluid services">
      <div className="container">
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
