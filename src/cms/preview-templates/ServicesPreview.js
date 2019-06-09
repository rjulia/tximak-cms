import React from 'react'
import PropTypes from 'prop-types'
//import { ProductTemplate } from '../../templates/product-page'

const ServicesPreview = ({ entry }) => (
  <ProductTemplate
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    price={entry.getIn(['data', 'price'])}
    priceDiscount={entry.getIn(['data', 'price_discount'])}

  />
)

ServicesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ServicesPreview