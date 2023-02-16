import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/LoginForm.css";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const userData = {
      email,
      password,
    };
    props.onLogin(userData);
    setEmail("");
    setPassword("");
  }

  return (
          <form className="form-container" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
      <button type="submit">Login</button>
    </form>
     );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
