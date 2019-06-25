import React from 'react';
import PropTypes from "prop-types";

const Filter = ({ filters, onSelectFilters }) => {

  return (
    <select onChange={(e) => onSelectFilters(e.target.value)}>
      {filters.map((fil) => {
        const { label, value } = fil
        return <option key={value} value={value}>{label}</option>
      })}
    </select>

  )
}
Filter.propTypes = {
  filters: PropTypes.array.isRequired,
  onSelectFilters: PropTypes.func.isRequired,
}

export default Filter
