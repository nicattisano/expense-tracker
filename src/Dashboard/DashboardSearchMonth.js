import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Col, ControlLabel, FormControl } from 'react-bootstrap';

var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

class DashboardSearchMonth extends Component {

    constructor(props) {
        super(props);
         this.state = {
            startDate: moment(),
            endDate: moment(),
            maxDate: moment(),
            dateFormat: 'YYYY/MM/DD'
    }
  }

  handleChangeStart(date) {
    console.log(date._d);
    this.setState({
      startDate: date
    });
  }

    handleChangeEnd(date) {
    console.log(date._d);
    this.setState({
      endDate: date
    });
  }

  handleDateRange() {
    {/*
    console.log('start date: ');
    console.log(this.state.startDate._d);
    console.log('end date: ');
    console.log(this.state.endDate._d);
    */}
  }


    render() {
        return(

                <Col md={12} className="m-b-20">
                    <ControlLabel
                        id="searchChartsStart">
                        Start Date :
                    </ControlLabel>



<DatePicker
    className="monthYearPicker btn btn-default"
    dateFormat="MMM DD YYYY"
    selected={this.state.startDate}
    selectsStart    startDate={this.state.startDate}
    endDate={this.state.endDate}
    onChange={this.handleChangeStart.bind(this)}  />


                    <ControlLabel
                        id="searchChartsEnd">
                        End Date :
                    </ControlLabel>


<DatePicker
    className="monthYearPicker btn btn-default"
    selected={this.state.endDate}
    dateFormat="MMM DD YYYY"
    selectsEnd    startDate={this.state.startDate}
    endDate={this.state.endDate}
    onChange={this.handleChangeEnd.bind(this)}  />


    <button
        className="btn btn-default btnSearchFilter"
        onClick={this.handleDateRange.bind(this)}>Go
    </button>

        </Col>

        )
    }
}

export default DashboardSearchMonth;
