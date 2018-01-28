import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Row, Col } from 'react-bootstrap';

class ManageHeading extends Component {
  constructor(props) {
      super(props);
      this.state = {
          heading: 'Manage Expenses'
      }
  }

  render() {
    return (
            <Col xs={8}>
                <h1 className="m-b-30">{ this.state.heading }</h1>
            </Col>
    );
  }
}

export default ManageHeading;
