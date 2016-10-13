import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Button, Form, FormGroup, FormControl, ControlLabel, Table, Modal, OverlayTrigger } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import firebase from 'firebase';
//import logo from './logo.svg';

var config = {
apiKey: "AIzaSyC6opwtv3_uAp-P0GMI-OpoLSxuyPUdRhc",
authDomain: "expense-tracker-data.firebaseapp.com",
databaseURL: "https://expense-tracker-data.firebaseio.com",
storageBucket: "",
messagingSenderId: "826824591907"
};
firebase.initializeApp(config);


class Navigation extends Component {
  render() {
    return (
        <Navbar>
           <Navbar.Header>
             <Navbar.Brand>
               <a href="#">React-Bootstrap</a>
             </Navbar.Brand>
           </Navbar.Header>
           <Nav className="navbar-right">
             <NavItem eventKey={1} href="#">Home</NavItem>
             <NavItem eventKey={2} href="#">Dashboard</NavItem>
             <NavItem eventKey={3} href="#">Manage</NavItem>
             <NavItem eventKey={4} href="#">Sign In</NavItem>
                <NavDropdown eventKey={5} title="My Account" id="basic-nav-dropdown">
                   <MenuItem eventKey={5.1}>Settings</MenuItem>
                   <MenuItem eventKey={5.2}>Logout</MenuItem>
                </NavDropdown>
           </Nav>
         </Navbar>
    );
  }
}


class ManageHeading extends Component {
  constructor(props) {
      super(props);
      this.state = {
          heading: 'Manage Expenses'
      }
  }

  render() {
    return (
        <Row>
            <Col md={12}>
                <h1 className="m-b-30">{ this.state.heading }</h1>
            </Col>
        </Row>
    );
  }
}


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


const AddExpense = React.createClass({
  getInitialState() {
    return { 
        newCategory: 'food',
        showModal: false };
  },

  render() {
    return (
      <div>

        <Col md={4}>
        <Button
          bsStyle="default"
          className="btnAdd"
          onClick={this.open}
        >
        <FontAwesome name="plus"/> Add Expense
        </Button>
        </Col>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Expense</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <FormGroup>
                    <ControlLabel 
                        className="input-group-addon">
                        Date
                    </ControlLabel>
                    <FormControl 
                        value={ this.state.newDate } 
                        onChange={ this.updateDate }
                        type="text" 
                        className="addDate" 
                        placeholder="DD-MM-YYYY" 
                        id="addDate"
                    />
                </FormGroup>
        
        
                <FormGroup>
                    <ControlLabel 
                        className="input-group-addon">
                        Store
                    </ControlLabel>
                    <FormControl 
                        value={ this.state.newStore } 
                        onChange={ this.updateStore }
                        type="text" 
                        className="form-control" 
                        placeholder="Store" 
                        aria-describedby="store">
                    </FormControl>
                </FormGroup>
        
                <FormGroup>
                    <ControlLabel 
                        className="input-group-addon">
                        Price
                    </ControlLabel>
                    <FormControl
                        value={this.state.newPrice } 
                        onChange={ this.updatePrice }
                        type="text"
                        placeholder="Price" 
                        aria-label="price"
                    />
                </FormGroup>
        
                <FormGroup>
                    <ControlLabel 
                        className="input-group-addon">
                        Description
                    </ControlLabel>
                    <FormControl
                        value={ this.state.newDescription } 
                        onChange={ this.updateDescription }
                        type="text"
                        placeholder="Description" 
                        aria-label="description"
                    />
                </FormGroup>
        
        
                <FormGroup>
                    <ControlLabel 
                        className="input-group-addon">
                        Category
                    </ControlLabel>
                    <FormControl
                        componentClass="select"
                        value={this.state.newCategory}
                        onChange={this.updateCategory}
                    >
                        <option value="food">Food</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="auto">Auto</option>
                    </FormControl>
                </FormGroup>
        
        
        
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button className="btnAdd" onClick={ this.addExpense }>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
    
  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  updateDate: function(event) {
    this.setState({ newDate: event.target.value });
  },  
  updateStore: function(event) {
    this.setState({ newStore: event.target.value });
  },    
  updatePrice: function(event) {
    this.setState({ newPrice: event.target.value });
  },  
  updateDescription: function(event) {
    this.setState({ newDescription: event.target.value });
  },  
  updateCategory: function(event) {
    this.setState({ newCategory: event.target.value });
  },
    
    
    
    
 componentDidMount() {
     var component = this;
     
        this.firebaseRef = firebase.database().ref('expenses');
        this.firebaseRef.on('child_added', (dataSnapshot) => {
            console.log(dataSnapshot.key, dataSnapshot.val());
            var expenses = this.props.expenses;
       
            var id = dataSnapshot.key;
            expenses[id] = dataSnapshot.val();
       
            this.setState({ expenses:expenses });
        });
 },
    
    
  addExpense() {
    var newExpense = { 
        date: this.state.newDate,
        store: this.state.newStore,
        price: this.state.newPrice,
        description: this.state.newDescription,
        category: this.state.newCategory
    }
    
    console.log(newExpense);
    
    this.firebaseRef.push(newExpense);
    this.setState({newDate: '', newStore: '', newPrice: '', newDescription:''});
      this.close();
  }
    
});



class ManageTable extends Component {
    
  deleteExpense(id){
      this.firebaseRef.child(id).remove();
      console.log('deleteeee');
  }
    
 componentDidMount() {
     var component = this;
     
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
                    <td>
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
                        value={ expense.price }
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
                    <option value="shopping">Parking</option>
                    <option value="auto">Auto</option>
                    <option value="savings">Savings</option>
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



class App extends Component {
    
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
    return (
        <div>
            <Navigation />
            <div className="dashboard">
                <div className="container">
                    <ManageHeading />
        
                    <Row>
                        <ManageSearchMonth />
                        <AddExpense expenses={this.state.expenses}/>
                    </Row>
        
                    <ManageTable expenses={this.state.expenses}/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;

