// Header.js
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header-container">
      <h1>AMAZING SHOE STORE</h1>
      <div className="search-bar-container">
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>
    </header>
  );
};

export default Header;
