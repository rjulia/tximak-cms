import React from 'react'
import PropTypes from 'prop-types'
import { ProductTemplate } from '../../templates/product-page'

const ProductPreview = ({ entry, widgetFor }) => (
  <ProductTemplate
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    content={widgetFor('body')}
    size={entry.getIn(['data', 'size'])}
    price={entry.getIn(['data', 'price'])}
    priceDiscount={entry.getIn(['data', 'price_discount'])}
    content={widgetFor('shipping')}

  />
)

ProductPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProductPreview
