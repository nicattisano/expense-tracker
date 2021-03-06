import React from 'react';
import ReactDOM from 'react-dom';
import App, { Manager, Dashboard } from './App';
import Login from './Login/Login';
import './index.css';

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
//import router from 'react-router';
//import route from 'react-router';
//import link from 'react-router';
//import hashHistory from 'react-router';

    
ReactDOM.render((

  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="dashboard" component={Dashboard}/>
        <Route path="manage" component={Manager}/>
        <Route path="login" component={Login}/>
    </Route>
  </Router>
), document.getElementById('root'))
