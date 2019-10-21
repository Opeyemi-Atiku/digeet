import React, { Component } from 'react';
import ls from 'local-storage';
import Header from '../Inc/header';





class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            auth_user: '',
        }
    }

    componentDidMount() {
        var formData = new FormData();
        formData.append("token", ls.get('token_'));
        if(ls.get('token_') == null)return;
        axios.post("/api/account/user", formData).then((response) => {
            this.setState({ auth_user: response.data.auth_user });
        }).catch((error) => {
            if (error.message === 'Request failed with status code 401') {
                ls.set('token_', null);
                window.location = '/';
            }
            console.log(error);
        });

    }

    render() {
        return (
            <div>
                <Header
                auth_user = {this.state.auth_user} 
                />
            </div>
        )
    }
}


export default Dashboard;