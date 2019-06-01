import React from 'react'
import PropTypes from 'prop-types'
import { HeaderTemplate } from '../../components/Home/Header/'

const HeaderPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  return <HeaderTemplate data={data} />
}

HeaderPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default HeaderPreview