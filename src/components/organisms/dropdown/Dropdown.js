import React, { cloneElement, Children, Component } from 'react'
import { findDOMNode } from 'react-dom'
import './Dropdown.css'

import DropdownContent from './DropdownContent'
import DropdownTrigger from './DropdownTrigger'

class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {active: false}

    this.onWindowClick = this.onWindowClick.bind(this)
    this.toggleActive = this.toggleActive.bind(this)
  }

  componentDidMount() {
    window.addEventListener('click', this.onWindowClick)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick)
  }

  render() {
    const trigger = this.renderDropdownTrigger()
    const content = this.renderDropdownContent()

    return (<section className="dropdown">{trigger}{content}</section>)
  }

  isDropdownTrigger(child) {
    return child.type.displayName === 'DropdownTrigger'
  }

  renderDropdownTrigger() {
    const addClick = {onClick: this.toggleActive}

    return Children.map(this.props.children, child =>
      this.isDropdownTrigger(child) && cloneElement(child, addClick)
    )
  }

  isDropdownContent(child) {
    return child.type.displayName === 'DropdownContent'
  }

  renderDropdownContent() {
    const addActive = {active: this.state.active}

    return Children.map(this.props.children, child =>
      this.isDropdownContent(child) && cloneElement(child, addActive)
    )
  }

  onWindowClick(e) {
    const dropdown = findDOMNode(this)

    if (e.target !== dropdown && !dropdown.contains(e.target) && this.state.active) {
      this.setState({active: false})
    }
  }

  toggleActive() {
    this.setState(prevState => ({
      active: !prevState.active
    }))
  }
}

export { DropdownContent, DropdownTrigger }
export default Dropdown
