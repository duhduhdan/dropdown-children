import React, { Component, PropTypes } from 'react'
import './PlusMinusInput.css'

import { PlusMinus } from '../../molecules/molecules'
import { InputLabel } from '../../atoms/atoms'
import { Dropdown, DropdownContent, DropdownTrigger } from '../organisms'

function incrementBy(value) {
  return function increment(state) {
    return {
      count: state.count + value
    }
  }
}

function decrementBy(value) {
  return function decrement(state) {
    return {
      count: state.count - value
    }
  }
}

class PlusMinusInput extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 1}

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
  }

  handleIncrement() {
    this.setState(incrementBy(1))
  }

  handleDecrement() {
    this.setState(decrementBy(1))
  }

  handleValueChange() {
    return this.state.count
  }

  render() {
    const { label, theme, min, max } = this.props

    return (
      <Dropdown>
        <DropdownTrigger>
          <InputLabel
            id="count"
            label={label}
            value={this.state.count}
            handleChange={this.handleValueChange}
            theme={theme}
          />
        </DropdownTrigger>
        <DropdownContent>
          <PlusMinus
            increment={this.handleIncrement}
            decrement={this.handleDecrement}
            minReached={this.state.count === min}
            maxReached={this.state.count === max}
            theme={theme}
          />
        </DropdownContent>
      </Dropdown>
    )
  }
}

PlusMinusInput.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['rentals', 'chcom']).isRequired,
  min: PropTypes.number,
  max: PropTypes.number.isRequired
}

PlusMinusInput.defaultProps = {
  min: 1
}

export default PlusMinusInput
