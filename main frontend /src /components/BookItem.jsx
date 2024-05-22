import React from 'react';

const BookItem = ({ book, deleteBook, editBook }) => {
  return (
    <li>
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.genre}</p>
        <p>{book.year}</p>
        <button onClick={() => editBook(book)}>Edit</button>
        <button onClick={() => deleteBook(book.id)}>Delete</button>
      </div>
    </li>
  );
};

export default BookItem;
