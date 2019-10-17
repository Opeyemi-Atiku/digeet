import React, { Component } from 'react';
import axios from 'axios'
import ls from 'local-storage';
import StepWizard from 'react-step-wizard';




class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                width: '5%',
            },
            name: '',
            email: '',
            password: '',
            gender: 'm',
            state: '',
            whatsapp_number: '',
            age_range: '',
            country: '',
            bank_name: '',
            account_name: '',
            account_number: ''
        }
        this.onStepChange = this.onStepChange.bind(this);
        this.onChangeParent = this.onChangeParent.bind(this);
        this.submitForm_ = this.submitForm_.bind(this);
    }

    onStepChange(stats) {

        switch (stats.activeStep) {
            case 1:
                this.setState({
                    style: { width: '5%' }
                });

                break;
            case 2:
                this.setState({
                    style: { width: '50%' }
                });

                break;
            case 3:
                this.setState({
                    style: { width: '75%' }
                });

                break;

        }
    }

    onChangeParent(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitForm_() {
        let input = this.state;
        var formData = new FormData();
        formData.append("name", input.name);
        formData.append("email", input.email);
        formData.append("password", input.password);
        formData.append("gender", input.gender);
        formData.append("state", input.state);
        formData.append("whatsapp_number", input.whatsapp_number);
        formData.append("age_range", input.age_range);
        formData.append("country", input.country);
        formData.append("bank_name", input.bank_name);
        formData.append("account_name", input.account_name);
        formData.append("account_number", input.account_number);

        axios.post("/api/account/register", formData).then((response) => {
            if (response.data.token !== '') {
                ls.set('token_', response.data.token);
                // window.location = '/dashboard';
            } else {
                console.log(respose);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="page-single">
                <div className="container">
                    <div className="row">
                        <div className="col col-login mx-auto">
                            <div className="text-center mb-6">
                                <img src="./demo/brand/tabler.svg" className="h-6" alt="" />
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={this.state.style} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <StepWizard
                                onStepChange={this.onStepChange}
                            >
                                <Step1
                                    onChangeChild={this.onChangeParent}
                                    credentital={this.state}
                                />
                                <Step2
                                    onChangeChild={this.onChangeParent}
                                    credentital={this.state}
                                />
                                <Step3
                                    onChangeChild={this.onChangeParent}
                                    credentital={this.state}
                                    submitForm={this.submitForm_}
                                />
                            </StepWizard>
                            <div className="text-center text-muted">
                                Already have account? <a href="#">Sign in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


class Step1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.props.credentital,
            name_validate: 'form-control',
            email_validate: 'form-control',
            password_validate: 'form-control',
            gender_validate: '',
            gender_validate_color: {
                color: '#cd201f'
            }
        };

        this.onChangeChild_ = this.onChangeChild_.bind(this);
        this.nextForm = this.nextForm.bind(this);
    }

    onChangeChild_(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.props.onChangeChild(event);

        switch (event.target.name) {
            case 'name':
                this.setState({ name_validate: 'form-control' });
                break;
            case 'email':
                this.setState({ email_validate: 'form-control' });
                break;
            case 'password':
                this.setState({ password_validate: 'form-control' });
                break;
            case 'gender':
                this.state.gender === '' ? this.setState({ gender_validate: 'required' }) : '';
                break;
        }
    }

    nextForm() {
        if (this.state.name === '' || this.state.email === '' || this.state.password === '' || this.state.gender === '') {
            this.state.name === '' ? this.setState({ name_validate: 'form-control is-invalid' }) : this.setState({ name_validate: 'form-control' });
            this.state.email === '' ? this.setState({ email_validate: 'form-control is-invalid' }) : this.setState({ email_validate: 'form-control' });
            this.state.password === '' ? this.setState({ password_validate: 'form-control is-invalid' }) : this.setState({ password_validate: 'form-control' });
            this.state.gender === '' ? this.setState({ gender_validate: 'required' }) : '';
        } else {
            this.props.nextStep();
        }
    }




    render() {
        return (

            <div className="card">
                <div className="card-body p-6">
                    <div className="card-title">Create new account</div>

                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className={this.state.name_validate} onChange={this.onChangeChild_} value={this.state.name} name="name" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email address</label>
                        <input type="email" className={this.state.email_validate} onChange={this.onChangeChild_} value={this.state.email} name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="password" className={this.state.password_validate} onChange={this.onChangeChild_} value={this.state.password} name="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Gender <span style={this.state.gender_validate_color}>{this.state.gender_validate}</span></label>
                        <div className="selectgroup selectgroup-pills">
                            <label className="selectgroup-item">
                                <input type="radio" name="gender" onChange={this.onChangeChild_} value="m" className="selectgroup-input" checked={true} />
                                <span className="selectgroup-button selectgroup-button-icon"><i className="fa fa-male"></i></span>
                            </label>
                            <label className="selectgroup-item">
                                <input type="radio" name="gender" onChange={this.onChangeChild_} value="f" className="selectgroup-input" />
                                <span className="selectgroup-button selectgroup-button-icon"><i className="fa fa-female"></i></span>
                            </label>
                        </div>
                    </div>
                    <div className="form-footer text-right">
                        <button type="submit" onClick={this.nextForm} className="btn btn-primary btn-small">Next</button>
                    </div>
                </div>
            </div>


        );
    }
}


class Step2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.props.credentital,
            state_validate: 'form-control',
            whatsapp_number_validate: 'form-control',
            age_range_validate: 'form-control',
            country_validate: 'form-control',
        };

        this.onChangeChild_ = this.onChangeChild_.bind(this);
        this.nextForm = this.nextForm.bind(this);
    }

    onChangeChild_(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.props.onChangeChild(event);

        switch (event.target.name) {
            case 'state':
                this.setState({ state_validate: 'form-control' });
                break;
            case 'whatsapp_number':
                this.setState({ whatsapp_number_validate: 'form-control' });
                break;
            case 'age_range':
                this.setState({ age_range_validate: 'form-control' });
                break;
            case 'country':
                this.setState({ country_validate: 'form-control' });
                break;
        }
    }

    nextForm() {
        if (this.state.state == '' || this.state.whatsapp_number == '' || this.state.age_range == '' || this.state.country == '') {

            this.state.state === '' ? this.setState({ state_validate: 'form-control is-invalid' }) : this.setState({ state_validate: 'form-control' });
            this.state.whatsapp_number === '' ? this.setState({ whatsapp_number_validate: 'form-control is-invalid' }) : this.setState({ whatsapp_number_validate: 'form-control' });
            this.state.age_range === '' ? this.setState({ age_range_validate: 'form-control is-invalid' }) : this.setState({ age_range_validate: 'form-control' });
            this.state.country === '' ? this.setState({ country_validate: 'form-control is-invalid' }) : this.setState({ country_validate: 'form-control' });
        } else {
            this.props.nextStep();
        }
    }


    render() {
        return (

            <div className="card" >
                <div className="card-body p-6">
                    <div className="card-title">Create new account</div>
                    <div className="form-group">
                        <label className="form-label">State</label>
                        <input type="text" className={this.state.state_validate} onChange={this.onChangeChild_} value={this.state.state} name="state" placeholder="Enter state of province" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Whatsapp Number</label>
                        <input type="text" className={this.state.whatsapp_number_validate} onChange={this.onChangeChild_} value={this.state.whatsapp_number} name="whatsapp_number" placeholder="Enter whatsapp number" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Age Range</label>
                        <input type="text" className={this.state.age_range_validate} onChange={this.onChangeChild_} value={this.state.age_range} name="age_range" placeholder="Enter age range" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Country</label>
                        <input type="text" className={this.state.country_validate} onChange={this.onChangeChild_} value={this.state.country} name="country" placeholder="Enter Country" />
                    </div>
                    <div className="form-footer text-right">
                        <button type="submit" onClick={this.props.previousStep} className="btn btn-primary btn-small">Previous</button>
                        &nbsp;
                        <button type="submit" onClick={this.nextForm} className="btn btn-primary btn-small">Next</button>
                    </div>
                </div>
            </div>

        );
    }
}


