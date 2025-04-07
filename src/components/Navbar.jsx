import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav style={navbarStyle}>
      <div style={logoBox}>
        <img src="/images/icon.jpeg" alt="Library Icon" style={iconStyle} />
        <h2 style={logoText}>Online Library</h2>
      </div>
      <div style={linksBox}>
        <Link to="/" className="nav-link" style={linkStyle}>Home</Link>
        <Link to="/browse" className="nav-link" style={linkStyle}>Browse</Link>
        <Link to="/add" className="nav-link" style={linkStyle}>Add Book</Link>
      </div>


      <style>
        {`
          .nav-link:hover {
            color: #ffcc00;
            text-decoration: underline;
            transition: color 0.3s;
          }
        `}
      </style>
    </nav>
  );
}

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#333',
  padding: '10px 20px',
};

const logoBox = {
  display: 'flex',
  alignItems: 'center',
};

const iconStyle = {
  width: '30px',
  height: '30px',
  marginRight: '10px',
  borderRadius: '4px',
};


const logoText = {
  color: 'white',
  margin: 0,
  fontSize: '20px',
};

const linksBox = {
  display: 'flex',
  gap: '15px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
};

export default Navbar;
