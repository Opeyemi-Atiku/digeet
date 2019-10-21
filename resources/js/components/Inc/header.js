import React, { Component } from 'react';





class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            auth_user: '',
            imageStyle: {
                backgroundImage: "url(" + "/assets/images/profile/profile_image.png" + ")",
            }
        }
    } 

    componentDidUpdate(prevProps) {
        if (prevProps.auth_user !== this.props.auth_user) {
            this.setState({
                auth_user: this.props.auth_user
            });
        }
    }

    render() {
        return (
            <div className="page">
                <div className="flex-fill">
                    <div className="header py-4">
                        <div className="container">
                            <div className="d-flex">
                                <a className="header-brand" href="/">
                                    Logo
                                </a>
                                <div className="d-flex order-lg-2 ml-auto">
                                    <div className="dropdown d-none d-md-flex show">
                                        <a className="nav-link icon" data-toggle="dropdown" aria-expanded="true">
                                            <i className="fe fe-bell"></i>
                                            <span className="nav-unread"></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow show">
                                            <a href="#" className="dropdown-item d-flex">
                                                <span className="avatar mr-3 align-self-center"></span>
                                                <div>
                                                    <strong>Nathan</strong> pushed new commit: Fix page load performance issue.
                                                    <div className="small text-muted">10 minutes ago</div>
                                                </div>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a href="#" className="nav-link pr-0 leading-none" data-toggle="dropdown">
                                            <span className="avatar" style={this.state.imageStyle}></span>
                                            <span className="ml-2 d-none d-lg-block">
                                                <span className="text-default">{this.state.auth_user.name}</span>
                                            </span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                            <a className="dropdown-item" href="/profile">
                                                <i className="dropdown-icon fe fe-user"></i> Profile
                                            </a>
                                            <a href="/logout" className="dropdown-item">
                                                <i className="dropdown-icon fa fa-sign-out"></i> Sign Out
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse" data-target="#headerMenuCollapse">
                                    <span className="header-toggler-icon"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="header collapse d-lg-flex p-0" id="headerMenuCollapse">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg order-lg-first">
                                    <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                                        <li className="nav-item">
                                            <a href="/" className="nav-link active"><i className="fe fe-home"></i> Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/dashboard" className="nav-link active"><i className="fa fa-dashboard"></i> Dashboard</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default Header;