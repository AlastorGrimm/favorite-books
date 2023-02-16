import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <header>
      <h1>My Library</h1>
      {props.user ? (
        <div>
          <p>Hello, {props.user.username}!</p>
          <button onClick={props.onShowBookForm}>Add Book</button>
          <button onClick={props.onLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={props.onShowLoginForm}>Login</button>
          <button onClick={props.onShowRegistrationForm}>Register</button>
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
  onShowBookForm: PropTypes.func.isRequired,
  onShowLoginForm: PropTypes.func.isRequired,
  onShowRegistrationForm: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Header;
