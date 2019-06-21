import React from 'react'
import PropTypes from 'prop-types'
import { ServiceTemplate } from '../../templates/service-page'

const ServicesPreview = ({ entry }) => (
  <ServiceTemplate
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    price={entry.getIn(['data', 'price'])}
    priceDiscount={entry.getIn(['data', 'price_discount'])}
    image={entry.getIn(['data', 'image'])}
  />
)

ServicesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ServicesPreview