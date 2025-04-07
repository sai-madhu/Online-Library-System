
import React from 'react';
import { useParams } from 'react-router-dom';
const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A novel about the American dream, love, and tragedy in the 1920s.',
    rating: 4.5,
    image: '/images/the-great-gatsby.webp',
  },
  {
    id: 2,
    title: 'Frankenstein',
    author: 'Mary Shelley',
    description: 'A gothic novel about a scientist who creates a living being.',
    rating: 4.2,
    image: '/images/Frankenstein.jpeg',
  },
  {
    id: 3,
    title: 'Dracula',
    author: 'Bram Stoker',
    description: 'A horror novel introducing Count Dracula and vampire stories.',
    rating: 4.3,
    image: '/images/Dracula.jpeg',
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description: 'A romantic story about love, status, and family.',
    rating: 4.8,
    image: '/images/Pride-and-Prejudice.jpeg',
  },
];

function BookDetails() {
  const { id } = useParams();

  const selectedBook = books.find((book) => book.id === parseInt(id));

  if (!selectedBook) {
    return (
      <div style={{ padding: '40px', color: 'red', textAlign: 'center' }}>
        <h2>Book Not Found</h2>
        <p>We couldn't find the book you're looking for.</p>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img
          src={selectedBook.image}
          alt={selectedBook.title}
          style={styles.bookImage}
        />
        <div>
          <h2 style={styles.bookTitle}>{selectedBook.title}</h2>
          <p><strong>Author:</strong> {selectedBook.author}</p>
          <p><strong>Description:</strong> {selectedBook.description}</p>
          <p><strong>Rating:</strong> ⭐ {selectedBook.rating}/5</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    maxWidth: '800px',
    display: 'flex',
    gap: '20px',
    backgroundColor: '#eeeeee',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
    alignItems: 'center',
  },
  bookImage: {
    width: '200px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  bookTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
};

export default BookDetails;
