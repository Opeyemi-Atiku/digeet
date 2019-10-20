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
            age_range: '14-25',
            bank_name: '',
            account_name: '',
            account_number: '',
            step1: 'is-active',
            step2: '',
            step3: '',
            step4: '',
            errorStep: '',
            email_validate_error: '',
            loader: "",
            previousState: false,
        }
        this.onStepChange = this.onStepChange.bind(this);
        this.onChangeParent = this.onChangeParent.bind(this);
        this.submitForm_ = this.submitForm_.bind(this);
        this.changeStep_ = this.changeStep_.bind(this);
        this.changeLoaderState_ = this.changeLoaderState_.bind(this);
    }

    onStepChange(stats) {

        switch (stats.activeStep) {
            case 1:
                this.setState({
                    step1: 'is-active',
                    step2: '', step3: '', step4: ''
                });

                break;
            case 2:
                this.setState({
                    step2: 'is-active',
                    step1: '', step3: '', step4: ''
                });

                break;
            case 3:
                this.setState({
                    step3: 'is-active',
                    step1: '', step2: '', step4: ''
                });

                break;
            case 4:
                this.setState({
                    step4: 'is-active',
                    step1: '', step2: '', step3: ''
                });

                break;
        }
    }

    onChangeParent(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    changeStep_() {
        this.setState({
            step4: 'is-active',
            step1: '', step2: '', step3: ''
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
        formData.append("bank_name", input.bank_name);
        formData.append("account_name", input.account_name);
        formData.append("account_number", input.account_number);

        axios.post("/api/account/register", formData).then((response) => {
            if (response.data.status == 'error') {
                if (response.data.validation_error.email != '') {
                    this.setState({
                        errorStep: Math.floor((Math.random() * 10) + 1),
                        email_validate_error: response.data.validation_error.email
                    });
                    this.setState({
                        errorStep: '',
                        loader: "",
                        previousState: false,
                    });
                }
                return;
            }
            if (response.data.token !== '') {
                ls.set('token_', response.data.access_token);
                window.location = '/dashboard';
            } else {
                console.log(response);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    changeLoaderState_(loader_, state_){
        this.setState({loader: loader_, previousState: state_});
    }

    render() {
        return (
            <div className="page-single">
                <div className="container">
                    <div className="row">
                        <div className="col col-login mx-auto">
                            <div className="text-center mb-6">
                                <img src="./demo/brand/tabler.svg" className="h-6" alt="" />
                                <div className="container-fluid">
                                    <br /><br />
                                    <ul className="list-unstyled multi-steps">
                                        <li className={this.state.step1}>Step 1</li>
                                        <li className={this.state.step2}>Step 2</li>
                                        <li className={this.state.step3}>Step 3</li>
                                        <li className={this.state.step4}>Finish</li>
                                    </ul>
                                </div>
                            </div>
                            <StepWizard
                                onStepChange={this.onStepChange}
                            >
                                <Step1
                                    onChangeChild={this.onChangeParent}
                                    credentital={this.state}
                                    email_validate_error_={this.state.email_validate_error}
                                />
                                <Step2
                                    onChangeChild={this.onChangeParent}
                                    credentital={this.state}
                                />
                                <Step3
                                    onChangeChild={this.onChangeParent}
                                    credentital={this.state}
                                    submitForm={this.submitForm_}
                                    changeStep={this.changeStep_}
                                    errorStep_={this.state.errorStep}
                                    loader_={this.state.loader}
                                    previousState_={this.state.previousState}
                                    changeLoaderState={this.changeLoaderState_}
                                />
                            </StepWizard>
                            <div className="text-center text-muted">
                                Already have account? <a href="/login">Sign in</a>
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
            },
            email_validate_error: this.props.email_validate_error_
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
                        <label className="form-label">Email address <span style={this.state.gender_validate_color}>{this.props.email_validate_error_}</span></label>
                        <input type="email" className={this.state.email_validate} onChange={this.onChangeChild_} value={this.state.email} name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="password" className={this.state.password_validate} onChange={this.onChangeChild_} value={this.state.password} name="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Select Gender</label>
                        <select name="gender" onChange={this.onChangeChild_} value={this.state.gender} className="form-control custom-select">
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
                    </div>
                    <div className="form-footer text-right">
                        <button type="submit" onClick={this.nextForm} className="btn btn-primary btn-small">Next <i className="fa fa-arrow-right"></i></button>
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
            age_range_validate: 'form-control custom-select',
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
                this.setState({ age_range_validate: 'form-control custom-select' });
                break;
        }
    }

    nextForm() {
        if (this.state.state == '' || this.state.whatsapp_number == '' || this.state.age_range == '') {
            this.state.state === '' ? this.setState({ state_validate: 'form-control is-invalid' }) : this.setState({ state_validate: 'form-control' });
            this.state.whatsapp_number === '' ? this.setState({ whatsapp_number_validate: 'form-control is-invalid' }) : this.setState({ whatsapp_number_validate: 'form-control' });
            this.state.age_range === '' ? this.setState({ age_range_validate: 'form-control custom-select is-invalid' }) : this.setState({ age_range_validate: 'form-control  custom-select' });
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
                        <label className="form-label">Select Age Rang</label>
                        <select name="age_range" onChange={this.onChangeChild_} value={this.state.age_range} className={this.state.age_range_validate}>
                            <option value="14-25">14-25</option>
                            <option value="26-35">26-35</option>
                            <option value="36-50">36-50</option>
                            <option value="51-71">51-71</option>
                            <option value="71-...">71-...</option>
                        </select>
                    </div>
                    <div className="form-footer text-right">
                        <button type="submit" onClick={this.props.previousStep} className="btn btn-primary btn-small"><i className="fa fa-arrow-left"></i> Previous</button>
                        &nbsp;
                        <button type="submit" onClick={this.nextForm} className="btn btn-primary btn-small">Next <i className="fa fa-arrow-right"></i></button>
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
            term: false,
            term_validate: 'custom-control-input',
            loader: this.props.loader_,
            previousState: this.props.previousState_,
            errorStep: this.props.errorStep_
        };

        this.onChangeChild_ = this.onChangeChild_.bind(this);
        this.submitForm_ = this.submitForm_.bind(this);
        this.term = this.term.bind(this);
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

    componentDidUpdate(prevProps) {
        if (this.props.errorStep_ !== '' && this.props.errorStep_ !== undefined) {
            this.props.firstStep();
        }
        if (prevProps.loader_ !== this.props.loader_) {
            this.setState({ loader: this.props.loader_});
        }
        if (prevProps.previousState_ !== this.props.previousState_) {
            this.setState({ previousState: this.props.previousState_});
        }
    }

    submitForm_() {
        if (this.state.bank_name == '' || this.state.account_number == '' || this.state.aaccount_name == '') {
            this.state.bank_name === '' ? this.setState({ bank_name_validate: 'form-control is-invalid' }) : this.setState({ bank_name_validate: 'form-control' });
            this.state.account_number === '' ? this.setState({ account_number_validate: 'form-control is-invalid' }) : this.setState({ account_number_validate: 'form-control' });
            this.state.account_name === '' ? this.setState({ account_name_validate: 'form-control is-invalid' }) : this.setState({ account_name_validate: 'form-control' });
        } else {
            if (this.state.term == true) {
                this.props.changeStep();                
                this.props.changeLoaderState('loader', true);
                setTimeout(this.props.submitForm(), 5000);
            } else {
                this.setState({ term_validate: 'custom-control-input is-invalid' });
            }

        }
    }

    term() {
        this.setState({ term: true });
        this.setState({ term_validate: 'custom-control-input' });
    }


    render() {
        return (

            <div className="card" >
                <div className="card-body p-6">
                    <div className='dimmer active'>
                        <div className={this.state.loader}></div>
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
                                <input type="checkbox" onClick={this.term} className={this.state.term_validate} />
                                <span className="custom-control-label">Agree the <a href="#">terms and policy</a></span>
                            </label>
                        </div>
                        <div className="form-footer text-right">
                            <button type="submit" onClick={this.props.previousStep} className="btn btn-primary btn-small" disabled={this.state.previousState}><i className="fa fa-arrow-left"></i> Previous</button>
                            &nbsp;&nbsp;
                        <button type="submit" onClick={this.submitForm_} className="btn btn-primary btn-small" disabled={this.state.previousState}>Create new account <i className="fa fa-send-o"></i></button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Home;