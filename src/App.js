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

class Dashboard extends Component {
    
    constructor(props) { 
        super(props);
    }
    render() {
        return(

            
        <div className="dashboard">
                <Row>
                    <Col md={12}>
                        <h1 className="m-b-30">Dashboard</h1>
                    </Col>
                </Row>
                <Row>
                <Col md={6}>
                    <ControlLabel 
                        id="searchCharts">
                        Search :
                    </ControlLabel>
        <FormControl 
            name="myDate" 
            className="monthYearPicker btn btn-default" 
            value="October 2016"
        />


      


                    </Col>

                    <Col md={6}>
                        <h3>Recent Expenses</h3>
                        <Table className="table recentExpensesTable">
                            <thead>
                                <tr>
                                    <td>Store</td>
                                    <td>Price</td>
                                    <td>Category</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tim Hortons</td>
                                    <td>$4.05</td>
                                    <td>Food</td>
                                </tr>                        
                                <tr>
                                    <td>The Bay</td>
                                    <td>$80.65</td>
                                    <td>Shopping</td>
                                </tr>                        
                                <tr>
                                    <td>Condo</td>
                                    <td>$1500</td>
                                    <td>Savings</td>
                                </tr>                        
                                <tr>
                                    <td>Store</td>
                                    <td>Price</td>
                                    <td>Category</td>
                                </tr>
                            </tbody>
                        
                        </Table>
                    </Col>
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


