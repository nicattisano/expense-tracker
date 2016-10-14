import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router'
//import link from 'react-router';

class Navigation extends Component {
  render() {
    return (
        <Navbar>
           <Navbar.Header>
             <Navbar.Brand>
               <a href="#">Dollar Book</a>
             </Navbar.Brand>
           </Navbar.Header>
           <Nav className="navbar-right">
        
             <NavItem><Link to="/about" className="aLink">Dashboard</Link></NavItem>
             <NavItem><Link to="/manage" className="aLink">Manage</Link></NavItem>
             <NavItem eventKey={4} href="#">Sign In</NavItem>
                <NavDropdown eventKey={5} title="My Account" id="basic-nav-dropdown">
                   <MenuItem eventKey={5.1}>Settings</MenuItem>
                   <MenuItem eventKey={5.2}>Logout</MenuItem>
                </NavDropdown>
           </Nav>
         </Navbar>
    );
  }
}

export default Navigation;