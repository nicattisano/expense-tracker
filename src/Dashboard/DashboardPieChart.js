import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Col, ControlLabel, FormControl } from 'react-bootstrap';
import { Link } from 'react-router'
//import link from 'react-router';
import {Chart} from 'react-google-charts';




class DashboardPieChart extends React.Component {
    
  constructor(props){
    super(props);
    this.state={
      options:{
          title: 'Age vs. Weight comparison',
          hAxis: {title: 'Age', minValue: 0, maxValue: 15},
          vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
          legend: 'none'
      },
      data:[
            ['Age', 'Weight'],
            [ 8,      12],
            [ 4,      5.5],
            [ 11,     14],
            [ 4,      5],
            [ 3,      3.5],
            [ 6.5,    7]
      ]
    };
  }
    
  render() {
      return (
          <Col md={6}>
        <Chart chartType="ScatterChart" data={this.state.data} options={this.state.options} graph_id="ScatterChart"  width={"500px"} height={"400px"}  legend_toggle={true} />
          </Col>
      );
  }
};





export default DashboardPieChart;