import React, { Component } from 'react';
import ls from 'local-storage';
import Header from '../Inc/_header';





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
        axios.post("/api/account/user", formData).then((response) => {
            this.setState({ auth_user: response.data.auth_user });
        }).catch((error) => {
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