import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, } from 'react-router-dom';
import Registration from './Landing/auth/registration';
import SignIn from './Landing/auth/signin';
import Dashboard from './Landing/dashboard';
import Home from './Landing/home';
import ls from 'local-storage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    ls.get('token_') != null
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
);

const GuestRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    ls.get('token_') == null
      ? <Component {...props} />
      : <Redirect to='/dashboard' />
  )} />
);


const App = () => (
  <Router>
    <Route exact path='/' component={Home} />
    <GuestRoute path='/register' component={Registration} />
    <GuestRoute path='/login' component={SignIn} />
    <PrivateRoute path='/dashboard' component={Dashboard} />
    <Route path='/logout' render={(props) => (
      ls.set('token_', null), <Redirect to='/' />
    )} />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'))
