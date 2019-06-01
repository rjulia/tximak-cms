import React from 'react'
import "./Logo.scss";
const Logo = ({ logo }) => {
  console.log(logo)
  const imageSrc = !!logo.childImageSharp ? logo.childImageSharp.fluid.src : logo
  return (
    <div className="logo__container">
      <img src={imageSrc} alt="logo" />
    </div>
  )
}

export default Logo
