import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base'

import { withRouter } from 'react-router-dom'

// shows currentUser's properties and allows for updating properties, respectively.
class AccountDetails extends Component {
    render() {
        return <div className="Login">
        <h1>Join a class in <span className="Colors-accent">we</span>class</h1>
        <input type="text" className="Forms-input Forms-input-large" placeholder="Full Name"/><br/>
        <input type="text" className="Forms-input Forms-input-large" placeholder="Email"/><br/>
        <input type="text" className="Forms-input Forms-input-large" placeholder="Twitter Username"/><br/>
        <input type="text" className="Forms-input Forms-input-large" placeholder="Facebook Username"/><br/>
        <input type="text" className="Forms-input Forms-input-large" placeholder="Instagram Username"/><br/>
        <input type="text" className="Forms-input Forms-input-large" placeholder="Mood (Emoji)"/><br/>

        {/* may want to pull up action sheet or prompt alert to enter classCode}*/}
        <div className="Forms-button">Join Class</div>
        </div>
    }
}
export default withRouter(AccountDetails);
