import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Button, Form, FormGroup, FormControl, ControlLabel, Table, Modal, OverlayTrigger } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import firebase from 'firebase';
import { Link } from 'react-router'
import link from 'react-router';

import Navigation from './Navigation';

import DashboardHeading from './Dashboard/DashboardHeading';
import DashboardSearchMonth from './Dashboard/DashboardSearchMonth';
import DashboardPieChart from './Dashboard/DashboardPieChart';
import DashboardLatestExpenses from './Dashboard/DashboardLatestExpenses';

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
             
      }
    }
    
    render() {
        return(
            
        <div className="dashboard">
            <DashboardHeading />
            <Row>
            <DashboardSearchMonth />
            <DashboardPieChart options={this.state.options}, data={this.state.data} />
               <DashboardLatestExpenses expenses={this.state.expenses}/>
            </Row>
        </div>   
            
        )
    }
}

export default Dashboard;
export { Navigation, DashboardHeading, DashboardSearchMonth, DashboardPieChart, DashboardLatestExpenses };