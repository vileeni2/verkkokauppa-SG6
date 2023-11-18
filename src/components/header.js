import React from 'react';
import './header.css';
import Login from '../pages/login'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JavaScript

const Header = () => {
  return (
    <header className="header-container">
      <h1>AMAZING SHOE STORE</h1>
      <div className="dropdown">
        <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: '#ff3232'}}>
          Login / Register here!
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Login/>
        </div>
      </div>

      <div className="search-bar-container">
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>
    </header>
  );
};

export default Header;
