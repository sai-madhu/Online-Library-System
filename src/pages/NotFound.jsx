

import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.heading}>404 - Page Not Found</h1>
        <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
        
       
        <Link to="/" style={styles.link}>
          ⬅️ Go back to Home
        </Link>
      </div>
    </div>
  );
}


const styles = {
  container: {
    minHeight: '100vh', 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    backgroundImage: 'url(/images/main.jpeg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
  },
  box: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
    padding: '40px',
    borderRadius: '16px',
    textAlign: 'center',
    maxWidth: '500px',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  message: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  link: {
    textDecoration: 'none',
    color: '#00ffc8',
    fontSize: '16px',
    fontWeight: 'bold',
    border: '2px solid #00ffc8',
    padding: '10px 20px',
    borderRadius: '10px',
    transition: '0.3s',
  },
};

export default NotFound;
