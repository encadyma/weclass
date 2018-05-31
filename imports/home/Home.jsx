import React, { Component } from 'react'

import { Meteor } from 'meteor/meteor'

import { Link, withRouter } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'

class HomePage extends Component {
  componentDidUpdate() {
    if (this.props.currentUser)
      this.props.history.push('/contacts')
  }

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

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    loggingIn: Meteor.loggingIn()
  }
})(withRouter(HomePage))