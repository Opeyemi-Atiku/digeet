import React, { Component } from 'react';
import ls from 'local-storage';
import Header from '../Inc/_header';
import Axios from 'axios';





class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            _isLogin: ls.get('token_'),
            auth_user: '',
        }
    }

    componentDidMount() {
        var formData = new FormData();
        formData.append("token", ls.get('token_'));
        if(ls.get('token_') == null)return;
        Axios.post("/api/account/user", formData).then(function (response) {            
            this.setState({ auth_user: response.data.auth_user });
            console.log(response);
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
            <Header
            auth_user={this.state.auth_user}
            />
        )
    }
}


export default Home;