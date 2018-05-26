import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base'

import { withRouter } from 'react-router-dom'

class CreateAccountPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = { email: '', password: '', confirmPassword: '', error: '' }
  }

  reactToFormChange(prop) {
    return (event) => {
      this.setState({
        [prop]: event.target.value
      })
    }
  }

  createAccount() {
    this.setState({ error: '' })

    if (!this.state.email) { this.setState({ error: "Email cannot be empty." }) }
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        error: 'Password != Confirm Password'
      })
      return
    }

    try {
      Accounts.createUser({
        email: this.state.email,
        password: this.state.password
      }, (e) => {
        console.log(e)
        this.setState({ error: e.reason })
        Meteor.loginWithPassword(this.state.email, this.state.password, (err) => {
          if (!err) this.props.history.push('/contacts')
          this.setState({ error: err.reason })
        })
      })

      

    } catch (e) {
      this.setState({
        error: e.reason
      })
    }
  }

  render() {
    return <div className="Login">
      <h1>Create an account for <span className="Colors-accent">we</span>class</h1>
      { this.state.error ? <div className="Colors-red">{this.state.error}</div> : null }
      <input type="text" className="Forms-input Forms-input-large" onChange={this.reactToFormChange("email").bind(this)} placeholder="Email Address"/><br/>
      <input type="password" className="Forms-input Forms-input-large" onChange={this.reactToFormChange("password").bind(this)} placeholder="Password"/><br/>
      <input type="password" className="Forms-input Forms-input-large" onChange={this.reactToFormChange("confirmPassword").bind(this)} placeholder="Confirm Password"/><br/><br/>
      <div className="Forms-button" onClick={this.createAccount.bind(this)}>Create Account</div>
    </div>
  }
}

export default withRouter(CreateAccountPage)