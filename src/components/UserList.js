import React, { Component } from 'react'
import UserItem from './UserItem'
import users from '../users.json'

class UserList extends Component {
  render() {
    return (
      <div>
        {
            users.results.map(user => {
                return(
                    <UserItem 
                    key={user.name.first}
                    user={user}
                    />
                )
            })
        }
      </div>
    )
  }
}

export default UserList