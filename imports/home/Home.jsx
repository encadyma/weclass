import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class HomePage extends Component {
  render() {
    return <div className="HomePage">
      <h1 className="HomePage-header">
        <span className="Colors-accent">we</span>
        <span>class</span>
      </h1>
      <div className="HomePage-slogan">a single place where you can find and stay in contact with your peers in high school</div>
      <div className="HomePage-buttons">
        <Link className="Forms-button Generic-Margined" to="/createaccount">Create an account</Link>
        <Link className="Forms-button Forms-button-hollow Generic-Margined" to="/login">Login</Link>
      </div>
    </div>
  }
}