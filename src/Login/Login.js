import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Nav, NavItem, NavDropdown, Row, Col, Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import firebase from 'firebase';
import { Link } from 'react-router'
import link from 'react-router';

import LoginForm from './LoginForm';

class Login extends Component {


    render() {
        return(
            
    <section className="login">
        <div className="container">
            <Row>
                <Col md={4} mdOffset={4}>
                    <LoginForm />
                </Col>
            </Row>
        </div>
    </section>
            
        )
    }
}

export default Login;