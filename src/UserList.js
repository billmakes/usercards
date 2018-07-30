import React, { Component } from 'react';
import ReactSiema from "react-siema";

const options = {
    duration: 500,
    loop: true,
    easing: "ease-out",
    perPage: 1
  };
  
  class UserList extends Component {
    constructor(props) {
      super(props);
  
      this.slider = null;
    }
    render() {
      return (
        <div>
          <button onClick={() => this.slider.prev()} className="prevbutton">Prev</button>
          <ReactSiema {...options} ref={siema => (this.slider = siema)}>
            {this.props.userData.map(user => {
              return (
                <div key={user.name.first}  className='card'>
                  <div className='cardheader'>
                    <img src={user.picture.medium} alt={`${user.name.first}`} />
                  </div>
                  <h2 className='cardtitle'>{user.name.first} {user.name.last}</h2>
                  <p>{user.email}</p>
                </div>
              );
            })}
          </ReactSiema>
          <button onClick={() => this.slider.next()} className="nextbutton">Next</button>
        </div>
      );
    }
  }


export default UserList;