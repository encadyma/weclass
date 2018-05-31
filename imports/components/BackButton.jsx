import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

class BackButton extends Component {
  goBack() {
    this.props.history.push('/contacts')
  }

  render() {
    return <div className="BackButton" onClick={this.goBack.bind(this)}>
      <i className="material-icons">chevron_left</i>&nbsp;
      <span>Go Back</span>
    </div>
  }
}

export default withRouter(BackButton)