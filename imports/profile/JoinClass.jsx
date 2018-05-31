import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base'

import { withRouter } from 'react-router-dom'

import BackButton from '../components/BackButton'

// lists classes and displays button for joining new classes: prompts alert that requires inviteCode
class JoinClass extends Component {
  render() {
    return <div className="Login">
    <BackButton/>
    <h1>Join a class in <span className="Colors-accent">we</span>class</h1>
    <h3>Class Code</h3>
    <input type="text" className="Forms-input Forms-input-large" placeholder="#######"/><br/>   
    <div className="Forms-button">Join Class</div>
    </div>
  }
}

export default withRouter(JoinClass);