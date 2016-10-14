import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Row, Col} from 'react-bootstrap';
import firebase from 'firebase';

class DashboardHeading extends Component {

    render() {
        return(

        <Row>
            <Col md={12}>
                <h1 className="m-b-30">Dashboard</h1>
            </Col>
        </Row>
            
        )
    }
}

export default DashboardHeading;