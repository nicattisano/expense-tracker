import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Row, Col, Form, ControlLabel, FormControl, FormGroup, Button} from 'react-bootstrap';
import firebase from 'firebase';

class LoginForm extends Component {

    constructor(props) {
        super(props);
         this.state = {
            email: '',
            password: ''
    }
  }
    
    
    updateValue(key, evt) {
        console.log(key);
        console.log(evt);
        console.log(this);
        
        var input = this.state;
        input[key] = evt.target.value;
        this.setState( input );
    }
    
    login() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            this.props.onLogin(user);   
        });
    }
    
    signup() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            this.props.onLogin(user);   
        });
        
        console.log(this);
        console.log(this.state.email);
        console.log(this.state.password);
    }
    
    render() {
        return(
            
            <div>

      <Form className="form-signin">
        <h2 className="form-signin-heading">Sign In</h2>
<FormGroup>
    <ControlLabel className="sr-only">
    Email Address: 
    </ControlLabel>

    <FormControl 
        type="email"
        className="form-control m-b-10"
        id="inputEmail"
        placeholder="Email address"
        value={this.state.email}
        onChange={this.updateValue.bind(this, 'email')}
    /> 
</FormGroup>    
    
<FormGroup>
    <ControlLabel className="sr-only">Password:</ControlLabel> 
    <FormControl 
        type="password"
        className="form-control m-b-10"
        id="inputPassword"
        placeholder="Password"
        value={this.state.password}
        onChange={this.updateValue.bind(this, 'password')}
    />  
</FormGroup>
            
<FormGroup>    
    <Button 
        className="btn btn-lg btn-primary btn-block btnAdd m-b-10"
        id="logIn"
        onClick={this.login.bind(this)}
    >Log In</Button>
</FormGroup>
            
            
<FormGroup>    
    <Button 
        className="btn btn-lg btn-primary btn-block btnAdd m-b-10"
        id="signUp"
        onClick={this.signup.bind(this)}
    >Sign Up</Button>
</FormGroup>
            
</Form>

<p>Dont have an account?<a href="#" className="createAccountLink">Create one here</a></p>
      
            </div>
            
        )
    }
}

export default LoginForm;