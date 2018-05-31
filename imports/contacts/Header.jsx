import React, { Component } from 'react'

import { Meteor } from 'meteor/meteor'
import { withRouter } from 'react-router-dom'

class ContactsHeader extends Component {
  logout() {
    Meteor.logout(() => {
      this.props.history.push("/")
    })
  }

  joinClass() {
    this.props.history.push('/join')
  }

  inviteClassmates() {
    this.props.history.push('/invite')
  }

  goToMyProfile() {
    this.props.history.push('/me')
  }

  render() {
    return <div className="Contacts-Header">
      <div>
        <span className="Colors-accent">we</span>
        <span>class</span>
        <span className="Contacts-Header-sub"> classmates</span>
      </div>
      <div className="Contacts-Header-submenu">
        <div className="Contacts-Header-submenu-item" onClick={this.joinClass.bind(this)}>Join a class</div>
        <div className="Contacts-Header-submenu-item" onClick={this.inviteClassmates.bind(this)}>Invite a classmate</div>
        <div className="Contacts-Header-submenu-item" onClick={this.goToMyProfile.bind(this)}>Edit Profile</div>
        <div className="Contacts-Header-submenu-item" onClick={this.logout.bind(this)}>Logout</div>
      </div>
    </div>
  }
}

export default withRouter(ContactsHeader)