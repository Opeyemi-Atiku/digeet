import React, { Component } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import ReactDOM from 'react-dom';

class ModalPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            modal: false,
            step: 1
          }

          this.toggle = this.toggle.bind(this);
          this.nextView = this.nextView.bind(this);
          this.previousView = this.previousView.bind(this);
      }


toggle(){
  this.setState({
    modal: !this.state.modal,
    step : 1
  });
}

nextView(){
    let _step = this.state.step + 1;
    this.setState({step : _step});
}

previousView(){
    let _step = this.state.step - 1;
    this.setState({step : _step});
}

render() {
    if(this.state.step == 1){
        return (
            <MDBContainer>
              <span onClick={this.toggle}>Register</span>
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>Create Account</MDBModalHeader>
                <MDBModalBody>
                <div className="card bg-light">
                    <article className="card-body mx-auto">
	                <form>
	                    <div className="form-group input-group">
		                    <div className="input-group-prepend">
		                        <span className="input-group-text"> <i className="fa fa-user"></i> </span>
		                    </div>
                            <input name="" className="form-control" placeholder="Full name" type="text" />
                        </div>
                        <div className="form-group input-group">
    	                    <div className="input-group-prepend">
		                        <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
		                    </div>
                            <input name="" className="form-control" placeholder="Email address" type="email" />
                        </div>
                        <div className="form-group input-group">
    	                    <div className="input-group-prepend">
		                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		                    </div>
                            <input className="form-control" placeholder="Create password" type="password"/>
                        </div>
                        <div className="form-group input-group">
    	                    <div className="input-group-prepend">
		                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		                    </div>
                            <input className="form-control" placeholder="Repeat password" type="password"/>
                        </div>
                    </form>
                </article>
            </div>
                </MDBModalBody>
                <MDBModalFooter>
                  <a class="btn btn-default btn-small" id="register" href="#" onClick={this.toggle}>Close</a>
                  <a class="btn btn-default btn-small" id="register" href="#" onClick={this.nextView}>Next</a>
                </MDBModalFooter>
              </MDBModal>
            </MDBContainer>
        );
    }else if(this.state.step == 2){
        return(
            <MDBContainer>
              <a href="#" className="btn-nav-line" onClick={this.toggle}><span>Register</span></a>
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>Form 2</MDBModalHeader>
                <MDBModalBody>
                  step 2
                </MDBModalBody>
                <MDBModalFooter>
                  <a class="btn btn-default btn-small" id="register" href="#" onClick={this.previousView}>Previous</a>
                  <a class="btn btn-default btn-small" id="register" href="#" onClick={this.nextView}>Next</a>
                </MDBModalFooter>
              </MDBModal>
            </MDBContainer>
        );
    }else if(this.state.step == 3){
        return(
            <MDBContainer>
              <a href="#" className="btn-nav-line" onClick={this.toggle}><span>Register</span></a>
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>Form 3</MDBModalHeader>
                <MDBModalBody>
                  step 3
                </MDBModalBody>
                <MDBModalFooter>
                  <a class="btn btn-default btn-small" id="register" href="#" onClick={this.previousView}>Previous</a>
                  <a class="btn btn-default btn-small" id="register" href="#" onClick={this.toggle}>Previous</a>
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

export default ModalPage;
