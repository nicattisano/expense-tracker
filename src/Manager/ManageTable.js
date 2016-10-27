import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Row, Col, Button, FormControl, Table } from 'react-bootstrap';
import firebase from 'firebase';


class ManageTable extends Component {
    
  deleteExpense(id){
      this.firebaseRef.child(id).remove();
      console.log('deleteeee');
  }
    
 componentDidMount() {
     
        this.firebaseRef = firebase.database().ref('expenses');
        this.firebaseRef.on('child_added', (dataSnapshot) => {
            console.log(dataSnapshot.key, dataSnapshot.val());
            var expenses = this.props.expenses;
       
            var id = dataSnapshot.key;
            expenses[id] = dataSnapshot.val();
       
            this.setState({ expenses:expenses });
        });
    
        this.firebaseRef.on('child_removed', (dataSnapshot) => {
            console.log(dataSnapshot.key, dataSnapshot.val());
            var expenses = this.state.expenses;
            delete expenses[dataSnapshot.key];
            this.setState({ expenses:expenses });
        })
        
 }
     
    
  render() {
    return (
        <Row>
        <Col md={12}>
        <h3>All Expenses for October 2016</h3>
        <Table className="recentExpensesTable">
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Store</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Category</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
        
{ Object.keys(this.props.expenses).map((id) => {
            var expense = this.props.expenses[id];
               return <tr key={ id }>
                    <td><div className={'dot dot' + expense.category}></div>
                    <FormControl 
                        type="text" 
                        className="datepicker noStyle" 
                        id="datepicker" 
                        value={ expense.date }
                    />
                    </td>
    
                    <td>
                    <FormControl 
                        type="text" 
                        className="noStyle" 
                        value={ expense.store }
                    />
                    </td>
                    <td className="priceTd">
                    <FormControl 
                        type="text" 
                        className="noStyle priceVal" 
                        value={ '$' + expense.price }
                    />
                    </td>
                    <td>
                    <FormControl 
                        type="text" 
                        className="noStyle" 
                        value={ expense.description }
                    />
                    </td>
                    <td>
                    <FormControl
                        componentClass="select"
                        className="noStyle"
                        value={expense.category}
                    >
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="auto">Auto</option>
                    <option value="shopping">Shopping</option>
                    <option value="savings">Savings</option>
                    <option value="condo">Condo</option>
                    <option value="wedding">Wedding</option>
                    <option value="travel">Travel</option>
                    <option value="gifts">Gifts</option>
                    <option value="misc">Miscellaneous</option>
                    </FormControl>

                    </td>
                    <td>
            <Button onClick={ () => this.deleteExpense(id) } className="deleteBtn">
            <i className="fa fa-times-circle" aria-hidden="true"></i>
                        </Button>
                    </td>
                </tr>
            
})}
    
            </tbody>
        </Table>

        </Col>
        </Row>
    );
  }
}

export default ManageTable;