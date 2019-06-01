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

              return (
                <div key={idx} className={`column is-half services__${idx}`}>
                  <i className="services__icon">III</i>
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
