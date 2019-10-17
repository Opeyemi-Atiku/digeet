import React from 'react';
import Registration from '../AuthenticationEvent/Registration';

const Header = () => (
    <header>
        <nav className="navbar navbar-inverse navbar-expand-lg header-nav fixed-top light-header">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Digeet
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCodeply">
                    <i className="icofont-navigation-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCodeply">
                    <ul className="nav navbar-nav ml-auto">
                        <li><a className="nav-link" href="/">Home</a></li>
                        <li><a className="nav-link" href="/dashboard">Dashboard</a></li>
                        <li><a className="btn-default btn-default-outline btn-small nav-link" href="#">Login</a></li>
                        <div><Registration /></div>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );

export default Header