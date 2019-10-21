import React, { Component } from 'react';
import ls from 'local-storage';




class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            _isLogin: ls.get('token_'),
            auth_user: '',
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
                                    <div className="dropdown d-none d-md-flex">
                                        <a className="nav-link icon" data-toggle="dropdown">
                                            <i className="fe fe-bell"></i>
                                            <span className="nav-unread"></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                            <a href="#" id="notification" className="dropdown-item d-flex">
                                                <span className="avatar mr-3 align-self-center"></span>
                                                <div>
                                                    <strong>Nathan</strong> pushed new commit: Fix page load performance issue.
                                                    <div className="small text-muted">10 minutes ago</div>
                                                </div>
                                            </a>
                                            <div className="dropdown-divider"></div>
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
                                            <a href="/" className="nav-link"><i className="fe fe-home"></i> Home</a>
                                        </li>    
                                        {this.state._isLogin != null ? <li className="nav-item">
                                            <a href="/dashboard" className="nav-link"><i className="fa fa-dashboard"></i> Dashboard</a>
                                        </li> : '' }  
                                        {this.state._isLogin == null ? <li className="nav-item">
                                            <a href="/login" className="nav-link"><i className="fa fa-sign-in"></i> Sign In</a>
                                        </li>    : <li className="nav-item">
                                            <a href="/logout" className="nav-link"><i className="fa fa-sign-out"></i> Sign out</a>
                                        </li> }  
                                        {this.state._isLogin == null ? <li className="nav-item">
                                            <a href="/register" className="nav-link"><i className="fa fa-user-plus"></i> Register</a>
                                        </li>    : '' }                                                           
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