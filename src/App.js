import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Button, Form, FormGroup, FormControl, ControlLabel, Table, Modal, OverlayTrigger } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import firebase from 'firebase';
import { Link } from 'react-router'
import link from 'react-router';

import Navigation from './Navigation';
import ManageHeading from './Manager/ManageHeading';
import ManageSearchMonth from './Manager/ManageSearchMonth';
import AddExpense from './Manager/AddExpense';
import ManageTable from './Manager/ManageTable';

//import logo from './logo.svg';

var config = {
apiKey: "AIzaSyC6opwtv3_uAp-P0GMI-OpoLSxuyPUdRhc",
authDomain: "expense-tracker-data.firebaseapp.com",
databaseURL: "https://expense-tracker-data.firebaseio.com",
storageBucket: "",
messagingSenderId: "826824591907"
};
firebase.initializeApp(config);


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

class About extends Component {
    
    constructor(props) { 
        super(props);
    }
    render() {
        return <h1>About</h1>;
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
export { Manager, About };


