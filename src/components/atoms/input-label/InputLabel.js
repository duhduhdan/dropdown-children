import React, { PropTypes } from 'react'

import { Label } from '../atoms'

const InputLabel = ({
  id,
  value,
  handleChange,
  handleClick,
  theme,
  ...props
}) => (
  <div>
    <Label forInput={id} {...props} />
    <br />
    <input
      type="text"
      id={id}
      value={value}
      onChange={handleChange}
      onClick={handleClick}
      className={`number--${theme}`}
    />
  </div>
)

InputLabel.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.node,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func,
  theme: PropTypes.oneOf(['chcom', 'rentals']).isRequired
}

export default InputLabel
