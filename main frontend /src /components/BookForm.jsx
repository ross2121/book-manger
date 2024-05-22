import React, { useState, useEffect } from 'react';

const BookForm = ({ addBook, currentBook, updateBook }) => {
  const [form, setForm] = useState({ title: '', author: '', genre: '', year: '' });

  useEffect(() => {
    if (currentBook) {
      setForm(currentBook);
    } else {
      setForm({ title: '', author: '', genre: '', year: '' });
    }
  }, [currentBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentBook) {
      updateBook(form);
    } else {
      addBook(form);
    }
    setForm({ title: '', author: '', genre: '', year: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={form.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" name="author" value={form.author} onChange={handleChange} required />
      </div>
      <div>
        <label>Genre:</label>
        <input type="text" name="genre" value={form.genre} onChange={handleChange} required />
      </div>
      <div>
        <label>Year Published:</label>
        <input type="number" name="year" value={form.year} onChange={handleChange} required />
      </div>
      <button type="submit">{currentBook ? 'Update' : 'Add'} Book</button>
    </form>
  );
};

export default BookForm;
