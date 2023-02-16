import React from "react";
import PropTypes from "prop-types";

function Book(props) {
  function handleRemoveBook() {
    props.onRemoveBook(props.book);
  }

  return (
    <div>
      <h2>{props.book.title}</h2>
      <p>by {props.book.author}</p>
      <button onClick={handleRemoveBook}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveBook: PropTypes.func.isRequired,
};

export default Book;
