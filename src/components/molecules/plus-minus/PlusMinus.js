import React, { PropTypes } from 'react'
import './PlusMinus.css'

import { Button } from '../../atoms/atoms'

const PlusMinus = ({
  increment,
  decrement,
  minReached,
  maxReached,
  theme
}) => (
  <div>
    <Button
      onClick={decrement}
      disabled={minReached}
      className={`plus-minus-btn--${theme}`}
    >
      {`\u002d`}
    </Button>
    <Button
      onClick={increment}
      disabled={maxReached}
      className={`plus-minus-btn--${theme}`}
    >
      {`\u002b`}
    </Button>
  </div>
)

PlusMinus.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  minReached: PropTypes.bool,
  maxReached: PropTypes.bool,
  theme: PropTypes.oneOf(['chcom', 'rentals']).isRequired
}

export default PlusMinus
