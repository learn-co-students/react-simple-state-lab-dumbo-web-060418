import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = { color: props.value }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.setState({ color: '#333' })
  }

  render(props) {
    return <div className="cell" style={{backgroundColor: `${this.state.color}`}} onClick={this.handleClick}></div>
  }
}

export default Cell
