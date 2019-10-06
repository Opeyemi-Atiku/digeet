import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Subscribe extends Component {
    render() {
        return (
            <div className="container">
               <div className="row">
                   <div className="col-lg-5 col-md-12 col-sm-12">
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem Ipsum</p>
                        <div className="email-box">
                            <div className="input">
                                <input type="email" placeholder="Enter your email"/>
                                <button>Get started</button>
                            </div>
                            <span>Lorem Ipsum</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('subscribe')) {
    ReactDOM.render(<Subscribe />, document.getElementById('subscribe'));
}

export default Subscribe;
