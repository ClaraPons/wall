import React from 'react'
import users from '../users.json'


class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <h2>{this.props.name}</h2>
        <img src={this.props.picture} />
        <p>{this.props.about}</p>
      </div>
      
    )
  }
}

export default Card 