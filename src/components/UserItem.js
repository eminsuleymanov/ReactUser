import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';


class UserItem extends Component {
  render(props) {
    const {gender,name} = this.props.user
    return (
      <div>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Gender: {gender}</Card.Title>
            <Card.Text>Username:{name.title} {name.first}{name.last}</Card.Text>
            
        </Card.Body>
        </Card>
      </div>
    )
  }
}

export default UserItem