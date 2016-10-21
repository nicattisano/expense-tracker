import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Container, Button, Form, FormGroup, FormControl, ControlLabel, Table, Modal, OverlayTrigger } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import firebase from 'firebase';
import { Link } from 'react-router'
import link from 'react-router';

import Navigation from './Navigation';
import ManageHeading from './Manager/ManageHeading';
import ManageSearchMonth from './Manager/ManageSearchMonth';
import AddExpense from './Manager/AddExpense';
import ManageTable from './Manager/ManageTable';

import DashboardHeading from './Dashboard/DashboardHeading';
import DashboardSearchMonth from './Dashboard/DashboardSearchMonth';
import DashboardPieChart from './Dashboard/DashboardPieChart';
import DashboardLatestExpenses from './Dashboard/DashboardLatestExpenses';

//import logo from './logo.svg';

var config = {
apiKey: "AIzaSyC6opwtv3_uAp-P0GMI-OpoLSxuyPUdRhc",
authDomain: "expense-tracker-data.firebaseapp.com",
databaseURL: "https://expense-tracker-data.firebaseio.com",
storageBucket: "",
messagingSenderId: "826824591907"
};
firebase.initializeApp(config);


import mixpanel from 'mixpanel-browser';

mixpanel.init('04d63e33f661b4245dc8b8e2945c30b7');
mixpanel.track('Initialized Application', {
    awesome: 'yes'
})


class Manager extends Component {
    constructor(props) {
        super(props);
         this.state = {
            expenses: {
    //            id1: {
    //                date: 'October 3',
    //                store: 'Tims',
    //                price: '$5',
    //                description: 'blahhh',
    //                category: 'Entertainment'
    //            }
            }
      }
    }
    render() {
        return <div>
        <ManageHeading />
            <Row>
                <ManageSearchMonth />
                <AddExpense expenses={this.state.expenses}/>
            </Row>

            <ManageTable expenses={this.state.expenses}/>
            </div>
    }
}


class Dashboard extends Component {
    
    constructor(props) {
        super(props);
         this.state = {
            expenses: {
    //            id1: {
    //                date: 'October 3',
    //                store: 'Tims',
    //                price: '$5',
    //                description: 'blahhh',
    //                category: 'Entertainment'
    //            }
            }
      }
    }
    
    render() {
        return(
            
        <div className="dashboard">
            <DashboardHeading />
            <Row>
                <DashboardSearchMonth />
            <DashboardPieChart />
               <DashboardLatestExpenses expenses={this.state.expenses}/>
            </Row>
        </div>   
            
        )
    }
}


class App extends Component {
    
 constructor(props) {
      super(props);
  }
    
  render() {
    return (
        <div>
            <Navigation />
            <div className="dashboard">
                <div className="container">
                    {this.props.children}               
                </div>
            </div>
        </div>
    );
  }
}

export default App;
export { Manager, Dashboard };


