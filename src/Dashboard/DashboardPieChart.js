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
    expenses: {
        
    },
      options:{
          title: 'October 2016 Breakdown',
            pieHole: 0.4,
            backgroundColor: '#2a2a36',
            fontName: 'Montserrat',
            'legend': { 'textStyle': { 'color': '#fefeff' } },
            'titleTextStyle': {color: '#fefeff', fontName: null, fontSize: 18},
            chartArea:{left:10},
            colors:['#ff6b42','#7d4bff', '#fdcb4e', '#f23d5c', '#00affe', '#d500fa', '#287af8', '#4bb670']
      },
      data:[
            ['Categoy', 'Amount'],
            [ 'Food',      12],
            [ 'Entertainment',      5.5],
            [ 'Auto',     14],
            [ 'Savings',      5],
            [ 'Condo',      5],
            [ 'Wedding',      5],
            [ 'Gifts',      5],
            [ 'Misc',      3.5]
      ]
    };
  }
    
  render() {
      return (
          <Col md={6}>
        <Chart chartType="PieChart" data={this.state.data} options={this.state.options} graph_id="ScatterChart"  width={"700px"} height={"500px"}  legend_toggle={true} />
          </Col>
      );
  }
};



export default DashboardPieChart;