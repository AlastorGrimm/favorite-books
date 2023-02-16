import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../styles/LoginForm.css";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef();

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

  //useEffect(() => {
    // function handleClickOutside(event) {
 //  if (formRef.current && !formRef.current.contains(event.target)) {
 //     props.onClose();
 //     }
 //   }

 //   document.addEventListener("click", handleClickOutside);
//    return () => {
//      document.removeEventListener("click", handleClickOutside);
//    };
//  }, [props]);

  return (
    <div className="overlay">
      
          <form className="form-container" ref={formRef} onSubmit={handleSubmit}>
           
            
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
    <button className="close-button" onClick={props.onClose}>Close</button>
    </div>
     );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginForm;
