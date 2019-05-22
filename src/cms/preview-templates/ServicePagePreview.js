import React from 'react'
import PropTypes from 'prop-types'
import { ServiceTemplate } from '../../templates/service-page'

const ServicePagePreview = ({ entry, widgetFor }) => (
  <ServiceTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ServicePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ServicePagePreview
