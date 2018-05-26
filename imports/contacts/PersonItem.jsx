import React, { Component } from 'react'

import EmojiConverter from 'emoji-js'

let emoji = new EmojiConverter()

export default class PersonItem extends Component {
  constructor(props) {
    super(props)
    this.state = { opened: false }
  }

  renderPropValue(property, value) {
    if (!value) return null

    return <div className="PersonItem-Options-Field">
      <div className="PersonItem-Options-Field-Prop">{property}</div>
      <div className="PersonItem-Options-Field-Value">{value}</div>
    </div>
  }

  toggleOpen() {
    this.setState({
      opened: !this.state.opened
    })
  }

  render() {
    return <div>
      <div className="PersonItem" onClick={this.toggleOpen.bind(this)}>
        <div className="PersonItem-info">
          <div className="PersonItem-emoji">
            {emoji.replace_colons(`:${this.props.user.emoticon}:`)}
          </div>
          <div className="PersonItem-person">
            <h3 className="PersonItem-person-title">{this.props.user.name}</h3>
            <p className="PersonItem-person-bio">{this.props.user.bio}</p>
          </div>
        </div>
        <div className="PersonItem-icons">
          <div className="material-icons">{this.state.opened ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</div>
        </div>
      </div>
      { this.state.opened ? <div className="PersonItem-Options">
          { this.renderPropValue('Facebook', this.props.user.facebook) }
          { this.renderPropValue('Instagram', this.props.user.instagram) }
          { this.renderPropValue('Twitter', this.props.user.twitter) }
      </div> : null }
    </div>
  }
}