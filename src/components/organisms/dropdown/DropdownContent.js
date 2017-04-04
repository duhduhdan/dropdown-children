import React, { PropTypes } from 'react'

const DropdownContent = ({ children, active, ...props }) => (
  active && (
    <div
      className="dropdown-content"
      {...props}
    >
      {children}
    </div>
  )
)

DropdownContent.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool
}

export default DropdownContent
