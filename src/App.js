import React, { Component } from "react";

import UserList from './UserList'
import { Flex, Box } from 'grid-styled'
import "./App.css";

const USER_AMOUNT = `10`;
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

  render() {
    return (
      <div>
        <Flex>
          <Box width={1/4} px={3}>
          </Box>
          <Box width={2/4} px={2}>
            <UserList userData={this.state.users} />
            {console.log(this.state.users)}
          </Box>
          <Box width={1/4} px={3}>
          </Box>
        </Flex>
      </div>
    );
  }
}

export default App;
