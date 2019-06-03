import React from 'react'
import './team.scss';

const Team = ({ ourteam }) => {
  return (
    <div className="container">

      <div className="team__container">
        <div className="team__title">
          <h2>{ourteam.title}</h2>
        </div>
        <div className="team__container--image">
          <img src="./img/iban-malo-9.jpg" alt="team" />
        </div>
        <div className="team__text--container">
          <p>{ourteam.body}</p>

        </div>
      </div>



    </div>
  )
}

export default Team

