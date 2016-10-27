import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Col } from 'react-bootstrap';

import {Chart} from 'react-google-charts';
import firebase from 'firebase';


class DashboardPieChart extends React.Component {
    
  constructor(props){
    super(props);
    this.state={
    expenses: {
    //            id1: {
    //                date: 'October 3',
    //                store: 'Tims',
    //                price: '$5',
    //                description: 'blahhh',
    //                category: 'Entertainment'
    //            }
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
            ['Category', 'Amount'],
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
          
          <div>
          <Col md={6}>
        <Chart chartType="PieChart" data={this.categorize(this.state.expenses)} options={this.state.options} graph_id="PieChart"  width={"700px"} height={"500px"}  legend_toggle={true} />
          </Col>
    </div>
    
      );
  }
    
    
categorize(expenses) {
    
//    console.log(expenses);
    var cats=['food', 'entertainment', 'auto', 'shopping', 'savings', 'condo', 'wedding', 'travel', 'gifts', 'misc'];
    
    var chartData = [['Category', 'Amount']]
    
    for (var i=0; i < cats.length; i++ ) {
        var categoryName = cats[i];
        var totalCost = 0;
        
        for (var key in expenses) {
            if (expenses[key].category === categoryName) {
                totalCost += parseInt(expenses[key].price);
            }
        }
        
        
//        categories[categoryName] = totalCost;
        chartData.push([categoryName.charAt(0).toUpperCase() + categoryName.substr(1).toLowerCase(), totalCost])
    }
    
//    console.log(chartData);
    return chartData;
}
    
 componentDidMount() {
     
        this.firebaseRef = firebase.database().ref('expenses');
        this.firebaseRef.on('child_added', (dataSnapshot) => {
//            console.log(dataSnapshot.key, dataSnapshot.val());
            var expenses = this.state.expenses;
//       console.log('b4 ' + expenses);
            var id = dataSnapshot.key;
            expenses[id] = dataSnapshot.val();
       
//            console.log( 'after ' + expenses);
            
            this.setState({ expenses:expenses });
        });
    
 }
    
    
};



export default DashboardPieChart;