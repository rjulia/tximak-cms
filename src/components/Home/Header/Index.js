import React from 'react'
import "./OutstandingHeader.sass"

export const HeaderTemplate = ({ data }) => {
  const { title, telephone } = data
  return (
    <div className="is-flex  outHedaer">
      <div className="column outHedaer__title">{title} </div>
      <div className="column outHedaer__phone"><span>Llámanos al:</span><span className="has-text-weight-semibold"> {telephone}</span> </div>
      <div className="column has-text-right p-r-30">ES | EU</div>
    </div>
  )
}

export const Header = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.frontmatter
  return <HeaderTemplate data={data} />;
};

