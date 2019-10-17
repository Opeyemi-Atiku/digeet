import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Registration from './Landing//registration';


  const App = () => (
      <Router>
          <Route  path='/' component={Registration} />          
      </Router>
    );

    ReactDOM.render(<App />, document.getElementById('app'))
