import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../styles/RegistrationForm.css"

function RegistrationForm(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const formRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    const newUser = {
      username,
      email,
      password,
    };

    props.onRegister(newUser);
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

 

  return (
    <div className="overlay">
    
      <div className="form-container">
        
        <div className="form" ref={formRef}>
          <span className="close-button" onClick={props.onClose}>&times;</span>
          <form onSubmit={handleSubmit}>
            <h2>Register a New Account</h2>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                className="input-field"
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                className="input-field"
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
              className="input-field"
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                className="input-field"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

RegistrationForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RegistrationForm;