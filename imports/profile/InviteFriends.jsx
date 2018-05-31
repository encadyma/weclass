import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base'

import { withRouter } from 'react-router-dom'

import BackButton from '../components/BackButton'

// lists classes and displays button for joining new classes: prompts alert that requires inviteCode
class InviteFriends extends Component {
  render() {
    return <div className="Login">
    <BackButton/>
    <h1>Invite classmates to <span className="Colors-accent">we</span>class</h1>
    <div>
    <h1>Classes</h1>
    <div>
    <h4>Class Title</h4>
    <h4>(# Class Members) Members</h4>
    </div>
    <div>
    <h4>Class Title 2</h4>
    <h4>(# Class2 Members) Members</h4>
    </div>
    </div>
    <div>
    <h3>Enter Class Code</h3>
    <input type="text" className="Forms-input Forms-input-large" placeholder="#######"/><br/>   
    <div className="Forms-button">Join Account</div>
    </div>
    </div>
  }
}

export default withRouter(InviteFriends);