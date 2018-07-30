import React, { Component } from "react";
import ReactSiema from "react-siema";
import "./App.css";

const USER_AMOUNT = `10`;
const API = `https://randomuser.me/api/?results=${USER_AMOUNT}`;

const options = {
  duration: 500,
  loop: true,
  easing: "ease-out",
  perPage: 1
};

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.slider = null;
  }
  render() {
    return (
      <div>
        <ReactSiema {...options} ref={siema => (this.slider = siema)}>
          {this.props.userData.map(user => {
            return (
              <div key={user.name.first}>
                <span>
                  <img src={user.picture.medium} alt={`${user.name.first}`} />
                </span>
                <h2>{user.name.first}</h2>
                <p>{user.email}</p>
              </div>
            );
          })}
        </ReactSiema>
        <button onClick={() => this.slider.prev()}>prev</button>
        <button onClick={() => this.slider.next()}>next</button>
      </div>
    );
  }
}
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
        <UserList userData={this.state.users} />
      </div>
    );
  }
}

export default App;
