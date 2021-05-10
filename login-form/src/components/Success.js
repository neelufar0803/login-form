import React, { Component } from 'react';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return(
            <div>
            <div className="a1">
                <nav>
                    <h1>FedChoice Bank</h1>
                    <ul id="nav">
                        <li class="active"><a href="#"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>
                        <li><a href="#">Customer managment </a><i class="fa fa-sort-desc" aria-hidden="true"></i>
                           <div class="sub-menu">
                               <ul>
                                   <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i> Create Customer screen</a></li>
                                   <br/>
                                   <li><a href="#"><i class="fa fa-pencil" aria-hidden="true"></i> Update Customer</a></li>
                                   <br/>
                                   <li><a href="#"><i class="fa fa-trash" aria-hidden="true"></i> Delete Customer</a></li>
                               </ul>
                           </div>
                        </li>
                        <li><a href="#">Account managment </a><i class="fa fa-sort-desc" aria-hidden="true"></i>
                        <div class="sub-menu">
                               <ul>
                                   <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i> Create Account</a></li>
                                   <br/>
                                   <li><a href="#"><i class="fa fa-trash" aria-hidden="true"></i> Delete account</a></li>
                                   <br/>
                                   <li><a href="#"><i class="fa fa-pencil" aria-hidden="true"></i> Update account</a></li>
                               </ul>
                           </div>
                        </li>
                        <li><a href="#">Status details </a><i class="fa fa-sort-desc" aria-hidden="true"></i></li>
                        <li><a href="#">Logout <i class="fa fa-sign-out" aria-hidden="true"></i></a></li> 
                        <li><a href="#">More </a><i class="fa fa-ellipsis-v" aria-hidden="true"></i></li>       
                    </ul>
                </nav>  
          </div>
          <div className="create">
              <center>
                  <h1>Create Customer Screen</h1>
                  <form>
                      <table>
                          <tr>
                              <td>Customer SSN Id*  </td>
                              <td><input type="text" name="id" placeholder="Enter ur SSN Id" required/></td>
                          </tr>
                          <tr>
                              <td>Password*  </td>
                              <td><input type="password" name="password" placeholder="Enter Password" required/></td>
                          </tr>
                          <tr>
                              <td>Gender* </td>
                              <td><input type="radio" name="gender" value="Male" required/>Male<br/>
                              <input type="radio" name="gender" value="Female" required/>Female
                              </td>
                          </tr>
                          <tr>
                              <td>Age*  </td>
                              <td><input type="number" name="age" placeholder="Select ur age" required/></td>
                          </tr>
                          <tr>
                              <td>Address*  </td>
                              <td><textarea name="address" rows="5" cols="40"></textarea></td>
                          </tr>
                          <tr>
                              <td>State* </td>
                              <td><input type="text" name="state" placeholder="enter ur state"/></td>
                          </tr>
                          <br/>
                          <tr>
                              <td><input name="submit" value="Submit" type="Submit"/></td>
                              <td><button name="reset" value="Reset">Reset</button></td>
                          </tr>
                      </table>
                  </form>
              </center>        
          </div>
         <br/>
          <div className="footer">
                    <a className="t1"><span className="footerspan"><i class="fa fa-info" aria-hidden="true"></i> About us   </span></a>
                    <a className="t2"><span className="footerspan"><i class="fa fa-question-circle" aria-hidden="true"></i> services</span></a>
                    <a className="t3"><i class="fa fa-volume-control-phone" aria-hidden="true"></i> contact us</a>
                </div>           
          </div>
        );
    }
}

export default Success;