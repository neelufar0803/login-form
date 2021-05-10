import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MailIcon from '@material-ui/icons/Mail';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return(
            <MuiThemeProvider>
              <React.Fragment>
                  <AppBar title="Enter User Details" />
                  <i class="fa fa-user " aria-hidden="true">   <TextField 
                     hintText=" Enter Your First Name"
                     floatingLabelText="First Name"
                     onChange={handleChange('firstName')}
                     defaultValue={values.firstName}
                  /></i>
                  <br/>
                  <i class="fa fa-user" aria-hidden="true">   <TextField 
                     hintText=" Enter Your last Name"
                     floatingLabelText="last Name"
                     onChange={handleChange('lastName')}
                     defaultValue={values.lastName}
                  /></i>
                  <br/>
                  <i class="fa fa-key" aria-hidden="true">  <TextField 
                    type="password"
                     hintText="Enter Your password"
                     floatingLabelText="password"
                     onChange={handleChange('password')}
                     defaultValue={values.email}
                  /></i>
                  <br/>
                  <i class="fa fa-key" aria-hidden="true">  <TextField 
                    type="password"
                     hintText="conform Your password"
                     floatingLabelText="conform password"
                     onChange={handleChange('password')}
                     defaultValue={values.email}
                  /></i>
                  <br/>
                  <RaisedButton 
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                  />
              </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;