import React, { useState, useEffect } from "react";
import PouchDB from "pouchdb";
import Header from "./components/Header";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import "./styles/App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);
  const [showBookForm, setShowBookForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

    // Create a new database
    const db = new PouchDB("books");

    useEffect(() => {
      // Load the documents from the database
      db.allDocs({ include_docs: true }).then((result) => {
        const books = result.rows.map((row) => row.doc);
        setBooks(books);
      });
  
      // Load the user from the database
      db.get("user").then((doc) => {
        setUser(doc);
      });
    }, []);
  
    function handleAddBook(newBook) {
      // Save the document to the database
      db.post(newBook).then((response) => {
        setBooks((prevBooks) => [...prevBooks, { ...newBook, _id: response.id, _rev: response.rev }]);
        setShowBookForm(false);
      });
    }
  
    function handleRemoveBook(bookToRemove) {
      // Remove the document from the database
      db.remove(bookToRemove).then(() => {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookToRemove.id));
      });
    }
  
    function handleLogin({ email, password }) {
      // Get the user document from the database
      db.get("user").then((doc) => {
        if (doc.email === email && doc.password === password) {
          setUser(doc);
          setShowLoginForm(false);
        } else {
          alert("Invalid email or password. Please try again.");
        }
      }).catch(() => {
        alert("Invalid email or password. Please try again.");
      });
    }
  
    function handleLogout() {
      // Remove the user document from the database
      db.get("user").then((doc) => {
        return db.remove(doc);
      }).then(() => {
        setUser(null);
      });
    }
  
    function handleRegister(userData) {
      // Save the user document to the database
      db.put({ _id: "user", ...userData }).then(() => {
        setUser(userData);
        setShowRegistrationForm(false);
      });
    }
  

  return (
    <div>
      <Header
        user={user}
        onShowBookForm={() => setShowBookForm(true)}
        onShowLoginForm={() => setShowLoginForm(true)}
        onShowRegistrationForm={() => setShowRegistrationForm(true)}
        onLogout={handleLogout}
      />
      <BookList books={books} onRemove={handleRemoveBook} />

{showBookForm && <BookForm onAddBook={handleAddBook} />}

{showLoginForm && (
  <LoginForm onLogin={handleLogin} onClose={() => setShowLoginForm(false)} />
)}

{showRegistrationForm && (
  <RegistrationForm
    onRegister={handleRegister}
    onClose={() => setShowRegistrationForm(false)}
  />
)}
</div>
);
}

export default App;