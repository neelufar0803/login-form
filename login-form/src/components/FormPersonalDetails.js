import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return(
            <MuiThemeProvider>
              <React.Fragment>
                  <AppBar title="Enter Personal Details" />
                  <i class="fa fa-envelope" aria-hidden="true">  <TextField
                    type="email" 
                     hintText="Enter Your email"
                     floatingLabelText="email"
                     onChange={handleChange('email')}
                     defaultValue={values.email}
                  /></i>
                  <br/>
                  <i class="fa fa-briefcase" aria-hidden="true">  <TextField 
                     hintText="Enter Your Occupaton"
                     floatingLabelText="Occupation"
                     onChange={handleChange('occupation')}
                     defaultValue={values.occupation}
                  /></i>
                  <br/>
                  <i class="fa fa-building" aria-hidden="true">   <TextField 
                     hintText="Enter Your last City"
                     floatingLabelText="City"
                     onChange={handleChange('city')}
                     defaultValue={values.city}
                  /></i>
                  <br/>
                  <i class="fa fa-map-marker" aria-hidden="true">  <TextField 
                     hintText="Enter Your address"
                     floatingLabelText="address"
                     onChange={handleChange('address')}
                     defaultValue={values.address}
                  /></i>
                  <br/>
                  <RaisedButton 
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                  />
                  <RaisedButton 
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
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

export default FormPersonalDetails;