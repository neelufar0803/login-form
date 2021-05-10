import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Conform from './Conform';
import Success from './Success.js';
import './Success.css';

export class UserForm extends Component{
  state = {
      step: 1,
      firstName: '',
      lastName: '',
      password:'',
      email: '',
      occupation: '',
      city: '',
      address: ''
  }  

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
        step: step + 1
    });
}

// go back to prev step
prevStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    });
}

//handle fields change

handleChange = input => e => {
    this.setState({[input]: e.target.value});
}

   render(){
       const { step } = this.state;
       const { firstName, lastName, password, email, occupation, city, address} = this.state;
       const values = { firstName, password, lastName, email, occupation, city, address}
      switch(step){
          case 1:
              return (
                  <FormUserDetails
                     nextStep={this.nextStep}
                     handleChange={this.handleChange}
                     values={values}
                  />
              );
          case 2:
            return (
                <FormPersonalDetails
                   nextStep={this.nextStep}
                   prevStep={this.prevStep}
                   handleChange={this.handleChange}
                   values={values}
                />
            );
          case 3:
            return (
                <Conform
                   nextStep={this.nextStep}
                   prevStep={this.prevStep}
                   values={values}
                />
            );
          case 4:
              return <Success/>;
      }
   }
}

export default UserForm; 