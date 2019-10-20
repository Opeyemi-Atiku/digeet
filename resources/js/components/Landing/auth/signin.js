import React, { Component } from 'react';
import ls from 'local-storage';



class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            email_validate: 'form-control',
            password_validate: 'form-control',
            email_validate_: '',
            validate_color: {
                color: '#cd201f'
            }
        }

        this.onChange = this.onChange.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    signIn() {
        if (this.state.email === '' || this.state.password === '') {
            this.state.email === '' ? this.setState({ email_validate: 'form-control is-invalid' }) : this.setState({ email_validate: 'form-control' });
            this.state.password === '' ? this.setState({ password_validate: 'form-control is-invalid' }) : this.setState({ password_validate: 'form-control' });
        } else {
            let input = this.state;
            var formData = new FormData();
            formData.append("email", input.email);
            formData.append("password", input.password);

            axios.post("/api/account/login", formData).then((response) => {

                if (response.data.status != 'error') {
                    ls.set('token_', response.data.access_token);
                    window.location = '/dashboard';
                } else {
                    this.setState({ email_validate_: response.data.message, email: '', password: '' });
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    }
    render() {
        return (
            <div className="page-single">
                <div className="container">
                    <div className="row">
                        <div className="col col-login mx-auto">
                            <div className="text-center mb-6">
                                <img src="./demo/brand/tabler.svg" className="h-6" alt="" />

                            </div>

                            <div className="card">
                                <div className="card-body p-6">
                                    <div className="card-title">Sign In</div>
                                    <div className="form-group">
                                        <label className="form-label">Email address  <span style={this.state.validate_color}>{this.state.email_validate_}</span></label>
                                        <input type="email" className={this.state.email_validate} value={this.state.email} onChange={this.onChange} name="email" placeholder="Enter email" autoComplete="false" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Password</label>
                                        <input type="password" className={this.state.password_validate} value={this.state.password} onChange={this.onChange} name="password" placeholder="Password" autoComplete="false" />
                                    </div>
                                    <div className="form-footer">
                                        <button type="submit" onClick={this.signIn} className="btn btn-primary btn-block"><i className="fa fa-sign-in"></i> Sign In</button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center text-muted">
                                New to Digeethub? <a href="/register">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}





export default SignIn;