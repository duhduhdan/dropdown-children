import React, { PropTypes } from 'react'

const DropdownTrigger = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
)

DropdownTrigger.propTypes = {
  children: PropTypes.node
}

export default DropdownTrigger
