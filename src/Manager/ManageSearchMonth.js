import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Col, ControlLabel, FormControl } from 'react-bootstrap';
var moment = require('moment');
var DatePicker = require('react-datepicker');

class ManageSearchMonth extends Component {
  constructor(props) {
      super(props);
       this.state = {
          theMonth: moment(),
          dateFormat: 'YYYY/MM/DD'
  }
}

handleMonthChange(date) {
  this.setState({
    theMonth: date
  });
}

  render() {
    return (
    <Col md={8}>
        <ControlLabel id="searchCharts">Search : </ControlLabel>
        <DatePicker
            className="monthYearPicker btn btn-default"
            selected={this.state.theMonth}
            dateFormat="MMM YYYY"
            theMonth={this.state.theMonth}
            value={this.state.theMonth}
            onChange={this.handleMonthChange.bind(this)}  />
    </Col>
    );
  }
}

export default ManageSearchMonth;
