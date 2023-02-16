import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // Загрузка книг из localStorage при загрузке приложения
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);

    // Загрузка информации о пользователе из localStorage при загрузке приложения
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  useEffect(() => {
    // Сохранение книг в localStorage при изменении массива книг
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    // Сохранение информации о пользователе в localStorage при изменении состояния пользователя
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  function handleAddBook(newBook) {
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setShowBookForm(false);
  }

  function handleRemoveBook(bookToRemove) {
    setBooks((prevBooks) =>
      prevBooks.filter((book) => book.id !== bookToRemove.id)
    );
  }

  function handleLogin(userData) {
    setUser(userData);
    setShowLoginForm(false);
  }

  function handleLogout() {
    setUser(null);
  }

  function handleRegister(userData) {
    setUser(userData);
    setShowRegistrationForm(false);
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