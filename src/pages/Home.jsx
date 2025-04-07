

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery', 'Biography'];

 
  const popularBooks = [
    { id: 1, title: 'The Great Gatsby' },
    { id: 2, title: 'Frankenstein' },
    { id: 3, title: 'Dracula' },
    { id: 4, title: 'Pride and Prejudice' },
  ];

  return (
    <div style={styles.container}>

      <div style={styles.overlay}>
        <h1 style={styles.title}>📚 Welcome to the Online Library</h1>
        <p style={styles.subtitle}>Browse, read, and manage your favorite books!</p>

       
        <div style={styles.sectionBoxBlue}>
          <h2 style={styles.sectionHeading}>Book Categories</h2>
          <ul style={styles.list}>
            {categories.map((category, index) => (
              <li key={index} style={styles.listItem}>
                {category}
              </li>
            ))}
          </ul>
        </div>

       
        <div style={styles.sectionBoxGreen}>
          <h2 style={styles.sectionHeading}>Popular Books</h2>
          <ul style={styles.list}>
            {popularBooks.map((book) => (
              <li key={book.id} style={styles.listItem}>
                <Link to={`/book/${book.id}`} style={styles.link}>
                  {book.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: 'url(/images/main.jpeg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)', 
    padding: '40px',
    borderRadius: '16px',
    color: 'white',
    maxWidth: '700px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  sectionHeading: {
    fontSize: '24px',
    marginBottom: '15px',
    textDecoration: 'underline',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  link: {
    color: '#00ffc8',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  sectionBoxBlue: {
    backgroundColor: 'rgba(0, 123, 255, 0.2)', 
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '30px',
  },
  sectionBoxGreen: {
    backgroundColor: 'rgba(0, 255, 200, 0.2)', 
    padding: '20px',
    borderRadius: '12px',
  },
};

export default Home;
