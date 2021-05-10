import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values: { firstName, lastName, email, occupation, city, address }} = this.props;
        return(
            <MuiThemeProvider>
              <React.Fragment>
                  <AppBar title="Conform User Data" />
                  <List>
                  <i class="fa fa-user" aria-hidden="true"><ListItem
                         primaryText="First Name"
                         secondaryText={ firstName }
                      /></i>
                    <i class="fa fa-user" aria-hidden="true"><ListItem
                         primaryText="Last Name"
                         secondaryText={ lastName }
                      /></i>
                      <br/>
                      <i class="fa fa-envelope" aria-hidden="true">
                      <ListItem
                         primaryText="Email"
                         secondaryText={ email }     
                      /></i>
                      <br/>
                      <i class="fa fa-briefcase" aria-hidden="true"></i>
                      <ListItem
                         primaryText="Occupation"
                         secondaryText={ occupation }
                      />
                      <br/>
                  <i class="fa fa-building" aria-hidden="true"></i>
                      <ListItem
                         primaryText="City"
                         secondaryText={ city }
                      />
                      <br/>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <ListItem
                         primaryText="address"
                         secondaryText={ address }
                      />
                  </List>
                  <br/>
                 
                  <RaisedButton 
                    label="Conform & Continue"
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

export default FormUserDetails;