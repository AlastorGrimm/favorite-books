import React, { useState, useEffect } from 'react';

const FavoriteBooks = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h2>Избранные книги:</h2>
      <ul>
        {favorites.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteBooks;
