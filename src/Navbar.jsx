import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px 20px', borderBottom: '1px solid #ccc', backgroundColor: '#f8f9fa' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '15px', margin: 0, padding: 0 }}>
        <li>
          <Link to="/products" style={{ textDecoration: 'none', color: 'blue' }}>Home</Link>
        </li>
        <li>
          <Link to="/login" style={{ textDecoration: 'none', color: 'blue' }}>Sign in</Link>
        </li>
        <li>
          <Link to="/register" style={{ textDecoration: 'none', color: 'blue' }}>Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
