import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Login from '../pages/login'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JavaScript
import './shopping_cart';

const Header = () => {
  return (
    <header className="header-container">
      <h1>AMAZING SHOE STORE</h1>

      <div className="HomBtn">
      <Link to="/">
        <button type='button'>Return</button>
      </Link>
    </div>

      <div className="shopping-cart">
       <button type='button'>ostoskori</button>
       < link to ="./shopping_cart"></link>
      </div>
      
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
