import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Col, ControlLabel, FormControl } from 'react-bootstrap';
import { Link } from 'react-router'
//import link from 'react-router';

class DashboardSearchMonth extends Component {
    
    render() {
        return(

                <Col md={12} className="m-b-20">
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
            
        )
    }
}

export default DashboardSearchMonth;