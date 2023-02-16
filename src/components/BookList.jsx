import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

function BookList(props) {
  return (
    <ul>
      {props.books.map((book) => (
        <li key={book.id}>
          <Book book={book} onRemoveBook={props.onRemoveBook} />
        </li>
      ))}
    </ul>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveBook: PropTypes.func.isRequired,
};

export default BookList;
