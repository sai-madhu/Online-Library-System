
import React, { useState } from 'react';
function AddBook({ onAddBook }) {
  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    category: '',
  });

  const [message, setMessage] = useState('');
  const handleInput = (event) => {
    const { name, value } = event.target;

    setBookDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!bookDetails.title || !bookDetails.author || !bookDetails.category) {
      return;
    }

    if (onAddBook) {
      const newBook = {
        id: Date.now(), 
        ...bookDetails,
      };

      onAddBook(newBook); 
      setBookDetails({
        title: '',
        author: '',
        category: '',
      });
      setMessage('✅ Book added successfully!');

      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <div style={pageStyle}>
      <div style={formBoxStyle}>
        <h2 style={headingStyle}>📚 Add a New Book</h2>

        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={bookDetails.title}
            onChange={handleInput}
            style={inputStyle}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={bookDetails.author}
            onChange={handleInput}
            style={inputStyle}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={bookDetails.category}
            onChange={handleInput}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            ➕ Add Book
          </button>
        </form>

        {message && <p style={messageStyle}>{message}</p>}
      </div>
    </div>
  );
}

const pageStyle = {
  backgroundImage: 'url(/images/Book.jpeg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  padding: '50px 20px',
  fontFamily: 'Segoe UI, sans-serif',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
};

const formBoxStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  padding: '30px 40px',
  borderRadius: '16px',
  width: '100%',
  maxWidth: '500px',
  color: 'white',
  marginTop: '30px',
  boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
  backdropFilter: 'blur(8px)',
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '25px',
  fontSize: '24px',
  letterSpacing: '1px',
};

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  margin: '10px 0',
  borderRadius: '10px',
  border: 'none',
  outline: 'none',
  fontSize: '15px',
  backgroundColor: '#f0f0f0',
  color: '#333',
  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
};

const buttonStyle = {
  width: '100%',
  padding: '14px 16px',
  backgroundColor: '#00ffc8',
  border: 'none',
  borderRadius: '10px',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '15px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
};

const messageStyle = {
  marginTop: '20px',
  textAlign: 'center',
  color: '#00ffcc',
  fontWeight: 'bold',
  fontSize: '16px',
};

export default AddBook;
