import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Col, Table } from 'react-bootstrap';
import firebase from 'firebase';

class DashboardLatestExpenses extends Component {

    constructor(props) {
        super(props);
         this.state = {
            expenses: {
    //            id1: {
    //                date: 'October 3',
    //                store: 'Tims',
    //                price: '$5',
    //                description: 'blahhh',
    //                category: 'Entertainment'
    //            }
            }
      }
    }
    
    render() {
        return(

            <Col md={6}>
                <h3>Recent Expenses</h3>
                <Table className="table recentExpensesTable">
                    <thead>
                        <tr>
                            <td>Store</td>
                            <td>Price</td>
                            <td>Category</td>
                        </tr>
                    </thead>
                    <tbody>
            
            { Object.keys(this.props.expenses).map((id) => {
            var expense = this.props.expenses[id];
               return <tr key={ id }>
                            <td><div className={'dot dot' + expense.category}></div>{ expense.store.charAt(0).toUpperCase() + expense.store.substr(1).toLowerCase() }</td>
                            <td>{ '$' + expense.price }</td>
                            <td>{ expense.category.charAt(0).toUpperCase() + expense.category.substr(1).toLowerCase() }</td>
                        </tr>
            })}
                    </tbody>

                </Table>
            </Col>
            
            
        )
    }
    
    
 componentDidMount() {
//     var component = this;
     
        this.firebaseRef = firebase.database().ref('expenses');
        this.firebaseRef.on('child_added', (dataSnapshot) => {
//            console.log(dataSnapshot.key, dataSnapshot.val());
            var expenses = this.props.expenses;
       
            var id = dataSnapshot.key;
            expenses[id] = dataSnapshot.val();
       
            this.setState({ expenses:expenses });
        });
    
 }
    
    
}

export default DashboardLatestExpenses;