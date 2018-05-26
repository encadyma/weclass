import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

import { withRouter } from 'react-router-dom'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = { email: '', password: '', error: '' }
  }

  reactToFormChange(prop) {
    return (event) => {
      this.setState({
        [prop]: event.target.value
      })
    }
  }

  login() {
    Meteor.loginWithPassword(this.state.email, this.state.password, (err) => {
      if (err) {
        this.setState({ error: err.reason }) 
        return
      }

      this.props.history.push('/contacts')
    })
  }

  render() {
    return <div className="Login">
      <h1>Login to <span className="Colors-accent">we</span>class</h1>
      { this.state.error ? <div className="Colors-red">{this.state.error}</div> : null }
      <input type="text" className="Forms-input Forms-input-large" onChange={this.reactToFormChange("email").bind(this)} placeholder="Email Address"/><br/>
      <input type="password" className="Forms-input Forms-input-large" onChange={this.reactToFormChange("password").bind(this)} placeholder="Password"/><br/><br/>
      <div className="Forms-button" onClick={this.login.bind(this)}>Login</div>
    </div>
  }
}

export default withRouter(LoginPage)