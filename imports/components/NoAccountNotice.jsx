import React, { Component } from 'react'


export default class NoAccountNotice extends Component {
  render() {
    return <div className="NoAccountNotice">
      <b>There's still a few steps left.</b>&nbsp;
      <p>
        Complete your profile now to access the full contact list.&nbsp;
        <u>Click here to complete your registration.</u>
      </p>
    </div>
  }
}