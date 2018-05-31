import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base'

import { withRouter } from 'react-router-dom'

import BackButton from '../components/BackButton'

// shows currentUser's properties and allows 
// for updating properties, respectively.

class AccountDetails extends Component {
  render() {
    return <div className="Login">
    <BackButton/>
    <h1>Edit my <span className="Colors-accent">we</span>class details</h1>
    <input type="text" className="Forms-input Forms-input-large" placeholder="Full Name"/><br/>
    <input type="text" className="Forms-input Forms-input-large" placeholder="Email"/><br/>
    <input type="text" className="Forms-input Forms-input-large" placeholder="Twitter Username"/><br/>
    <input type="text" className="Forms-input Forms-input-large" placeholder="Facebook Username"/><br/>
    <input type="text" className="Forms-input Forms-input-large" placeholder="Instagram Username"/><br/>
    <input type="text" className="Forms-input Forms-input-large" placeholder="Mood (Emoji)"/><br/>
    <br/>
    <div className="Forms-button">Edit Profile</div>
    </div>
  }
}
export default withRouter(AccountDetails);
