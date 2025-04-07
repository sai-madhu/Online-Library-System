

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
const allBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction' },
  { id: 2, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiction' },
  { id: 3, title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi' },
  { id: 4, title: 'Sherlock Holmes', author: 'Arthur Conan Doyle', category: 'Mystery' },
  { id: 5, title: 'Steve Jobs', author: 'Walter Isaacson', category: 'Biography' },
];

function BrowseBooks() {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const filteredBooks = allBooks.filter((book) => {
  const matchCategory = category
  ? book.category.toLowerCase() === category.toLowerCase()
  : true;
  const matchSearch =
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase());
     return matchCategory && matchSearch;
      });

      return (
        <div
          style={{
            backgroundImage: 'url(/images/library.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '20px',
            color: 'white',
            fontFamily: 'Arial, sans-serif',
          }}
        >
      <h2 style={{ textAlign: 'center' }}>
        Browse Books {category && `- ${category}`}
      </h2>
 
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '20px',
        }}
      >
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            width: '100%',
            maxWidth: '300px',
            borderRadius: '5px',
            border: 'none',
          }}
        />
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#00ffcc',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </div>

      
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        {filteredBooks.map((book) => (
          <li
            key={book.id}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              padding: '15px',
              marginBottom: '15px',
              borderRadius: '10px',
            }}
          >
            <strong>{book.title}</strong> by {book.author}
            <Link
              to={`/book/${book.id}`}
              style={{
                marginLeft: '10px',
                color: '#00ffcc',
                textDecoration: 'underline',
              }}
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrowseBooks;
    

   

      

      
