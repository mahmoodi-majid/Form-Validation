import React, { Component } from "react";
import "./Form.css";
export default class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      allValid: false,
      emailDate: "",
      firstNameDate: "",
      lastNameData: "",
      submitted: false,
    };
  }
  submitForm(e) {
    e.preventDefault();
    this.setState({
      submitted: true,
    });
    if(this.state.firstNameDate.length !== 0 && this.state.emailDate !== 0 && this.setState.lastNameData !==0 ){
          this.setState({
             allValid : true
          })
    }
    setTimeout(()=>{
      this.setState(
          {allValid : false}
      )
    },3000)
  }
  changeFirstName(event) {
    this.setState({
      firstNameDate: event.target.value,
    });
  }
  changeLastName(event) {
    this.setState({
      lastNameData: event.target.value,
    });
  }
  changeEmailDate(event) {

    this.setState({
      emailDate: event.target.value,
    });
  }
  
  render() {
    return (
      <div className="form-container">
        <form
          className="register-form"
          autoComplete="off"
          onSubmit={this.submitForm.bind(this)}
        >
          {/* Uncomment the next line to show the success message */}
          {
           this.state.submitted && this.state.allValid && (<div className="success-message">Success! Thank you for registering</div>) 
          }
          <input
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={(event) => {
              this.changeFirstName(event);
            }}
          />
            {this.state.submitted && this.state.firstNameDate.length === 0 && (
              <span id="first-name-error">Please enter a first name</span>
            )}
            
          <input
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={(event) => {
              this.changeLastName(event);
            }}
          />
            {this.state.submitted && this.state.lastNameData.length === 0 && (
              <span id="last-name-error">Please enter a last name</span>
            )}
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            onChange={(event) => {
              this.changeEmailDate(event);
            }}
          />

          {this.state.submitted && this.state.emailDate.length === 0  && (

            <span id="email-error">Please enter an email address</span>
            
          )}
          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
