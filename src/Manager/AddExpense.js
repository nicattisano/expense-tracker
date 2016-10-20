import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Row, Col, Button, Form, FormGroup, FormControl, ControlLabel, Table, Modal, OverlayTrigger } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import firebase from 'firebase';
import { Link } from 'react-router'
//import link from 'react-router';

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
                        type="date" 
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

export default AddExpense;