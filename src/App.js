import React, { Component } from "react";

import UserList from './UserList'
import { Flex, Box } from 'grid-styled'
import "./App.css";

const USER_AMOUNT = `2`;
const API = `https://randomuser.me/api/?results=${USER_AMOUNT}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ users: data.results }));
  }

  addRandomUser = () => {
    fetch('https://randomuser.me/api/?results=1')
    .then(response => response.json())
    .then(data => this.setState(prevState => ({
      users: [...prevState.users, data.results[0]] 
    })))
  }
  handleRemoveUser = (name) => {
    this.setState((currentState) => {
      return {
        users: currentState.users.filter((user) => user.name.first !== name)
      }
    })
    console.log(`Removed: ${name}`)
  }
  render() {
    return (
      <div>
        <Flex>
          <Box width={1/4} px={3}>
          </Box>
          <Box width={2/4} px={2}>
            <UserList userData={this.state.users} onRemove={this.handleRemoveUser} />
            {console.log(this.state.users)}
          </Box>
          <Box width={1/4} px={3}>
          </Box>
          <button onClick={this.addRandomUser}>Add User</button>
        </Flex>
      </div>
    );
  }
}

export default App;
