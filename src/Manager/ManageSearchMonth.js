import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Col, ControlLabel, FormControl } from 'react-bootstrap';

class ManageSearchMonth extends Component {
  render() {
    return (
    <Col md={8}>
        <ControlLabel id="searchCharts">Search : </ControlLabel>
        <FormControl 
            name="myDate" 
            className="monthYearPicker btn btn-default" 
            value="October 2016"/>
    </Col>
    );
  }
}

export default ManageSearchMonth;