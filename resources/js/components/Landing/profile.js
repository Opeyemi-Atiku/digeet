import React, { Component } from 'react';
import ls from 'local-storage';
import Header from '../Inc/header';





class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            auth_user: {
                user_meta: '',
            },
            view: false,
            imageStyle: {
                backgroundImage: "url(" + "/assets/images/profile/profile_image.png" + ")",
            }
        }
        this.editProfile = this.editProfile.bind(this);
    }

    componentDidMount() {
        var formData = new FormData();
        formData.append("token", ls.get('token_'));
        if (ls.get('token_') == null) return;
        axios.post("/api/account/user", formData).then((response) => {
            this.setState({ auth_user: response.data.auth_user });
            console.log(this.state.auth_user);
        }).catch((error) => {
            if (error.message === 'Request failed with status code 401') {
                ls.set('token_', null);
                window.location = '/';
            }
            console.log(error);
        });

    }

    editProfile(){
        this.state.view == false ? this.setState({view:true}) : this.setState({view: false});
        
    }

    render() {
        return (
            <div>
                <Header
                    auth_user={this.state.auth_user}
                />
                <div className="my-3 my-md-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">My Profile</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="media">
                                            <span className="avatar avatar-xxl mr-5" style={this.state.imageStyle}></span>
                                            <div className="media-body">
                                                <h4 className="m-0">{this.state.auth_user.name}</h4>
                                                <p className="text-muted mb-0">{this.state.auth_user.email}</p>
                                            </div>
                                        </div>
                                        <br />


                                        <h4>Bio Data</h4>
                                        <div className="row">

                                            <div className="col-auto">
                                                <span>Gender: {this.state.auth_user.gender}</span>
                                            </div>
                                        </div>
                                        <div className="row">

                                            <div className="col-auto">
                                                <span>Whatsapp Contact: {this.state.auth_user.user_meta.whatsapp_contact}</span>
                                            </div>
                                        </div>
                                        <div className="row">

                                            <div className="col-auto">
                                                <span>Country: {this.state.auth_user.user_meta.country}</span>
                                            </div>
                                        </div>
                                        <div className="row">

                                            <div className="col-auto">
                                                <span>State: {this.state.auth_user.user_meta.state}</span>
                                            </div>
                                        </div>

                                        <br />
                                        <h4>Bank Info</h4>
                                        <div className="row">

                                            <div className="col-auto">
                                                <span>Bank Name: {this.state.auth_user.user_meta.bank_name}</span>
                                            </div>
                                        </div>
                                        <div className="row">

                                            <div className="col-auto">
                                                <span>Account Name: {this.state.auth_user.user_meta.account_name}</span>
                                            </div>
                                        </div>
                                        <div className="row">

                                            <div className="col-auto">
                                                <span>Account Number: {this.state.auth_user.user_meta.account_number}</span>
                                            </div>
                                        </div>
                                        <br/>
                                        <div>
                                            <button class="btn btn-primary btn-block" onClick={this.editProfile}>Edit Profile</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-8">
                                <EditProfile 
                                view_={this.state.view}
                                />
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}


class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="card">
                {/*<div className="card-body">
                    <h3 className="card-title">Edit Profile</h3>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" disabled="" placeholder="Company" value="Creative Code Inc." />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="form-group">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" placeholder="Company" value="Chet" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="form-group">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" placeholder="Last Name" value="Faker" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control" placeholder="Home Address" value="Melbourne, Australia" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                                <label className="form-label">City</label>
                                <input type="text" className="form-control" placeholder="City" value="Melbourne" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <label className="form-label">Postal Code</label>
                                <input type="number" className="form-control" placeholder="ZIP Code" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group">
                                <label className="form-label">Country</label>
                                <select className="form-control custom-select">
                                    <option value="">Germany</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-right">
                    <button type="submit" className="btn btn-primary">Update Profile</button>
        </div>*/}
            </div>

        );
    }
}


export default Profile;