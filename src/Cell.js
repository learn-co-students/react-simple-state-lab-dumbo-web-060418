import React, { Component } from 'react'


export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

colorChange = (event) => {
  if (this.state.color === '#F00' || '#00F') {
    this.setState({
      color: "#333"
    })
  }

}

  render () {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.colorChange}>
          
      </div>

      )
  }

}
