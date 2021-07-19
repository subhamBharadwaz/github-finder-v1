import React, { Component } from 'react'
import './App.css'

// Import 3rd party packages
import axios from 'axios'

// Import Components
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'

class App extends Component {
  state = {
    users: [],
    loading: false,
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const res = await axios.get('https://api.github.com/users')

    this.setState({ users: res.data, loading: false })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    )
  }
}

export default App
