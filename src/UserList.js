import React, { Component } from 'react';
import ReactSiema from "react-siema";
import Modal from 'react-modal';

const options = {
    duration: 500,
    loop: true,
    easing: "ease-out",
    perPage: 2
  };

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('#root')

  class UserList extends Component {
    constructor(props) {
      super(props);
      this.slider = null;
      this.state = {
        modalIsOpen: false
      }
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
      this.setState({modalIsOpen: true});
    }
  
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#f00';
    }
  
    closeModal() {
      this.setState({modalIsOpen: false});
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
                  <button onClick={this.openModal}>More Info</button>
                  <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    shouldCloseOnOverlayClick={true}
                    contentLabel="Example Modal"
                  >

                    <h2 ref={subtitle => this.subtitle = subtitle}>MODAL TIME</h2> 
                    <div>I am a modal</div>
                    <form>
                      <img src={user.picture.medium} alt={`${user.name.first}`} />
                      <h2>{user.name.first} {user.name.last}</h2>
                      <p>{user.gender}</p>
                      <p>{user.email}</p>
                      <p>{user.cell}</p>
                      <p>{user.location.street}, {user.location.city} {user.location.state}, {user.location.postcode}</p>
                      <button onClick={this.closeModal}>close</button>
                    </form>
                </Modal>
                  <button onClick={() => this.props.onRemove(user.name.first)}>Remove User</button>
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