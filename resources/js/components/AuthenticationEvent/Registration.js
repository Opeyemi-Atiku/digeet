import React, { Component } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import {_registerUser}  from '../api';
import ls from 'local-storage';

class ModalPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      step: 1,
      name: '',
      email: '',

    }

    this.toggle = this.toggle.bind(this);
    this.nextView = this.nextView.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  toggle() {
    this.setState({
      modal: !this.state.modal,
      step: 1
    });
  }

  nextView() {
    ls.set('name', this.state.name);
    ls.set('email', this.state.email);

    window.location = '/register';
  }

  onChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.state.step == 1) {
      return (
        <MDBContainer>
          <li><a className="btn btn-default btn-small" onClick={this.toggle} id="register">Register</a></li>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>Create Account</MDBModalHeader>
            <MDBModalBody>
              <div className="card bg-light">
                <article className="card-body mx-auto">
                  <form>
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="icofont-ui-user"></i> </span>
                      </div>
                      <input name="name" className="form-control" value={this.state.name} onChange={this.onChange} placeholder="Full name" type="text" />
                    </div>
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="icofont-email"></i> </span>
                      </div>
                      <input name="email" className="form-control" value={this.state.email} onChange={this.onChange} placeholder="Email address" type="email" />
                    </div>
                  </form>
                </article>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <a className="btn btn-default btn-small" id="register" href="#" onClick={this.toggle}>Close</a>
              <a className="btn btn-default btn-small" id="register" href="#" onClick={this.nextView}>Register</a>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      );
    }
  }
}

if (document.getElementById('register')) {
  ReactDOM.render(<ModalPage />, document.getElementById('register'));
}

export default withRouter(ModalPage);
