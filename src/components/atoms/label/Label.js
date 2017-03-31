import React, { PropTypes } from 'react'

const Label = ({ label, forInput }) => (
  <label htmlFor={forInput}>
    {label}
  </label>
)

Label.propTypes = {
  label: PropTypes.string.isRequired,
  forInput: PropTypes.string.isRequired
}

export default Label
