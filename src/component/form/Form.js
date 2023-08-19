import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();

    let userInfo = {
      firstName,
      lastName,
      email,  
    };
    fetch('https://toplern-50a6b-default-rtdb.firebaseio.com/users.json' , {
      method : 'POST',
      body : JSON.stringify(userInfo)
    }).then(response => {
      console.log(response)
    })
  };

  return (
    <div className="form-container">
      <form
        className="register-form"
        autoComplete="off"
        onSubmit={registerHandler}
      >
        {/* {this.state.submitted && this.state.allValid && (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        )} */}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />

        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />

        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
