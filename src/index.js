import React from 'react';
import ReactDOM from 'react-dom';
import App, { Manager, About } from './App';
import './index.css';

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
//import router from 'react-router';
//import route from 'react-router';
//import link from 'react-router';
//import hashHistory from 'react-router';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Manager} />
        <Route path="manage" component={Manager}/>
        <Route path="about" component={About}/>
    </Route>
  </Router>
), document.getElementById('root'))

//ReactDOM.render(
//  <App />,
//  document.getElementById('root')
//);