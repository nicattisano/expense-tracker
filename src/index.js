import React from 'react';
import ReactDOM from 'react-dom';
import App, { Manager, Dashboard } from './App';
import './index.css';

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
//import router from 'react-router';
//import route from 'react-router';
//import link from 'react-router';
//import hashHistory from 'react-router';

import { MixpanelProvider } from 'react-mixpanel';
    
ReactDOM.render((

  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="dashboard" component={Dashboard}/>
        <Route path="manage" component={Manager}/>
    </Route>
  </Router>
), document.getElementById('root'))
