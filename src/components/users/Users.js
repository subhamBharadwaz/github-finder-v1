import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
  render() {
    return (
      <div style={userStyles}>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

const userStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
}

export default Users
