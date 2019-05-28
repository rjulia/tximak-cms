import React from 'react'
import "./OutstandingHeader.sass"

const OutstandingHeader = props => {
  return (
    <div className="is-flex  outHedaer">
      <div className="column">Tu peluqueria en Zumaia</div>
      <div className="column has-text-centered"><span>Llámanos al:</span><span className="has-text-weight-semibold"> 943 86 04 49</span> </div>
      <div className="column has-text-right p-r-30">ES | EU</div>
    </div>
  )
}


export default OutstandingHeader
