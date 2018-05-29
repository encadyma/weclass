import React, { Component } from 'react'


export default class Alert extends Component {
  render() {
    return <div className="Alert">
      <b>{this.props.title}</b>
      <p>{this.props.description}</p>
    </div>
  }
}