class Step3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.props.credentital,
            bank_name_validate: 'form-control',
            account_name_validate: 'form-control',
            account_number_validate: 'form-control',
        };

        this.onChangeChild_ = this.onChangeChild_.bind(this);
        this.submitForm_ = this.submitForm_.bind(this);
    }

    onChangeChild_(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.props.onChangeChild(event);

        switch (event.target.name) {
            case 'bank_name':
                this.setState({ bank_name_validate: 'form-control' });
                break;
            case 'account_number':
                this.setState({ account_number_validate: 'form-control' });
                break;
            case 'account_name':
                this.setState({ account_name_validate: 'form-control' });
                break;
        }
    }

    submitForm_() {
        if (this.state.bank_name == '' || this.state.account_number == '' || this.state.aaccount_name == '') {
            this.state.bank_name === '' ? this.setState({ bank_name_validate: 'form-control is-invalid' }) : this.setState({ bank_name_validate: 'form-control' });
            this.state.account_number === '' ? this.setState({ account_number_validate: 'form-control is-invalid' }) : this.setState({ account_number_validate: 'form-control' });
            this.state.account_name === '' ? this.setState({ account_name_validate: 'form-control is-invalid' }) : this.setState({ account_name_validate: 'form-control' });
        } else {
            this.props.submitForm();
        }
    }


    render() {
        return (

            <div className="card" >
                <div className="card-body p-6">
                    <div className="card-title">Create new account</div>
                    <div className="form-group">
                        <label className="form-label">Bank Name</label>
                        <input type="text" className={this.state.bank_name_validate} onChange={this.onChangeChild_} value={this.state.bank_name} name="bank_name" placeholder="Enter Bank name" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Account Name</label>
                        <input type="text" className={this.state.account_name_validate} onChange={this.onChangeChild_} value={this.state.account_name} name="account_name" placeholder="Enter Account Name" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Account Number</label>
                        <input type="text" className={this.state.account_number_validate} onChange={this.onChangeChild_} value={this.state.account_number} name="account_number" placeholder="Enter Account Number" />
                    </div>
                    <div className="form-group">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label">Agree the <a href="terms.html">terms and policy</a></span>
                        </label>
                    </div>
                    <div className="form-footer">
                        <button type="submit" onClick={this.submitForm_} className="btn btn-primary btn-block">Create new account</button>
                    </div>
                </div>
            </div>

        );
    }
}
export default Home;