import React, { useState } from "react";
import PropTypes from "prop-types";

function BookForm(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newBook = {
      id: Date.now(),
      title,
      author,
    };
    props.onAddBook(newBook);
    setTitle("");
    setAuthor("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
}

BookForm.propTypes ={
  onAddBook: PropTypes.func.isRequired
  };
  
  export default BookForm;
