import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Row, Col, Form, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import firebase from 'firebase';

class LoginForm extends Component {

    constructor(props) {
        super(props);
         this.state = {
            email: '',
            password: '',
            mode: 'login'
    }
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
    />  
</FormGroup>
            
<FormGroup>    
    <FormControl 
        type="submit"
        className="btn btn-lg btn-primary btn-block btnAdd m-b-10"
        id="inputEmail"
        value="Sign In"
    /> 
</FormGroup>
</Form>

<p>Dont have an account?<a href="#" className="createAccountLink">Create one here</a></p>
      
            </div>
            
        )
    }
}

export default LoginForm;