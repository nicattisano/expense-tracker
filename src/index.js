import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


//import { Router, Route, Link } from 'react-router'
//import Router from 'react-router';
//import Route from 'react-router';
//import Link from 'react-router';
//import browserHistory from 'react-router';
//
//ReactDOM.render((
//  <Router history={router.browserHistory}>
//    <Route path="/" component={App}>
//      <Route path="page1" component={Page1}/>
//      <Route path="page2" component={Page2}/>
//    </Route>
//  </Router>
//), document.getElementById('placeholder'))

ReactDOM.render(
  <App />,
  document.getElementById('root')
);