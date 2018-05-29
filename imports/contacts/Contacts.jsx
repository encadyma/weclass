import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

import { withTracker } from 'meteor/react-meteor-data'
import { withRouter } from 'react-router-dom'

import { Students } from '../api/students'

import ContactsHeader from './Header'
import PersonItem from './PersonItem'

class ContactsPage extends Component {
  mapContacts() {
    if (!this.props.students.length) return <div>No contacts to see here...</div>
    return this.props.students.map((student) => <PersonItem user={student} key={student._id}/>)
  }

  componentDidMount() {
    if (!this.props.currentUserIsLoading && !this.props.currentUser)
      this.props.history.push('/')
  }

  render() {
    if (this.props.currentUserIsLoading) return null
    return <div className="Contacts">
      <ContactsHeader/>
      {this.mapContacts()}
    </div>
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    students: Students.find({}).fetch(),
    currentUserIsLoading: Meteor.loggingIn()
  }
})(withRouter(ContactsPage))